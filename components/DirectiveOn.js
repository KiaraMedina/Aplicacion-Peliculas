let DirectiveOn = {
    template: `
          <div @click="decirHola">
               <h1 v-text="title"></h1>
               <h3 v-html="message"></h3>
              <p v-text="pelicula"></p>
              <button @click.stop="comprarEntrada">Comprar Entradas </button> Disponible <span v-text='entradas'></span>
          </div>
     `,
    data() {
        return {
            title: 'Directiva v-On',
            message: '<b>Hola desde directive v-on</b>',
            welcome_text: 'Bienvenido desde la Data',
            pelicula: 'Dora la exploradora',
            entradas: 5

        };
    },

    methods: {

        decirHola: function() {
            alert(this.welcome_text);
        },

        comprarEntrada() {
            if (this.entradas > 0) {
                this.entradas--;
                return alert(`Entrada para ${this.pelicula} comprada`);
            }
            return alert(`Ya no hay entradas`);
        }

    }



};