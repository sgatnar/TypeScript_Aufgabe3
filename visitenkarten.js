const visitenkartenContainer = document.getElementById('visitenkarten-container');

function getAttributes() {
  return fetch('http://127.0.0.1:5500/PersonData.json')
    .then(response => response.json())
    .then(data => {
      console.log(data); // do something with the data here
      data.forEach(person => {
        const visitenkarte = generateVisitenkarte(person);
        visitenkartenContainer.appendChild(visitenkarte);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function generateVisitenkarte(person) {
  const visitenkarte = document.createElement('div');
  visitenkarte.classList.add('card');
  visitenkarte.id = person.id;

  const profileCard = document.createElement('div');
  profileCard.classList.add('profileCard');
  visitenkarte.appendChild(profileCard);

  const profilePicture = document.createElement('img');
  profilePicture.src = person.profilePicture;
  profilePicture.classList.add('profilePicture', 'gridItem');
  profilePicture.width = '120px';
  profileCard.appendChild(profilePicture);

  const infoGrid = document.createElement('div');
  infoGrid.classList.add('gridItem');
  profileCard.appendChild(infoGrid);

  const name = document.createElement('p');
  name.textContent = `Name: ${person.name}`;
  infoGrid.appendChild(name);

  const studiengang = document.createElement('p');
  studiengang.textContent = `Studiengang: ${person.studiengang}`;
  infoGrid.appendChild(studiengang);

  const fachsemester = document.createElement('p');
  fachsemester.textContent = `Fachsemester: ${person.fachsemester}`;
  infoGrid.appendChild(fachsemester);

  const icon = document.createElement('a');
  icon.href = person.gitlabLink;
  icon.classList.add('icon');
  profileCard.appendChild(icon);

  const gitlabIcon = document.createElement('img');
  gitlabIcon.src = 'gitlab-icon-rgb.png';
  gitlabIcon.width = '60px';
  icon.appendChild(gitlabIcon);

  const sloganCard = document.createElement('div');
  sloganCard.classList.add('sloganCard');
  visitenkarte.appendChild(sloganCard);

  const slogan = document.createElement('p');
  slogan.classList.add('slogan');
  slogan.innerHTML = `Ich habe mich f&uumlr <span>${person.sloganStudiengang}</span> entschieden, weil ${person.sloganReason}.`;
  sloganCard.appendChild(slogan);

  const logo = document.createElement('img');
  logo.src = 'hhn-logo.png';
  logo.classList.add('logo');
  logo.width = '170px';
  sloganCard.appendChild(logo);

  const fetchButton = document.createElement('button');
  fetchButton.textContent = 'Weitere Infos';
  fetchButton.classList.add('fetchButton');
  fetchButton.addEventListener('click', () => {
  fetchPersonInfo(person.id);
  });
  visitenkarte.appendChild(fetchButton);
  
  return visitenkarte;
  }
  
  
  
  getAttributes();