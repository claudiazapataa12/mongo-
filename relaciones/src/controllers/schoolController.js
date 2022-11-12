import { response } from "../helpers/response.js";
import { schoolModel } from "../models/schoolModel.js";
import { studentModel } from "../models/studentModel.js";


const schoolCtrl = {};

schoolCtrl.listar = async (req, res) => {
  try {
    const registros = await schoolModel.find();
    response(res, 200, true, registros, "listar de registros");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// crear
schoolCtrl.crear = async (req, res) => {
  try {
    const nuevoRegistro = await schoolModel.create(req.body);
    response(res, 201, true, nuevoRegistro, "resgitro creado ");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// listar por el id
schoolCtrl.listarPorId = async (req, res) => {
  try {
    const { id } = await req.params;
    const registro = await schoolModel.findById(id);
    if (!registro) {
      return response(res, 404, false, "", "registro no encontrado");
    }
    response(res, 200, true, registro, "registro encontrado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// eliminar
schoolCtrl.eliminar = async (req, res) => {
  try {
    const { id } = await req.params;
    const registro = await schoolModel.findById(id);
    if (!registro) {
      return response(res, 404, false, "", "registro no encontrado");
    }
    await registro.deleteOne();

    response(res, 200, true, "", "registro eliminado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// actulizar
schoolCtrl.actualizar = async (req, res) => {
  try {
    const { id } = await req.params;
    const registro = await schoolModel.findById(id);
    if (!registro) {
      return response(res, 404, false, "", "registro no actuliazado");
    }
    await registro.updateOne(req.body)

    response(res, 200, true, "", "registro actulizado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
export default schoolCtrl;
