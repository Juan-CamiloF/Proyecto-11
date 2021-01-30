//Url de la API
const url = "https://rickandmortyapi.com/api/character";

//Funcion para manipular la api
const api = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((responseInJson) => {
      personajeEnLaPagina(responseInJson),paginacion(responseInJson.info);
    })
    .catch((err) => console.log("Hubo un error: ", err));
};
api(url);
//Poner los personaje en la pagina
const personajeEnLaPagina = (personaje) => {
  let div = "";
  personaje.results.forEach((i) => {
    div += `<div class="card my-3 mx-3" style="width: 18rem; ">`;
    div += `<img src="${i.image}" class="card-img-top" alt="...">`;
    div += `<div class="card-body">`;
    div += `<h5 class="card-title">Name: ${i.name}</h5>`;
    div += `<p class="card-text">Specie: ${i.species}</p> `;
    div += `<p class="card-text">Status: ${i.status}</p> `;
    div += `<p class="card-text">Gender: ${i.gender}</p> `;
    div += `</div>`;
    div += `</div>`;
  });
  document.getElementById("datosPersonajes").innerHTML = div;
};

//Paginacion
const paginacion = (info) =>{
    let next = "";
    let prev = "";
    info.prev == null ? prev='disabled' : prev= "";
    info.next == null ? next='disabled'  : next= "";

    let html = "";

    html+=`<li class="page-item ${prev}"  ><a class="page-link" onclick="api('${info.prev}')" >Anterior</a></li>`
    html+=`<li class="page-item" ${next}><a class="page-link" onclick="api('${info.next}')" >Siguiente</a></li>`
   
    document.getElementById('paginacion').innerHTML=html;
}
