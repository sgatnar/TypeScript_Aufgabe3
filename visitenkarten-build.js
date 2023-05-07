/**
 * Erstellt Visitenkarten aus den Daten und fügt sie dem angegebenen Container hinzu.
 *
 * @param {PersonData[]} data - Ein Array mit Personendaten.
 * @param {HTMLElement} container - Der Container, in dem die Visitenkarten erstellt werden sollen.
 */

function createCardsFromData(data, container) {
    Object.values(data).forEach((personData) => { // Verwenden Sie Object.values(), um das Array der Personendaten zu erhalten.
      const card = new Visitenkarte(personData, container);
      card.createCard();
    });
  }
  
  //const fetch = import('node-fetch');
  fetch('http://127.0.0.1:5500/Person.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Check if data is received correctly
    createCardsFromData(data, container);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  function createCardsFromData(data, container) {
    data.person.forEach(personData => {
      const card = new Visitenkarte(personData, container);
      card.createCard();
    });
  }