(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-nav-tabs/themes/vue-tabs.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-nav-tabs/themes/vue-tabs.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vue-tabs.stacked {\n  display: flex; }\n\n.vue-tabs .tabs__link {\n  text-decoration: none;\n  color: gray; }\n\n.vue-tabs .nav {\n  margin-bottom: 0;\n  margin-top: 0;\n  padding-left: 0;\n  list-style: none; }\n  .vue-tabs .nav:before, .vue-tabs .nav:after {\n    content: \" \";\n    display: table; }\n  .vue-tabs .nav:after {\n    clear: both; }\n  .vue-tabs .nav > li {\n    position: relative;\n    display: block; }\n    .vue-tabs .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .vue-tabs .nav > li > a:hover, .vue-tabs .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .vue-tabs .nav > li span.title {\n      display: flex;\n      justify-content: center; }\n    .vue-tabs .nav > li.disabled > a {\n      color: #777777; }\n      .vue-tabs .nav > li.disabled > a:hover, .vue-tabs .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        cursor: not-allowed;\n        background-color: transparent;\n        border-color: transparent; }\n  .vue-tabs .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .vue-tabs .nav > li > a > img {\n    max-width: none; }\n\n.vue-tabs .nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .vue-tabs .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .vue-tabs .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .vue-tabs .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .vue-tabs .nav-tabs > li.active > a, .vue-tabs .nav-tabs > li.active > a:hover, .vue-tabs .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.vue-tabs .nav-pills > li {\n  float: left; }\n  .vue-tabs .nav-pills > li > a {\n    border-radius: 4px; }\n  .vue-tabs .nav-pills > li + li {\n    margin-left: 2px; }\n  .vue-tabs .nav-pills > li.active > a, .vue-tabs .nav-pills > li.active > a:hover, .vue-tabs .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.vue-tabs .nav-stacked > li {\n  float: none; }\n  .vue-tabs .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.vue-tabs .nav-justified, .vue-tabs .nav-tabs.nav-justified {\n  width: 100%; }\n  .vue-tabs .nav-justified > li, .vue-tabs .nav-tabs.nav-justified > li {\n    float: none; }\n    .vue-tabs .nav-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .vue-tabs .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .vue-tabs .nav-justified > li, .vue-tabs .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .vue-tabs .nav-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.vue-tabs .nav-tabs-justified, .vue-tabs .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .vue-tabs .nav-tabs-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .vue-tabs .nav-tabs-justified > .active > a, .vue-tabs .nav-tabs.nav-justified > .active > a,\n  .vue-tabs .nav-tabs-justified > .active > a:hover, .vue-tabs .nav-tabs.nav-justified > .active > a:hover,\n  .vue-tabs .nav-tabs-justified > .active > a:focus, .vue-tabs .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .vue-tabs .nav-tabs-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .vue-tabs .nav-tabs-justified > .active > a, .vue-tabs .nav-tabs.nav-justified > .active > a,\n    .vue-tabs .nav-tabs-justified > .active > a:hover, .vue-tabs .nav-tabs.nav-justified > .active > a:hover,\n    .vue-tabs .nav-tabs-justified > .active > a:focus, .vue-tabs .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.vue-tabs .tab-content > .tab-pane {\n  display: none; }\n\n.vue-tabs .tab-content > .active {\n  display: block; }\n\n.vue-tabs section[aria-hidden=\"true\"] {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-nav-tabs/dist/vue-tabs.common.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-nav-tabs/dist/vue-tabs.common.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-nav-tabs v0.5.7
 * (c) 2018-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _mergeJSXProps = _interopDefault(__webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js"));

var VueTabs = {
    name: 'vue-tabs',
    props: {
        activeTabColor: String,
        activeTextColor: String,
        disabledColor: String,
        disabledTextColor: String,
        /**
         * Tab title position: center | bottom | top
         */
        textPosition: {
            type: String,
            default: 'center'
        },
        /**
         * Tab type: tabs | pills
         */
        type: {
            type: String,
            default: 'tabs'
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        /**
         * Centers the tabs and makes the container div full width
         */
        centered: Boolean,
        value: [String, Number, Object]
    },
    data: function data() {
        return {
            activeTabIndex: 0,
            tabs: []
        };
    },

    computed: {
        isTabShape: function isTabShape() {
            return this.type === 'tabs';
        },
        isStacked: function isStacked() {
            return this.direction === 'vertical';
        },
        classList: function classList() {
            var navType = this.isTabShape ? 'nav-tabs' : 'nav-pills';
            var centerClass = this.centered ? 'nav-justified' : '';
            var isStacked = this.isStacked ? 'nav-stacked' : '';
            return 'nav ' + navType + ' ' + centerClass + ' ' + isStacked;
        },
        stackedClass: function stackedClass() {
            return this.isStacked ? 'stacked' : '';
        },
        activeTabStyle: function activeTabStyle() {
            return {
                backgroundColor: this.activeTabColor,
                color: this.activeTextColor
            };
        }
    },
    methods: {
        navigateToTab: function navigateToTab(index, route) {
            this.changeTab(this.activeTabIndex, index, route);
        },
        activateTab: function activateTab(index) {
            this.activeTabIndex = index;
            var tab = this.tabs[index];
            tab.active = true;
            this.$emit('input', tab.title);
        },
        changeTab: function changeTab(oldIndex, newIndex, route) {
            var oldTab = this.tabs[oldIndex] || {};
            var newTab = this.tabs[newIndex];
            if (newTab.disabled) return;
            this.activeTabIndex = newIndex;
            oldTab.active = false;
            newTab.active = true;
            this.$emit('input', this.tabs[newIndex].title);
            this.$emit('tab-change', newIndex, newTab, oldTab);
            this.tryChangeRoute(route);
        },
        tryChangeRoute: function tryChangeRoute(route) {
            if (this.$router && route) {
                this.$router.push(route);
            }
        },
        addTab: function addTab(item) {
            var index = this.$slots.default.indexOf(item.$vnode);
            this.tabs.splice(index, 0, item);
        },
        removeTab: function removeTab(item) {
            var tabs = this.tabs;
            var index = tabs.indexOf(item);
            if (index > -1) {
                tabs.splice(index, 1);
            }
        },
        getTabs: function getTabs() {
            if (this.$slots.default) {
                return this.$slots.default.filter(function (comp) {
                    return comp.componentOptions;
                });
            }
            return [];
        },
        findTabAndActivate: function findTabAndActivate(tabNameOrIndex) {
            var indexToActivate = this.tabs.findIndex(function (tab, index) {
                return tab.title === tabNameOrIndex || index === tabNameOrIndex;
            });
            if (indexToActivate === this.activeTabIndex) return;
            if (indexToActivate !== -1) {
                this.changeTab(this.activeTabIndex, indexToActivate);
            } else {
                this.changeTab(this.activeTabIndex, 0);
            }
        },
        renderTabTitle: function renderTabTitle(index) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
            var h = this.$createElement;

            if (this.tabs.length === 0) return;
            var tab = this.tabs[index];
            var active = tab.active,
                title = tab.title;

            var titleStyles = { color: this.activeTabColor };
            if (position === 'center') titleStyles.color = this.activeTextColor;
            var simpleTitle = h(
                'span',
                { 'class': 'title title_' + position, style: active ? titleStyles : {} },
                [position === 'center' && this.renderIcon(index), title]
            );

            if (tab.$slots.title) return tab.$slots.title;
            if (tab.$scopedSlots.title) return tab.$scopedSlots.title({
                active: active,
                title: title,
                position: position,
                icon: tab.icon,
                data: tab.tabData
            });
            return simpleTitle;
        },
        renderIcon: function renderIcon(index) {
            var h = this.$createElement;

            if (this.tabs.length === 0) return;
            var tab = this.tabs[index];
            var icon = tab.icon;

            var simpleIcon = h(
                'i',
                { 'class': icon },
                ['\xA0']
            );
            if (!tab.$slots.title && icon) return simpleIcon;
        },
        tabStyles: function tabStyles(tab) {
            if (tab.disabled) {
                return {
                    backgroundColor: this.disabledColor,
                    color: this.disabledTextColor
                };
            }
            return {};
        },
        renderTabs: function renderTabs() {
            var _this = this;

            var h = this.$createElement;

            return this.tabs.map(function (tab, index) {
                if (!tab) return;
                var route = tab.route,
                    id = tab.id,
                    title = tab.title,
                    icon = tab.icon,
                    tabId = tab.tabId;

                var active = _this.activeTabIndex === index;
                return h(
                    'li',
                    _mergeJSXProps([{
                        attrs: { name: 'tab',
                            id: 't-' + tabId,
                            'aria-selected': active,
                            'aria-controls': 'p-' + tabId,
                            role: 'tab' },

                        'class': ['tab', { active: active }, { disabled: tab.disabled }],
                        key: title }, {
                        on: {
                            'click': function click($event) {
                                for (var _len = arguments.length, attrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                    attrs[_key - 1] = arguments[_key];
                                }

                                (function () {
                                    return !tab.disabled && _this.navigateToTab(index, route);
                                }).apply(undefined, [$event].concat(attrs));
                            }
                        }
                    }]),
                    [_this.textPosition === 'top' && _this.renderTabTitle(index, _this.textPosition), h(
                        'a',
                        _mergeJSXProps([{
                            attrs: { href: '#',

                                role: 'tab' },

                            style: active ? _this.activeTabStyle : _this.tabStyles(tab),
                            'class': [{ 'active_tab': active }, 'tabs__link'] }, {
                            on: {
                                'click': function click($event) {
                                    for (var _len2 = arguments.length, attrs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                        attrs[_key2 - 1] = arguments[_key2];
                                    }

                                    (function (e) {
                                        e.preventDefault();
                                        return false;
                                    }).apply(undefined, [$event].concat(attrs));
                                }
                            }
                        }]),
                        [_this.textPosition !== 'center' && !tab.$slots.title && _this.renderIcon(index), _this.textPosition === 'center' && _this.renderTabTitle(index, _this.textPosition)]
                    ), _this.textPosition === 'bottom' && _this.renderTabTitle(index, _this.textPosition)]
                );
            });
        }
    },
    render: function render() {
        var h = arguments[0];

        var tabList = this.renderTabs();
        return h(
            'div',
            { 'class': ['vue-tabs', this.stackedClass] },
            [h(
                'div',
                { 'class': [{ 'nav-tabs-navigation': !this.isStacked }, { 'left-vertical-tabs': this.isStacked }] },
                [h(
                    'div',
                    { 'class': ['nav-tabs-wrapper', this.stackedClass] },
                    [h(
                        'ul',
                        { 'class': this.classList, attrs: { role: 'tablist' }
                        },
                        [tabList]
                    )]
                )]
            ), h(
                'div',
                { 'class': ['tab-content', { 'right-text-tabs': this.isStacked }] },
                [this.$slots.default]
            )]
        );
    },

    watch: {
        tabs: function tabs(newList) {
            if (newList.length > 0 && !this.value) {
                if (newList.length <= this.activeTabIndex) {
                    this.activateTab(this.activeTabIndex - 1);
                } else {
                    this.activateTab(this.activeTabIndex);
                }
            }
            if (newList.length > 0 && this.value) {
                this.findTabAndActivate(this.value);
            }
        },
        value: function value(newVal) {
            this.findTabAndActivate(newVal);
        }
    }
};

var VTab = {
    name: 'v-tab',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        tabData: {
            default: null
        },
        /***
         * Function to execute before tab switch. Return value must be boolean
         * If the return result is false, tab switch is restricted
         */
        beforeChange: {
            type: Function
        },
        id: String,
        route: {
            type: [String, Object]
        },
        disabled: Boolean,
        transitionName: String,
        transitionMode: String
    },
    computed: {
        isValidParent: function isValidParent() {
            return this.$parent.$options.name === 'vue-tabs';
        },
        hash: function hash() {
            return '#' + this.id;
        },
        tabId: function tabId() {
            return this.id ? this.id : this.title;
        }
    },
    data: function data() {
        return {
            active: false,
            validationError: null
        };
    },
    mounted: function mounted() {
        this.$parent.addTab(this);
    },
    destroyed: function destroyed() {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$parent.removeTab(this);
    },
    render: function render() {
        var h = arguments[0];

        return h(
            'section',
            { 'class': 'tab-container',
                attrs: { id: 'p-' + this.tabId,
                    'aria-labelledby': 't-' + this.tabId,
                    role: 'tabpanel' },
                directives: [{
                    name: 'show',
                    value: this.active
                }]
            },
            [this.$slots.default]
        );
    }
};

var VueTabsPlugin = {
  install: function install(Vue) {
    Vue.component('vue-tabs', VueTabs);
    Vue.component('v-tab', VTab);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTabsPlugin);
  window.VueTabs = VueTabsPlugin;
}

exports['default'] = VueTabsPlugin;
exports.VueTabs = VueTabs;
exports.VTab = VTab;


/***/ }),

/***/ "./node_modules/vue-nav-tabs/themes/vue-tabs.css":
/*!*******************************************************!*\
  !*** ./node_modules/vue-nav-tabs/themes/vue-tabs.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-tabs.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-nav-tabs/themes/vue-tabs.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);