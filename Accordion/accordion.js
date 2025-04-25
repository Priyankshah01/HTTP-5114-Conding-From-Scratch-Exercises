function accordion_toggle(section) {

    var selectedSection = document.getElementById(section);
    //selectedSection.style.display = "block";

    if (selectedSection.style.display === "none" || selectedSection.style.display === "") {

        var allsection = document.getElementsByClassName("accordion-section");

        for (var i = 0; i < allsection.length; i++) {

            allsection[i].style.display = "none";

        }

        selectedSection.style.display = "block";

    } else {

        selectedSection.style.display = "none";

    }

}