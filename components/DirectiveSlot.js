let DirectiveSlot = {

    template: `
     <div> 
         <h2 v-text="title"></h2>
         <button-comp>
               <template #action>
                    Cerrar
               </template>
               <template #element>
                    modal
               </template>
         </button-comp>

     </div>

`,
    data() {
        return {
            title: 'Directiva v-slot',


        };
    },
    components: {

        buttonComp,
    }

};