const express=require("express")
const { readFile } = require("fs")
const fs = require("fs").promises
const path = require("path")
const app=express()

const port=3000

const pathToFile=path.join(__dirname,"db.json")


app.get("/products/",async (req,res)=>{


    try{
        let data=await Fs.readFile()
    return JSON.parse(data);
    }catch(err){
        console.log(err)

    }
})   

async function readFileWithDelay(){
    await new Promise((resolve,reject)=>{setTimeout(resolve,1500)})
    let product= await readFile();
    return product
    
}

app.get('/products/:id', async (req,res)=>{
    try{
        let products=await readFileWithDelay();
        let {id}=req.params
        id=Number(id);
        let product=products.find((item)=>{return item.id===id})
        res.JSON(product)
    
    }catch(err){
        console.log(err);
    }
    
});

app.listen(port,()=>{
    console.log('Example app listening on port ${port}')

})

