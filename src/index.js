import Test from './lib/test/index.js';

const components = [
	Test
]

const install = function(Vue, options) {
	components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
	install,
	Test
};