/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724749751", {
    template: `
    <section id="cta-component" style="min-height: 470px"  class="bg-gradient-to-br from-purple-600 to-pink-500 flex-1 p-8" ><div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 lg:px-6" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style=""><div id="cta-title-container" class="flex" style=""><h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white" style="" data-mf-new="true">food app</h2></div> <div id="cta-subtitle-container" class="flex" style=""><p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 md:text-lg" style="">Build, customize, and launch your own delivery app with ease</p></div> <div id="cta-button-container" class="flex space-x-4" style=""><a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out">Not Now</a> <a href="#" class="flex-1 text-white border border-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out">Megha</a></div></div></div></section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
