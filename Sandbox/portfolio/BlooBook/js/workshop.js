function toggleSideBar(x){
    x.classList.toggle("change");
  }
  
  function openNav(){ 
    document.getElementById("asideWrapper").style.width = "500px";
    document.getElementById("asideWrapper").style.marginright = "10px";
    document.getElementById("arrowSVG").style.display = "none";
    document.getElementsClassByName("closebtn").style.display = "";
  }
  
  function closeNav(){  
    document.getElementById("asideWrapper").style.width = "0px";
    document.getElementById("arrowSVG").style.display = "";
    document.getElementsClassByName("closebtn").style.display = "none";
  }