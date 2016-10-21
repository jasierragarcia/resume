var bio = {
    "intro": "Welcome! I'm Juan, a self-taught",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "571-271-5709",
        "email": "malito:jasierra.garcia@gmail.com",
        "github": "https://github.com/jasierragarcia",
        "linkedin": "https://www.linkedin.com/in/juan-a-sierra-g-368b84100",
        "twitter": "@jasierra.garcia",
        "location": "San Pedro Sula, Honduras"
    },
    "welcomeMessage": "Thank you for visiting!",
    "skills": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Git", "Gulp", "Terminal (Linux/MacOS)", "Responsive Design"],
    "bioPic": "#"
};

var education = {
    "schools": [{
        "name": "Northern Virginia Community College",
        "location": "Sterling, VA",
        "degree": "",
        "majors": "Computer Science",
        "dates": "August 2013 - December 2014",
        "url": "https://www.nvcc.edu/"
    }, {
        "name": "Tuscarora High School",
        "location": "Leesburg, VA",
        "degree": "",
        "majors": "HSDG",
        "dates": "August 2010 - June 2013",
        "url": "https://www.nvcc.edu/"
    }, {
        "name": "Heritage High School",
        "location": "Leesburg, VA",
        "degree": "",
        "majors": "N/A",
        "dates": "August 2009 - June 2010",
        "url": "http://www.loudoun.k12.va.us/hhs"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "July 2016 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Full Stack Web Development",
        "school": "FreeCodeCamp",
        "dates": "July 2016 - Present",
        "url": "https://www.freecodecamp.com/"
    }]
};

var work = {
    "jobs": [{
        "employer": "Trapollo",
        "title": "Tech Support / Customer Service Representative",
        "location": "Sterling, VA",
        "dates": "March 2016 - Present",
        "description": "Strategically develop troubleshooting solutions for clients experiencing technical issues, system failures, and malfunctions."
    }, {
        "employer": "Chief-Technologies",
        "title": "Intern Junior Engineer / Contractor",
        "location": "Leesburg, VA",
        "dates": "June 2013 - Present",
        "description": "Travels to customer sites to assist in network installation and IP phones setup, using skills learned during training such as: basic networking knowledge and troubleshooting. Branch out to contractor jobs, currently working as a Tech Support / Customer Service Rep. at Trapollo."
    }, {
        "employer": "FedBiz IT Solutions",
        "title": "Inside Sales Representative",
        "location": "Leesburg, VA",
        "dates": "August 2015 - February 2016",
        "description": "Undergo sales/technical training to be able to quote new hardware or software to government agencies."
    }, {
        "employer": "Zenius Corporation",
        "title": "Junior Analyst",
        "location": "Leesburg, VA",
        "dates": "September 2015 - February 2016",
        "description": "Update company database with incoming candidates' resumes for Government Job Requests."
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio Site Project",
        "dates": "September 2016",
        "description": "From mockup design, to coded website.",
        "images": "images/portfolio-project.png",
        "URL": "http://jasierragarcia.github.io/portfolio-site-project",
        "repo": "https://github.com/jasierragarcia/portfolio-site-project"
    }, {
        "title": "Animal Trading Cards",
        "dates": "July 2016",
        "description": "Learning HTML and CSS.",
        "images": "images/card.png",
        "URL": "https://jasierragarcia.github.io/Animal-Trading-Cards/",
        "repo": "https://github.com/jasierragarcia/Animal-Trading-Cards"
    }]
};

// nav-bar
$("#menu-entry").append(HTMLnavAbout);
$("#menu-entry").append(HTMLnavWork);
$("#menu-entry").append(HTMLnavProjects);
$("#menu-entry").append(HTMLnavEdu);
$("#menu-entry").append(HTMLnavContact);

// bio 
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#main-content").append(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.intro);
$("#main-content").prepend(formattedName);

// contact info
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGit);

var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
$("#topContacts").append(formattedLinkedin);


// footer
$("#footer-entry").append(HTMLresumeFooter);

// work experience function 
work.display = function () {
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        $("#work-entry").append(formattedEmployer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $("#work-entry").append(formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $("#work-entry").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $("#work-entry").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $("#work-entry").append(formattedDescription);
    }
};
work.display();

// skills function 
$("#skills-header").prepend(HTMLskillsStart);

function displayOnlineCourse(o) {
    for (var i = 0; i < o.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", o[i]);
        $("#skills-entry").append(formattedSkills);
    }
}
displayOnlineCourse(bio.skills);

// projects function 
function displayProjects(p) {
    for(var key in p) {
        if (p.hasOwnProperty(key)) {
            var formattedPTitle = HTMLprojectTitle.replace("%data%", p[key].title);
            $("#project-entry").append(formattedPTitle);

            var formattedPDates = HTMLprojectDates.replace("%data%", p[key].dates);
            $("#project-entry").append(formattedPDates);

            var formattedPDescription = HTMLprojectDescription.replace("%data%", p[key].description);
            $("#project-entry").append(formattedPDescription);

            var formattedPImg = HTMLprojectImage.replace("%data%", p[key].images);
            $("#project-entry").append(formattedPImg);
        }
    }
}
displayProjects(projects.projects);

// education function
function displayEdu(e) {
    for (var i = 0; i < e.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", e[i].name);
        $("#education-entry").append(formattedSchoolName);

        var formattedMajor = HTMLschoolMajor.replace("%data%", e[i].majors);
        $("#education-entry").append(formattedMajor);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", e[i].dates);
        $("#education-entry").append(formattedSchoolDates);

    }
}
displayEdu(education.schools);

// online-courses function
$("#online-courses-header").append(HTMLonlineClasses);
education.onlineCourses.forEach(function (val) {
    var formattedOTitle = HTMLonlineTitle.replace("%data%", val.title);
    $("#onlineCourses-entry").append(formattedOTitle);

    var formattedOUrl = HTMLonlineURL.replace("%data%", val.url);
    $("#onlineCourses-entry").append(formattedOUrl);

    var formattedODates = HTMLonlineDates.replace("%data%", val.dates);
    $("#onlineCourses-entry").append(formattedODates);
});

// googleMaps
// $("#mapDiv").append(googleMap);


// hr resize effect
$(document).ready(function() {
    $("#horizontal-divider").animate({
        width: "100%"
    }, 1500, function() {
        // complete effect
    });
});