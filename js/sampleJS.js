function evalNumber(){
    var inputValue = Number(prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd  number.")
    }
} 

function changeTitle(){
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement)
    selectedElement.innerText="Sponsored By DIGS"
}

//prompt returns strings  

function howdy(friend) {
    alert("Howdy " + "friend");  
}

// function howdy(firstName) {
//     alert("Howdy " + firstName);  
// }

// function called howdy, parameter called firstName  

function mapLoad(){
//Define the coordinate
    var latLng = [41.789649, -87.599702];

//set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', 
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVsaXh3aW4iLCJhIjoiY2xnOTMwMDU4MTM1dzNncXJwNGtua29iNSJ9.273VFcJdLUfewc1gBWvhRQ';

//Define two tile layer variables
    var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox/light-v9', 
        tileSize: 512,
        zoomOffset: -1, 
        attribution: mbAttr}), 
        streets = L.tileLayer(mbUrl, {
        id:'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
    });

//Define map object
    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

//Add tile layers to base layer project
//Add to the map
//Add a marker with pop-up

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup(); 

//Add a nifty click event
    var popup = L.popup();
        function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}

// creating HTML elements programmatically using JS
// find the element with id called addElements, add child to it
// add three divs to the page
// define the row only once and iterate

// function addElements(){
//     var valueArray = ['first', 'second', 'third'];
//     for (i in valueArray) {
//         var newDiv = document.createElement('div');
//         newDiv.setAttribute('class', 'row');
//         newDiv.setAttribute('id', 'div '+i);
//         document.getElementById('addElements').appendChild(newDiv)
//         newDiv.innerText = valueArray[i];
//     }; 
// }


//Get current minutes
function displayCurrentMinute() {
    const minuteDiv = document.getElementById('minute');
    const now = new Date();
    const minute = now.getMinutes();
    minuteDiv.innerText = `The current minute is: ${minute}`;
  }
  

  //hide button
function hideElement() {
  const element = document.getElementById('element-to-hide');
  element.style.display = 'none';
}

const hideButton = document.getElementById('hide-button');
hideButton.addEventListener('click', hideElement);

// Write a function to pop up a simple alert message.
function showAlert() {
    alert("This is an alert message!");
  }


// The parameter will be an array;
// The parseArray() function that outputs a sorted array based on input
// function parseArray(arr) {
//     // check if input is an array
//     if (!Array.isArray(arr)) {
//       return "Input is not an array!";
//     }
  
//     // sort the array
//     arr.sort();
  
//     // return the sorted array
//     return arr;
//   }
  
  
function parseArray() {
    let inputStr = prompt("Enter an array separated by comma:");
    let arr = inputStr.split(",").map(str => str.trim());
    arr.sort();
    return arr;
}

function sortedArray() {
    let sortedArray = parseArray();
    alert("Sorted array: " + sortedArray.join(", "));
}