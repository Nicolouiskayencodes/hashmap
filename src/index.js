import './style.css';
import { HashMap } from './hashmap.js';

let hash = HashMap();
hash.set("hi", "you");
console.log(hash.length())
hash.set("hi", "hi");
hash.set("oy", "afd");
hash.set("yamate", "adfaff");
hash.set("carriba", "ggadf");
hash.set("norm", "daggd");
hash.set("hello", "teehee");
hash.set("groan", "yahpp")
hash.set("lalala", "nawwww")
hash.set("omg", "bithc");
hash.set("adgagad", "dagfgd");
hash.set("opoppoodidk", "daggd");
hash.set("adfaggggggeer", "daggd");
hash.set("pppdaofoiugjhea", "daggd");
hash.set("t", "daggd");
hash.set("dooooff[[[[d", "daggd");
hash.set("lllkkdkkdd", "daggd");
hash.set("tttrriiirrir", "daggd");
hash.set("llkfjhfhgyie", "daggd");
hash.set("fioshriavgf", "daggd");
hash.set("lorem", "daggd");
hash.set("ipsum", "daggd");
hash.set("goootthadfa", "daggd");
hash.set("poiurekd", "daggd");
hash.set("woepriurbasdfa", "daggd");
hash.set("liabbdfope", "daggd");
hash.set("qwuwur", "daggd");
hash.set("3213123", "daggd");
hash.set("2", "daggd");
hash.set("eaiieiuegwiub", "daggd");
hash.set("pppihabeiubiug", "daggd");
hash.set("feeieieieieie", "daggd");
hash.set("hi", "boyo");
hash.set("groan", "teehee");
hash.set("groan", "nonono");
console.log(hash.getBuckets());
console.log(hash.get("groan"))
console.log(hash.get("qwuwur"))
console.log(hash.has("waffle"))

console.log(hash.has("groan"))
console.log(hash.get("groan"))
console.log(hash.length())
hash.remove("groan");
console.log(hash.has("groan"))
console.log(hash.get("groan"))
console.log(hash.length())
hash.clear();
console.log(hash.getBuckets());
hash.set("hi", "you");
console.log(hash.getBuckets());