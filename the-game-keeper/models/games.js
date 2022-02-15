const { Schema, model } = require('mongoose');


//Game Schema
const GameSchema = new Schema(
    {
        "_id": "Super Mario Bros. 3",
        "system": "Nintendo NES",   //Need to figure out how to tie games to specific systems
        "catalog_number": "NG0001",
        "Qty": 20,
        "cost": "10.99",
        "price": "19.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Techmo Bowl",
        "catalog_number": "NG0002",
        "Qty": 10,
        "cost": "11.99",
        "price": "22.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Mike Tysons Punch-Out!",
        "catalog_number": "NG0003",
        "Qty": 10,
        "cost": "7.99",
        "price": "14.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Legend of Zelda Gold",
        "catalog_number": "NG0004",
        "Qty": 3,
        "cost": "22.99",
        "price": "49.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Tetris",
        "catalog_number": "NG0005",
        "Qty": 10,
        "cost": "8.99",
        "price": "17.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Top Gun",
        "catalog_number": "NG0006",
        "Qty": 5,
        "cost": "3.99",
        "price": "7.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Contra",
        "catalog_number": "NG0007",
        "Qty": 8,
        "cost": "23.99",
        "price": "54.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Double Dragon II",
        "catalog_number": "NG0008",
        "Qty": 5,
        "cost": "9.99",
        "price": "19.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "PaperBoy",
        "catalog_number": "NG0009",
        "Qty": 8,
        "cost": "19.99",
        "price": "39.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "RC Pro-AM",
        "catalog_number": "NG0010",
        "Qty": 10,
        "cost": "5.99",
        "price": "11.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Donkey Kong Classics",
        "catalog_number": "NG0011",
        "Qty": 5,
        "cost": "11.99",
        "price": "23.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Kung Fu",
        "catalog_number": "NG0012",
        "Qty": 8,
        "cost": "6.99",
        "price": "13.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Teenage Mutant Ninja Turtles",
        "catalog_number": "NG0013",
        "Qty": 8,
        "cost": "7.99",
        "price": "15.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Excitebike",
        "catalog_number": "NG0014",
        "Qty": 5,
        "cost": "8.99",
        "price": "16.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Castlevania",
        "catalog_number": "NG0015",
        "Qty": 10,
        "cost": "22.99",
        "price": "44.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Double Dribble",
        "catalog_number": "NG0016",
        "Qty": 5,
        "cost": "3.99",
        "price": "7.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Golf",
        "catalog_number": "NG0017",
        "Qty": 2,
        "cost": "1.99",
        "price": "4.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Super Mario Bros.",
        "catalog_number": "NG0018",
        "Qty": 8,
        "cost": "14.99",
        "price": "27.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "PAC-MAN",
        "catalog_number": "NG0019",
        "Qty": 10,
        "cost": "14.99",
        "price": "22.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Final Fantasy",
        "catalog_number": "NG0020",
        "Qty": 5,
        "cost": "16.99",
        "price": "39.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    //Super Nintendo
    {
        "_id": "Legend of Zelda A Link To The Past",
        "catalog_number": "SNG0001",
        "Qty": 5,
        "cost": "25.99",
        "price": "49.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Super Mario Kart",
        "catalog_number": "SNG0002",
        "Qty": 3,
        "cost": "25.99",
        "price": "49.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Donkey Kong Country",
        "catalog_number": "SNG0003",
        "Qty": 2,
        "cost": "17.99",
        "price": "33.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },



);


const Game = model('Game', GameSchema)

module.exports = Game
