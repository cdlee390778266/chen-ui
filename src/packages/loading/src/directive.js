import Vue from 'vue';
import {setStyle, addClass} from '../../../lib/utils/dom.js';
import Loading from './loading';

const Mask = Vue.extend(Loading);

const LoadingDrective = {
}

LoadingDrective.install = function(Vue, options) {

  let insertDom = function(el, data) {
    
    el.mask = new Mask({
      el: document.createElement('div'),
      data() {
        return data
      }
    });

    if(data.fullscreen) {
      el.targetDom = document.body;
      addClass(el.mask.$el, 'full');
      setStyle(el.mask.$el, 'position', 'fixed');
    }else {
      el.targetDom = el;
      setStyle(el.targetDom, 'position', 'relative');
    }

    el.targetDom.appendChild(el.mask.$el);
  }

  Vue.directive('loading', {
    bind(el, binding, vnode, oldVnode) {
      if(!el.isCreated) {
        el.isCreated = true;

        let visible = !!binding.value;
        let text = el.getAttribute('loading-text') || '';
        let fullscreen = binding.modifiers.fullscreen || false;

        insertDom(el, {
          visible,
          fullscreen,
          text
        });
      }
    },
    update(el, binding, vnode, oldVnode) {
      el.mask.visible = !!binding.value;
    },
    unbind(el, binding, vnode, oldVnode) {
      el.targetDom.removeChild(el.mask.$el);
      el.mask && el.mask.$destroy();
    }
  })
}

export default LoadingDrective;