

var bio = {
  "name" : "Hend Ahmed",
  "role" : "wep developer",
  "contact" : {
    "mobile" : "000-000-000",
    "email" : "hnoode@hotmail.com",
    "twitter" : "@riiikiii2",
    "github":"hnoode",
    "location" : "Riyadh"
  },
  "welcomeMessage" : "Welcome to my resume :)",
  "bioPic" : "images/12.png",
  "skills":["HTML","JavaScript","CSS","JQuery","PHP","MySQL"]

};



var education = {
  "schools": [
    {
      "name" : "Princess Nora university",
      "location" : "Riyadh",
      "major" : ["IS"],
      "degree" : "bachelor's",
      "dates" : 2018,
      "url" : "http://www.pnu.edu.sa/en/Pages/default.aspx"
    }
  ],
  "onlineCourses" : [
    {
      "title": "frontend web developer",
      "school":"Udacity",
      "dates" :2017,
      "url": "http://www.udacity.com"
    }
  ]
};

var work = {
  "job":[
    {
      "employer" : "Princess Nora university",
      "title" : "student",
      "date" : "March 2017",
      "description" : "I'm still a student at PNU",
      "location" : "Riyadh"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Vabiano resturant",
      "date" : 2016,
      "description" : "It is a resturant website",
      "images" : ["images/1.jpg"]

    },{

        "title" : "udacity portfolio",
        "date" : 2017,
        "description" : "In this project I build a great looking portfolio where I can show off images, descriptions and links to all of my projects.",
        "images" : ["images/2.jpg"]
    }
  ]
};

var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
var formattedName= HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedBioPic= HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedBioPic);
var formattedmsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedmsg);

var formattedContact = [];
formattedContact.push(HTMLemail.replace("%data%", bio.contact.email));
formattedContact.push(HTMLtwitter.replace("%data%", bio.contact.twitter));
formattedContact.push(HTMLlocation.replace("%data%", bio.contact.location));
formattedContact.push(HTMLmobile.replace("%data%", bio.contact.mobile));
formattedContact.push(HTMLgithub.replace("%data%", bio.contact.github));


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(skills in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skills]));
	}
}

for(i in formattedContact) {
	$("#topContacts").append(formattedContact[i]);
	$("#footerContacts").append(formattedContact[i]);
}

work.display = function() {

		$("#workExperience").append(HTMLworkStart);

		for(job in work.job) {

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.job[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.job[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates =HTMLworkDates.replace("%data%", work.job[job].date);
      $(".work-entry:last").append(formattedDates);


      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.job[job].location);
      $(".work-entry:last").append(formattedWorkLocation);


      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.job[job].description);
$(".work-entry:last").append(formattedWorkDescription);


		}
	}


projects.display = function() {

		for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}}}



education.display = function() {
		for(edu in education.schools) {
			$("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url);
      $(".education-entry:last").append(formattedName);


      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
      $(".education-entry:last").append(formattedMajor);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
      $(".education-entry:last").append(formattedlocation);}


      if(education.onlineCourses.length > 0) {
    			$("#education").append(HTMLonlineClasses);
    			for(on in education.onlineCourses) {
    				$("#education").append(HTMLschoolStart);
    				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[on].title);
    				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[on].school);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[on].dates);
            $(".education-entry:last").append(formattedOnlineDates);

    				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[on].url).replace("#", education.onlineCourses[edu].url);
    				$(".education-entry:last").append(formattedOnlineURL);
    			}
    		}

    	}

    work.display();
    projects.display();
   education.display();
   $("#mapDiv").append(googleMap);
