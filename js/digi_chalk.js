

function lastItem(arr) {
    document.getElementById('originalArray').innerHTML = "Original array: " + JSON.stringify(arr);
    var lastItem = arr.slice().sort()[arr.length - 1];
    document.getElementById('lastAlphabetically').innerHTML = "Last item: " + lastItem;
    console.log(lastItem);
}

function alphabetize() {
    var fruit = document.getElementById('fruit').value.toLowerCase();
    var animal = document.getElementById('animal').value.toLowerCase();
    var state = document.getElementById('state').value.toLowerCase();
    var country = document.getElementById('country').value.toLowerCase();

    var alphaOrig = [fruit, animal, state, country];
    document.getElementById('alphaOrig').innerHTML = "Original order: " + alphaOrig.join(", ");
    
    var alphaOutput = alphaOrig.slice().sort()
    document.getElementById('alphaOutput').innerHTML = "Alphabetical order: " + alphaOutput.join(", ");
}
