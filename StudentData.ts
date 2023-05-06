// Interface für die Daten
interface StudentData {
    name: string;
    studiengang: string;
    fachsemester: number;
    image_url: string;
    statement: string;
  }
  
  // Klasse, die die Daten von fetch() abruft und verarbeitet
  class Student {
    private data: StudentData;
  
    constructor() {
      this.getData();
    }
  
    async getData() {
      // Daten von fetch() abrufen
      const response = await fetch('http://127.0.0.1:5500/PersonData.json');
  
      // JSON-Daten parsen
      const jsonData = await response.json();

      // Daten in Interface konvertieren
      const data: StudentData = {
        name: jsonData.name,
        studiengang: jsonData.studiengang,
        fachsemester: jsonData.fachsemester,
        image_url: jsonData.image_url,
        statement: jsonData.statement,
      };
  
      // Daten setzen
      this.setData(data);
  
      // Visitenkarten erstellen
      this.createVisitenkarten();
    }
  
    setData(data: StudentData) {
      this.data = data;
    }
  
    createVisitenkarten() {
      // Elemente aus DOM auswählen
      const container = document.getElementById('visitenkarten-container');
  
      // Neue Visitenkarte erstellen
      const card = document.createElement('div');
      card.className = 'visitenkarte';
  
      // Name hinzufügen
      const name = document.createElement('h2');
      name.innerHTML = this.data.name;
      card.appendChild(name);
  
      // Studiengang hinzufügen
      const studiengang = document.createElement('p');
      studiengang.innerHTML = this.data.studiengang;
      card.appendChild(studiengang);
  
      // Fachsemester hinzufügen
      const fachsemester = document.createElement('p');
      fachsemester.innerHTML = `Fachsemester: ${this.data.fachsemester}`;
      card.appendChild(fachsemester);
  
      // Bild hinzufügen
      const image_url = document.createElement('img');
      image_url.src = this.data.image_url;
      card.appendChild(image_url);
  
      // Statement hinzufügen
      const statement = document.createElement('p');
      statement.innerHTML = this.data.statement;
      card.appendChild(statement);
  
      // Visitenkarte zur Seite hinzufügen
      //container.appendChild(card);
    }
  }
  
  // Neues Student-Objekt erstellen
  const student = new Student();