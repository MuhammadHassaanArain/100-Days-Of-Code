//Question #21; 
//They think of something you could store in a TypeScript Object. Write a program that creates Objects 
//containing these items.

let book: {Author:string, title:string,yearPublished:number}={

    Author:"J.R.R Tolkein",
    title:"The Hobbit",
    yearPublished:1937
}

console.log(`Book Info: ${book.title} by ${book.Author}, published in ${book.yearPublished}`);