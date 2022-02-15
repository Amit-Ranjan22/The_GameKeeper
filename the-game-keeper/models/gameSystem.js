const { Schema, model } = require('mongoose');


// User Schema
const SystemSchema = new Schema(
    {
        "_id": "Nintendo NES",
        "manufacturer": "Nintendo",
        "catalog_number": "N0001",
        "Qty": 20,
        "cost": "89.99",
        "price": "194.99",
        "condition": [objectID("New"), ObjectID("Used")]
    }, 
    {
        "_id": "Super Nintendo",
        "manufacturer": "Nintendo",
        "catalog_number": "N0002",
        "Qty": 30,
        "cost": "74.99",
        "price": "179.99",
        "condition": [objectID("New"), ObjectID("Used")]
    }, 
    {
        "_id": "Nintendo 64",
        "manufacturer": "Nintendo",
        "catalog_number": "N0003",
        "Qty": 20,
        "cost": "120.99",
        "price": "205.99",
        "condition": [objectID("New"), ObjectID("Used")]
    }, 
    {
        "_id": "Nintendo Game Cube",
        "manufacturer": "Nintendo",
        "catalog_number": "N0004",
        "Qty": 8,
        "cost": "69.99",
        "price": "159.99",
        "condition": [objectID("New"), ObjectID("Used")]
    }, 
    {
        "_id": "Nintendo Wii",
        "manufacturer": "Nintendo",
        "catalog_number": "N0005",
        "Qty": 25,
        "cost": "74.99",
        "price": "169.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Nintendo GameBoy",
        "manufacturer": "Nintendo",
        "catalog_number": "N0006",
        "Qty": 8,
        "cost": "69.99",
        "price": "139.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Nintendo DS",
        "manufacturer": "Nintendo",
        "catalog_number": "N0007",
        "Qty": 10,
        "cost": "44.99",
        "price": "89.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Nintendo Switch",
        "manufacturer": "Nintendo",
        "catalog_number": "N0008",
        "Qty": 40,
        "cost": "89.99",
        "price": "194.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Playstation 1",
        "manufacturer": "Sony Interactive Entertainment",
        "catalog_number": "SIE0001",
        "Qty": 40,
        "cost": "69.99",
        "price": "1124.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Playstation 2",
        "manufacturer": "Sony Interactive Entertainment",
        "catalog_number": "SIE0002",
        "Qty": 40,
        "cost": "95.99",
        "price": "184.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Playstation 3",
        "manufacturer": "Sony Interactive Entertainment",
        "catalog_number": "SIE0003",
        "Qty": 40,
        "cost": "99.99",
        "price": "199.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Playstation 4",
        "manufacturer": "Sony Interactive Entertainment",
        "catalog_number": "SIE0004",
        "Qty": 40,
        "cost": "104.99",
        "price": "204.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Playstation 5",
        "manufacturer": "Sony Interactive Entertainment",
        "catalog_number": "SIE0005",
        "Qty": 80,
        "cost": "95.99",
        "price": "184.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Playstation PSP",
        "manufacturer": "Sony Interactive Entertainment",
        "catalog_number": "SIE0006",
        "Qty": 50,
        "cost": "65.99",
        "price": "139.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Original Xbox",
        "manufacturer": "Microsoft",
        "catalog_number": "MS0001",
        "Qty": 30,
        "cost": "114.99",
        "price": "234.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Xbox 360",
        "manufacturer": "Microsoft",
        "catalog_number": "MS0002",
        "Qty": 80,
        "cost": "60.99",
        "price": "139.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Xbox 360 250GB",
        "manufacturer": "Microsoft",
        "catalog_number": "MS0003",
        "Qty": 80,
        "cost": "94.99",
        "price": "234.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Xbox One",
        "manufacturer": "Microsoft",
        "catalog_number": "MS0003",
        "Qty": 80,
        "cost": "144.99",
        "price": "299.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Sega Master System",
        "manufacturer": "Sega Corporation",
        "catalog_number": "S0001",
        "Qty": 2,
        "cost": "120.99",
        "price": "249.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Sega Genesis",
        "manufacturer": "Sega Corporation",
        "catalog_number": "S0002",
        "Qty": 10,
        "cost": "89.99",
        "price": "164.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Sega Dreamcast",
        "manufacturer": "Sega Corporation",
        "catalog_number": "S0003",
        "Qty": 8,
        "cost": "124.99",
        "price": "249.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Sega Saturn",
        "manufacturer": "Sega Corporation",
        "catalog_number": "S0004",
        "Qty": 2,
        "cost": "134.99",
        "price": "274.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    {
        "_id": "Sega Game Gear",
        "manufacturer": "Sega Corporation",
        "catalog_number": "S0005",
        "Qty": 0,
        "cost": "104.99",
        "price": "209.99",
        "condition": [objectID("New"), ObjectID("Used")]
    },
    
);

const GameSystem = model('Gamesystem', SystemSchema)

module.exports = GameSystem
