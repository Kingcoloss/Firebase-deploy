exports.ids = [2];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/utility/index.vue?vue&type=template&id=4f335d52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12 text-center mb-2\"><h2> Utility Menu </h2></div> "),_vm._ssrNode("<div class=\"col-12 col-md-12\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6\">","</div>",[_c('b-card',{staticClass:"text-center utlity-card-menu"},[_c('h5',[_vm._v("Salary Calculator")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6\">","</div>",[_c('b-card',{staticClass:"text-center utlity-card-menu"},[_c('h5',[_vm._v("BMI")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6\">","</div>",[_c('b-card',{staticClass:"text-center utlity-card-menu"},[_c('h5',[_vm._v("TDEE & MBR")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6\">","</div>",[_c('b-card',{staticClass:"text-center utlity-card-menu",on:{"click":function($event){return _vm.onClickCardMenu('timer')}}},[_c('h5',[_vm._v("Timer")])])],1)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/utility/index.vue?vue&type=template&id=4f335d52&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/utility/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var utilityvue_type_script_lang_js_ = ({
  data() {
    return {
      utilityUri: '/utility'
    };
  },

  methods: {
    onClickCardMenu(type) {
      switch (type) {
        case 'timer':
          this.$router.push(this.utilityUri + '/timer');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/utility/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_utilityvue_type_script_lang_js_ = (utilityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/utility/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_utilityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4339272e"
  
)

/* harmony default export */ var utility = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map