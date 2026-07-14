import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
    try {
        const { name, emoji, color, type, monthlyBudget } = req.body;

        if(!name || !emoji || !color || !type || monthlyBudget == null) {
            return res.status(400).json({
                message: "Please enter all required fields"
            })
        }

        const existingCategory = await Category.findOne({
            name,
            user: req.user.id
        });

        if(existingCategory) {
            return res.status(409).json({
                message: "Category already exists"
            })
        }

        const category = await Category.create({
            name,
            emoji,
            color,
            type,
            monthlyBudget,
            user: req.user.id
        });

        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({user: req.user.id});

        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            _id: req.params.id,
            user: req.user.id
        });

         if(!category) {
                return res.status(404).json({
                    message: "Category not found"
                });
         }

        await category.deleteOne();

        res.status(200).json({
            message: "Category deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
}