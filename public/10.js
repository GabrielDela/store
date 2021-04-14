(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/*! exports provided: loadStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStripe", function() { return loadStripe; });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.11.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
};

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Cart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Cart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  },
  watch: {
    show: function show(val, oldVal) {
      this.forceRerender();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Cart.vue?vue&type=template&id=50a3a7d8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/routes/Order/Cart.vue?vue&type=template&id=50a3a7d8& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full" }, [
    _vm._m(0),
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
                      to: { name: "products.show", params: { slug: item.slug } }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "hover:grow hover:shadow-lg m-auto px-6",
                      staticStyle: { width: "250px", "max-width": "250px" },
                      attrs: { src: "https://dummyimage.com/360x360" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "m-6 w-full" }, [
                  _c("h2", {
                    staticClass: "text-gray-900 title-font text-lg font-medium",
                    domProps: { textContent: _vm._s(item.name) }
                  }),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "mt-1",
                    domProps: {
                      textContent: _vm._s("Total : " + _vm.cartLineTotal(item))
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mx-6 md:m-6 w-full md:flex md:flex-col" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "md:ml-auto pb-6 py-6 md:py-0 text-2xl",
                        staticStyle: { width: "fit-content" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-chevron-circle-left text-2xl",
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
                          staticClass: "fa fa-chevron-circle-right text-2xl",
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
          _c("div", { staticClass: "p-4" }, [
            _c("div", { staticClass: "p-4 font-bold" }, [
              _vm._v("Nombre de produits : " + _vm._s(_vm.cartQuantity))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "p-4 font-bold" }, [
              _vm._v("Total des produits : " + _vm._s(_vm.cartTotal))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-10 text-right" })
          ])
        ])
      : _c("div", { staticClass: "md:w-2/3 w-full mx-auto mt-8 p-6" }, [
          _c("p", { staticClass: "font-semibold" }, [
            _vm._v(
              "\n      Votre panier est vide, remplissez le pour faire des achats ...\n    "
            )
          ]),
          _vm._v(" "),
          _vm._m(1)
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass:
          "w-full mx-auto bg-nordic-gray-light flex md:pt-0 md:items-center h-40",
        staticStyle: {
          "background-image":
            "url('https://wallpaperaccess.com/full/17093.jpg')"
        }
      },
      [
        _c("div", { staticClass: "container mx-auto my-auto" }, [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col w-full lg:w-1/2 justify-center items-start px-6 md:px-12 tracking-wide"
            },
            [
              _c(
                "h1",
                { staticClass: "text-black text-2xl my-4 font-semibold" },
                [_vm._v("Votre Panier")]
              )
            ]
          )
        ])
      ]
    )
  },
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

/***/ "./resources/js/routes/Order/Cart.vue":
/*!********************************************!*\
  !*** ./resources/js/routes/Order/Cart.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_50a3a7d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=50a3a7d8& */ "./resources/js/routes/Order/Cart.vue?vue&type=template&id=50a3a7d8&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_50a3a7d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cart_vue_vue_type_template_id_50a3a7d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Cart.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/routes/Order/Cart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/Order/Cart.vue?vue&type=template&id=50a3a7d8&":
/*!***************************************************************************!*\
  !*** ./resources/js/routes/Order/Cart.vue?vue&type=template&id=50a3a7d8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_50a3a7d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=template&id=50a3a7d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/routes/Order/Cart.vue?vue&type=template&id=50a3a7d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_50a3a7d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_50a3a7d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);