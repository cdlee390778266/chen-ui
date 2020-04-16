import './assets/css/style.scss';
import Loading from './packages/loading/index.js';

const components = [
	
]

const install = function(Vue, options) {
	components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
	install,
	
};