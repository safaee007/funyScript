(() => {
  'use strict';

  console.log('-----');

  console.log('HI');
  let i = 0;
  let r=0;
  
  const t = Date.now();
  for(;Date.now() - t < 2000;) {
    for (let j=0; j<100000;j++) {
      r = Math.random();
      i++;
    }
  }
  console.log(i);

})();

(function(){
  for(const arg of arguments)
  {
    console.warn(arg);
  }
})(100,200,300)
