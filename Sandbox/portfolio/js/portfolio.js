
function openNav(){ document.getElementById("mySidenav").style.width = "250px";
}

function closeNav(){  document.getElementById("mySidenav").style.width = "0px";
}

function copyContents(){
    var copyMe = "gbond.dev@gmail.com";

    document.execCommand("copy");

    alert("Email copied");
}