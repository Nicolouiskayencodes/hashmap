import { LinkedList } from "./linkedlist.js";

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }
//
export function HashMap() {
  let buckets = Array(16);
  function getBuckets() {
    let newArray = Array(buckets.length)
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== undefined) {
        newArray[i] = buckets[i].getHead();
      }
    }
    return newArray;
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
    if(!has(key)) {
      if (getCapacity() > (buckets.length*0.75)) {
        let half = buckets.length;
        let entries = getEntries();
        clear();
        let extension = buckets.concat(Array(half));
        buckets = extension
        entries.forEach(([k, v]) => {
          set(k,v);
        })
      }
    }

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
  function remove(key) {
    let index = -1;
    let correctBucket = [];
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        if (buckets[i].contain(key)){
          index = buckets[i].find(key);
          correctBucket = buckets[i];
        }
      }
    }
    if (index === -1){
      return false;
    }

    correctBucket.removeAt(index);
    return true;
  }
  function length(){
    let length = 0
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        length+=buckets[i].size();
      }
    }
    return length;
  }
  function clear() {
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        delete buckets[i]
      }
    }
  }
  function getKeys(){
    let array = [];
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        let bucket = buckets[i].getHead()
        function printKeys(node){
          if (node === null){
            return;
          } else {
            let keys = Object.keys(node);
            keys.forEach((key)=>{
              if (key !== "next"){
                array.push(key);
              }
            })
            return printKeys(node.next)
          }
        }
        printKeys(bucket);
      }
    }
    return array;
  }
  function getValues(){
    let array = [];
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        let bucket = buckets[i].getHead()
        function printKeys(node){
          if (node === null){
            return;
          } else {
            let keys = Object.keys(node);
            keys.forEach((key)=>{
              if (key !== "next"){
                array.push(node[key]);
              }
            })
            return printKeys(node.next)
          }
        }
        printKeys(bucket);
      }
    }
    return array;
  }
  function getEntries(){
    let array = [];
    for (let i=0; i<buckets.length; i++) {
      if(buckets[i] !== undefined){
        let bucket = buckets[i].getHead()
        function printKeys(node){
          if (node === null){
            return;
          } else {
            let keys = Object.keys(node);
            keys.forEach((key)=>{
              if (key !== "next"){
                let item = [key, node[key]]
                array.push(item);
              }
            })
            return printKeys(node.next)
          }
        }
        printKeys(bucket);
      }
    }
    return array;
  }
  

  return {getBuckets, hash, set, get, has, remove, length, clear, getKeys, getValues, getEntries}

}
