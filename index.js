const { sequelize, testConnection } = require("./models/conn")
const Category = require("./models/categoryModel")
const Item = require("./models/itemModel")
const { Op } = require("sequelize")



//createCategory();
//createItems();
//updatePrices();
findAllQuery();

async function findAllQuery() {
    let result = await Item.findAll({
        where: {
            price: {
                [Op.gt]: 20
            }
        }
    });
    console.log(JSON.stringify(result));
}



async function createCategory() {
    await Category.create({
        name: 'meat'
    });
}

async function createItems() {
    await Item.bulkCreate([{
        name: 'pork',
        category_id: 2,
        price: 10.00
    }, {
        name: 'chicken',
        category_id: 2,
        price: 10.00
    }, {
        name: 'Peach',
        category_id: 1,
        price: 4.50
    }, {
        name: 'Apple',
        category_id: 1,
        price: 55.00
    }, {
        name: 'Pear',
        category_id: 1,
        price: 1.25
    }])
}

async function updatePrices() {
    await Item.update({ price: 120.99 }, { where: { category_id: 2 } });
}