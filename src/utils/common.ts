// 防抖
export const Debounce = (fn:Function, t:number) => {
  let delay = t || 500;
  let timer:any;
  return function (this:any) {
    let args = arguments;
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  }
};


// 节流
export const Throttle = (fn:Function, t:number) => {
  let last:number;
  let timer:any;
  let interval = t || 500;
  return function (this:any) {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval);
    } else {
      last = now;
      fn.apply(this, args);
    }
  }
};