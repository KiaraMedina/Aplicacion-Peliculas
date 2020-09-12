Vue.component('props-comp', {
    template: `
          <div>
               <h1>Peliculas Props</h1>
               <MovieComp v-for="(movie, key) in movies" :key="key" 
               :id="movie.id" 
               :title="movie.title" 
               :synopsis="movie.synopsis" :cover="movie.cover"
               :like="movie.like" 
               @toggleLike="onToggleLike"
               />
               <MovieFav  v-if="showLike"/>             
          </div>  
     `,
    data() {
        return {
            movies: [{
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false

                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false

                },
                {
                    id: 3,
                    title: 'Toy Story',
                    synopsis: 'Los juguetes de Andy, un niño de 6 años temen que haya llegado su hora y que un nuevo regalo de cumpleaños',
                    cover: 'https://cnet3.cbsistatic.com/img/vEEuv2P5xHpHGAudX3Xk1JkvSy0=/470x836/2019/03/19/0a388d8e-445c-4a97-ae7f-e17b2185acd8/toy-story-4-detail.jpg',
                    like: false

                }
            ],
            showLike: false

        };
    },
    components: {
        MovieComp,

        MovieFav,

    },
    methods: {
        onToggleLike(data) {
            let movieLike = this.movies.find(movie => movie.id == data.id);
            movieLike.like = data.like;

            if (!data.like) {

                return;

            } else {

                // alert(`${movieLike.title} agregada a favoritos`);
                this.showLike = true;

            }


        }
    }

});