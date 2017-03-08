var bio = {
    "name" : "Juan Sierra",
    "role" : "Front End Developer",
    "contacts" : {
        "mobile" : "571-271-5709",
        "email" : "jasierra.garcia@gmail.com",
        "github" : "juan-sierra",
        "twitter" : "jasierragarcia",
        "location" : "Leesburg, VA"
    },
    "welcomeMessage" : "Thank you for visiting my website",
    "skills" : [
        "HTML",
        "CSS",
        "JavaScript",
        "Webpack",
        "Linux",
        "Bash / ZSH"
    ],
    "biopic" : "images/me.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "Strayer University",
            "location" : "Washington, D.C.",
            "degree" : "B.S.",
            "majors" : "Computer Science",
            "dates" : "January 2017 - Present",
            "url" : "http://www.strayer.edu/"
        },
        {
           "name" : "Tuscarora High School",
            "location" : "Leesburg, VA",
            "degree" : "GED",
            "majors" : "",
            "dates" : "August 2010 - June 2013",
            "url" : "https://www.lcps.org/Tuscarora" 
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "July 2016 - Present",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title" : "Full Stack Web Development",
            "school" : "Udacity",
            "dates" : "January 2017 - Present",
            "url" : "https://www.freecodecamp.com/"
        }
    ]
};

var work = {
    "jobs" : [
        {
            "employer" : "Milestone Technologies",
            "title" : "Data Center Technician",
            "location" : "Loundoun, VA",
            "dates" : "January 2017 - Present",
            "description" : "Repair Facebook servers to put them back into produciton and create scripts to automate mundane tasks"
        },
        {
            "employer" : "Chief-Technologies",
            "title" : "Intern Junior Systems Engineer",
            "location" : "Loundoun, VA",
            "dates" : "June 2013 - December 2016",
            "description" : "Learn programming principles, go to customer sites to perform network and IP phone installtions, assist engineers with technical tasks"
        },
        {
            "employer" : "Trapollo",
            "title" : "Contractor - Technical Support / Customer Service Respresentative",
            "location" : "Sterling, VA",
            "dates" : "February 2016 - December 2016",
            "description" : "Perform and explain medical device installations via phone to elderly people and troubleshoot any issues they might encounter"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Coming Soon",
            "dates" : "January 2017",
            "description" : "Project in progress",
            "images" : "images/art.jpg"
        },
        {
            "title" : "Coming Soon",
            "dates" : "January 2017",
            "description" : "Project in progress",
            "images" : "images/forest.jpg"
        },
        {
            "title" : "Coming Soon",
            "dates" : "January 2017",
            "description" : "Project in progress",
            "images" : "images/yellow.jpg"
        }
    ]
};

// sidebar component

const NAV_ARR = [
    "projects",
    "work",
    "education",
    "contact"
];

var navList = [
    HTMLnavProjects,
    HTMLnavWork,
    HTMLnavEdu,
    HTMLnavContact
];

function sideBar(nav, list) {
    for (var key in nav) {
        if (nav.hasOwnProperty(key)) {
            var formattedNav = list[key].replace("%data%", nav[key]);

            $(".nav-ul").append(formattedNav);
        }
    }
}
sideBar(NAV_ARR, navList);

// bio component

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $(".nav-head").append(formattedName);
    $(".nav-head").append(formattedRole);

    // social + contact
    var socialList = [
        HTMLgithub,
        HTMLtwitter,
        HTMLemail
    ];
    var socialLinks = [
        "https://github.com/juan-sierra",
        "https://twitter.com/jasierragarcia",
        "mailto:jasierra.garcia@gmail.com"
    ];
    
    for (var key in socialList) {
        if (socialList.hasOwnProperty(key)) {
            $(".social-ul").append(socialList[key].replace("#", socialLinks[key]));
        }
    }
};

bio.display();

// projects component

function displayProjects(project) {

    $(".p-title").append(HTMLprojectHead);
    
    for (var i = 0; i < project.length; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", project[i].title);
        var formattedDate = HTMLprojectDates.replace("%data%", project[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project[i].description);
        var formattedImage = HTMLprojectImage.replace("%data%", project[i].images);

        // $(".p-content").append(formattedTitle);
        $(".p-content").append(formattedImage);
    }

}

displayProjects(projects.projects);

// work exp component
var i = 0;
work.display = function () {
    $(".w-title").append(HTMLworkHead);
    work = work.jobs;
    for (var key in work) {
        if (work.hasOwnProperty(key)) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work[key].employer);
            var formattedDate = HTMLworkDates.replace("%data%", work[key].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work[key].description);

            $(".w-content").append(formattedEmployer);
            $(".w-content").append(formattedDate);
            $(".w-content").append(formattedDescription);
        }

    }
};

work.display();

// education component
education.display = function () {
    $(".e-title").append(HTMLeducationHead);

    var edu = education.schools;
    var courses = education.onlineCourses;
    
    for (var i = 0; i < education.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%", edu[i].name);
        var formattedDate = HTMLschoolDates.replace("%data%", edu[i].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", edu[i].majors);

        $(".e-content").append(formattedName);
        $(".e-content").append(formattedDate);
        $(".e-content").append(formattedMajor);
    }

    // online courses
    courses.forEach(function (c) {
        console.log(c);
    });
};

education.display();