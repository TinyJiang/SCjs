(function() {
    //var SC = require('../src/SCjs');

    var Root = SC.define({
        name: 'root',
        sayName: function() {
            console.log(this.name);
        }
    });

    var Level1 = SC.define(Root, {
        name: 'level1',
        doLevel1: function() {
            console.log('do level1');
        }
    }, function() {
        console.log('level1 init');
    });

    var Level2 = SC.define(Level1, {}, function() {
        console.log(this.aaa);
    });


    var r = SC.create(Root, {
        test: function() {
            console.log('i am a root');
        }
    });

    var l1 = SC.create(Level1, {
        name: 'level1-name'
    });

    var l2 = SC.create(Level2, {
        aaa: 'aaaaa'
    });

    console.log(SC.isInstanceof(l1, Root));
    console.log(SC.isInstanceof(l1, Level1));
    console.log(SC.isInstanceof(l2, Level2));

    r.sayName();
    r.test();

    l1.sayName();

    l2.doLevel1();
    l2.sayName();
})();