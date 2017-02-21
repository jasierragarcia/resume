var bio = {
    "name"  : "Juan Sierra",
    "role"  : "Front End Web Developer",
    "bioPic" : "images/me.jpg",
    "bioSummary" : "Avid learner, focusing on minal UIs and noteworthy UXs",
    "funFacts" : [
        "Coffee drinker",
        "Gamer",
        "Nerd"
    ],
    "contacts" : {
        "mobile" : "571-271-5709",
        "email" : "jasierra.garcia@gmail.com",
        "github" : "https ://github.com/juan-sierra",
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
            "title" : "Project 1",
            "dates" : "November 2016",
            "description" : "comming soon",
            "url" : "https://github.com/jasierragarcia/ecomanyatta",
            "images" : "images/fishing.jpg"
        },
        {
            "title" : "Project 2",
            "dates" : "December 2016",
            "description" : "comming soon",
            "url" : "https://github.com/jasierragarcia/ecomanyatta",
            "images" : "images/yellow.jpg"
        },
        {
            "title" : "Project 3",
            "dates" : "January 2017",
            "description" : "comming soon",
            "url" : "https://github.com/jasierragarcia/ecomanyatta",
            "images" : "images/ocean.jpg"
        }
    ]
}

// display content for sidebar
const NAV_ITEMS = [
    "Projects",
    "Work",
    "Education",
    "Contact"
];
var navList = [
    HTMLnavProjects,
    HTMLnavWork,
    HTMLnavEdu,
    HTMLnavContact
];

var socialList = [
    HTMLemail,
    HTMLgithub,
    HTMLlinkedin
];

// sider bar component
function sideBar(items, navLi, socialLi) {
    var i = 0;
    if(!$(navLi).hasClass("nav-li")) {
        for (i = i; i < items.length; i++) {
            var formattedSide = navLi[i].replace("%data%", items[i]);
            console.log(formattedSide);
            $(".nav-ul").append(formattedSide);
        }
    }
    // social section
    for (var i = 0; i < socialLi.length; i++) {
        $(".social-ul").append(socialLi[i]);
    }
}
sideBar(NAV_ITEMS, navList, socialList);

// bio component
function bioCo(bio) {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#name-role").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#name-role").append(formattedRole);
}
bioCo(bio);

// projects component
function projectCo(project) {
    $("#project").append(HTMLprojectHead);
    
    for (var i = 0; i < project.length; i++) {
        var formattedPTitle = HTMLprojectTitle.replace("%data%", project[i].title);
        $("#project").append(formattedPTitle);
        
        var formattedPDate = HTMLprojectDates.replace("%data%", project[i].dates);
        $("#project").append(formattedPDate);

        var formattedPDescription = HTMLprojectDescription.replace("%data%", project[i].description);
        $("#project").append(formattedPDescription);
    }
}
projectCo(projects.project);

// work component
function workCo(exp) {
    $(".work").prepend(HTMLworkHead);
    for (var i = 0; i < exp.length; i++) {
        var formattedEmp = HTMLworkEmployer.replace("%data%", exp[i].employer);
        $("#work-data").append(formattedEmp);

        var formmattedDate = HTMLworkDates.replace("%data%", exp[i].dates);
        $("#work-data").append(formmattedDate);
    }
}
workCo(work.jobs);