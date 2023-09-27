const { sequelize } = require("../models/conn")
const Category = require("../models/categoryModel")
const Item = require("../models/itemModel")

async function initialDataBase() {
    try {
        //authenticates the DB conneciton
        await sequelize.authenticate(); //NOT SURE WHY I NEED THIS LINE
        //creates CATEGORY table
        await Category.sync();
        //creates item table
        await Item.sync();
        console.log("Tables created");
        return true;
    } catch (err) {
        console.error("Tables NOT created");
        return false;
    }
}

initialDataBase();