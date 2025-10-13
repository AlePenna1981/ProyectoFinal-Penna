const products = [
    {
        id: 1,
        type: "jb",
        brand: "Fender Jazz Bass standard",
        price: 1200,
        img: "https://m.media-amazon.com/images/I/61zkiIPbpvL._AC_SL1500_.jpg",
        description: "JB Olympic Pearl, Maple fingerboard",
        stock: 10
    },
    {
        id: 2,
        type: "pb",
        brand: "Fender Precision standard",
        price: 1000,
        img: "https://m.media-amazon.com/images/I/61waJjY-ukL._AC_SL1500_.jpg",
        description: "PB Olympic White, Maple Fingerboard",
        stock: 10
    },
    {
        id: 3,
        type: "jb",
        brand: "Squier Afinity Jass Bass",
        price: 550,
        img: "https://m.media-amazon.com/images/I/6131NniG02L._AC_SL1500_.jpg",
        description: "JB Charcoal Frost Metallic, laurel fingerboard",
        stock: 10
    },
    {
        id: 4,
        type: "pb",
        brand: "Squier Affinity Series Precision Bass",
        price: 900,
        img: "https://m.media-amazon.com/images/I/61Ueg7jsavL._AC_SL1500_.jpg",
        description: "PB Charcoal Frost Metallic, laurel fingerboard",
        stock: 10
    },
    {
        id: 5,
        type: "jb",
        brand: "Fender American Professional",
        price: 1550,
        img: "https://m.media-amazon.com/images/I/61LGRX4qzYL._AC_SL1500_.jpg",
        description: "JB dark night, maple fingerboard",
        stock: 10
    },
    {
        id: 6,
        type: "pb",
        brand: "Fender Precision player plus",
        price: 1150,
        img: "https://m.media-amazon.com/images/I/615mwOj8GlL._AC_SL1500_.jpg",
        description: "PB 3 colors Sunburst, Pau Ferro Fingerboard",
        stock: 10
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        } else {
            reject('No hay productos')
        }
    })
}
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find((pro) => pro.id == id)

        setTimeout(() => {
            if (product) {
                resolve(product)
            } else {
                reject('El producto no existe')
            }
        }, 1000);
    })
}
