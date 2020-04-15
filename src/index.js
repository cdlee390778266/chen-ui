import Loading from './lib/loading/index.js';

const components = [
	Loading
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
	Loading
};