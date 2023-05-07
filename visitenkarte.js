var container = document.getElementById('cards-container');
var dataUrl = './personen.json';
// Define class for creating the card
var Visitenkarte = /** @class */ (function () {
    function Visitenkarte(data, container) {
        this.data = data;
        this.container = container;
    }
    Visitenkarte.prototype.createCard = function () {
        var card = document.createElement('div');
        card.classList.add('card');
        card.id = this.data.name;
        var profileCard = document.createElement('div');
        profileCard.classList.add('profileCard');
        card.appendChild(profileCard);
        var profilePicture = document.createElement('img');
        profilePicture.classList.add('profilePicture', 'gridItem');
        profilePicture.width = 120;
        profilePicture.src = this.data.image_url;
        profileCard.appendChild(profilePicture);
        var info = document.createElement('div');
        info.classList.add('gridItem');
        profileCard.appendChild(info);
        var name = document.createElement('p');
        name.textContent = "Name: ".concat(this.data.name);
        info.appendChild(name);
        var studiengang = document.createElement('p');
        studiengang.textContent = "Studiengang: ".concat(this.data.studiengang);
        info.appendChild(studiengang);
        var fachsemester = document.createElement('p');
        fachsemester.textContent = "Fachsemester: ".concat(this.data.fachsemester);
        info.appendChild(fachsemester);
        var icon = document.createElement('a');
        icon.classList.add('icon');
        icon.href = 'https://git.it.hs-heilbronn.de/';
        var gitIcon = document.createElement('img');
        gitIcon.src = 'gitlab-icon-rgb.png';
        gitIcon.width = 60;
        icon.appendChild(gitIcon);
        profileCard.appendChild(icon);
        var sloganCard = document.createElement('div');
        sloganCard.classList.add('sloganCard');
        card.appendChild(sloganCard);
        var h1 = document.createElement('h1');
        h1.textContent = ',,';
        sloganCard.appendChild(h1);
        var statement = document.createElement('p');
        statement.classList.add('statement');
        statement.innerHTML = this.data.statement;
        sloganCard.appendChild(statement);
        var logo = document.createElement('img');
        logo.classList.add('logo');
        logo.width = 170;
        logo.src = 'hhn-logo.png';
        sloganCard.appendChild(logo);
        this.container.appendChild(card);
    };
    return Visitenkarte;
}());