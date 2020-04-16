import directive from './src/directive';

export default {
  install(Vue, options) {
    Vue.use(directive);
  }
};