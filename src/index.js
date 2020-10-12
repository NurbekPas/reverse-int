module.exports = function reverse (n) {
    let ar = n;
    if(ar < 0 ){
        ar = ar * (-1);
    }
    ar = String(ar);
  let a = ar.split('');
  let res = '';
  for( let i = a.length-1; i >= 0 ; i--){
    res = `${res}${a[i]}`;
  }
  res = Number(res);

  return res;
}
