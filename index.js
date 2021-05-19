//realizamos las requests a la api de https://swapi.dev/

const API_URL = 'https://swapi.dev/api/' //es la URL de la api

const PEOPLE_URL = 'people/:id' //es un folder interno de la API, people/ 
// y en este caso ‘:id’, que después cambiaré con un .replace() 
//el id correspondiente

//const darthVaderUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`

const opts = { crossDomain: true } //objeto que le indica al 
//método $get() si el callback es local o remoto

/*
//callback (función) que será invocada en algún futuro por 
//el método $.get cuando termine de establecer la conexión remota, 
//el request a la URL.
const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

//$.get(darthVaderUrl, opts, onPeopleResponse) //$.get es el método de jQuery 
//que alojara el callback como parametro.

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
  }
  
  obtenerPersonaje(4)
  obtenerPersonaje(2)
  obtenerPersonaje(5)
*/
/*
//Del siguiente modo evitamos el asincronismo de la llegada de los callback
function obtenerPersonaje(id, myCallback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  
    $.get(url, opts, function (persona) {
      console.log(`Hola, yo soy ${persona.name}`)
  
      if (myCallback) {
        myCallback()
      }
    })
  }
  
  obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
      obtenerPersonaje(3, function () {
        obtenerPersonaje(4, function () {
          obtenerPersonaje(5, function () {
            obtenerPersonaje(6, function () {
              obtenerPersonaje(7)
            })
          })
        })
      })
    })
  })
*/
/*
//Ahora convierto el segundo parametro ingresado a la función 
//obtenerPersonaje() en mi función callback original,la reuqrida por $get
function obtenerPersonaje(id, myCallback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  
    $
      .get(url, opts, myCallback)
      .fail(() => {
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
      })
  } 
  
  obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)
  
    obtenerPersonaje(2, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)
  
      obtenerPersonaje(3, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)
  
        obtenerPersonaje(4, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`)
  
          obtenerPersonaje(5, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)
  
            obtenerPersonaje(6, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`)
  
              obtenerPersonaje(7, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)
              })
            })
          })
        })
      })
    })
  })
*/
/*
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
        .get(url, opts, function (data) {
          resolve(data)
        })
        .fail(() => reject(id))
    })
}
  
function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}
  
  obtenerPersonaje(1)
    .then(function (personaje) {
      console.log(`Hola, soy ${personaje.name}`)
    })
    .catch(onError)
*/
/*
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
        .get(url, opts, function (data) {
          resolve(data)
        })
        .fail(() => reject(id))
    })
  }
  
function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }
  
obtenerPersonaje(1)
    .then(personaje1 => {
      console.log(`El personaje 1 es ${personaje1.name}`)
      return obtenerPersonaje(2)
    })
    .then(personaje2 => {
      console.log(`El personaje 2 es ${personaje2.name}`)
      return obtenerPersonaje(3)
    })
    .then(personaje3 => {
      console.log(`El personaje 3 es ${personaje3.name}`)
      return obtenerPersonaje(4)
    })
    .then(personaje4 => {
      console.log(`El personaje 4 es ${personaje4.name}`)
      return obtenerPersonaje(5)
    })
    .then(personaje5 => {
      console.log(`El personaje 5 es ${personaje5.name}`)
      return obtenerPersonaje(6)
    })
    .then(personaje6 => {
      console.log(`El personaje 6 es ${personaje6.name}`)
      return obtenerPersonaje(7)
    })
    .then(personaje7 => {
      console.log(`El personaje 7 es ${personaje7.name}`)
    })
    .catch(onError)
*/

/*
function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
        .get(url, opts, function (data) {
          resolve(data)
        })
        .fail(() => reject(id))
    })
  }
  
  function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }
  
  var ids = [1, 2, 3, 4, 5, 6, 7]
  // var promesas = ids.map(function (id) {
  //   return obtenerPersonaje(id)
  // })
  var promesas = ids.map(id => obtenerPersonaje(id))
  Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
*/

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $
        .get(url, opts, function (data) {
          resolve(data)
        })
        .fail(() => reject(id))
    })
  }
  
  function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
  }
  
  async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
  

    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
      var personajes = await Promise.all(promesas)
      console.log(personajes)
    } catch (id) {
      onError(id)
    }
  }
  
  obtenerPersonajes()
  