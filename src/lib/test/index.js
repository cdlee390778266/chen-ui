import Test from './src/main.vue';

Test.install = function(Vue, options) {
	Vue.component(Test.name, Test);
}

export default Test;