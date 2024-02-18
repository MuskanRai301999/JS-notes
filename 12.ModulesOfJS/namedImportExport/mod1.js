import {obj} from './mod2.js';
import {add} from './mod2.js';
//default import curly braces are not required as it is default import
import a from './mod2.js'
//Instead of importing each function or variables one by one you can import them in one go
//import {obj,add} from './mod2.js';

//when you have declared obj in mod2.js and want to import it mod1.js as obj1 you can
//import {obj as obj1} from './mod2.js';
//after this you can't access obj but obj1.

//In case there are multiple imports and u want to import everything so you can
//import * as something from './mod2.js';
//Something word will create an object so when we want to access the function sand variables it should be

//console.log(something); it will access add and obj as its values
//console.log(something.obj);
//console.log(something.add(2,3));




console.log(obj);
console.log(add(2,3));
console.log(a);//not exportted

//If any module is not exporting something so we can't use that functions and variables .. they are private to that module

//In order to use anything fron one file which is present in other file,you just have to use export keyword
//This is called named export
//named exports or imports can be done multiple times, but default export/import can be done only once.
    
// function add(i,j){
//         return i+j;    
//     }