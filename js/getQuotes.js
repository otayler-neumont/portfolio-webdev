const apiUrl = "https://type.fit/api/quotes"
async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const randElement = Math.floor(Math.random() * data.length);
        document.getElementById('quoteBlock').innerHTML = data[randElement].text;
        document.getElementById('quoteFooter').innerHTML = data[randElement].author;
        console.log(data);
    } catch (error) {
        console.error("There was a problem fetching the quote:", error);
    }
}
getQuote(apiUrl);

/* --- This was working, then it randomly started throwing forbidden errors --- */
/* --- Leaving it here so I can come back to it later --- */

/* --- figured out the issue: --- */
/* I was allowed browser instance access to the cors-anywhere api via a button click
I did at the start of the day. I could inject the url call everytime the page loads but
it would be easier to use the alternate method above. Leaving here so I can return to
it and figure out a proper solution to cors
 */

// const api_url ="https://zenquotes.io/api/random/";
// const proxy_url = 'https://cors-anywhere.herokuapp.com/';
//
// async function getQuote(url)
// {
//     const response = await fetch(proxy_url + url);
//     let data = await response.json();
//
//     document.getElementById('quoteDiv').innerHTML = data[0].h;
//     console.log(data);
// }
//
// getQuote(api_url);
