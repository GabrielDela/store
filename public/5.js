(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "register",
  props: ["app"],
  data: function data() {
    return {
      visible: false,
      firstname: "",
      lastname: "",
      email: "",
      emailConfirm: "",
      password: "",
      passwordConfirm: "",
      errors: []
    };
  },
  mounted: function mounted() {
    if (this.app.user) {
      this.$router.push("/");
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.errors = [];

      if (!this.firstname) {
        this.errors.push("Le prénom est requis.");
      }

      if (!this.lastname) {
        this.errors.push("lastname est requis.");
      }

      if (!this.email) {
        this.errors.push("email est requis.");
      }

      if (!this.password) {
        this.errors.push("password est requis.");
      }

      if (!this.errors.length) {
        var data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        };
        this.app.req.post("auth/register", data).then(function (response) {
          _this.app.user = response.data;

          _this.$router.push("/");
        })["catch"](function (errors) {
          _this.errors.push(errors.response.data.error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "flex", staticStyle: { height: "93vh" } }, [
    _c(
      "div",
      {
        staticClass: "w-full lg:w-1/2 m-auto",
        staticStyle: { margin: "auto" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "mt-10 px-6 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl xl:mx-auto"
          },
          [
            _c(
              "h2",
              {
                staticClass:
                  "text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
              },
              [_vm._v("\n        Création de compte\n      ")]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm.errors.length
              ? _c(
                  "div",
                  {
                    staticClass:
                      "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-6",
                    attrs: { role: "alert" }
                  },
                  [
                    _c("p", { staticClass: "font-bold" }, [
                      _vm._v("Attention")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.errors, function(error, index) {
                      return _c("p", { key: index }, [_vm._v(_vm._s(error))])
                    })
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "my-6" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "mt-8" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.firstname,
                          expression: "firstname"
                        }
                      ],
                      staticClass:
                        "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                      attrs: {
                        type: "text",
                        name: "firstname",
                        placeholder: "John",
                        required: ""
                      },
                      domProps: { value: _vm.firstname },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.firstname = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-8" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.lastname,
                          expression: "lastname"
                        }
                      ],
                      staticClass:
                        "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                      attrs: {
                        type: "text",
                        name: "lastname",
                        placeholder: "Doe",
                        required: ""
                      },
                      domProps: { value: _vm.lastname },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.lastname = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-8" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      staticClass:
                        "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                      attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "johndoe@gmail.com",
                        required: ""
                      },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-8" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex", staticStyle: { margin: "auto" } },
                      [
                        (!_vm.visible ? "password" : "text") === "checkbox"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password,
                                  expression: "password"
                                }
                              ],
                              staticClass:
                                "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                              attrs: {
                                name: "password",
                                placeholder: "Entrez votre mot de passe ...",
                                required: "",
                                type: "checkbox"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.password)
                                  ? _vm._i(_vm.password, null) > -1
                                  : _vm.password
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.password,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.password = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.password = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.password = $$c
                                  }
                                }
                              }
                            })
                          : (!_vm.visible ? "password" : "text") === "radio"
                          ? _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password,
                                  expression: "password"
                                }
                              ],
                              staticClass:
                                "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                              attrs: {
                                name: "password",
                                placeholder: "Entrez votre mot de passe ...",
                                required: "",
                                type: "radio"
                              },
                              domProps: { checked: _vm._q(_vm.password, null) },
                              on: {
                                change: function($event) {
                                  _vm.password = null
                                }
                              }
                            })
                          : _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password,
                                  expression: "password"
                                }
                              ],
                              staticClass:
                                "w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500",
                              attrs: {
                                name: "password",
                                placeholder: "Entrez votre mot de passe ...",
                                required: "",
                                type: !_vm.visible ? "password" : "text"
                              },
                              domProps: { value: _vm.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.password = $event.target.value
                                }
                              }
                            }),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "fa fa-eye cursor-pointer transition",
                          staticStyle: {
                            "font-size": "25px",
                            margin: "0 20px"
                          },
                          style: _vm.visible
                            ? "color: #c7c7c7;"
                            : "color: black;",
                          attrs: { "aria-hidden": "true" },
                          on: {
                            click: function($event) {
                              _vm.visible = !_vm.visible
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "mt-12 text-sm font-display font-semibold text-gray-700 text-center"
                },
                [
                  _vm._v("\n          Vous avez déjà un compte ?\n          "),
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "cursor-pointer text-indigo-600 hover:text-indigo-800",
                      attrs: { to: { name: "login" } }
                    },
                    [_vm._v("Se connecter")]
                  )
                ],
                1
              )
            ])
          ]
        )
      ]
    )
  ])
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
        [_vm._v("\n                Prénom\n              ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-between items-center" }, [
      _c(
        "div",
        { staticClass: "text-sm font-bold text-gray-700 tracking-wide" },
        [_vm._v("\n                Nom\n              ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-between items-center" }, [
      _c(
        "div",
        { staticClass: "text-sm font-bold text-gray-700 tracking-wide" },
        [_vm._v("\n                Adresse Email\n              ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-between items-center" }, [
      _c(
        "div",
        { staticClass: "text-sm font-bold text-gray-700 tracking-wide" },
        [_vm._v("\n                Mot de passe\n              ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-10" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
        },
        [_vm._v("\n              S'enregister\n            ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=364a2fac&scoped=true& */ "./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "364a2fac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=364a2fac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Register.vue?vue&type=template&id=364a2fac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_364a2fac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);