let DirectiveModel = {

    template: `
           <div> 
               <h1 v-text="title"></h1>
               <p v-html="message"></p>
               <input type="text" v-model="inputText"></input>
          <h2> Tipo checkbox</h2>
          <label>
               <input type="checkbox" v-model="checked">
          Activado
          </label>



          <h2>Peliculas</h2>
          <label v-for="(movie, key) in movies" :key="key" > 
          
               <input :value="movie" type="checkbox" v-model="favoriteMovies">
                    {{movie}}
          </label>

         


          <div v-show="favoriteMovies.length > 0">
               <h2>Peliculas Favoritas</h2>
               <ul>
              
                    <li v-for="(peli, key) in favoriteMovies" :key="key" > {{peli}} </li>
                    
               </ul>
          </div>



          </div>
 
      `,
    data() {
        return {
            title: 'Directiva v-model',
            message: '<b>Hola desde directive v-model</b>',
            inputText: 'Data del input',
            checked: false,
            favoriteMovies: [],
            movies: ['buscando a Nemo', 'Titanic', 'toys Stori']
        };
    }

};