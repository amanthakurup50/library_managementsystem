const express=require('express');
const { v4: uuidv4 } = require('uuid');

const router=express.Router();


//Creating an array to add bookInfo
let booksarray=[];

//Getting details of all the books
router.get("/",(req,res)=>{
    res.send(booksarray);
})


//Adding new books
router.post("/",(req,res)=>{
    const book=req.body;
    const bookId=uuidv4();
    const bookWithID={...book,id:uuidv4()}
    booksarray.push(bookWithID);
    res.send(`Book with id ${bookWithID.id} and title ${bookWithID.title}  is added`);
})


//Getting information about a particular book with the help of book id
router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const foundBook=booksarray.find((book)=>book.id==id);
    res.send(foundBook);
})


//Deleting a particular book on the basis of its id 
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    booksarray=booksarray.filter((book)=>book.id!=id);
    res.send(`Book with id ${id} is deleted`)
})


//Updating the info about a particular book with the help of its id 
router.patch("/:id",(req,res)=>{
    const {id}=req.params;
    const {title,author}=req.body;
    const Updatedbook=booksarray.find((book)=>book.id===id);

    if(title){
        Updatedbook.title=title;
    }
    if(author){
        Updatedbook.author=author;
    }

    res.send(`user with the id ${id} updated`);
})

module.exports = router;

