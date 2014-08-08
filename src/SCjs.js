/**
SCjs
Simple Class for JavaScript
author Tiny Jiang
*/
(function() {
    var SC = {},
        _ = {},
        classCache = {},
        rootObj,
        count = 0,
        errs;

    rootPrototype = {};

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
        return SC.isType(clz, 'Object') && classCache[clz.id] == clz;
    };

    _.getID = function(id) {
        id = SC.isType(id, 'String') ? id : ('SC-' + (count++));
        if (classCache[id]) {
            throw errs.idExsist(id)
            return
        }
        return id;
    }


    _.parseSC = function(fun, id) {
        var clz;
        if !SC.isType(fun, 'Function')
        return
        clz = {
            id: _.getID(id),
            construcotr: fun,
        };
        classCache[id] = clz;
        return clz;
    };

    /**
     *类型验证
     */
    SC.isType = function(obj, type) {
        return type == 'undefined' ? (typeof obj == type) : {}.toString.call(obj) == ('[object ' + type + ']');
    };

    /**
     *克隆
     */
    SC.clone = function(obj, isDeep) {
        var i, o;
        isDeep = _.isType(isDeep, 'Boolean') && isDeep;
        if (_.isType(obj, 'Object') || _.isType(obj, 'Array')) {
            o = _.isType(obj, 'Object') ? {} : [];
            for (i in obj) {
                if (obj.hasOwnProperty(i)) {
                    o[i] = isDeep ? _.clone(obj[i]) : obj[i];
                }
            }
        } else {
            o = obj;
        }
        return o;
    };

    /**/
    SC.define = function(parent, conf, initial) {
        var clz, _proto, c_obj = {},
            cst, i;
        if (!_.isSC(parent)) {
            conf = parent;
            initial = conf;
            parent = null;
        }
        conf = SC.isType(conf, 'Object') ? conf : {};
        initial = SC.isType(initial, 'Function') ? initial : function() {};

        _proto = SC.clone((parent && _.isSC(parent)) ? paernt.construcotr.prototype : rootPrototype); //没有父节点时使用根节点为prototype

        for (i in conf) {
            if (conf.hasOwnProperty(i)) {
                //将function放入prototype中，其余放入待初始化对象配置中
                if (SC.isType(conf[i], 'function')) {
                    _proto[i] = conf[i];
                } else {
                    c_obj[i] = conf[i];
                }
            }
        }


        cst = function() {
            var me = this,
                i;
            for (i in c_obj) {
                if (c_obj.hasOwnProperty(i)) {
                    me[i] = SC.clone(c_obj[i]);
                }
            }
            initial.call(me);
        };
        cst.prototype = _proto;
        cst.prototype.construcotr = cst;

        return _.parseSC(cst, conf.id)
    };

    SC.create = function(clz, conf) {


    };



})()