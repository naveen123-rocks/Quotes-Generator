const quote = document.getElementById("Quote")
const author = document.getElementById("author")


const api_url = "https://api.quotable.io/random";
async function getquote(url){
    const response = await fetch(url)
    var data = await response.json()
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}


getquote(api_url);

function tweet(){
    window.open("https://tweetfull.com/steps-to-create-a-developer-account-on-twitter" + quote.innerHTML + "----by" + author.innerHTML, "Tweet Window", "width=500, height=300" )
}