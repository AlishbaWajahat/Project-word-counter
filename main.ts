import inquirer from "inquirer";

const input:{
    Sentence:string
}=await inquirer.prompt({
    message:"Enter your sentence or paragraph to count.",
    type:"input",
    name:"Sentence"
})

const word=input.Sentence.trim().split(" ");
const wordCount=word.length;
console.log(`Your word count is ${wordCount}`);