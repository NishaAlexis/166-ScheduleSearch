function proceed() {
    var yrlevel = document.getElementById("year").value;
    var semester = document.getElementById("sem").value;
    document.getElementById("studentInfo").innerHTML = yrlevel + " Year    " + semester + " Semester";

    document.getElementById("studentForms").style.display = "none";
    document.getElementById("trigger").style.display = "none";

    document.getElementById("hiddenCourse").style.display = "block";
    document.getElementById("hiddenCourseOffers").style.display = "block";

  }


function findSched() {
  document.getElementById("hiddenCourse").style.display = "none";
  document.getElementById("hiddenCourseOffers").style.display = "none";
  
  document.getElementById("hiddenSchedules").style.display = "block";
}

