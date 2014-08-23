# SCjs - A Simple Class System Library for JavaScript 

> * Designed for JavaScript OOP
> * Easy to use
> * Only 2KB

---

##Qiuck Start
```javascript
var SC = require('../src/SCjs');

var Root = SC.define({
        name: 'root',
        sayName: function() {
            console.log(this.name);
        }
    })

var Level1 = SC.define(Root, {
        name: 'level1',
        doLevel1: function() {
            console.log('do level1');
        }
    }, function() {
        console.log('level1 init');
    })

var l1 = SC.create(Level1, {
        name: 'level1-name'
    });
    
l1.sayName();//level1-name
l1.doLevel1();//do level1
```
---
##Reference

| Method        | Arguments   |  Return  | Description |
| --------   | -----  | ----  |-------|
| define([parent],[conf],[initial])     | `parent[SC CLASS]`<br> The Super Class<br><br>`conf[Object]`<br>The Object will be allpied to any instance of this class<br><br>`initial[Function]`<br>Will be called after instantiate an object |  A SC CLASS |Use it to define a SC class|
| create(clz,[conf])| `clz[SC CLASS]`<br>SC CLASS<br><br>`conf[Object]`<br>The Object will be applied to this instance    |   An instance of this class   |Use it to  get instance of this class|
| isInstanceof(obj,clz)        |`obj[Object]`<br>The object  to be judged<br><br>`clz[SC CLASS]`<br>    |  Boolean  |Judge if a object is an instance of a SC CLASS|
