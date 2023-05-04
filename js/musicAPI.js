function musicAPI() {

    // Define your variables
    // create an XHR object (connect)
    // Define base URL for API and insert searchTerm variable
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    //Open the API call
    //use XHR.open to get a file from the API
    connect.open('GET', url)
    
    //Define the actions that will happen when the response is returned: parse and display the data
    //load and parse the response as a JSON data object

    connect.onload = function() {
        var musicObject = JSON.parse(this.response)
        var pages = musicObject.query.pages; 
        for (i in pages) {
            
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4 ');
            document.getElementById('music').appendChild(newDiv)
            newDiv.innerText = pages[i].title;

        };

    }

    //Send the API request to the server
    connect.send();
}