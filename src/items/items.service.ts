//Data model interfaces 
import { BaseItem, Item } from './item.interface'
import { Items } from "./items.interface"
// In memory store 
let item: Items = {
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