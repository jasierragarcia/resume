var HTMLheaderIntro = '<h1 id="intro">%data%</h1>';
var HTMLheaderRole = '<p id="role">%data%</p><hr id="hr-div">';

var HTMLnavHome = '<li class="nav-list"><a href="#" id="home-nav" class="nav-menu">Home</a></li>';
var HTMLnavWork = '<li class="nav-list"><a href="#" id="work-nav" class="nav-menu">Work</a></li>';
var HTMLnavProjects = '<li class="nav-list"><a href="#" id="projects-nav" class="nav-menu">Projects</a></li>';
var HTMLnavEdu = '<li class="nav-list"><a href="#" id="edu-nav" class="nav-menu">Education</a></li>';
var HTMLnavContact = '<li class="nav-list"><a href="#" id="contact-nav" class="nav-menu">Contact Me</a></li>';

var HTMLemail = '<li class="social-icon-li"><a href="#" class="social-link"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>';
var HTMLtwitter = '<li class="social-icon-li"><a href="#" class="social-link"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>';
var HTMLgithub = '<li class="social-icon-li"><a href="#" class="social-link"><i class="fa fa-github" aria-hidden="true"></i></a></li>';
var HTMLlinkedin = '<li class="social-icon-li"><a href="#" class="social-link"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>';
var HTMLblog = '<li class="social-icon-li"><a href="#" class="social-link"><i class="fa fa-rss" aria-hidden="true"></i></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';

var HTMLskills = '<li class="skills">%data%</li>';

var HTMLworkEmployer = '<a href="#" class="employer">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLworkIcon = '<span class="workIcon"><i class="fa fa-briefcase" aria-hidden="true"></i></span>';

var HTMLprojectTitle = '<p href="#" class="project-title">%data%</p>';
var HTMLprojectDates = '<p class="date-text">%data%</p>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolName = '<a href="#" class="school-name">%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text col">%data%</div>';
var HTMLschoolMajor = '<p>Major: %data%</p>';
var HTMLeducationIcon = '<span class="eduIcon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<p>%data%</p>';
var HTMLonlineSchool = '<a href="#" class="online-title">%data%</a>';
var HTMLonlineDates = '<p class="date-text">%data%</p>';
var HTMLonlineURL = '<a href="#">%data%</a>';
var HTMLonlineCourseIcon = '<span class="onlineIcon"><i class="fa fa-laptop" aria-hidden="true"></i></span>';

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



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job) {
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place) {
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});