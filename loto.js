// const numero5 = document.getElementById("numero");
// const etoile = document.getElementById("etoile");

const numeroo5 = () => {
  for (let i = 1; i < 6; i++) {
    let numero5 = Math.floor(Math.random() * 50) + 1;
    document.body.innerHTML += `<h1 id="numero">${numero5}</h1>`;
  }
};
numeroo5();

const etoile2 = () => {
  for (let i = 1; i < 3; i++) {
    let etoile = Math.floor(Math.random() * 9) + 1;
    document.body.innerHTML += `<h1 id="etoile">${etoile}</h1>`;
  }
};

etoile2();
