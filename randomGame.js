const games = {
    game: []
};
let randomGame;

async function getData() {
    const dataPath = './snes.json';
    const data = await fetch(dataPath);
    const dataJson = await data.json();

    games.game = dataJson.map(game => game['Game']).sort();
    games.game.join('a');
    randomGame = Math.floor(Math.random() * games.game.length);
}



async function renderize() {
    await getData();
    const result = document.querySelector('.result');
    const game = document.createElement('h2');
    game.innerHTML = games.game[randomGame];

    result.innerHTML = `
    <a href="https://www.google.com/search?q=${games.game[randomGame]}+rom" target='_blank'>
    <h2>${games.game[randomGame]}</h2>
    </a>
    <p>Click for search rom</p>
    `;
}