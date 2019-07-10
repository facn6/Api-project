// This function creates a list of countries for the search box

function populate() {
  var objectRecieved = "https://restcountries.eu/rest/v2/all/";
  fetch(objectRecieved)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed) {
      for (i = 0; i < parsed.length; i++) {
        var li = document.createElement("LI");
        li.innerHTML = parsed[i].name;
        li.addEventListener("click", function(e) {
          getCountry(e.target.textContent);
          document.getElementById("myInput").value = "";
          document.getElementById("myUL").style.display = "none";
        });
        document.getElementById("myUL").appendChild(li);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
populate();

//This function shows and hides countries as the user types.

function myFunction() {
  var input, filter, ul, li, i, txtValue;
  names = document.getElementById("myInput").value.toUpperCase();
  ul = document.getElementById("myUL");
  ul.style.display = names.length == 0 ? "none" : "block";

  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText.toUpperCase();
    if (txtValue.indexOf(names) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

//This function populates the DOM (cards) with the info received from the API.

function getCountry(value) {
  console.log(value);
  var country = value;
  var objectRecieved = "https://restcountries.eu/rest/v2/name/" + country;
  fetch(objectRecieved)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed) {
      var test = document.getElementById("test");
      var fromHTML = parsed[0].name;
      test.innerHTML = fromHTML;

      var lang = document.getElementById("language");
      var langApi = parsed[0].languages.map(function(element) {
        return element.name;
      });
      lang.innerHTML = langApi;

      var capi = document.getElementById("capital");
      capi.innerHTML = parsed[0].capital;

      var code = document.getElementById("code");
      code.innerHTML = parsed[0].callingCodes;

      var pop = document.getElementById("pop");
      pop.innerHTML = parsed[0].population;

      var currency = document.getElementById("currency");
      currency.innerHTML = parsed[0].currencies[0].code;

      var reg = document.getElementById("reg");
      reg.innerHTML = parsed[0].region;
    })
    .catch(function(error) {
      console.log(error);
    });
}
