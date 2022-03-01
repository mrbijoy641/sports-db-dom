const allPlayers = () => {
    document.getElementById()
    // console.log('hello');
    const searchValue = document.getElementById('search-box').value;
    const url = ` https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))

}
const showPlayerDetails = (players) => {
    // console.log(players);
    for (const player of players) {
        // console.log(player);
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style = "width: 18rem;">
            <img class="card-img-top" src="${player.strThumb}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">Name : ${player.strPlayer} </h4>
                <h5 class="card-title">Country : ${player.strNationality}</h5>
               
                <button href="#" class="btn btn-danger">Delete</button>
                <button onclick="details('${player.idPlayer}')" href="#" class="btn btn-success">Details</button>
            </div>
        </div>
        `
        parent.appendChild(div)
    }

}

const details = (id) => {
    // console.log(info);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.players[0]))
}
const showDetails = (info) => {
    // console.log(info.strGender);
    if (info.strGender == "male") {
        document.getElementById('barca').style.display = "block"
        document.getElementById('argentina').style.display = "none"
    }
    else {
        document.getElementById('barca').style.display = "none"
        document.getElementById('argentina').style.display = "block"

    }
    const detailsParent = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
          
    <h2>Name : ${info.strPlayer} </h2>
    
    
    
    `

    detailsParent.appendChild(div)
}