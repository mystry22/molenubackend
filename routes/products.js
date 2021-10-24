const express = require('express');
const router = express.Router();
const {getCustomDate} = require('../utility_functions/util_func');
const {createNewProduct,uploadProductImage,deleteProduct,editProduct,homeProducts,allProducts,createCategory,allCategories,prodInfo} = require('../model/ProductHelper');

router.post('/addproduct',(req,res)=>{
    const data = {
        upload_date : getCustomDate(),
        prod_name: req.body.prod_name,
        prod_id: req.body.prod_id,
        price: req.body.price,
        old_price: req.body.old_price,
        cat_name: req.body.cat_name,
        description: req.body.description,
        display_home: req.body.display_home,
        image_link: req.body.image_link
    };

    createNewProduct(data).then(feed =>{
        if(feed == 'ok'){
            res.json('New Product Added');
        }else{
            res.json('Unable To Add Product');
        }
    })
});

router.post('/addprodimage',async(req,res)=>{

    const file = req.files.image
    const image_link = req.files.image.name;
    const prod_id = req.body.prod_id;

   
        await file.mv(`./assets/img/prod/${file.name}`,err=>{
            if(err){
                res.json('Product Image Upload  Not Successful 1');
                console.log(err)
            }else{
                uploadProductImage(prod_id,image_link).then(feed =>{
                    if(feed == 'ok'){
                        res.json('Product Image Upload Successful');
                    }else{
                        res.json('Product Image Upload Not Successful 2');
                    }
                })
            }
        });
    
   
});

router.post('/deleteproduct',(req,res)=>{
    const data = {
        prod_id: req.body.prod_id
    }
    deleteProduct(data).then(feed =>{
        if(feed == 'ok'){
            res.json('Product Deleted Successfuly');
        }else{
            res.json('Product Not Deleted');
        }
    })
});

router.post('/editproduct',(req,res)=>{
    const prod_id = req.body.prod_id;
    const prod_name = req.body.prod_name;
    const price = req.body.price;
    const old_price = req.body.old_price;
    const cat_name = req.body.cat_name;
    const description = req.body.description;
    const display_home = req.body.display_home;

    editProduct(prod_id,prod_name,price,old_price,cat_name,description,display_home)
    .then(feed =>{
        if(feed == 'ok'){
            res.json('Product Edited Successfuly');
        }else{
            res.json('Product Not Edited Successfuly');
        }
    })
});

router.post('/homeproducts',async(req,res)=>{
    const products = await homeProducts();
    res.json(products);
});

router.post('/allproducts',async(req,res)=>{
    const allProducts = await allProducts();
    res.json(allProducts);
});

router.post('/productinfo',async(req,res)=>{
    const data = {
        prod_id:req.body.prod_id
    }
    
    const allProducts = await prodInfo();
    res.json(allProducts);
});

router.post('/availablecategory',async(req,res)=>{
    const category = await allCategories();
    res.json(category);
});

router.post('/addcategory',(req,res)=>{
    const data = {
        cat_name: req.body.cat_name,
        cat_id: req.body.cat_id
    }
    createCategory(data).then(feed =>{
        if(feed == 'ok'){
            res.json('New Category Added');
        }else{
            res.json('No New Category Added');
        }
    })
});




module.exports = router;