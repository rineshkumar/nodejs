//Data model interfaces 
import { BaseItem, Item } from './item.interface'
import { Items } from "./items.interface"
// In memory store 
let items: Items = {
    1: {
        id: 1,
        name: "Name1",
        description: "desc1",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
        price: 10
    },
    2: {
        id: 2,
        name: "Name2",
        description: "desc2 ",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
        price: 20
    },
    3: {
        id: 3,
        name: "Name3",
        description: "desc3 ",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
        price: 30
    }

};
//Service interface
const findAll = async (): Promise<Item[]> => { return Object.values(items) }
const find = async (id: number): Promise<Item> => { return items[id] }
const createItem = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
    items[id] = { id, ...newItem };
    return items[id];
}

const updateItem = async (id: number, itemToBeUpdated: BaseItem): Promise<Item | null> => {
    const item = await find(id);
    if (!item)
        return null;
    items[id] = { id, ...itemToBeUpdated }
    return items[id];
}

const deleteItem = async (id: number): Promise<null | void> => {
    const item = await find(id);
    if (!item)
        return null;
    delete items[id];
}

export { createItem, find, findAll, updateItem, deleteItem }