import FS from './fs/main.mjs'
import wasm from './fs/wasmBinary.mjs'
import api from './fs/api.mjs'
let container = null ;
let files = null;
let workerFS = FS({ wasmBinary: wasm })
workerFS.then(async (Module)=> {
  let FS = Module.FS
  FS.mkdir('/data');
  FS.api = await api(FS)
  FS.mount(Module.FS.filesystems.WORKERFS, {
    files: files,
    blobs: []
  }, '/data');

  // console.log('wfs', FS)
})

self.onmessage = (events) => {
  console.log(events)
  self.postMessage("Got it");
}

// function factorial(num){
//   for(var i = num - 1; i > 0; i--){
//     num *= i;
//   }
//   return num;
// }
// let count = 0
// let timerId = setTimeout(function tick() {
//   factorial(1000000000)
//   self.postMessage({
//     tick: count
//   });
//   count = (count === 100) ? 0 : count + 1
//   timerId = setTimeout(tick, 80);
// }, 80);