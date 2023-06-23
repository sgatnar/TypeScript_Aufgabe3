function TeamMember(name, image_url, studiengang, fachsemester) {
    this.name = name;
    this.image_url = image_url;
    this.studiengang = studiengang;
    this.fachsemester = fachsemester;
}

function TeamViewModel() {
    var self = this;
    self.teamMembers = ko.observableArray([]);

    // Laden der Daten aus der JSON-Datei
    fetch('personen.json')
        .then(response => response.json())
        .then(data => {
            var teamMembersData = data.person.map(person => new TeamMember(
                person.name,
                person.image_url,
                person.studiengang,
                person.fachsemester
            ));
            self.teamMembers(teamMembersData);
            self.selectedTeamMember(teamMembersData[0]); // Standardmäßig die erste Person auswählen
        })
        .catch(error => {
            console.error('Fehler beim Laden der Daten:', error);
        });

    self.selectedTeamMember = ko.observable(null);

    self.navigateToVisitenkarte = function () {
        if (self.selectedTeamMember()) {
            localStorage.setItem('selectedTeamMember', JSON.stringify(self.selectedTeamMember()));
            window.location.href = 'visitenkarte.html';
        }
    };
}

// ViewModel binden
var viewModel = new TeamViewModel();
ko.applyBindings(viewModel);