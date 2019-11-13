interface base {[index: number] : number[]}

function getScreenSpecs<T extends base>(obj: T): number[]{
  let sizes = Object.getOwnPropertyNames(obj);
  for(let i = sizes.length - 1; i > -1; i --){
    let size = parseInt(sizes[i])
    if(window.innerWidth >= size) { return obj[size] }
  }
  throw new Error("Invalid Path");
}

export default getScreenSpecs
