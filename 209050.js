    
function getAttributes(){
    return fetch('http://localhost:5500/PersonData.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.name); // do something with the data here
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
