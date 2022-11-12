import { response } from "../helpers/response.js";
import { studentModel } from "../models/studentModel.js";

const studentCtrl = {};

studentCtrl.listar = async (req, res) => {
  try {
    const registros = await studentModel.find().populate("school");
    response(res, 200, true, registros, "listar de registros");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// crear
studentCtrl.crear = async (req, res) => {
  try {
    const nuevoRegistro = await studentModel.create(req.body);
    response(res, 201, true, nuevoRegistro, "resgitro creado ");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// listar por el id
studentCtrl.listarPorId = async (req, res) => {
  try {
    const { id } = await req.params;
    const registro = await studentModel.findById(id).populate("school");
    if (!registro) {
      return response(res, 404, false, "", "registro no encontrado");
    }
    response(res, 200, true, registro, "registro encontrado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
// eliminar
studentCtrl.eliminar = async (req, res) => {
  try {
    const { id } = await req.params;
    const registro = await studentModel.findById(id);
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
studentCtrl.actualizar = async (req, res) => {
  try {
    const { id } = await req.params;
    const registro = await studentModel.findById(id);
    if (!registro) {
      return response(res, 404, false, "", "registro no actuliazado");
    }
    await registro.updateOne(req.body)

    response(res, 200, true, "", "registro actulizado");
  } catch (error) {
    response(res, 500, false, "", error.message);
  }
};
export default studentCtrl;
