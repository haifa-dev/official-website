const URL = "https://haifa-dev.herokuapp.com/api/v1";

const errorMessages = {
    name: "You forgot to fill your name!",
    email: "How can we contact you without a valid email?",
    phone: "Something in your phone number doesn't add up.",
    about: "You forgot to provide details about your project!",
    description: "You forgot to provide details about your organization!",
    webAddress: "You should never see this error message. Like, never.",
    businessPlan: "You must provide a business plan to work with us.",
    systemDefinition: "It seems you did not provide a system definition link.",
    communityOrProfit: "You must be community or profit oriented, stop messing with our code!",
    isFunded: "You are either funded or not - can't be anything else",
    tasks: "You haven't told us what needs to be done!",
    server: "Our server had a little whoopsie. Please press 'Edit fields', make sure the details are correct, and try again.<br>If this issue persists, contact haifa.devs@gmail.com with the following error code: "
};

function translateErrorMessage(errorMsg, statusCode) {
    // The following regex extracts "name" 
    // from '"name" must not be empty'
    const regexResult = /^"(.*?)"/.exec(errorMsg);

    if (regexResult) {
        // The 2nd item is always the result without the 
        // double quotes, while the 1st includes the quotes
        return { fieldName: regexResult[1], text: errorMessages[regexResult[1]] }; 
    } else {
        // There's no match (exec returns null)
        // meaning it's an internal server error
        return { text: `${errorMessages.server}${statusCode}` };
    }
}

export async function submitForm(formBody, isForProfit) {

    if (!formBody.webAddress?.length) {
        // the server won't approve empty string.
        delete formBody.webAddress;
    }
    
    if (!formBody.businessPlan?.length) {
        // the server won't approve empty string.
        delete formBody.businessPlan;
    }
    
    if (!formBody.systemDefinition?.length) {
        // the server won't approve empty string.
        delete formBody.systemDefinition;
    }
    
    if (typeof formBody.isFunded !== 'boolean' && isForProfit) {
        formBody.isFunded = false;
    }

    let response = await fetch(`${URL}/${isForProfit? 'profitableProjectReqs' : 'charitableProjectReqs'}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formBody),
    });

    if (!response.ok) {
        const responseJson = await response.json();
        console.log(responseJson.message); // left intentionally for sergway
        console.log(responseJson);
        return { 
            result: false, 
            error: translateErrorMessage(responseJson.message, response.status) 
        };
    }

    return { result: true };
}