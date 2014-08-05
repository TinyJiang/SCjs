/**
SCjs
Simple Class for JavaScript
author Tiny Jiang
*/
(function() {
	var SC = {},
		_ = {},
		classCache = {},
		count = 0,
		errs;

	errs = {
		idExsist: function(id) {
			return new RangeError('The id :' + id + ' is exsist in the context, please try anthor one.')
		},
		idType: function() {
			return new TypeError('The id must be String type.');
		}
	};

	/**
	 *判断class是否为SCclass
	 *
	 */
	_.isSC = function(clz) {
		return typeof clz == 'function' && classCache[clz.id] == clz;
	};

	_.parseSC = function(clz, id) {
		if typeof clz != 'function'
		return
		id = id ? id : ('sc' + (count++));
		if (typeof id != 'string') {
			throw errs.idType()
			return
		}

		if (classCache[id]) {
			throw errs.idExsist(id)
			return
		}

		clz.id = id;
		classCache[id] = clz;
		return clz;
	};

	SC.define = function(parent, conf, initial) {
		parent = parent ? (_.isSC(parent) ? parent : _.parseSC(parent)) : _.parseSC(function() {});



	};

	SC.create = function(clz, conf) {

	};



})()