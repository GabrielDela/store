(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hero.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hero.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Hero",
  props: ["line1", "line2"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Cart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Hero.vue */ "./resources/js/components/Hero.vue");
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
  name: "checkout",
  props: ["app"],
  components: {
    Hero: _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      cartQuantity: -1,
      cartTotal: -1,
      renderComponent: true,
      user: this.app.user
    };
  },
  methods: {
    forceRerender: function forceRerender() {
      var _this = this;

      this.cartQuantity = this.getCartQuantity();
      this.cartTotal = this.getCartTotal();
      this.renderComponent = false;
      this.$nextTick(function () {
        _this.renderComponent = true;
      });
    },
    getCartQuantity: function getCartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.pivot.quantity;
      }, 0);
    },
    getCartTotal: function getCartTotal() {
      var amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.price * item.pivot.quantity;
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR"
      });
    },
    addOne: function addOne(product) {
      var _this2 = this;

      if (this.app.user) {
        this.$store.dispatch("addOneFromCart", {
          user_id: this.app.user.id,
          product_id: product.id
        }).then(function (response) {
          _this2.forceRerender();
        });
      }
    },
    removeOne: function removeOne(product) {
      var _this3 = this;

      if (this.app.user) {
        this.$store.dispatch("removeOneFromCart", {
          user_id: this.app.user.id,
          product_id: product.id
        }).then(function (response) {
          _this3.forceRerender();
        });
      }
    },
    deleteFromCart: function deleteFromCart(product) {
      var _this4 = this;

      if (this.app.user) {
        this.$store.dispatch("deleteFromCart", {
          user_id: this.app.user.id,
          product_id: product.id
        }).then(function (response) {
          _this4.forceRerender();
        });
      }
    },
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.pivot.quantity;
      amount = amount / 100;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR"
      });
    }
  },
  computed: {
    cart: function cart() {
      this.cartQuantity = this.getCartQuantity();
      this.cartTotal = this.getCartTotal();
      return this.$store.state.cart;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover",
      staticStyle: {
        "background-image": "url('https://wallpaperaccess.com/full/17093.jpg')",
        padding: "10vh 0 10vh 0"
      }
    },
    [
      _c("div", { staticClass: "container mx-auto" }, [
        _c(
          "div",
          {
            staticClass:
              "flex flex-col w-full justify-center items-start md:px-6 md:px-12 tracking-wide"
          },
          [
            _vm.line1
              ? _c(
                  "h1",
                  {
                    staticClass:
                      "text-black font-medium text-xl my-4 bg-white p-2"
                  },
                  [_vm._v("\n        " + _vm._s(_vm.line1) + "\n      ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.line2
              ? _c(
                  "p",
                  {
                    staticClass:
                      "text-black font-medium text-m my-4 bg-white p-2"
                  },
                  [_vm._v("\n        " + _vm._s(_vm.line2) + "\n      ")]
                )
              : _vm._e()
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae& ***!
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
    "div",
    { staticClass: "w-full" },
    [
      _c("Hero", {
        attrs: {
          line1: "Votre panier",
          line2:
            "Ajoutez ou supprimez les produits de votre panier puis passez commande !"
        }
      }),
      _vm._v(" "),
      _vm.renderComponent
        ? _c(
            "div",
            { staticClass: "md:w-2/3 w-full mx-auto mt-8" },
            _vm._l(_vm.cart, function(item, index) {
              return _c(
                "div",
                {
                  key: item.id,
                  staticClass: "w-full p-6 flex flex-col md:flex-row"
                },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "products.show",
                          params: { slug: item.slug }
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "hover:grow hover:shadow-lg m-auto",
                        staticStyle: { "max-width": "250px" },
                        attrs: { src: "https://dummyimage.com/360x360" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "my-4 md:m-6 w-full" }, [
                    _c("h2", {
                      staticClass:
                        "text-gray-900 title-font text-lg font-medium",
                      domProps: { textContent: _vm._s(item.name) }
                    }),
                    _vm._v(" "),
                    _c("p", {
                      staticClass: "mt-1",
                      domProps: {
                        textContent: _vm._s(
                          "Total : " + _vm.cartLineTotal(item)
                        )
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "md:mx-6 md:m-6 w-full flex flex-col" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "ml-auto pb-6 md:py-6 md:py-0 text-2xl",
                          staticStyle: { width: "fit-content disable-select" }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "fa fa-chevron-circle-left text-2xl cursor-pointer",
                            attrs: { "aria-hidden": "true" },
                            on: {
                              click: function($event) {
                                return _vm.removeOne(item)
                              }
                            }
                          }),
                          _vm._v(
                            "\n          " +
                              _vm._s(item.pivot.quantity) +
                              "\n          "
                          ),
                          _c("i", {
                            staticClass:
                              "fa fa-chevron-circle-right text-2xl cursor-pointer",
                            attrs: { "aria-hidden": "true" },
                            on: {
                              click: function($event) {
                                return _vm.addOne(item)
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "ml-auto text-sm text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded",
                          staticStyle: {
                            margin: "bottom: 0px",
                            "margin-top": "auto"
                          },
                          on: {
                            click: function($event) {
                              return _vm.deleteFromCart(item)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-trash",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.cartQuantity > 0
        ? _c("div", { staticClass: "md:w-2/3 w-full mx-auto mt-8" }, [
            _c("div", { staticClass: "p-6" }, [
              _c("div", { staticClass: "py-4 font-bold" }, [
                _vm._v("Nombre de produits - " + _vm._s(_vm.cartQuantity))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "py-4 font-bold" }, [
                _vm._v("Prix total des produits - " + _vm._s(_vm.cartTotal))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex p-6" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "m-auto text-m text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded",
                      attrs: { to: { name: "order.checkout" } }
                    },
                    [
                      _vm._v("Procéder au paiement\n          "),
                      _c("i", {
                        staticClass: "fa fa-credit-card",
                        staticStyle: { "padding-left": "10px" },
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ],
                1
              )
            ])
          ])
        : _c("div", { staticClass: "md:w-2/3 w-full mx-auto mt-8 p-6" }, [
            _c("p", { staticClass: "font-semibold" }, [
              _vm._v(
                "\n      Votre panier est vide, remplissez le pour faire des achats ...\n    "
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex w-full justify-center" }, [
      _c("i", {
        staticClass: "fa fa-cart-plus",
        staticStyle: { "font-size": "150px", margin: "100px 0" },
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Hero.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Hero.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero_vue_vue_type_template_id_7ebbb9e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true& */ "./resources/js/components/Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true&");
/* harmony import */ var _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.vue?vue&type=script&lang=js& */ "./resources/js/components/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hero_vue_vue_type_template_id_7ebbb9e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hero_vue_vue_type_template_id_7ebbb9e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ebbb9e5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Hero.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Hero.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Hero.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hero.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_7ebbb9e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Hero.vue?vue&type=template&id=7ebbb9e5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_7ebbb9e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_template_id_7ebbb9e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Cart.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Cart.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=7908d3ae& */ "./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/pages/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Cart.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Cart.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=template&id=7908d3ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cart.vue?vue&type=template&id=7908d3ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_7908d3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);