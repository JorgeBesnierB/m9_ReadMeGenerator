// ###########################################################
// this file contains the questions for the inquirer
// ###########################################################

const questionsOneResponse= [
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'userGithub',
        message: 'What is your git hub user name?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your contact email?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'ProjectTitle',
        message: 'What is the name of the Proyect?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'ProjectDescription',
        message: 'What is the objective of the project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("invalid");
            }
        }
    },
    {
        type: "list",
        message: "Will you add a licence?",
        name: "license",
        choices: ["agpl", "isc", "apache", "mit", "no license"]
    },





];


const questionsMultiResponse= [
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'ProjectInstall',
        message: 'How can the user install this project? (to stop adding type n)',

    },
     // ----------------------------------------------------
     {
        type: 'input',
        name: 'ProjectRun',
        message: 'How can the user run this project? (to stop adding type n)',
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'ProjectGuidlines',
        message: 'Can other users contribute? (to stop adding type n)',
    },
    // ----------------------------------------------------
    {
        type: 'input',
        name: 'TestRun',
        message: 'How can users test if dev is running correctly? (to stop adding type n)',
    },
];

//this gives us acess to the items we want to acces in other files.
module.exports = {
    questionsOneResponse,
    questionsMultiResponse,
};
