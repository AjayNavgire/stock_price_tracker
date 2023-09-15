const Stock = require("../model/stockeModel");


// Register a Stock 
exports.registerStock = async (req, res, next) => {

    try {

        const { name, price } = req.body;

        const user = await Stock.create({
            name,
            price
        });

        res.status(201).json({
            success: true,
            user
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        })
    }

}


const getRandomPrice = () => {
    // Generates random prices between 0 and 100
    let price = (Math.random() * 100).toFixed(2)
    return price;
};

// Get Stock List
exports.getAllStock = async (req, res, next) => {

    try {
        const stocks1 = (await Stock.find()).map((stock) => ({
            name: stock.name,
            price: getRandomPrice(),
        }));

        res.status(200).json(stocks1);

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        })
    }

}

