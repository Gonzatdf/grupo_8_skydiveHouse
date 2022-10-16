const db = require('../../src/database/models');
const sequelize = db.sequelize;

const productsApiController = {
    productList:(req,res)=>{
        db.Product.findAll()
        .then(products=>{
            let resp = {
                count: products.length, 
                products: products.map(product => {
                    return{
                        id: product.id,
                        name: product.product_name,
                        description: product.description,
                        detail: "/api/products/" + product.id
                    }
                })
            }
            res.json(resp)
        })
    },

    productDetail:(req,res)=>{
        db.Product.findByPk(req.params.id)
        .then(product=>{
            let resp = {
                id: product.id,
                name: product.product_name,
                description: product.description,
                price: product.price,
                image: product.image,
                urlImage: "/img/uploads/products/" + product.image
            }
            res.json(resp)
        })
    },
    
    lastProduct:(req,res)=>{
        db.Product.findAll({order:[["id", "DESC"]], limit:1})
        .then(product => {

            let resp= {
                data: product[0]
            }
            res.json(resp)
        })
        .catch(function(error){
            res.json({status:500})
        })
    }
}

module.exports = productsApiController;