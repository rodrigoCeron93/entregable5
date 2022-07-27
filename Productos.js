class Productos {
  constructor(products=[]) {
    this.products = products;
  }
  save(obj) {
      if(this.products.length>=1){
        const ids = this.products.map(object => {
          return object.id;
        });
        const max = Math.max(...ids);
        obj.id= max+1
        
        this.products.push(obj)
      }else{
        obj.id=1
        this.products.push(obj)
      }
  }
   getById(id) {
    
    let product= this.products.find(p=>p.id===id)
    return product
   
  }
  deleteById(id) {
    let index= this.products.findIndex((p)=>p.id===id)
    this.products.splice(index,1)
  }

  updateById(id,obj) {
    let index= this.products.findIndex((p)=>p.id===id)
    obj["id"]=parseInt( id)
    this.products.splice(index,1)
    this.products.push(obj)
    return obj
  }

}

module.exports= {
  Productos:Productos
}