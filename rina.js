var key = "";

const user_input = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout,
});

user_input.question('Enter Gemini API Key: ', key => {
    user_input.close();
});

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-flash"});

async function run(prompt){

    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response.text());
}

console.log("Hello! I am RinAI");

while (true) {

    var this_prompt = "";
    let user_prompt = require('readline').createInterface({

        input: process.stdin,
        output: process.stdout,
    });

    user_prompt.question('Text: ', this_prompt => {
        run(this_prompt)

        user_prompt.close();
    });
}
