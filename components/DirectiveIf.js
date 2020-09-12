let DirectiveIf = {

    template: `
          <div> 
               <h1 v-text="title"></h1>
               <p v-if="mostrar" v-html="massage"></p>
               <p v-if="user.permission">El usuario tiene persmiso para ver esto</p>
               <p v-if="!user.permission">El el usuario no tine permiso</p>

          </div>

     `,
    data() {
        return {
            title: 'Directiva v-if',
            massage: '<b>Hola desde directive v-if</b>',
            mostrar: true,
            user: {
                permission: false
            }

        };
    }

};