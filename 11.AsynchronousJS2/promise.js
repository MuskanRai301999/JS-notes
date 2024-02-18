// const request = new Promise(executor:fulfilled value , reject:unfullfilled value);

const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise initiated");
    //resolve("Promise fulfilled");
    //resolve({firstName:"Muskan",lastName:"rai"});
    reject("Request has been rejected");
    //[[Prototype]]
    // :
    // Promise
    // [[PromiseState]]
    // :
    // "fulfilled"
    // [[PromiseResult]]
    // :
    // "Promise fulfilled"
  }, 1000);
});

//Suppose i want to use the resolve value somewhere the resolve value can be retrieved by attaching a then method on the promise
request.then((value) => {
  console.log(value);
}).catch((err)=>{
    console.log(err);
}).finally(()=>console.log("request completed"))
//By using catch ,we can handle the errors gracefully
console.log(request);

//.then()= when the request is fulfilled
//.catch()= when we are performing the operation and there is some error
//.finally()= whether it is fulfilled or rejected does't matter. It will be executed.