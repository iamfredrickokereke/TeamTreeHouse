


var coder = {
    username: "avid learner",
    years: 6,
    languages: ["JS", "Ruby", "python", "C#"],
    company: {
        name:" Hackeric Consulting",
        location: "San Francisco"

    },

    logStatus: function () {
        console.log('working from office!');
    },

    logProfile: function () {
        console.log('username: ' + this.username);
        console.log('years of coding: ' + this.years);
        console.log('Programming Languages: ' + this.languages.join(", "));
        console.log('Company name: ' + this.company.name);

    }
};

coder.logProfile();
