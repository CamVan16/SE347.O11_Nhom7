// controllers/productController.js
import { validationResult } from 'express-validator';
import { Product } from '../models';

export const createProduct = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { productName,
            productPrice, 
            productSex,
            productIncense,
            Concentration,
            Brand,
            Origin,
            Style,
            productDescription,
            productImage } = req.body;

        const newProduct = await Product.create({
            name: productName,
            price: productPrice,
            sex: productSex,
            incense: productIncense,
            concentration: Concentration,
            brand: Brand,
            origin: Origin,
            style: Style,
            description: productDescription,
            image: productImage
            // Add other fields based on your model
        });

        res.status(201).json({ message: 'Sản phẩm được tạo thành công', data: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
};
