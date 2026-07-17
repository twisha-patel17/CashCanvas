import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
    try {
        const { amount, category, type, date, paymentMethod, description, status, receipt } = req.body;

        const transaction = await Transaction.create({
            amount,
            category,
            type,
            date,
            paymentMethod,
            description,
            status,
            receipt,
            user: req.user.id
        });

       res.status(201).json({
     success:true,
     message:"Transaction created successfully.",
     transaction,
});
    } catch (error) {

    console.error("ERROR IS:");

    console.error(error);

    console.error("BODY:");

    console.log(req.body);

    res.status(500).json({

        success:false,

        message:error.message

    });

}
};

export const getTransactions = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;

        const skip = (page - 1) * limit;


        const transactions = await Transaction.find({
            user: req.user.id,
        })
            .populate("category")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);


        const totalTransactions =
            await Transaction.countDocuments({
                user: req.user.id,
            });


        const totalPages = Math.ceil(
            totalTransactions / limit
        );


        res.status(200).json({

            success: true,

            message:
                "Transactions fetched successfully.",

            transactions,

            currentPage: page,

            totalPages,

            totalTransactions,

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });

    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                success:false,
                message: "Transaction not found.",
            });
        }

        if(transaction.user.toString() !== req.user.id) {
            return res.status(403).json({
            success:false,
            message:"Unauthorized."
            });
        }

        await transaction.deleteOne();

        res.status(200).json({
            success: true,
            message: "Transaction deleted successfully.",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: "Something went wrong.",
        })
    }
};

export const updateTransaction = async (req, res) => {
    try {
        const { amount, category, type, date, paymentMethod, description, status, receipt } = req.body;

        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                success:false,
                message: "Transaction not found.",
            });
        }

        if(transaction.user.toString() !== req.user.id) {
            return res.status(403).json({
                success:false,
                message: "Unauthorized.",
            });
        }

        transaction.amount = amount;
        transaction.category = category;
        transaction.type = type;
        transaction.date = date;
        transaction.paymentMethod = paymentMethod;
        transaction.description = description;
        transaction.status = status;
        transaction.receipt = receipt;

        await transaction.save();

        res.status(200).json({
            success: true,
            message: "Transaction updated successfully.",
            transaction,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: "Something went wrong.",
        });
    }
}
