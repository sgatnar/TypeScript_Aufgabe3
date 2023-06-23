/**
 * Erstellt eine einzelne Visitenkarte aus den Daten und fügt sie dem angegebenen Container hinzu.
 *
 * @param {PersonData} data - Die Daten der ausgewählten Person.
 * @param {HTMLElement} container - Der Container, in dem die Visitenkarte erstellt werden soll.
 */

function createCardFromData(data, container) {
  const card = new Visitenkarte(data, container);
  card.createCard();
}

function createCardsFromData(data, container) {
  data.person.forEach(personData => {
    createCardFromData(personData, container);
  });
}

function loadPersonData(container) {
  fetch('./Person.json')
    .then(response => response.json())
    .then(data => {
      var params = new URLSearchParams(window.location.search);
      var selectedPersonName = params.get('name');
      var selectedPersonData = data.person.find(person => person.name === selectedPersonName);
      createCardsFromData(selectedPersonData, container);
    })
    .catch(error => {
      console.error('Fehler beim Laden der Daten:', error);
    });
}

var container = document.getElementById('cards-container');
loadPersonData(container);