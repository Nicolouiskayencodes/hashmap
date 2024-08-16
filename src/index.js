import './style.css';
import { HashMap } from './hashmap.js';
import { HashSet } from './hashset.js';

let test = HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('cat', 'black')
test.set('car', 'black')
test.set('jarjar', 'pink')
test.set('fish', 'blue')
console.log(test.length())
console.log(test.getBuckets())
test.set('sun','yellow')
console.log(test.length())
console.log(test.getBuckets());
console.log(test.getEntries())
console.log(test.remove('cat'))
console.log(test.remove('clay'))
console.log(test.getBuckets());

let set = HashSet();
set.set('apple');
set.set('dog');
set.set('wood');
set.set('fish');
set.set('grape');
set.set('hoard');
set.set('hand');
set.set('lampoon');
set.set('snack');
set.set('eat');
set.set('phone');
set.set('mouse');
set.set('large');
console.log(set.getBuckets());
console.log(set.length())
console.log(set.remove('dog'))
console.log(set.remove('cat'))
console.log(set.getBuckets());