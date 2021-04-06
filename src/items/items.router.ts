//Routes to be defined 
//Create item - POST 
//Read items - GET 
//Read item  - Get 
//Update item - PUT 
//Delete item - DELETE 


//Import modules 
import express, { Request, Response } from 'express'
import * as itemService from './items.service'
import { BaseItem, Item } from './item.interface'
import { Items } from './items.interface'

//Router definitions
const router = express.Router();
//Controller definitions 
//Get Items - /items
router.get("/", async (req: Request, res: Response) => {
    try {
        const items: Items = await itemService.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).send(error.message)
    }

    //Get item /items/:id
    router.get("/:id", async (req: Request, res: Response) => {
        try {
            const id: number = parseInt(req.params.id, 10);
            const item: Item = await itemService.find(id);
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).send("Item not found ")
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    })

})
//POST Item /items
router.post("/", async (req: Request, res: Response) => {
    try {
        const newItem: BaseItem = req.body;
        const itemCreated = await itemService.createItem(newItem)
        res.status(201).json(itemCreated)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
//PUT item /items/:id
router.put("/:id", async (request: Request, response: Response) => {
    try {
        const id: number = parseInt(request.params.id, 10);
        const item: BaseItem = request.body;
        //Check if item is there, and then create or update item 
        const existingItem = await itemService.find(id);
        if (existingItem) {
            const updatedItem = await itemService.updateItem(id, item);
            response.status(200).json(updatedItem)

        } else {
            const newItem = await itemService.createItem(item);
            response.status(201).json(newItem);
        }
    } catch (error) {
        response.status(500).send(error.message);
    }


})
//Delete item /items/:id




export { router }


