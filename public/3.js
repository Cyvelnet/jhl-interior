(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/ErrorHandling.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/ErrorHandling.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/alert */ "./resources/js/vue/layouts/alert.vue");
/* harmony import */ var _Permissionable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permissionable */ "./resources/js/vue/Permissionable.vue");
//
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
  "extends": _Permissionable__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      isLoading: true,
      isSaving: false,
      isUpdating: false,
      serverMessageType: 'danger',
      serverMessages: []
    };
  },
  methods: {
    resetMessages: function resetMessages() {
      this.serverMessages = [];
    },
    processErrors: function processErrors(errorObj) {
      this.resetMessages();
      this.serverMessageType = 'danger';

      for (var field in errorObj) {
        this.serverMessages.push(errorObj[field][0]);
      }

      this.$swal({
        text: this.serverMessages.join('\r\n'),
        toast: true,
        position: 'top-end',
        icon: 'error',
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    },
    showSuccess: function showSuccess(message) {
      this.resetMessages();
      this.serverMessageType = 'success';
      this.serverMessages.push(message);
      this.$swal({
        text: message,
        toast: true,
        position: 'top-end',
        icon: 'success',
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    },
    handleError: function handleError(error) {
      if (error.response.status === 422) {
        this.processErrors(error.response.data.errors);
        return;
      }

      if (typeof error.response.data.message != 'undefined') {
        this.resetMessages();
        this.serverMessageType = 'danger';
        this.serverMessages.push(error.response.data.message);
        this.$swal({
          text: error.response.data.message,
          toast: true,
          position: 'top-end',
          icon: 'error',
          showConfirmButton: false
        });
      }
    }
  },
  computed: {},
  components: {
    Alert: _layouts_alert__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/Permissionable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/Permissionable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    permissions: {
      required: true,
      type: Array
    }
  },
  methods: {
    can: function can(permission) {
      return this.permissions.indexOf(permission) >= 0;
    },
    canAny: function canAny() {
      var _this = this;

      var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return permissions.some(function (permission) {
        return _this.permissions.includes(permission);
      });
    },
    cannot: function cannot(permission) {
      return this.permissions.indexOf(permission) === 0;
    },
    cannotAll: function cannotAll() {
      var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return this.permissions.includes(permissions);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/images/image-gallery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      pImages: this.images,
      cropping: false,
      eventBus: new Vue(),
      ratio: 3 / 2,
      flippedX: false,
      flippedY: false,
      editFile: {}
    };
  },
  props: {
    images: {
      required: true,
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  methods: {
    beforeModalClose: function beforeModalClose(e) {
      if (this.cropping) {
        e.cancel();
      } else {
        this.resetCrop();
      }
    },
    resetCrop: function resetCrop() {
      this.$refs.cropper.reset();
      this.flippedX = false;
      this.flippedY = false;
      this.ratio = 3 / 2;
    },
    cropImage: function cropImage() {
      var _this = this;

      this.cropping = true;
      this.$refs.cropper.disable();
      axios.patch("/api/admin/v1/projects/images/edit", {
        file: this.editFile.file,
        cropData: this.$refs.cropper.getData()
      }).then(function (response) {
        _this.$emit('cropped', response.data);

        setTimeout(function () {
          _this.closeModal();
        }, 100);
      })["finally"](function () {
        _this.cropping = false;

        _this.$refs.cropper.enable();
      });
    },
    setRatio: function setRatio(ratio) {
      this.$refs.cropper.setAspectRatio(ratio);
      this.ratio = ratio;
    },
    rotate: function rotate(ratio) {
      this.$refs.cropper.rotate(ratio);
    },
    flipX: function flipX() {
      if (this.flippedX) {
        this.$refs.cropper.scale(1, this.flippedY ? -1 : 1);
      } else {
        this.$refs.cropper.scale(-1, this.flippedY ? -1 : 1);
      }

      this.flippedX = !this.flippedX;
    },
    flipY: function flipY() {
      if (this.flippedY) {
        this.$refs.cropper.scale(this.flippedX ? -1 : 1, 1);
      } else {
        this.$refs.cropper.scale(this.flippedX ? -1 : 1, -1);
      }

      this.flippedY = !this.flippedY;
    },
    showCrop: function showCrop(image) {
      this.editFile = image;
      this.$modal.show('image-crop-modal');
    },
    closeModal: function closeModal() {
      this.$modal.hide('image-crop-modal');
    },
    removeImage: function removeImage(image) {
      this.$emit('remove', image);
    }
  },
  components: {
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  watch: {
    'images': function images(newImages) {
      this.pImages = newImages;
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {
    this.resetCrop();
    this.$refs.cropper.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      error: null,
      uploadFileNumber: 0,
      totalUploadedFile: 0,
      totalFailedUpload: 0,
      uploadingIndex: 0,
      uploading: false
    };
  },
  props: {
    name: {
      "default": 'file'
    },
    multiple: {
      "default": true
    },
    uploadUrl: {
      "default": true,
      type: String
    }
  },
  methods: {
    beginUpload: function beginUpload() {
      this.uploadingIndex = 0;
      this.totalUploadedFile = 0;
      this.totalFailedUpload = 0;
      this.uploadFileNumber = this.$refs.upload.files.length;
      this.upload();
    },
    upload: function upload() {
      var _this = this;

      this.error = null;
      this.uploading = true;
      var formData = new FormData();
      formData.append(this.name, this.$refs.upload.files[this.uploadingIndex]);
      axios.post(this.uploadUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        _this.$emit('uploaded', response.data);

        _this.totalUploadedFile += 1;
        _this.uploadingIndex += 1;

        _this.attemptToUploadNextFile();

        return response;
      }, function (error) {
        var response = error.response;

        if (response.status === 422) {
          for (var key in response.data.errors) {
            _this.error = response.data.errors[key][0];
          }
        } else {
          if (typeof response.data.message != 'undefined') {
            _this.error = response.data.message;
          } else {
            _this.error = 'Server Error.';
          }
        }

        _this.totalFailedUpload += 1;
        _this.uploading = false;
        return error;
      });
    },
    attemptToUploadNextFile: function attemptToUploadNextFile() {
      if (this.uploadingIndex < this.uploadFileNumber && this.totalFailedUpload === 0) {
        this.upload();
      } else {
        this.uploading = false;
      }
    }
  },
  computed: {},
  components: {},
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/layouts/alert.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/layouts/alert.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pMessages: this.messages
    };
  },
  props: {
    type: {
      "default": 'danger'
    },
    messages: {
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    alertClass: function alertClass() {
      return {
        'alert-success': this.type === 'success',
        'alert-danger': this.type === 'danger',
        'alert-warning': this.type === 'warning',
        'alert-info': this.type === 'info'
      };
    },
    title: function title() {
      if (this.type === 'danger') {
        return 'Oops!';
      }

      if (this.type === 'success') {
        return 'Great!';
      }

      if (this.type === 'warning') {
        return 'Snap!';
      }

      if (this.type === 'info') {
        return '';
      }
    }
  },
  watch: {
    'messages': function messages(newMessages) {
      this.pMessages = newMessages;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aspect-ratio .btn[data-v-662ec8cb], .zoom .btn[data-v-662ec8cb] {\n  font-size: 13px;\n  font-weight: initial !important;\n}\n.preview[data-v-662ec8cb] {\n  overflow: hidden;\n  width: 200px;\n  height: 200px;\n}\n.vm--container[data-v-662ec8cb] {\n  z-index: 9999;\n}\n.vue-image-gallery .close-modal[data-v-662ec8cb] {\n  transition: all 0.3s ease-in;\n  padding: 3px;\n  font-weight: bold;\n  position: absolute;\n  top: -15px;\n}\n.vue-image-gallery .close-modal[data-v-662ec8cb]:hover {\n  color: red;\n  font-size: 150%;\n}\n.vue-image-gallery .card .card-action[data-v-662ec8cb] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: background-color 0.5s ease-in-out;\n  background-color: transparent;\n  visibility: hidden;\n}\n.vue-image-gallery .card .card-action a[data-v-662ec8cb] {\n  display: block;\n  font-size: 12px;\n  color: white;\n  transition: all 0.2s ease-out;\n}\n.vue-image-gallery .card .card-action a[data-v-662ec8cb]:hover {\n  color: sandybrown;\n}\n.vue-image-gallery .card .card-action a.remove[data-v-662ec8cb]:hover {\n  color: orangered;\n  text-shadow: 1px 2px rgba(205, 92, 92, 0.2) !important;\n}\n.vue-image-gallery .card .card-action a .ik[data-v-662ec8cb] {\n  font-size: 16px;\n}\n.vue-image-gallery .card .card-action .action-container[data-v-662ec8cb] {\n  margin-top: 5px;\n}\n.vue-image-gallery .card:hover img[data-v-662ec8cb] {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n.vue-image-gallery .card:hover .card-action[data-v-662ec8cb] {\n  visibility: visible;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vue-image-gallery .card:hover .card-action a[data-v-662ec8cb] {\n  padding: 8px;\n  visibility: visible;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease-in;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/images/image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vue-image-gallery" },
    [
      _vm.pImages.length > 0
        ? _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.pImages, function(image) {
              return _c(
                "div",
                { staticClass: "col-xl-2 col-lg-3 col-md-4 col-sm-6" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card",
                      staticStyle: { position: "relative" }
                    },
                    [
                      _c("img", {
                        staticClass: "card-img-top",
                        attrs: { src: image.cover_url, alt: image.file }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-action" }, [
                        _c(
                          "div",
                          { staticClass: "text-right action-container" },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "remove",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.removeImage(image)
                                  }
                                }
                              },
                              [
                                _vm._v("Remove "),
                                _c("span", { staticClass: "ik ik-x" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showCrop({
                                      url: image.url,
                                      file: image.file
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v("Crop\n                            "),
                                _c("span", { staticClass: "ik ik-edit" })
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            }),
            0
          )
        : _c("div", [
            _c("p", { staticClass: "mb-3 mt-3" }, [
              _vm._v(
                "No Image is found in gallery, please upload one or more images."
              )
            ])
          ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: {
            name: "image-crop-modal",
            adaptive: true,
            resizable: true,
            reset: true,
            width: 1200,
            height: 600
          },
          on: { "before-close": _vm.beforeModalClose }
        },
        [
          _c("div", { staticStyle: { padding: "0 25px 0 0" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-10" }, [
                _c(
                  "div",
                  [
                    _vm.editFile.url
                      ? _c("vue-cropper", {
                          ref: "cropper",
                          attrs: {
                            responsive: true,
                            "initial-aspect-ratio": 4 / 3,
                            "aspect-ratio": _vm.ratio,
                            "drag-mode": "move",
                            "auto-crop-area": 0.6,
                            center: true,
                            preview: ".preview",
                            src: _vm.editFile.url
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-2 mt-sm-3" }, [
                _c(
                  "div",
                  {
                    staticClass: " text-right d-lg-block d-md-block d-none",
                    staticStyle: { height: "20px" }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "close-modal",
                        attrs: { href: "#", title: "Close", alt: "Close" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.closeModal($event)
                          }
                        }
                      },
                      [_vm._v("X")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-5 col-md-12" }, [
                    _c("label", [
                      _vm._v(
                        "\n                                Crop Preview:\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "preview img-responsive img-fluid mr-2"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-3 col-7 col-md-12" }, [
                    _c("div", { staticClass: "aspect-ratio" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Aspect Ratio: ")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "btn-group btn-group-sm btn-group-toggle"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "btn btn-outline-primary",
                                class: { active: _vm.ratio === 4 / 3 }
                              },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    autocomplete: "off",
                                    value: "4/3"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.setRatio(4 / 3)
                                    }
                                  }
                                }),
                                _vm._v(
                                  " 4:3\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "btn btn-outline-primary",
                                class: { active: _vm.ratio === 3 / 2 }
                              },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    autocomplete: "off",
                                    value: "3/2"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.setRatio(3 / 2)
                                    }
                                  }
                                }),
                                _vm._v(
                                  " 3:2\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "btn btn-outline-primary",
                                class: { active: _vm.ratio === 1 }
                              },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    autocomplete: "off",
                                    value: "1"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.setRatio(1)
                                    }
                                  }
                                }),
                                _vm._v(
                                  "\n                                            1:1\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "btn btn-outline-primary",
                                class: { active: _vm.ratio === false }
                              },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    autocomplete: "off",
                                    value: "null"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.setRatio(false)
                                    }
                                  }
                                }),
                                _vm._v(
                                  " Free\n                                        "
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "zoom" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Flip: ")]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "btn-group btn-group-sm" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-primary",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.flipX($event)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Horizontal\n                                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-primary",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.flipY($event)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "Vertical\n                                            "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-30" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default btn-block",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.resetCrop($event)
                            }
                          }
                        },
                        [_vm._v("Reset")]
                      ),
                      _vm._v(" "),
                      !_vm.cropping
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-block",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.cropImage($event)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "ik ik-crop" }),
                              _vm._v(
                                " Crop Now\n                                "
                              )
                            ]
                          )
                        : _c(
                            "div",
                            {
                              staticClass: "progress",
                              staticStyle: { height: "20px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "progress-bar bg-success progress-bar-striped progress-bar-animated",
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    role: "progressbar",
                                    "aria-valuenow": "100",
                                    "aria-valuemin": "0",
                                    "aria-valuemax": "100"
                                  }
                                },
                                [
                                  _vm._v(
                                    "Cropping ...\n                                    "
                                  )
                                ]
                              )
                            ]
                          )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    !_vm.uploading
      ? _c("div", { staticClass: "clearfix" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success mb-3",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$refs.upload.click()
                }
              }
            },
            [
              _vm._v("\n            Upload "),
              _c("i", { staticClass: "ik ik-upload-cloud" })
            ]
          )
        ])
      : _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 col-6" }, [
            _c("div", { staticClass: "progress mb-3" }, [
              _c(
                "div",
                {
                  staticClass:
                    "progress-bar progress-bar-striped progress-bar-animated",
                  class: { "bg-danger": _vm.totalFailedUpload > 0 },
                  staticStyle: { width: "100%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  }
                },
                [_vm._v("Uploading ...\n                ")]
              )
            ])
          ])
        ]),
    _vm._v(" "),
    _vm.error
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 col-6" }, [
            _c("p", {
              staticClass: "text-danger small text-right",
              domProps: { textContent: _vm._s(_vm.error) }
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      ref: "upload",
      staticStyle: { display: "none" },
      attrs: { type: "file", name: _vm.name, multiple: _vm.multiple },
      on: {
        input: function($event) {
          $event.preventDefault()
          return _vm.beginUpload($event)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/layouts/alert.vue?vue&type=template&id=df518f02&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/layouts/alert.vue?vue&type=template&id=df518f02&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.pMessages.length
    ? _c(
        "div",
        { staticClass: "alert", class: _vm.alertClass },
        [
          _c("strong", { domProps: { textContent: _vm._s(_vm.title) } }),
          _vm._v(" "),
          _vm.pMessages.length > 1
            ? _c(
                "ul",
                _vm._l(_vm.pMessages, function(message) {
                  return _c("li", { domProps: { innerHTML: _vm._s(message) } })
                }),
                0
              )
            : _vm._l(_vm.pMessages, function(message) {
                return _c("p", {
                  staticStyle: { "font-size": "inherit" },
                  domProps: { innerHTML: _vm._s(message) }
                })
              })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/vue/ErrorHandling.vue":
/*!********************************************!*\
  !*** ./resources/js/vue/ErrorHandling.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorHandling_vue_vue_type_template_id_4622b4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true& */ "./resources/js/vue/ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true&");
/* harmony import */ var _ErrorHandling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorHandling.vue?vue&type=script&lang=js& */ "./resources/js/vue/ErrorHandling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorHandling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorHandling_vue_vue_type_template_id_4622b4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorHandling_vue_vue_type_template_id_4622b4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4622b4d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/ErrorHandling.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/ErrorHandling.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/vue/ErrorHandling.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorHandling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorHandling.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/ErrorHandling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorHandling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/vue/ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorHandling_vue_vue_type_template_id_4622b4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/ErrorHandling.vue?vue&type=template&id=4622b4d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorHandling_vue_vue_type_template_id_4622b4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorHandling_vue_vue_type_template_id_4622b4d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue/Permissionable.vue":
/*!*********************************************!*\
  !*** ./resources/js/vue/Permissionable.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permissionable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permissionable.vue?vue&type=script&lang=js& */ "./resources/js/vue/Permissionable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Permissionable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  "215aed70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/Permissionable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/Permissionable.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/vue/Permissionable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissionable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Permissionable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/Permissionable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissionable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/images/image-gallery.vue":
/*!**************************************************************!*\
  !*** ./resources/js/vue/components/images/image-gallery.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_gallery_vue_vue_type_template_id_662ec8cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true& */ "./resources/js/vue/components/images/image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true&");
/* harmony import */ var _image_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-gallery.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/images/image-gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var cropperjs_dist_cropper_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cropperjs/dist/cropper.css?vue&type=style&index=0&lang=css& */ "./node_modules/cropperjs/dist/cropper.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true& */ "./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _image_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_gallery_vue_vue_type_template_id_662ec8cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_gallery_vue_vue_type_template_id_662ec8cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "662ec8cb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/images/image-gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/images/image-gallery.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/vue/components/images/image-gallery.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=style&index=1&id=662ec8cb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_style_index_1_id_662ec8cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/vue/components/images/image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/vue/components/images/image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_template_id_662ec8cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/image-gallery.vue?vue&type=template&id=662ec8cb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_template_id_662ec8cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_gallery_vue_vue_type_template_id_662ec8cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue/components/images/simple-image-uploader.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/vue/components/images/simple-image-uploader.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_image_uploader_vue_vue_type_template_id_04f8b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true& */ "./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true&");
/* harmony import */ var _simple_image_uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple-image-uploader.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _simple_image_uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simple_image_uploader_vue_vue_type_template_id_04f8b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simple_image_uploader_vue_vue_type_template_id_04f8b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04f8b0f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/images/simple-image-uploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_image_uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./simple-image-uploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_image_uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_image_uploader_vue_vue_type_template_id_04f8b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/images/simple-image-uploader.vue?vue&type=template&id=04f8b0f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_image_uploader_vue_vue_type_template_id_04f8b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_image_uploader_vue_vue_type_template_id_04f8b0f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue/layouts/alert.vue":
/*!********************************************!*\
  !*** ./resources/js/vue/layouts/alert.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_vue_vue_type_template_id_df518f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.vue?vue&type=template&id=df518f02&scoped=true& */ "./resources/js/vue/layouts/alert.vue?vue&type=template&id=df518f02&scoped=true&");
/* harmony import */ var _alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.vue?vue&type=script&lang=js& */ "./resources/js/vue/layouts/alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _alert_vue_vue_type_template_id_df518f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _alert_vue_vue_type_template_id_df518f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df518f02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/layouts/alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/layouts/alert.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/vue/layouts/alert.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/layouts/alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/layouts/alert.vue?vue&type=template&id=df518f02&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/vue/layouts/alert.vue?vue&type=template&id=df518f02&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_template_id_df518f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./alert.vue?vue&type=template&id=df518f02&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/layouts/alert.vue?vue&type=template&id=df518f02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_template_id_df518f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_template_id_df518f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);