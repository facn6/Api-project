//

document.getElementById("search-button").onclick = getCountry;

function getCountry() {
  var country = document.getElementById("search-bar").value;
  var objectRecieved = "https://restcountries.eu/rest/v2/name/" + country;
  fetch(objectRecieved)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed) {
      var test = document.getElementById("test");

      var fromHTML = parsed[0].name;
      // console.log(parsed);
      test.innerHTML = fromHTML;
    })
    .catch(function(error) {
      console.log(error);
    });
}
