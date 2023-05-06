class AttributeFetcher {
  constructor() {
    this.fetchDataButton = document.getElementById("fetch-data-button");
    this.fetchDataButton.addEventListener("click", this.handleButtonClick.bind(this));
  }

  handleButtonClick() {
    this.getAttributes();
  }

  getAttributes() {
    return fetch('http://127.0.0.1:5500/PersonData.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // do something with the data here
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}

const attributeFetcher = new AttributeFetcher();