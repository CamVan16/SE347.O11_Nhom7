import * as services from "../services";
import { internalServerError, badRequest } from "../middleware/handle_error";

export const getProList = async (req, res) => {
  try {
    const response = await services.getAllPro();
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
