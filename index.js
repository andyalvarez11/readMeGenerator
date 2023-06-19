const inquirer=require("inquirer");
const fs=require("fs");

const questions = [""];
const project={
    title:"",
    description:"",
    tableOfContent:"",
    installation:"",
    usage:"",
    contribution:"",
    tests:""
}

const readMeTemplate = ""

inquirer.prompt([
    {
        type:"input",
        name:"userName",
        message:"What is your GitHub username?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?"
    },
    {
        type:"input",
        name:"projectName",
        message:"What is your project name?"
    },
    {
        type:"input",
        name:"projectDescription",
        message:"Please write a short description of your project"
    },
    {
        type:"list",
        name:"license",
        message:"What kind of license should you have?",
        choices:["MIT","APACHE 2.0","GPL 3.0","BSD 3","NONE"]
    },
    {
        type:"input",
        name:"commandDependencies",
        message:"What command should be run to install dependcies?"
    },
    {
        type:"input",
        name:"commandTests",
        message:"What command should be run to run tests?"
    },
    {
        type:"input",
        name:"userKnow",
        message:"What does the user need to know about using the repo?"
    },
    {
        type:"input",
        name:"userContribution",
        message:"What does the user need to know about contributing to the repo?"
    },
]).then(response=>{
    readMeTemplate

    fs.writeFile("README.md",readMeTemplate,error=>{
        if(error){
            console.log(error);
        } else {
            console.log("README generated successfully")
        }
    })
});