const $searchLine = document.getElementById("searchLine");
const $searchButton = document.getElementById("searchButton");
const $listBody = document.getElementById("listBody");

async function fetchRequest(city) {
  let response = fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    method: "GET",
    headers: { "X-Api-Key": `FqSSY/XJWbFaXhERY4lC9A==7LGOmVAV5yaoWRAt` },
    contentType: "application/json",
  });
  let sendData = await response;
  return sendData.json();
}

async function fetcher(city) {
  let dataRequest = await fetchRequest(city);
  if (dataRequest.temp !== undefined) {
    printToHTML(dataRequest, city);
  } else {
    $listBody.innerHTML = `<div class="bg-danger p-5" ><h2>Invalid location please try again!</h2></div>`;
  }
}

$searchButton.addEventListener("click", () => {
  fetcher($searchLine.value);
  $searchLine.value = "";
});

async function printToHTML(obj, city) {
  let { temp, max_temp, min_temp, wind_speed } = obj;
  $listBody.innerHTML = `<a class="w-75 mx-auto list-group-item list-group-item-primary"
    >city: ${city}</a
  >
  <a class="w-75 mx-auto list-group-item list-group-item-primary"
    >Temp: ${temp}</a
  >
  <a class="w-75 mx-auto list-group-item list-group-item-primary"
    >Max Temp: ${max_temp}</a
  >
  <a class="w-75 mx-auto list-group-item list-group-item-primary"
    >Min Temp ${min_temp}</a
  >
  `;
}
