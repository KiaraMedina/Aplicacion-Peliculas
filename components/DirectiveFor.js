let DirectiveFor = {

    template: `
     <div> 
          <h1 v-text="title"></h1>
          <p v-html="massage"></p>

          <h3>Lisa de un array</h3>
          <ul>
               <li v-for="(color,index) in list"
                :key="index" v-text="color" ></li>
          </ul>

          <h3>Lista de un objeto</h3>
          <ul>
               <li v-for="(item,key,index) in object_list"  :key="index" >
                {{ key }}: {{ item }}
               </li>
          </ul>

          <h1>Arreglo con objetos</h1>
          <ul>
                <li v-for="(item, index) in other_list" :key="index" >
                Nombre: {{item.name}}<br/>
                Apellido: {{item.last_name}}<br/>
                Nick : {{item.nick}} 

                </li>
          </ul>

     </div>

`,
    data() {
        return {
            title: 'Directiva v-for',
            massage: '<b>Hola desde directive v-for</b>',
            list: ['Red', 'Hellow', 'Green', 'Blue', 'Ping'],
            object_list: {
                name: 'Kiara',
                last_name: 'Lopez',
                nick: 'Lopvi',
            },
            other_list: [{
                    name: 'Alexandra',
                    last_name: 'Medina',
                    nick: 'play',
                },
                {
                    name: 'Josselyn',
                    last_name: 'Valencia',
                    nick: 'sing',
                },
                {
                    name: 'Esteban',
                    last_name: 'Primitivo',
                    nick: 'draw',
                }

            ]

        };
    }

};