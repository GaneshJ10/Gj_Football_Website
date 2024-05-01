// apiKey = 93ad1cdb5emsh2934756ee27713ep190db0jsnad1f4705a61e

async function getData() {
  const url =
    "https://allscores.p.rapidapi.com/api/allscores/news?sport=1&timezone=America%2FChicago&langId=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "93ad1cdb5emsh2934756ee27713ep190db0jsnad1f4705a61e",
      "X-RapidAPI-Host": "allscores.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    // console.log(response);
    const result = await response.json();
    const place = document.getElementById("container");

    // console.log();
    for (var i = 0; i < result.news.length; i++) {
      place.appendChild(
        createCard(
          result.news[i]["image"],
          result.news[i]["title"],
          result.news[i]["url"]
        )
      );
    }

    // document.write(JSON.stringify(result.news));
  } catch (error) {
    console.error(error);
  }
}

getData();

function createCard(image, title, url) {
  const card = document.createElement("div");
  card.className = "col-3 card";
  card.style = "display:flex;flex-direction:column";
  const img = document.createElement("img");
  img.src = image;
  const h3 = document.createElement("h3");
  h3.innerHTML = title;
  const links = document.createElement("a");
  h3.className = "card-body";
  links.innerText = "Click here";
  links.className = "btn btn-primary";
  links.href = url;
  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(links);
  return card;
}
