let express=require("express")

let app=express()

app.use(express.urlencoded({extended:true}))
//getbooks

app.set("view engine", "ejs");
let books=[
 { title: "The Alchemist", price: 250, author: "Paulo Coelho" },
    { title: "Harry Potter", price: 500, author: "J.K. Rowling" },
    { title: "Atomic Habits", price: 350, author: "James Clear" },
    { title: "Rich Dad Poor Dad", price: 300, author: "Robert Kiyosaki" }]
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
