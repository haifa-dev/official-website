const URL = "https://haifa-dev.herokuapp.com";

export async function submitForm(isForProfit) {
    try {
        let response = await fetch(`${URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error("invalid form data!");
    } catch (err) {
        console.error(err);
        return { result: false, error: err.message };
    }
}