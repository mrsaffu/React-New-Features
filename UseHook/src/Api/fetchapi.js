
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function fetchapi() {
    await delay(2000)
    let response = await fetch('https://api.github.com/users/mrsaffu')
    let data = await response.json()
    // console.log(data);
    return data


}

export let promise = fetchapi()