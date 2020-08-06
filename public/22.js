(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/projects/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorHandling */ "./resources/js/vue/ErrorHandling.vue");
/* harmony import */ var _components_images_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/images/image-gallery */ "./resources/js/vue/components/images/image-gallery.vue");
/* harmony import */ var _components_images_simple_image_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/images/simple-image-uploader */ "./resources/js/vue/components/images/simple-image-uploader.vue");
/* harmony import */ var _components_froala_editor_froala__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/froala-editor/froala */ "./resources/js/vue/components/froala-editor/froala.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _ErrorHandling__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      isLoadingCategories: false,
      project: {
        images: {
          data: []
        }
      },
      optCategories: [],
      froalaConfig: {
        // key: 'AV:4~?3xROKLJKYHROLDXDR@d2YYGR_Bc1A8@5@4:1B2D2F2F1?1?2A3@1C1',
        heightMin: 300,
        //enter: 'enter_div',
        placeholderText: 'Detail information to your authiences',

        /*toolbarButtons: {
            moreText: {
                buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],
                align: 'left',
                buttonsVisible: 3
            },
            moreParagraph: {
                buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
                align: 'left',
                buttonsVisible: 3
            },
            moreRich: {
                buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
                align: 'left',
                buttonsVisible: 3
            },
            moreMisc: {
                buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
                align: 'right',
                buttonsVisible: 2
            }
        },*/

        /*toolbarButtons: ['bold', 'italic', 'underline', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'paragraphFormat', 'lineHeight', 'outdent', 'indent',  'insertLink','insertImage', 'fullscreen'],*/
        toolbarButtons: ['bold', 'italic', 'underline', '|', 'color', 'align', 'paragraphFormat', 'lineHeight', 'outdent', 'indent', '|', 'insertLink', 'insertImage', 'insertVideo', 'clearFormatting', 'fullscreen']
      }
    };
  },
  props: {},
  methods: {
    save: function save() {
      var _this = this;

      this.isSaving = true;
      axios.put("/api/admin/v1/projects/".concat(this.$route.params.id), this.project).then(function (response) {
        _this.category = response.data.category;

        _this.showSuccess(response.data.message);

        _this.$router.back();

        return response;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.processErrors(error.response.data.errors);
        }
      })["finally"](function () {
        _this.isSaving = false;
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      this.isLoadingCategories = true;
      axios.get("/api/admin/v1/data/categories", {
        params: {}
      }).then(function (response) {
        _this2.optCategories = response.data.data;
      })["finally"](function () {
        _this2.isLoadingCategories = false;
      });
    },
    addProjectImage: function addProjectImage(data) {
      this.project.images.data.push(data);
    },
    removeImage: function removeImage(image) {
      var found = this.project.images.data.find(function (i) {
        return i.file === image.file;
      });

      if (found) {
        this.project.images.data.splice(this.project.images.data.indexOf(found), 1);
      }
    },
    updateImageRef: function updateImageRef(image) {
      var found = this.project.images.data.find(function (i) {
        return i.file === image.file;
      });

      if (found) {
        var newImage = JSON.parse(JSON.stringify(found));
        newImage.url = image.new_file_url;
        newImage.cover_url = image.new_cover_url;
        newImage.ext = image.new_ext;
        newImage.file = image.new_file;
        newImage.filename = image.new_filename;
        this.project.images.data.splice(this.project.images.data.indexOf(found), 1, newImage);
      }
    }
  },
  computed: {},
  components: {
    VueSelect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a,
    ImageGallery: _components_images_image_gallery__WEBPACK_IMPORTED_MODULE_2__["default"],
    SimpleImageUploader: _components_images_simple_image_uploader__WEBPACK_IMPORTED_MODULE_3__["default"],
    Froala: _components_froala_editor_froala__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    var _this3 = this;

    this.getCategories();
    this.isLoading = true;
    axios.get("/api/admin/v1/projects/".concat(this.$route.params.id), {
      params: {
        include: 'images,category'
      }
    }).then(function (response) {
      _this3.project = response.data;
    })["finally"](function () {
      _this3.isLoading = false;
    });
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/edit.vue?vue&type=template&id=432c1fb0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/projects/edit.vue?vue&type=template&id=432c1fb0& ***!
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
  return _c(
    "div",
    [
      _c("page-header", { attrs: { title: "Edit Project" } }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-outline-info mb-3",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.$router.back()
            }
          }
        },
        [
          _c("i", { staticClass: "ik ik-chevron-left" }),
          _vm._v("\n            Back")
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("alert", {
            attrs: { type: _vm.serverMessageType, messages: _vm.serverMessages }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "ul",
              {
                staticClass: "nav nav-tabs",
                attrs: { id: "myTab", role: "tablist" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        id: "profile-tab",
                        "data-toggle": "tab",
                        href: "#profile",
                        role: "tab",
                        "aria-controls": "profile",
                        "aria-selected": "false"
                      }
                    },
                    [
                      _vm._v("Gallery "),
                      _c(
                        "span",
                        {
                          staticClass: "badge badge-primary badge-pill",
                          staticStyle: {
                            "font-size": "10px",
                            padding: "2px 3px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.project.images.data.length))]
                      )
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-content", attrs: { id: "myTabContent" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade show active",
                    attrs: {
                      id: "home",
                      role: "tabpanel",
                      "aria-labelledby": "home-tab"
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mt-3" },
                      [
                        _c("ValidationObserver", {
                          ref: "observer",
                          attrs: { tag: "form" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var handleSubmit = ref.handleSubmit
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return handleSubmit(_vm.save)
                                        }
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-md-3" }, [
                                          _c("h6", [
                                            _vm._v("Project Information")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-9" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-8" },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Project Name"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Project Name"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .name,
                                                                    expression:
                                                                      "project.name"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .name
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "name",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Category"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Category"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("vue-select", {
                                                                attrs: {
                                                                  options:
                                                                    _vm.optCategories,
                                                                  label: "name",
                                                                  "track-by":
                                                                    "id",
                                                                  searchables: true,
                                                                  loading:
                                                                    _vm.isLoadingCategories
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.project
                                                                      .category,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "category",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "project.category"
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Description"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Description"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("froala", {
                                                                attrs: {
                                                                  configs:
                                                                    _vm.froalaConfig
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.project
                                                                      .description,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "description",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "project.description"
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: { name: "Highlight" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Highlight"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("textarea", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .highlight,
                                                                    expression:
                                                                      "project.highlight"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  name:
                                                                    "highlight",
                                                                  id:
                                                                    "ta_highlight",
                                                                  placeholder:
                                                                    "Brief description about project ...",
                                                                  rows: "3"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .highlight
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "highlight",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Value"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Value"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .value,
                                                                    expression:
                                                                      "project.value"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .value
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "value",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Location"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Project Location"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .location,
                                                                    expression:
                                                                      "project.location"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .location
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "location",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Date"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [_vm._v("Date")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .date,
                                                                    expression:
                                                                      "project.date"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "date"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .date
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "date",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Project Progress"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Project Progress"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("div", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "custom-control custom-radio custom-control-inline"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              _vm
                                                                                .project
                                                                                .progress,
                                                                            expression:
                                                                              "project.progress"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "custom-control-input",
                                                                        attrs: {
                                                                          type:
                                                                            "radio",
                                                                          id:
                                                                            "rad_progress-ongoing",
                                                                          name:
                                                                            "progress",
                                                                          value:
                                                                            "on-going"
                                                                        },
                                                                        domProps: {
                                                                          checked: _vm._q(
                                                                            _vm
                                                                              .project
                                                                              .progress,
                                                                            "on-going"
                                                                          )
                                                                        },
                                                                        on: {
                                                                          change: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.$set(
                                                                              _vm.project,
                                                                              "progress",
                                                                              "on-going"
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "label",
                                                                      {
                                                                        staticClass:
                                                                          "custom-control-label",
                                                                        attrs: {
                                                                          for:
                                                                            "rad_progress-ongoing"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                                    On Going\n                                                                "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "custom-control custom-radio custom-control-inline"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "input",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "model",
                                                                            rawName:
                                                                              "v-model",
                                                                            value:
                                                                              _vm
                                                                                .project
                                                                                .progress,
                                                                            expression:
                                                                              "project.progress"
                                                                          }
                                                                        ],
                                                                        staticClass:
                                                                          "custom-control-input",
                                                                        attrs: {
                                                                          type:
                                                                            "radio",
                                                                          id:
                                                                            "rad_progress-completed",
                                                                          name:
                                                                            "progress",
                                                                          value:
                                                                            "completed"
                                                                        },
                                                                        domProps: {
                                                                          checked: _vm._q(
                                                                            _vm
                                                                              .project
                                                                              .progress,
                                                                            "completed"
                                                                          )
                                                                        },
                                                                        on: {
                                                                          change: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.$set(
                                                                              _vm.project,
                                                                              "progress",
                                                                              "completed"
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "label",
                                                                      {
                                                                        staticClass:
                                                                          "custom-control-label",
                                                                        attrs: {
                                                                          for:
                                                                            "rad_progress-completed"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Completed"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "form-group" },
                                                [
                                                  _c("label", [
                                                    _vm._v("Publish Project")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    [
                                                      _c("toggle-button", {
                                                        attrs: {
                                                          sync: true,
                                                          color: {
                                                            checked: "#26C281"
                                                          },
                                                          width: 55,
                                                          labels: {
                                                            checked: "Yes",
                                                            unchecked: "No"
                                                          },
                                                          height: 25
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.project
                                                              .is_published,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.project,
                                                              "is_published",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "project.is_published"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "row" }, [
                                        _c("div", { staticClass: "col-md-3" }, [
                                          _c("h6", [
                                            _vm._v("Client Information")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-md-9" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-8" },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "required",
                                                  name: "Client Name"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c("label", [
                                                                _vm._v(
                                                                  "Client Name"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .client_name,
                                                                    expression:
                                                                      "project.client_name"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .client_name
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "client_name",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  rules: "",
                                                  name: "Client Website"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function(v) {
                                                        return [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "form-group"
                                                            },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "optional"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Client Website"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .project
                                                                        .client_website,
                                                                    expression:
                                                                      "project.client_website"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                class:
                                                                  v.classes,
                                                                attrs: {
                                                                  type: "text"
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    _vm.project
                                                                      .client_website
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      _vm.project,
                                                                      "client_website",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              v.errors.length
                                                                ? _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "invalid-feedback"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          v
                                                                            .errors[0]
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: {
                                                    type: "submit",
                                                    disabled:
                                                      invalid || _vm.isSaving
                                                  }
                                                },
                                                [
                                                  _vm.isSaving
                                                    ? _c("span", [
                                                        _vm._v("Saving...")
                                                      ])
                                                    : _c("span", [
                                                        _vm._v("Save")
                                                      ])
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: {
                      id: "profile",
                      role: "tabpanel",
                      "aria-labelledby": "profile-tab"
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mt-3" },
                      [
                        _c("ValidationObserver", {
                          ref: "observer",
                          attrs: { tag: "form" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var handleSubmit = ref.handleSubmit
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return handleSubmit(_vm.save)
                                        }
                                      }
                                    },
                                    [
                                      _c("simple-image-uploader", {
                                        attrs: {
                                          "upload-url":
                                            "/api/admin/v1/projects/images/upload",
                                          name: "files"
                                        },
                                        on: { uploaded: _vm.addProjectImage }
                                      }),
                                      _vm._v(" "),
                                      _c("image-gallery", {
                                        attrs: {
                                          images: _vm.project.images.data
                                        },
                                        on: {
                                          remove: _vm.removeImage,
                                          cropped: _vm.updateImageRef
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "submit",
                                            disabled: invalid || _vm.isSaving
                                          }
                                        },
                                        [
                                          _vm.isSaving
                                            ? _c("span", [_vm._v("Saving...")])
                                            : _c("span", [_vm._v("Save")])
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            id: "home-tab",
            "data-toggle": "tab",
            href: "#home",
            role: "tab",
            "aria-controls": "home",
            "aria-selected": "true"
          }
        },
        [_vm._v("Project Information")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/vue/projects/edit.vue":
/*!********************************************!*\
  !*** ./resources/js/vue/projects/edit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_432c1fb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=432c1fb0& */ "./resources/js/vue/projects/edit.vue?vue&type=template&id=432c1fb0&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/vue/projects/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_432c1fb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_432c1fb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/projects/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/projects/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/vue/projects/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/projects/edit.vue?vue&type=template&id=432c1fb0&":
/*!***************************************************************************!*\
  !*** ./resources/js/vue/projects/edit.vue?vue&type=template&id=432c1fb0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_432c1fb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=432c1fb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/projects/edit.vue?vue&type=template&id=432c1fb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_432c1fb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_432c1fb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);