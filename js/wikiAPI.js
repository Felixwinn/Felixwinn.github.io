function wikiAPI() {

    //Configure your HTML page
        //Configure input#searchTerm on the HTML page for input
        //Configure div#wiki on the HTML page for output
        //Configure button to invoke this function()
        //Load this js file using <script>


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
        //Console.log the date object to see what you got as a response
        //Locate the branch of the object that is of interest
        //Loop through the branch and output the Wiki pages to the HTML page

    connect.onload = function() {
        var wikiObject = JSON.parse(this.response)
        //console.log(wikiObject)
        //console.log(wikiObject.query.pages)
        var pages = wikiObject.query.pages; 
        for (i in pages) {
    //         var newDiv = document.createElement("div");
    //         newDiv.setAttribute('class', 'row h4 ');
    //         document.getElementById('wiki').appendChild(newDiv)
    //         newDiv.innerText = pages[i].title;
    //     }

    //Super challenge:
        //Display links to the Wikipedia HTML pages as results
        //Use the pageid property in the JSON file
        //The base URL for loading Wikipedia pages by pageid is the following:
        //https://en.wikipedia.org/?curid=PAGEID_GOES_HERE
        //add the pageid to the end of the URL
            var pageURL = "https://en.wikipedia.org/?curid="
            var newAnchor = document.createElement('a');
            newAnchor.href = pageURL+pages[i].pageid; //setAttribute('href', pageURL+pages[i])
            newAnchor.className = 'd-block'; //setAttribute('class', 'd-block')
            newAnchor.innerText = pages[i].title;
            document.getElementById('wiki').appendChild(newAnchor);
     };
    }

    //Send the API request to the server
    connect.send();
} 