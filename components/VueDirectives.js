Vue.component('vue-directives', {
    template: `
          <div>
                <h1 v-text="title"></h1>
                <p v-text='Texto'></p>
                <a v-bind:href="link.href" v-bind:title="link.title"   v-text='link.text'></a>
                <directive-html></directive-html>
                <directive-show></directive-show>
                <directive-if></directive-if>
                <directive-for></directive-for>
                <directive-On></directive-On>
                <directive-model></directive-model>
                <directive-slot></directive-slot>
                <directive-pre></directive-pre>
                <directive-once></directive-once>
            </div>
                
    `,
    data() {
        return {
            title: 'Directivas de Vue.js',
            Texto: 'Texto de prueba v-text',
            link: {
                text: 'Enlace a mi facebook',
                href: 'https://www.facebook.com',
                title: 'Facebook'
            }

        };
    },

    components: {
        'directive-html': DirectiveHtml,
        'directive-show': DirectiveShow,
        'directive-if': DirectiveIf,
        'directive-for': DirectiveFor,
        'directive-On': DirectiveOn,
        'directive-model': DirectiveModel,
        'directive-slot': DirectiveSlot,
        'directive-pre': DirectivaPre,
        'directive-once': DirectiveOnce,
    }



});