/**
 * Angular Application to control bio site;
 */
(function() {
    var app = angular.module("bio", []);
    // Bio Section Controller;
    app.controller("BioController", function() {
        this.details = details;
    });

    // Current stats!
    // NOTE: This is a super simple example, this could/should be served from the backend;
    var details = {
        name    : "Casey Cabral",
        dob     : "5/30/1987",
        address : "2207 2nd Ave",
        city    : "San Diego",
        state   : "CA",
        zip     : "92101",
        phone   : "619-400-7506",
        email   : "casey.cabral@gmail.com",
        position: "Software Engineer",
        gitHub  : "https://github.com/caseyCab",
        resume  : "https://represent.io/caseycab",
        avatar  : "images/avatar.jpg"
    };
})();
