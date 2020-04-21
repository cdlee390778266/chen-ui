import Vue from 'vue';
import {setStyle, addClass} from '../../../lib/utils/dom.js';
import Loading from './loading';

const Mask = Vue.extend(Loading);

const LoadingDrective = {
}

LoadingDrective.install = function(Vue, options) {

  let getOptions = function(el, binding) {

    let visible = !!binding.value;
    let fullscreen = !!binding.modifiers.fullscreen;
    let hideMask = !!binding.modifiers.hideMask;
    let lock = !!binding.modifiers.lock;
    let loadingIconTemplate = el.getAttribute('loading-icon-template') || '';
    let text = el.getAttribute('loading-text') || '';
    let background = el.getAttribute('loading-background') || '';
    let customClass = el.getAttribute('loading-custom-class') || '';

    return {
      visible,
      fullscreen,
      hideMask,
      lock,
      loadingIconTemplate,
      text,
      background,
      customClass
    }
  }

  let setLoadingStyle = function(el, data) {
    if(data.fullscreen) { //全屏
      !el.targetDom && (el.targetDom = document.body);
      addClass(el.mask.$el, 'full');
      setStyle(el.mask.$el, 'position', 'fixed');
    }else {
      !el.targetDom && (el.targetDom = el);
      setStyle(el.targetDom, 'position', 'relative');
      setStyle(el.targetDom, 'minHeight', '200px');
    }

    if(data.lock && data.visible) { //锁屏
      setStyle(el.targetDom, 'overflow', 'hidden');
    }else {
      setStyle(el.targetDom, 'overflow', 'auto');
    }
  }

  let insertDom = function(el, data) {
    el.mask = new Mask({
      el: document.createElement('div'),
      data() {
        return data
      }
    });

    setLoadingStyle(el, data);
    el.targetDom.appendChild(el.mask.$el);
  }

  Vue.directive('loading', {
    bind(el, binding, vnode, oldVnode) {
      if(!el.isCreated) {
        el.isCreated = true;
        insertDom(el, getOptions(el, binding));
      }
    },
    update(el, binding, vnode, oldVnode) {
      Object.assign(el.mask.$data, getOptions(el, binding));
      setLoadingStyle(el, el.mask.$data);
    },
    unbind(el, binding, vnode, oldVnode) {
      console.log(125)
      el.targetDom.removeChild(el.mask.$el);
      el.mask && el.mask.$destroy();
    }
  })
}

export default LoadingDrective;