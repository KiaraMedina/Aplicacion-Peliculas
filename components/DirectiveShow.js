let DirectiveShow = {
    template: `
               <div>
                     <h1 v-text="title"></h1>
                     <p v-show="mostrar" v-html="message"></p>
                     <p v-show="user.permision">El Usuario tiene permiso para er este espacio</p>
                     <p v-show="!user.permision">El Usuario no tiene permiso para er este espacio</p>
               </div>
     `,
    data() {
        return {
            title: 'Directiva v-Show',
            message: '<b>Hola desde directive v-show</b>',
            mostrar: true,
            user: {
                permision: false
            }

        };
    }


};