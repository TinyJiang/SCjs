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

### **define([parent],[conf],[initial])**
#### Arguments

*   parent : SC CLASS 
   *Super class*
*   conf : Object 
   *This object will be allpied to any instance of this class*
*   initial : Function
  *This function Will be called after instantiate an object*

#### Return

*   SC CLASS

### **create(clz,[conf])**
#### Arguments

*   clz : SC CLASS
*   conf : Object 
    *This object will be applied to current instance*

#### Return
*   Object: An instance of this class

### **isInstanceof(obj,clz)**
#### Arguments
*   obj : Object
    *The object to be judged*
*   clz : SC CLASS

#### Return

* Boolean: If this obj is an instance of the SC CLASS