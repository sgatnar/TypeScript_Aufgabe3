// Define interface for person data
interface PersonData {
    name: string;
    studiengang: string;
    fachsemester: number;
    image_url: string;
    statement: string;
  }

  const container = document.getElementById('cards-container');
  const dataUrl = './personen.json';
  
  // Define class for creating the card
  class Visitenkarte {
    private data: PersonData;
    private container: HTMLElement;
  
    constructor(data: PersonData, container: HTMLElement) {
      this.data = data;
      this.container = container;
    }
  
    createCard() {
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = this.data.name;
  
      const profileCard = document.createElement('div');
      profileCard.classList.add('profileCard');
      card.appendChild(profileCard);
  
      const profilePicture = document.createElement('img');
      profilePicture.classList.add('profilePicture', 'gridItem');
      profilePicture.width = 120;
      profilePicture.src = this.data.image_url;
      profileCard.appendChild(profilePicture);
  
      const info = document.createElement('div');
      info.classList.add('gridItem');
      profileCard.appendChild(info);
  
      const name = document.createElement('p');
      name.textContent = `Name: ${this.data.name}`;
      info.appendChild(name);
  
      const studiengang = document.createElement('p');
      studiengang.textContent = `Studiengang: ${this.data.studiengang}`;
      info.appendChild(studiengang);
  
      const fachsemester = document.createElement('p');
      fachsemester.textContent = `Fachsemester: ${this.data.fachsemester}`;
      info.appendChild(fachsemester);
  
      const icon = document.createElement('a');
      icon.classList.add('icon');
      icon.href = 'https://git.it.hs-heilbronn.de/';
  
      const gitIcon = document.createElement('img');
      gitIcon.src = 'gitlab-icon-rgb.png';
      gitIcon.width = 60;
      icon.appendChild(gitIcon);
  
      profileCard.appendChild(icon);
  
      const sloganCard = document.createElement('div');
      sloganCard.classList.add('sloganCard');
      sloganCard.style.marginBottom = '25px';
      card.appendChild(sloganCard);
  
      const h1 = document.createElement('h1');
      h1.textContent = ',,';
      sloganCard.appendChild(h1);
  
      const statement = document.createElement('p');
      statement.classList.add('statement');
      statement.innerHTML = this.data.statement;
      sloganCard.appendChild(statement);
  
      const logo = document.createElement('img');
      logo.classList.add('logo');
      logo.width = 170;
      logo.src = 'hhn-logo.png';
      sloganCard.appendChild(logo);
  
      this.container.appendChild(card);
    }
  }