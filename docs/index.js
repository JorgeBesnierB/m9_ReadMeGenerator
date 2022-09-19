//Import all the requiere modules
const inquirer = require('inquirer');
const questions = require ('./utils/inquirerQA.js')
const generateMarkdown = require ('./utils/generateMarkdown.js')
const fs = require ('fs');
const { Console } = require('console');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        } 
    });
}


// TODO: Create a function to initialize app
function init() {
    const QuestionsSingle = questions.questionsOneResponse;
    const QuestionsMulti = questions.questionsMultiResponse;
    const AddStep = questions.questionsAddStep;
    let objGeneral = {};


    async function callInquirers() {
        //Ask for general data that does not need to ask again
        const inq1 = await inquirer.prompt(QuestionsSingle)
            .then(res0 => {
                objGeneral = res0;
                console.log(objGeneral);
                return objGeneral;
        });

        //Ask for as many steps there are in the process.
        let addBool = true;
        let questionCont = 0
        while (questionCont < QuestionsMulti.length) { //THIS COULD BE CHANGED TO A NICE FUNCTION, BUT COULDNT BECAUSE SYNC OF CALLS
            objGeneral[QuestionsMulti[questionCont].name] = [];
            while(addBool){
                const inq2 = await inquirer.prompt(QuestionsMulti[questionCont])
                    .then(res1 => {
                        let propertyName  = Object.keys(res1); //get the name of the object property
                        console.log('respuesta del res' , res1);
                        if (String(res1[propertyName]) == 'n'){
                            addBool = false;
                            return objGeneral;
                        }
                        else{
                            objGeneral[propertyName].push(String(res1[propertyName])); //concat res1 value to both object array
                            addBool = true;
                            return objGeneral;
                        }
                    });
            }
            console.log('sali del primer while', questionCont);
            addBool = true;
            questionCont++;
        }
        return objGeneral;
    }

    //Call the aysnconous function to run every thing sequentally
    return callInquirers() 
    .then(res => {
        return res;
    })   
}

// Function call to initialize app
init()
    .then((res)=> {
        console.log(res)
        let readmeObj = {
            name: "auto-README.md"
            ,content: ''
        }
        readmeObj.content = generateMarkdown(res);
        return readmeObj
    })
    .then((readMe)=>{
        console.log('final', readMe);
        writeToFile(readMe.name, readMe.content);
    })
    .catch(err => {
        console.log(err);
    })
;
