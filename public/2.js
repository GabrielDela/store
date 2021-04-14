(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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
  name: "products",
  props: ["app"],
  components: {
    Hero: _components_Hero_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      price: false,
      search: "",
      previous: 0,
      next: 0,
      page: 1,
      test: [],
      processing: false
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    previousPage: function previousPage() {
      this.page = this.previous;
      this.getProducts();
    },
    nextPage: function nextPage() {
      this.page = this.next;
      this.getProducts();
    },
    formatCurrency: function formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR"
      });
    },
    getProducts: function getProducts() {
      var _this = this;

      this.processing = true;
      this.app.req.get("/api/products", {
        params: {
          search: this.search,
          price: this.price ? "asc" : "desc",
          page: this.page
        }
      }).then(function (response) {
        _this.$store.state.products = response.data.products;
        _this.previous = response.data.previous;
        _this.next = response.data.next;
        _this.processing = false;
        _this.$store.state.totalProducts = response.data.totalProducts;
      });
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products;
    },
    totalProducts: function totalProducts() {
      return this.$store.state.totalProducts;
    }
  },
  watch: {
    search: function search(val, oldVal) {
      this.page = 1;
      this.getProducts();
    },
    price: function price(val, oldVal) {
      this.page = 1;
      this.getProducts();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Index.vue?vue&type=template&id=71c33819& ***!
  \***************************************************************************************************************************************************************************************************/
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
          line1: "Bienvenue dans notre magasin !",
          line2: "Faites vos recherches et trouvez ce qui vous plait ..."
        }
      }),
      _vm._v(" "),
      _c("section", { staticClass: "text-gray-700 body-font" }, [
        _c(
          "div",
          { staticClass: "container px-5 py-6 mx-auto" },
          [
            _c("div", { staticClass: "my-8 w-full" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "flex" }, [
                _c("div", { staticClass: "flex space-between w-full mr-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search"
                      }
                    ],
                    staticClass:
                      "w-full md:w-1/3 text-s py-2 pr-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                    attrs: {
                      type: "text",
                      name: "search",
                      placeholder: "Lunettes, Montres ..."
                    },
                    domProps: { value: _vm.search },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "flex items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-gray-100 rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                    staticStyle: { width: "80px" },
                    on: {
                      click: function($event) {
                        _vm.price = !_vm.price
                      }
                    }
                  },
                  [
                    _c("span", [_vm._v("Prix")]),
                    _vm._v(" "),
                    _vm.price
                      ? _c("i", {
                          staticClass:
                            "fa fa-sort-desc inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",
                          attrs: { "aria-hidden": "true" }
                        })
                      : _c("i", {
                          staticClass:
                            "fa fa-sort-asc inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",
                          attrs: { "aria-hidden": "true" }
                        })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "my-8 w-full" }, [
              _c("div", { staticClass: "flex justify-between items-center" }, [
                _c(
                  "div",
                  {
                    staticClass: "text-sm font-bold text-gray-700 tracking-wide"
                  },
                  [
                    _vm._v(
                      "\n            Produits (" +
                        _vm._s(_vm.totalProducts) +
                        ")\n          "
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.processing
              ? _c("spinner", { staticStyle: { margin: "250px 0" } })
              : !_vm.products.length
              ? _c("div", { staticClass: "my-8 w-full" }, [
                  _c(
                    "div",
                    { staticClass: "flex justify-between items-center" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-sm font-medium text-gray-700 tracking-wide"
                        },
                        [
                          _vm._v(
                            '\n            Aucun produits pour la recherche "' +
                              _vm._s(_vm.search) +
                              '".\n          '
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _c(
                  "div",
                  { staticClass: "flex flex-wrap -m-4" },
                  _vm._l(_vm.products, function(product) {
                    return _c(
                      "div",
                      {
                        key: product.id,
                        staticClass:
                          "w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
                      },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "products.show",
                                params: { slug: product.slug }
                              }
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "hover:grow hover:shadow-lg m-auto",
                              attrs: { src: "https://dummyimage.com/360x360" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-4" },
                          [
                            _vm._l(product.categories, function(category) {
                              return _c("h3", {
                                staticClass:
                                  "text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2",
                                domProps: { textContent: _vm._s(category.name) }
                              })
                            }),
                            _vm._v(" "),
                            _c("h2", {
                              staticClass:
                                "text-gray-900 title-font text-lg font-medium",
                              domProps: { textContent: _vm._s(product.name) }
                            }),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "mt-1",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.formatCurrency(product.price)
                                )
                              }
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  }),
                  0
                ),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-col items-center my-12" }, [
              _c("div", { staticClass: "flex text-gray-700" }, [
                _c("a", { attrs: { href: "#top" } }, [
                  _vm.previous != 0
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer",
                          on: { click: _vm.previousPage }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "feather feather-chevron-left w-6 h-6",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                height: "100%",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }
                            },
                            [
                              _c("polyline", {
                                attrs: { points: "15 18 9 12 15 6" }
                              })
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "flex h-12 font-medium rounded-full bg-gray-200"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-12 h-12 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-black"
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.page) +
                            "\n            "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("a", { attrs: { href: "#top" } }, [
                  _vm.next != 0
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer",
                          on: { click: _vm.nextPage }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "feather feather-chevron-right w-6 h-6",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                height: "100%",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }
                            },
                            [
                              _c("polyline", {
                                attrs: { points: "9 18 15 12 9 6" }
                              })
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ])
          ],
          1
        )
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
    return _c("div", { staticClass: "flex justify-between items-center" }, [
      _c(
        "div",
        { staticClass: "text-sm font-bold text-gray-700 tracking-wide" },
        [_vm._v("\n            Rechercher dans nos produits ...\n          ")]
      )
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

/***/ "./resources/js/pages/Index.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=71c33819& */ "./resources/js/pages/Index.vue?vue&type=template&id=71c33819&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Index.vue?vue&type=template&id=71c33819&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Index.vue?vue&type=template&id=71c33819& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=71c33819& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Index.vue?vue&type=template&id=71c33819&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_71c33819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);