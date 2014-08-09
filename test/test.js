(function() {
	//var SC = require('../src/SCjs');

	var Root = SC.define({
		name: 'root',
		sayName: function() {
			console.log(this.name);
		}
	});

	var Level1 = SC.define(Root, {
		name: 'level1'
	}, function() {});


	var r = SC.create(Root, {
		test: function() {
			console.log('i am a root');
		}
	});

	var l1 = SC.create(Level1, {
		name: 'level1-name'
	});



	console.log(r);
	console.log(l1);

	r.sayName();
	r.test();

	l1.sayName();
})();