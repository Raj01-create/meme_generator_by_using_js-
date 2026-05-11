const generate = document.querySelector(".gbtn");
const memetitle = document.querySelector(".meme-title");
const memeimg = document.querySelector(".meme-image");
const meme_author = document.querySelector(".author span");

function getMeme(){
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      const { author, title, url } = data;
      meme_author.innerText = `Meme By: ${author}`;
      memetitle.innerText = title;
      memeimg.src = url;
      console.log(author, title, url);
    });
}

getMeme()

generate.addEventListener("click", () => {
  getMeme()
});
