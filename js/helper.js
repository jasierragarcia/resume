var HTMLbioPic = '<img src="%data%" class="bioPic">';
var HTMLheaderName = '<div id="name">%data%</div>';
var HTMLheaderRole = '<div id="role">%data%</div>';

var HTMLheaderSummary = '<p id="summary">%data%</p>';

var HTMLnavHome = '<li class="nav-li"><a href="#" id="work-nav" class="nav-link">%data%</a></li>';
var HTMLnavProjects = '<li class="nav-li"><a href="#" id="projects-nav" class="nav-link">%data%</a></li>';
var HTMLnavEdu = '<li class="nav-li"><a href="#" id="edu-nav" class="nav-link">%data%</a></li>';
var HTMLnavContact = '<li class="nav-li"><a href="#" id="contact-nav" class="nav-link">%data%</a></li>';

var HTMLemail = '<li class="social-li"><a href="#" class="social-link" id="email"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>';
var HTMLtwitter = '<li class="social-li"><a href="#" class="social-link" id="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>';
var HTMLgithub = '<li class="social-li"><a href="#" class="social-link" id="github"><i class="fa fa-github" aria-hidden="true"></i></a></li>';
var HTMLlinkedin = '<li class="social-li"><a href="#" class="social-link" id="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>';
var HTMLblog = '<li class="social-li"><a href="#" class="social-link"><i class="fa fa-rss" aria-hidden="true"></i></a></li>';

var HTMLskills = '<li class="skills">%data%</li>';

var HTMLworkHead = "<h2>Work Experience</h2>";
var HTMLworkEmployer = '<a href="#" class="employer">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="work-description"><br>%data%</p>';
var HTMLworkIcon = '<span class="workIcon"><i class="fa fa-briefcase" aria-hidden="true"></i></span>';

var HTMLprojectHead = "<h2>Projects</h2>";
var HTMLprojectTitle = '<li id="project-list"><a href="#" class="project-title">%data%</a>';
var HTMLprojectDates = '<p class="date-text">%data%</p>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" id="project-image"></li>';

var HTMLeducationHead = "<h2>Education</h2>";
var HTMLschoolName = '<a href="#" class="school-name">%data%</a>';
var HTMLschoolDates = '<p class="date-text">%data%</p>';
var HTMLschoolLocation = '<p class="location-text col">%data%</p>';
var HTMLschoolMajor = '<p>Major: %data%</p>';
var HTMLeducationIcon = '<span class="eduIcon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>';


var HTMLonlineHead = '<h3>Online Courses</h3>';
var HTMLonlineSchool = '<a href="#" class="school-name">%data%</a>';
var HTMLonlineTitle = '<p>%data%</p>';
var HTMLonlineDates = '<p class="date-text">%data%</p>';
var HTMLonlineURL = '<a href="#" id="online-URL">%data%</a>';
var HTMLonlineCourseIcon = '<span class="onlineIcon"><i class="fa fa-laptop" aria-hidden="true"></i></span>';

var HTMLfooter = "<hr id='footer-hr'>";
var HTMLfooter = '<p>Coded by <a href="#" class="credit">Juan Sierra </a></p>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function() {};
    $name.html(iName);
  });
});

var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});

