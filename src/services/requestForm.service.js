const URL = "https://haifa-dev.herokuapp.com/api/v1";

const errorMessages= {
    name: "You forgot to fill your name!",
    email: "How can we contact you without an email?",
    phone: "How can we contact you without a phone number?",
    about: "You forgot to provide details about your project!",
    description: "You forgot to provide details about your organization!",
    webAddress: "You should never see this error message. Like, never.",
    tasks: "You haven't told us what needs to be done!"
};

function mapErrorMessage(errorMsg) {
    if (errorMsg.startsWith('"')) {
        return errorMessages[/"(.*?)"/g.exec(errorMsg)[1]];
    }
}

export async function submitForm(formBody, isForProfit) {
    try {
        let response = await fetch(`${URL}/${isForProfit? 'profitableProjectReqs' : 'charitableProjectReqs'}`, {
            method: "POST",
            body: JSON.stringify(formBody),
            headers:{
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error(
            mapErrorMessage((await response.json()).message)
        );
        return { result: true };
    } catch (err) {
        return { result: false, error: err.message };
    }
}