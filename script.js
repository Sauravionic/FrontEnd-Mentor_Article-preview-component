var footer = document.getElementById("footer");
var social = document.getElementById("social");
var showLinks = document.getElementById("showLinks");

showLinks.addEventListener("click",
function()
    {
        if(social.classList.contains("close")) {
            social.classList.remove("close");
            footer.classList.add("close");
        }
        else {
            footer.classList.remove("close");
            social.classList.add("close");
        }
    } 

)
