var bio = {
    "name": "Juan Sierra",
    "intro": "Welcome! I'm Juan Sierra, a self-taught",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "571-271-5709",
        "email": "jasierra.garcia@gmail.com",
        "github": "https://github.com/jasierragarcia",
        "linkedin": "https://www.linkedin.com/in/juan-a-sierra-g-368b84100",
        "twitter": "@jasierra.garcia",
        "location": "San Pedro Sula, Honduras"
    },
    "skills": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Git", "Gulp", "Terminal (Linux/MacOS)", "Responsive Design"],
    "navLinks": ["#main-page", "#workExperience", "#education", "#contact-section"],
    "navMenu": [HTMLnavHome, HTMLnavWork, HTMLnavProjects, HTMLnavEdu, HTMLnavContact],
    "shortSummary": "I have 1+ year(s) of experince with HTML5, CSS3, JavaScript, and jQuery. Through my basic foundation of Front-End Web Development, I was able to use front-end skills at a hackathon to help a non-profit organizaiton - Builders of Hope, they were in need of a software solution that would ease their process that can help local communities in developing countries buy and sell affordable housing, by increasing the availability of high-quality, safe, affordable workforce housing options.",
    "bioPic": "images/me.jpg"
};

var education = {
    "schools": [{
        "name": "Northern Virginia Community College",
        "location": "Sterling, VA",
        "degree": "",
        "majors": "General Studies",
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

var project = {
    "projects": [{
        "title": "Portfolio Site Project",
        "dates": "September 2016",
        "description": "From mockup design, to coded website.",
        "images": "images/mockup.svg",
        "URL": "http://jasierragarcia.github.io/portfolio-site-project",
        "repo": "https://github.com/jasierragarcia/portfolio-site-project"
    }, {
        "title": "Bitshop",
        "dates": "July 2016",
        "description": "Working with a friend on a open-source shopping site boiler-plate",
        "images": "images/cart.svg",
        "URL": "https://jasierragarcia.github.io/Animal-Trading-Cards/",
        "repo": "https://github.com/jasierragarcia/Animal-Trading-Cards"
    }, {
        "title": "Mockup-Article",
        "dates": "July 2016",
        "description": "I was given a PDF of an aritcle and I had to turn into a real website",
        "images": "images/article.svg",
        "URL": "https://jasierragarcia.github.io/mockup-to-article/",
        "repo": "https://github.com/jasierragarcia/mockup-to-article"
	}]
};

// nav-bar

function insertLinks(navLi, navMe) {
    for (var i = 0; i <= navLi.length; i++) {
        $("#nav-entry").append(navMe[i].replace("#", navLi[i]));
    }
}

insertLinks(bio.navLinks, bio.navMenu);

// main page

function displayBio(b) {

    // intro
    var formattedIntro = HTMLheaderIntro.replace("%data%", b.intro);
    var formattedRole = HTMLheaderRole.replace("%data%", b.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", b.bioPic);
    var formattedSummary = HTMLheaderSummary.replace("%data%", b.shortSummary);

    $("#header-entry").append(formattedIntro);
    $("#header-entry").append(formattedRole);
    $("#summary-entry").append(formattedSummary);

    // contact info
    var formattedEmail = HTMLemail.replace("%data%", b.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGit = HTMLgithub.replace("%data%", b.contacts.github);
    $("#footerContacts").append(formattedGit);

    var formattedLinkedin = HTMLlinkedin.replace("%data%", b.contacts.linkedin);
    $("#footerContacts").append(formattedLinkedin);
}

displayBio(bio);

work.display = function() {
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
$("#work-icon-entry").append(HTMLworkIcon);

// projects
function displayProjects(p) {
    for (var i = 0; i < p.length; i++) {

        var formattedProImage = HTMLprojectImage.replace("%data%", p[i].images);
        $("#project-entry").append(formattedProImage);

        var formattedProTitle = HTMLprojectTitle.replace("%data%", p[i].title);
        $("#project-entry").append(formattedProTitle);

        var formattedProDate = HTMLprojectDates.replace("%data%", p[i].dates);
        $("#project-entry").append(formattedProDate);

        var formattedProDescription = HTMLprojectDescription.replace("%data%", p[i].description);
        $("#project-entry").append(formattedProDescription);
    }
}
displayProjects(project.projects);

// education
education.display = function() {
    for (var key in education.schools) {
        if (education.schools.hasOwnProperty([key])) {
            var formattedScName = HTMLschoolName.replace("%data%", education.schools[key].name);
            $("#education-entry").append(formattedScName);

            var formattedScDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
            $("#education-entry").append(formattedScDates);

            var formattedScMajor = HTMLschoolMajor.replace("%data%", education.schools[key].majors);
            $("#education-entry").append(formattedScMajor);
        }
    }
};

education.display();

$("#eduIcon").append(HTMLeducationIcon);
$("#onlineIcon").prepend(HTMLonlineCourseIcon);

// online courses
function displayOnlineCourse(o) {
    $("#onlineCourse-entry").append(HTMLonlineClasses);
    for (var i = 0; i < o.length; i++) {
        var formattedOnTitle = HTMLonlineTitle.replace("%data%", o[i].title);
        $("#onlineCourse-entry").append(formattedOnTitle);

        var formattedOnSchool = HTMLonlineSchool.replace("%data%", o[i].school);
        $("#onlineCourse-entry").append(formattedOnSchool);

        var formattedOnDates = HTMLonlineDates.replace("%data%", o[i].dates);
        $("#onlineCourse-entry").append(formattedOnDates);

        var formattedOnUrl = HTMLonlineURL.replace("%data%", o[i].url);
        $("#onlineCourse-entry").append(formattedOnUrl);
    }
}

displayOnlineCourse(education.onlineCourses);

// footer
$("#footer-entry").append(HTMLfooter);


// googleMaps
$("#googleMap").append(googleMap);


// hr resize effect
/*
$(document).ready(function() {
	$("#hr-div").animate({
		width: "100%"
	}, 1500, function() {
		// complete effect
	});
});
*/