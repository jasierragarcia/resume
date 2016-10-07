var bio = {
  "name" : "Juan Sierra",
  "role" : "Front-End Web Developer",
  "contacts" : {
  "mobile" : "571-271-5709",
  "email" : "malito:jasierra.garcia@gmail.com",
  "github" : "https://github.com/jasierragarcia",
  "linkedin" : "https://www.linkedin.com/in/juan-a-sierra-g-368b84100",
  "twitter" : "@jasierra.garcia",
  "location" : "San Pedro Sula, Honduras"
  },
  "welcomeMessage" : "Thank you for visiting!",
  "skills" : ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Git", "Gulp"],
  "bioPic" : "#"
};

var education = {
  "schools" : [
    {
      "name" : "Northern Virginia Community College",
      "location" : "Sterling, VA",
      "degree" : "",
      "majors" : "Computer Science",
      "dates" : "August 2013 - December 2014",
      "url" : "https://www.nvcc.edu/"
    },
    {
      "name" : "Tuscarora High School",
      "location" : "Leesburg, VA",
      "degree" : "",
      "majors" : "HSDG",
      "dates" : "August 2010 - June 2013",
      "url" : "https://www.nvcc.edu/"
    },
    {
      "name" : "Heritage High School",
      "location" : "Leesburg, VA",
      "degree" : "",
      "majors" : "N/A",
      "dates" : "August 2009 - June 2010",
      "url" : "http://www.loudoun.k12.va.us/hhs"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Development Nanodegree",
      "school" : "Udacity",
      "dates" : "July 2016 - Present",
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

var work = {
  "jobs" : [
    {
      "employer" : "Trapollo",
      "title" : "Tech Support / Customer Service Representative",
      "location" : "Sterling, VA",
      "dates" : "March 2016 - Present",
      "description" : "Strategically develop troubleshooting solutions for clients experiencing technical issues, system failures, and malfunctions."
    },
    {
      "employer" : "Chief-Technologies",
      "title" : "Intern Junior Engineer / Contractor",
      "location" : "Leesburg, VA",
      "dates" : "June 2013 - Present",
      "description" : "Collaborates with technology and engineering professionals to contribute to creation, development, and implementation of complex hardware and software systems. Branch out to contractor jobs, currently working as a Tech Support / Customer Service Rep. at Trapollo."
    },
    {
      "employer" : "FedBiz IT Solutions",
      "title" : "Inside Sales Representative",
      "location" : "Leesburg, VA",
      "dates" : "August 2015 - February 2016",
      "description" : "Undergo sales/technical training to be able to quote new hardware or software to government agencies."
    },
    {
      "employer" : "Zenius Corporation",
      "title" : "Junior Analyst",
      "location" : "Leesburg, VA",
      "dates" : "September 2015 - February 2016",
      "description" : "Update company data base with candidates' resumes for Government Job Requests."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Portfolio Site Project",
      "dates" : "September 2016",
      "description" : "From mockup design, to coded website.",
      "images" : "images/portfolio-project.png",
      "URL" : "http://jasierragarcia.github.io/portfolio-site-project",
      "repo" : "https://github.com/jasierragarcia/portfolio-site-project"
    },
    {
      "title" : "Animal Trading Cards",
      "dates" : "July 2016",
      "description" : "Learning HTML and CSS.",
      "images" : "images/card.png",
      "URL" : "https://jasierragarcia.github.io/Animal-Trading-Cards/",
      "repo" : "https://github.com/jasierragarcia/Animal-Trading-Cards"
    }
  ]
};

// bio
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// contact info / social
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedLinkedin);

$("#header").append(HTMLscrollButtonDown);

//$("#header").append(formattedMessage);
//$("#header").append(formattedPic);

/*
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  // skills
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }

  // contactInfo
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGit);
  $("#topContacts").append(formattedTwitter);
}
*/
//

// work
work.display = function () {
  $("#workExperience").append(HTMLworkStart);
  $("#workExperience").append(HTMLscrollButtonDown);
  for (key in work.jobs) {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[key].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);


    $(".work-entry").append(formattedEmployer + formattedTitle);
    $(".work-entry").append(formattedDates + formattedLocation);
    $(".work-entry").append(formattedDescription);

  }
};
work.display();

// projects
function displayProjects(p) {
  $("#projects").append(HTMLprojectStart);
  $("#projects").append(HTMLscrollButtonDown);
  for(key in p) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", p[key].title);
    var formattedDate = HTMLprojectDates.replace("%data%", p[key].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", p[key].description);
    var formattedImage = HTMLprojectImage.replace("%data%", p[key].images);

    $(".project-entry").append(formattedTitle);
    $(".project-entry").append(formattedDate);
    $(".project-entry").append(formattedDescription);
    $(".project-entry").append(formattedImage);
  }
}

displayProjects(projects.projects);

// education
education.display = function () {
  $("#education").append(HTMLschoolStart);
  for (var i = 0; i < education.schools.length; i++) {
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

    $(".education-entry").append(formattedSchool);
    $(".education-entry").append(formattedDate + formattedLocation);
    $(".education-entry").append(formattedMajor);
  }

  // onlineCourses
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var key in education.onlineCourses) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[key].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[key].school);
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[key].dates);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[key].url).replace("#", education.onlineCourses[key].url);

      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(formattedDate);
      $(".education-entry:last").append(formattedUrl);
    }
  }
};

education.display();

// footer
$("#footer").append(HTMLresumeFooter);

// googleMaps
$("#mapDiv").append(googleMap);


// hr resize effect
$(document).ready( function () {

  $("hr").animate({
    width: "1300"
  }, 1500, function () {
    // complete effect
  });

});