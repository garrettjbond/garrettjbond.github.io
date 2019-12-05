function toggleSideBar(x){
    x.classList.toggle("change");
  }
  
  function openNav(){ 
    document.getElementById("asideWrapper").style.width = "500px";
    document.getElementById("asideWrapper").style.marginright = "10px";
    document.getElementById("arrowSVG").style.display = "none";
  }
  
  function closeNav(){  document.getElementById("asideWrapper").style.width = "0px";
  }