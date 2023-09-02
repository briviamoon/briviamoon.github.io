//when the user scrolls, this finction is executed
window.onscroll = function()
{myFunction()};

//getting the header bit
var header = document.getElementById("myHeader");

//getting the offset postn of header bar
var sticky = header.offsetTop;

//adds sticky class to Header when scroll pstn is reached & removes sticky state when you leave the scroll pstn
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky");
    }
}