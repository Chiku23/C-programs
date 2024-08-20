var teamname = ["CSK", "DC", "GT", "KKR", "LSG", "MI", "PBKS", "RCB", "RR", "SRH"];
var teamdesc = [
    "Championships won : 4",
    "Championships won : 0",
    "Championships won : 0",
    "Championships won : 2",
    "Championships won : 0",
    "Championships won : 5",
    "Championships won : 0",
    "Championships won : 0",
    "Championships won : 1",
    "Championships won : 1"];

var autocard = document.querySelector(".container");

for (var i = 0; i < teamname.length; i++) {
    var fetch = document.querySelector(".container").innerHTML;
    autocard.innerHTML =
        `<div class="card" id="teamlogo${i}">
            <div class="detail">
                <h3>${teamname[i]}</h3>
                <p>${teamdesc[i]}</p>
            </div>
        </div>`+ fetch;
    var tmlogo = document.getElementById(`teamlogo${i}`);
    tmlogo.style.backgroundImage = `url(../photos/logos/${teamname[i]}.png)`;

    var tl=document.getElementById(`teamlogo${i}`);
    tl.addEventListener("click", myFunction);

function myFunction() {
  
}


    
}