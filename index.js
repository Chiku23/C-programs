
fetch("./teams.json")
.then(res=>res.json())
.then(data=>{
    data.map(e=>{
        let teams = document.querySelector(".container")
        teams.innerHTML+=`
        <button id="btn">
        <div class="card">
        <img src="${e.img}" alt="CSK_LOGO">
        
                    <div class="detail">
                        <h3 id="teamname">${e.name}</h3>
                        <p id="cwon">Championship Won: ${e.chwon}</p>
                    </div>
        </div>
        </button>
        `
    })
})