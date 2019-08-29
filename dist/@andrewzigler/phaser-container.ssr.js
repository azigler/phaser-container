'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var Vue=_interopDefault(require('vue'));//
//
//
//

var script = {
  name: 'PhaserContainer',

  props: {
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    },
    pageContainer: {
      type: String,
      default: 'container'
    },
    phaserContainer: {
      type: String,
      default: 'phaser-container'
    },
    fixedSize: {
      type: Boolean,
      default: false
    },
    game: {
      default: function default$1() {
        return {}
      }
    }
  },

  destroyed: function destroyed() {
    this.gameObject.destroy();
  },

  mounted: function mounted() {
    var this$1 = this;

    this.$nextTick(function () {
      // get page's main container (for sizing)
      var pageContainer = document.getElementsByClassName(
        this$1.pageContainer
      )[0];

      // launch game with resizing
      if (this$1.fixedSize === false) {
        this$1.gameObject = this$1.game.launch({
          width:
            pageContainer.clientWidth < this$1.width
              ? pageContainer.clientWidth
              : this$1.width,
          height:
            pageContainer.clientHeight < this$1.height
              ? pageContainer.clientHeight
              : pageContainer.clientWidth * 0.7 < this$1.height
              ? pageContainer.clientWidth * 0.7
              : this$1.height,
          parent: this$1.phaserContainer,
          store: this$1.$store ? this$1.$store : null
        });
        // launch game without resizing
      } else {
        this$1.gameObject = this$1.game.launch({
          width: this$1.width,
          height: this$1.height,
          parent: this$1.phaserContainer,
          store: this$1.$store ? this$1.$store : null
        });
      }
    });
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.phaserContainer}},[])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-9dbfda36";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );Vue.config.productionTip = false;

new Vue({
  render: function (h) { return h(component); },
});exports.default=component;