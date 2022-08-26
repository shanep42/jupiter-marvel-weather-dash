var city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

var APIKey = '082019878d795523fbe905e218cc12b2';

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=";

var historyDisplay = document.getElementById("search-history-area");

var searchInput = document.getElementById('myInput');

var forecast = document.getElementById("five-day-forecast-area")

// var iconURL =
//               "https://openweathermap.org/img/wn/" +
//               weatherDescription +
//               ".png";
//             var htmlIconImg = "<img src='" + iconURL + "'>";


// Gets a simple version of today's date without dayjs/moment
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

var searchHistory = [];

var city;

// Autocomplete function for search bar, slightly modified from W3Schools example snippet why
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }


// Get user input from search box
function getInput() {
  var input = searchInput.value;
  getCity(input);
}

// Get basic weather info, as well as latitude and longitude for later API calls
function getCity(city){
  console.log("City:", city)
  if (city != undefined && city != ""){
    fetch(queryURL + city  + "&units=imperial&appid=" + APIKey)
    .then((response) => response.json())
    .then((data) => {
    console.log("Data:", data);
    display(data);
    UVindex(data.coord.lat, data.coord.lon);
    getFiveDay(data.coord.lat, data.coord.lon)
    })
  }
}

// Get UV Index information from the next available forecast point and append it to the current weather display
function UVindex(lat, long){
  fetch("https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + APIKey)
  .then((response) => response.json())
  .then((data) => {
    var uvi = data[0].value;
    $('#UVindex').text(uvi)
    console.log(uvi)
    if (uvi <= 2){
     document.getElementById("UVindex").classList.add("uvfavorable")
      console.log('low')
    } else if (uvi > 2 && uvi <= 7){
      document.getElementById("UVindex").classList.add("uvmoderate")
      console.log('medium')
    } else {
      document.getElementById("UVindex").classList.add("uvsevere")
      console.log('high')
    }
  })
}

// Get forecast information from midnight for the next five available days and display it in cards.
function getFiveDay(lat, long){
  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + APIKey)
  .then ((response) => response.json())
  .then ((data) => {
    console.log("5-Day Data: ", data)
    //since the exclude parameter does not seem to work with this version of the api, I'm going to attempt this by finding midnight and then counting on the 3 hour jumps to move the correct number of indices ahead to the next day.
    // if successful, this should not require any consideration of today's date - the day will often change over at a different index, but the first midnight in the response data *should* always be tomorrow.
    var midnightIndex = 0;
    console.log("TEST: ", data.list[0].dt_txt)

    while (!data.list[midnightIndex].dt_txt.endsWith("00:00:00")){
      midnightIndex ++;
    }
    console.log(midnightIndex)

    for (let i = midnightIndex; i <= data.list.length - 1; i += 8){
      var newCard = document.createElement('div');
      var newDate = document.createElement('div');
      var newTemp = document.createElement('div');
      var newWind = document.createElement('div');
      var newHumi = document.createElement('div');
      newCard.setAttribute("class", "forecast-card");
      
      newDate.textContent = data.list[i].dt_txt.slice(0,10);
      newTemp.innerHTML = "Temperature: " + data.list[i].main.temp + "℉";
      newWind.innerHTML = "Wind: " + data.list[i].wind.speed + "mph";
      newHumi.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
      newCard.append(newDate);
      newCard.append(newTemp);
      newCard.append(newWind);
      newCard.append(newHumi);
      forecast.append(newCard);     
      console.log("INDEX:", i)
    }
  })
}


// Prints basic weather date to the current weather area
function display (data){
  // Displays not found and stops function if query string returns 404.
  if (data.cod == 404){
    $('#cityNameAndDate').text("City not found");
    return;
  }

  // Adds search to the search history if it is not already there.
  if (!searchHistory.includes(data.name)){
    searchHistory.push(data.name);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    console.log(searchHistory)
    var newButton = document.createElement('button');
    newButton.setAttribute('class', 'history-button');
    newButton.innerHTML = data.name;
    historyDisplay.append(newButton);
  }

  $('#cityNameAndDate').text(data.name + "   (" + today + ")")
  $('#temperature').text("Temperature: " + data.main.temp + "℉");
  $('#windspeed').text("Wind: " + data.wind.speed + " MPH");
  $('#humidity').text("Humidity: " + data.main.humidity + "%" );



}

var historySave = JSON.parse(localStorage.getItem("searchHistory"));
if (historySave == null || historySave == undefined){
  searchHistory = [];
} else {
  searchHistory = historySave;
  for (let i = 0; i < searchHistory.length; i++){
    var newButton = document.createElement('button');
    newButton.setAttribute('class', 'history-button');
    newButton.innerHTML = searchHistory[i];
    historyDisplay.append(newButton);
  }
}


autocomplete(document.getElementById("myInput"), city_names);
document.getElementById("search-button").addEventListener("click", function(){
  forecast.innerHTML = "";
  getInput();
})
document.addEventListener('click', function(event){
  if (event.target.classList.contains("history-button")){
    forecast.innerHTML = "";
    getCity(event.target.innerHTML)
  }
})

