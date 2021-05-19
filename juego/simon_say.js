const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnEmpezar()
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
          }
      }

    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
          }
    }
    //Para generar la secuencia del juego usaremos un array con números aleatorios,
    //que representarán el color del botón que se iluminará cada vez. 
    //Usamos new Array() para crear el arreglo de manera dinámica, y llamamos al método fill para rellenar ese array con ceros y poder luego iterar sobre éste con map() 
    generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
      //Con new Array(array.lenght).fill(0) creo un nuevo array 
      //definiendo la cantidad de elementos que quiero que tenga 
      //y con que quiero llenarlo
        
    }

    siguienteNivel() {
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero) {
          switch (numero) {
            case 0:
              return 'celeste'
            case 1:
              return 'violeta'
            case 2:
              return 'naranja'
            case 3:
              return 'verde'
          }
    }

    transformarColorANumero(color) {
          switch (color) {
            case 'celeste':
              return 0
            case 'violeta':
              return 1
            case 'naranja':
              return 2
            case 'verde':
              return 3
          }
    }

    iluminarSecuencia() {
          for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
          }
    }
    //Puedo usar i o cualquier nombre en vez de color como subindice de 
    //this.colores siempre y cuando sea el mismo parametro de las funciones 
    //iluminarColor() y apagarColor()
    iluminarColor(color) {
          this.colores[color].classList.add('light')
          setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
          this.colores[color].classList.remove('light')
    }

    agregarEventosClick() {
          this.colores.celeste.addEventListener('click', this.elegirColor)
          this.colores.verde.addEventListener('click', this.elegirColor)
          this.colores.violeta.addEventListener('click', this.elegirColor)
          this.colores.naranja.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick() {
          this.colores.celeste.removeEventListener('click', this.elegirColor)
          this.colores.verde.removeEventListener('click', this.elegirColor)
          this.colores.violeta.removeEventListener('click', this.elegirColor)
          this.colores.naranja.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev) {
          const nombreColor = ev.target.dataset.color
          const numeroColor = this.transformarColorANumero(nombreColor)
          this.iluminarColor(nombreColor)
          if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++
            if (this.subnivel === this.nivel) {
              this.nivel++
              this.eliminarEventosClick()
              if (this.nivel === (ULTIMO_NIVEL + 1)) {
                this.ganoElJuego()
              } else {
                setTimeout(this.siguienteNivel, 1500)
              }
            }
          } else {
            this.perdioElJuego()
          }
    }

    ganoElJuego() {
          swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
            .then(this.inicializar)
    }

    perdioElJuego() {
          swal('Platzi', 'Lo lamentamos, perdiste :(', 'error')
            .then(() => {
              this.eliminarEventosClick()
              this.inicializar()
            })
        }

    }

function empezarJuego() {
    window.juego = new Juego()
};