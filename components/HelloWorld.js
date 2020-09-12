Vue.component('hello-world', {
    template: `<header>
                     <h1>{{title}}</h1>
                     <h3>{{messaje}}</h3>
                     <h4>{{enlace}}</h4>
               </header>`,
    data() {
        return {

            title: 'Hola Mundo',
            messaje: 'Aprendiendo una nueva tecnologia',
            enlace: 'aun nose como ingresar un enlace lo intente con a pero nada me falta la ruta'
        };
    }
});