import inquirer from "inquirer"
const answer=await inquirer.prompt([
    {
        message:"enter first number",type:"number",name:"n1"
    },
    {message:"enter second number",type:"number",name:"n2"},
    {message:"enter division number",type:"number",name:"n3"},
])
console.log(answer)
function average(n1:number,n2:number,n3:number){
  
   return console.log("your answer=",(n1+n2)/n3)
}

average(2,2,2)