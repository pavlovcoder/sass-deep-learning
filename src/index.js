var closeToom = true;

document.getElementsByClassName("sidenav-btn")[0].addEventListener("click", function() {
    if(closeToom) {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementsByClassName("main")[0].style.marginLeft = "250px";
        document.getElementsByClassName("sidenav-btn")[0].style.left = "265px";
        document.body.style.backgroundColor = "rgba(25, 15, 255, 0.4)";
        closeToom = false;
    } else {
        closeSidePanel();
    }
})

document.getElementsByClassName("closebtn")[0].addEventListener("click", function() {
    closeSidePanel();
})

function closeSidePanel() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft = "0";
    document.getElementsByClassName("sidenav-btn")[0].style.left = "15px";
    document.body.style.backgroundColor = "#ffffff";
    closeToom = true;
}