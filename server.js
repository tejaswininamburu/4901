let express=require("express")

let app=express()

app.use(express.urlencoded({extended:true}))
//getbooks

app.set("view engine", "ejs");
let books=[{
title:"wings of Fire",author:"abdul kalam",price:2000,id:1
},{
title:"Database",author:"NVLS",price:20000,id:2
},
{
title:"Learn C",author:"press",price:1000,id:3
}]
app.get("/books",(req,res)=>
{
    // res.send(books)
    res.render("books.ejs",{books})
})


app.post("/books",(req,res)=>
{
console.log(req.body)
let {title,author,price}=req.body
books.push({title,author,price,id:books.length+1})
res.redirect("/books")
})

app.listen(3000,()=>
{
    console.log("server is listening on 3000")
})
