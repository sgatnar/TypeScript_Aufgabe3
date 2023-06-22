function TeamMember(data) {
    this.name = data.name;
    this.image_url = data.image_url;
  }
  
  function TeamViewModel() {
    var self = this;
    self.teamMembers = ko.observableArray([]);
  
    // Laden der Daten aus der person.json
    fetch('person.json')
      .then(response => response.json())
      .then(data => {
        var mappedTeamMembers = data.person.map(memberData => new TeamMember(memberData));
        self.teamMembers(mappedTeamMembers);
      });
  }
  
  ko.applyBindings(new TeamViewModel());