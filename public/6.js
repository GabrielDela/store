(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "products.show",
  props: ["app"],
  data: function data() {
    return {
      product: null,
      processing: true
    };
  },
  mounted: function mounted() {
    this.productBySlug(this.$route.params.slug);
  },
  methods: {
    redirect: function redirect() {
      this.$router.push("/login");
    },
    formatCurrency: function formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR"
      });
    },
    addToCart: function addToCart(product) {
      var _this = this;

      if (this.app.user) {
        this.processing = true;
        this.$store.dispatch("addOneFromCart", {
          user_id: this.app.user.id,
          product_id: product.id
        }).then(function (response) {
          _this.processing = false;
        });
      }
    },
    productBySlug: function productBySlug(slug) {
      var _this2 = this;

      this.$store.state.req.get("/api/products/slug/" + slug).then(function (response) {
        _this2.product = response.data;
        _this2.processing = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Show.vue?vue&type=template&id=a23480f4&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Show.vue?vue&type=template&id=a23480f4& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "text-gray-700 body-font overflow-hidden flex",
      staticStyle: { "min-height": "93vh" }
    },
    [
      !_vm.processing
        ? _c("div", { staticClass: "container px-6 md:px-12 py-24 m-auto" }, [
            _vm.product
              ? _c("div", { staticClass: "lg:w-3/5 mx-auto flex flex-wrap" }, [
                  _c("img", {
                    staticClass:
                      "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
                    attrs: {
                      alt: "ecommerce",
                      src: "https://dummyimage.com/360x360"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                    },
                    [
                      _vm._l(_vm.product.categories, function(category) {
                        return _c("h2", {
                          staticClass:
                            "text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2",
                          domProps: { textContent: _vm._s(category.name) }
                        })
                      }),
                      _vm._v(" "),
                      _c("h1", {
                        staticClass:
                          "text-gray-900 text-3xl title-font font-medium mb-2",
                        domProps: { textContent: _vm._s(_vm.product.name) }
                      }),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "leading-relaxed",
                        domProps: {
                          textContent: _vm._s(_vm.product.description)
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex mt-6 pt-4 border-t-2 border-gray-200"
                        },
                        [
                          _c("span", {
                            staticClass:
                              "title-font font-medium text-2xl text-gray-900",
                            domProps: {
                              textContent: _vm._s(
                                _vm.formatCurrency(_vm.product.price)
                              )
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.app.user
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                              on: {
                                click: function($event) {
                                  return _vm.addToCart(_vm.product)
                                }
                              }
                            },
                            [_vm._v("\n          Ajouter au panier\n        ")]
                          )
                        : _c(
                            "button",
                            {
                              staticClass:
                                "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                              on: {
                                click: function($event) {
                                  return _vm.redirect()
                                }
                              }
                            },
                            [_vm._v("\n          Connectez vous\n        ")]
                          )
                    ],
                    2
                  )
                ])
              : _c(
                  "h1",
                  {
                    staticClass:
                      "text-gray-900 text-3xl title-font font-medium mb-2"
                  },
                  [_vm._v("\n      Aucun produit trouvé.\n    ")]
                )
          ])
        : _c("spinner", {
            staticClass: "container px-12 py-24 mx-auto",
            staticStyle: { "padding-top": "40vh" }
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Show.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Show.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_a23480f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=a23480f4& */ "./resources/js/pages/Show.vue?vue&type=template&id=a23480f4&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/pages/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_a23480f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_a23480f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Show.vue?vue&type=template&id=a23480f4&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Show.vue?vue&type=template&id=a23480f4& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a23480f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=a23480f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Show.vue?vue&type=template&id=a23480f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a23480f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_a23480f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);