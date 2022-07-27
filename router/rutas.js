const express = require("express")
const { Router } = express


const productos= require("../Productos");
const products = [ ]
let Product = productos.Productos;
let productobj = new Product(products);


const router =Router()




router.post('/productos',(req,res)=>{
    productobj.save(req.body)
    res.send({"status":"ok"})
})
  
  router.get('/productos/:id',(req,res)=>{
    const obj= productobj.getById(parseInt(req.params.id));
    if(obj!==undefined){
        res.send(obj)
    }else{
        res.send({ error : 'producto no encontrado' })
    }
    
  })


  router.get('/productos',(req,res)=>{
    res.render('main',{products:productobj.products,columnKeys:productobj.products.length==0?[]:Object.keys(productobj.products[0])})    
  })

  router.put('/productos/:id',(req,res)=>{
    productobj.updateById(req.params.id,req.body)
    res.send({"status":"ok"})
  })


  router.delete('/productos/:id',(req,res)=>{
    const obj= productobj.deleteById(req.params.id)
    res.send(obj)
  })


  module.exports=router