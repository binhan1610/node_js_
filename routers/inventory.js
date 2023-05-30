const express= require('express')
const {inventoryModel}=require('../models/Inventory')
const bodyparser=require('body-parser')
const inventoryRouter=express.Router();
inventoryRouter.use(bodyparser.json())

inventoryRouter.get('/', (req, res, next) => {
    inventoryModel.find()
     .then((data) => {
res.json(data)
     })
     .catch((err) => res.json(err));
  });
  inventoryRouter.get('/duoi100', (req, res, next) => {
    const filter = { instock: { $lt: 100 } };
    inventoryModel
      .find(filter)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  });
  
  
module.exports = inventoryRouter;