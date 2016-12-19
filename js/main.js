var bio = {
    "name"  : "Juan Sierra",
    "role"  : "Front End Web Developer",
    "bioPic" : "images/me.jpg",
    "shortSummary" : "",
    "contacts" : {
        "mobile" : "571-271-5709",
        "email" : "jasierra.garcia@gmail.com",
        "github" : "https ://github.com/jasierragarcia",
        "linkedin" : "https ://www.linkedin.com/in/juan-a-sierra-g-368b84100",
        "twitter" : "https://twitter.com/jasierragarcia",
        "location" : "US, Virginia"
    },
    "skills" : [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "Responsive Design"
    ]
};

var work = {
    "jobs" : [
        {
            "employer" : "Trapollo",
            "title" : "Tech Support / Customer Service Representative",
            "location" : "Sterling, VA",
            "dates" : "March 2016 - December 2016",
            "description" : ""
        },
        {
            "employer" : "Chief Technologies",
            "title" : "Intern Junior Engineer / Contractor",
            "location" : "Leesburg, VA",
            "dates" : "June 2013 - December 2016",
            "description" : ""
        },
        {
            "employer" : "FedBiz IT Solutions",
            "title" : "Inside Sales Representative",
            "location" : "Leesburg, VA",
            "dates" : "August 2015 - February 2016",
            "description" : ""
        },
        {
            "employer" : "Zenius Corporation",
            "title" : "Junior Analyst",
            "location" : "Leesburg, VA",
            "dates" : "September 2015 - February 2016",
            "description" : ""
        }
    ]
};

var education = {
    "schools" : [
        {
            "name" : "Strayer University",
            "location" : "Washington, DC",
            "degree" : "Bachelor's Degree",
            "majors" : "Computer Science",
            "dates" : "January 2017 - TBD",
            "url" : ""
        },
        {
            "name" : "Tuscarora High School",
            "location" : "US, Virginia",
            "degree" : "HSDG",
            "majors" : "",
            "dates" : "August 2010 - June 2013",
            "url" : ""
        },
        {
            "name" : "Heritage High School",
            "location" : "US, Virginia",
            "degree" : "HSDG",
            "majors" : "",
            "dates" : "August 2009 - June 2010",
            "url" : ""
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Web Development Nanodegree",
            "school" : "Udacity",
            "dates": "July 2016 - Present",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title" : "Full Stack Web Development",
            "school" : "FreeCodeCamp",
            "dates" : "July 2016 - Present",
            "url" : "https://www.freecodecamp.com/"
        }
    ]
};

var projects = {
    "project" : [
        {
            "title" : "Econ Manyatta",
            "dates" : "November 2016",
            "description" : "",
            "url" : "https://github.com/jasierragarcia/ecomanyatta",
            "images" : ""
        },
        {
            "title" : "Econ Manyatta",
            "dates" : "November 2016",
            "description" : "",
            "url" : "https://github.com/jasierragarcia/ecomanyatta",
            "images" : ""
        },
        {
            "title" : "Econ Manyatta",
            "dates" : "November 2016",
            "description" : "",
            "url" : "https://github.com/jasierragarcia/ecomanyatta",
            "images" : ""
        }
    ]
}

// bio section



$("#social-entry").append()

function displayBio(b) {
    // bio
    var formattedPic = HTMLbioPic.replace("%data%", b.bioPic);
    var formattedName = HTMLheaderName.replace("%data%", b.name);
    var formattedRole = HTMLheaderRole.replace("%data%", b.role);

    $("#intro-head").prepend(formattedPic);
    $("#intro-entry").append(formattedName);
    $("#intro-entry").append(formattedRole);

    // social
    var formattedEmail = HTMLemail.replace("#", b.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("#", b.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("#", b.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("#", b.contacts.linkedin);

    $("#social-entry").append(formattedEmail);
    $("#social-entry").append(formattedTwitter);
    $("#social-entry").append(formattedGithub);
    $("#social-entry").append(formattedLinkedin);

}

displayBio(bio);