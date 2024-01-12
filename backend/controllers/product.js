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

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the product ID in the URL
    const response = await services.updateProduct(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};