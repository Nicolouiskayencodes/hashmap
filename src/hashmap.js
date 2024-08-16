import { LinkedList } from "./linkedlist.js";

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }
//
function HashMap() {
  let buckets = Array(16);
  function getBuckets() {
    buckets.forEach((element)=>{
      console.log(element.getHead())
    })
    return buckets;
  }
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  function getCapacity() {
    let capacity = 0;
    buckets.forEach((element) => {
      if (element !== undefined) {
        capacity++
      }
    })
    return capacity;
  }
  function set(key,value) {
    // if (getCapacity() > (buckets.length*0.8)){
    //   let half = buckets.length;
    //   let extension = buckets.concat(Array(half));

    //   buckets = extension
    // }
    let hashCode = hash(key);
    let index = (hashCode%buckets.length);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (buckets[index] === undefined) {
      buckets[index] = LinkedList();
    }
    if (buckets[index].contain(key) === false){
      buckets[index].append(key, value);
    } else if (buckets[index].contain(key) === true){
      let depth = buckets[index].find(key)
      buckets[index].replaceAt(key,value, depth)
    }
  }
  function get(key) {
    let index = -1;
    let correctBucket = [];
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        if (buckets[i].contain(key)){
          index = buckets[i].find(key);
          correctBucket = buckets[i].getHead();
        }
      }
    }
    if (index === -1){
      return null;
    }

    for (let i=0; i<index; i++){
      correctBucket = correctBucket.next
    }
    return correctBucket[key];
  }
  function has(key){
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        if (buckets[i].contain(key)){
          return true
        }
      }
    }
    return false;
  }

  return {getBuckets, hash, set, get, has}
}

let hash = HashMap();
hash.set("hi", "you");
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