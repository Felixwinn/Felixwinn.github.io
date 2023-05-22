// The HTML is configured intentionally with h2.animalTitle containing audio file names like "Cow".
// Put all of your code inside the DOMContentLoaded event listener provided.
document.addEventListener('DOMContentLoaded', () => {

  // Use .getElementsByClassName() to get an HTMLCollection of all .animalTitle elements.
  const animalTitles = document.getElementsByClassName('animalTitle');

  // Create a new Object with properties and values like 'animal01: "Cow" '.
    // These values can be found in the HTMLCollection.
  const animals = {};
  for (let i = 0; i < animalTitles.length; i++) {
    animals[`animal${i + 1}`] = animalTitles[i].textContent.trim();
  }

  // Alternative way to do it
  // animalObject[element.nextElementSibling.id] = element.nextElementSibling.alt;


  // Use the Object to create event listeners for <img> elements that launch the provided howler script.
    // Write a single 'for...in' statement to add listeners to all the <img> elements.
    // .addEventListener('click', () => {CODE GOES HERE}
    // The animal title (e.g. 'Cow') determines which sprite is played.

    // Create an object to map animal titles to sprite names
  const animalSprites = {
    'Cow': 'Cow',
    'Duck': 'Duck',
    'Horse': 'Horse',
    'Fox': 'Fox'
  };

  const imgElements = document.getElementsByTagName('img');


    // Add click event listeners to all <img> elements

      // Create an object with animal titles as keys and values as sprite names
  // Add event listeners to each <img> element

  for (const img of imgElements) {
    img.addEventListener('click', () => {
      playAnimal(animalSprites[img.parentElement.querySelector('.animalTitle').textContent.trim()]);
    });

    //Alternative: for.. in..
  //   for (const e in animalObject) {
  //     $(`#${e}`).on('click', function(){
  //   playAnimal(animalObject[e]);
  //   })
  // }
  //$(`#${e}`) means select animal01, animal02, 03,04 (class)


  // Leverage the Object to add mouseover styling to the <img> elements.
    // You'll need to add listeners to the <img> elements.
    // Then you'll need to write functions to do the events.
    // On mouseover add this.style.border = '3px solid red';
    // On mouseout add this.style.border = '0px';
    img.addEventListener('mouseover', () => {
      img.style.border = '3px solid red';
    });
    img.addEventListener('mouseout', () => {
      img.style.border = '0px';
    });
  }


  function playAnimal(animalSound) {
    const sound = new Howl({
      src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
      sprite: {
        Cow: [0, 3000],
        Duck: [0, 3000],
        Horse: [0, 3000],
        Fox: [37500, 7000],
      }
    });
    sound.play(animalSound);
  }
});
