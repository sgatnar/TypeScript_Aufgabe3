function VisitenkarteViewModel(data) {
    var self = this;

    self.name = ko.observable(data.name || '');
    self.studiengang = ko.observable(data.studiengang || '');
    self.fachsemester = ko.observable(data.fachsemester || '');
    self.image_url = ko.observable(data.image_url || '');
    self.statement = ko.observable(data.statement || '');

    self.goBack = function() {
        window.location.href = 'start.html';
    };
}

fetch('./Person.json')
    .then(response => response.json())
    .then(data => {
        var params = new URLSearchParams(window.location.search);
        var selectedPersonName = params.get('name');
        var selectedPersonData = data.person.find(person => person.name === selectedPersonName);
        var viewModel = new VisitenkarteViewModel(selectedPersonData);
        ko.applyBindings(viewModel);
    })
    .catch(error => {
        console.error('Fehler beim Laden der Daten:', error);
    });