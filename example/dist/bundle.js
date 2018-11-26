(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _index = require('../src/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.init();

},{"../src/index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Tab = {
	tabButtons: [].concat(_toConsumableArray(document.querySelectorAll('div[data-tab]'))),
	tabContent: [].concat(_toConsumableArray(document.querySelectorAll('.tab-content'))),

	init: function init() {
		var _this = this;

		this.tabButtons.forEach(function (e) {
			e.addEventListener('click', function () {
				// Toggle tab content if the clicked tab is not active
				if (!e.classList.contains('active')) {
					// Set clicked tab as active
					// Remove active from the other tabs
					_this.tabButtons.map(function (tab) {
						return tab === e ? tab.classList.add('active') : tab.classList.remove('active');
					});
					_this.tabContent.map(function (tab) {
						return tab.id === e.dataset.tab ? tab.classList.add('active') : tab.classList.remove('active');
					});
				}
			});
		});
	}
};

exports.default = Tab;

},{}]},{},[1]);
