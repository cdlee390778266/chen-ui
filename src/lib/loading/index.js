import Loading from './src/main.vue';

Loading.install = function(Vue, options) {
	Vue.component(Loading.name, Loading);
}

export default Loading;