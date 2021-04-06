interface BaseItem {
    name: string,
    price: number,
    description: string,
    image: string
}

interface Item extends BaseItem {
    id: number
}

export { BaseItem, Item }