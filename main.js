function jam() {
  var a = document.getElementById('jam'),
  d = new Date(), h, m, s;
  h = d.getHours();
  m = set(d.getMinutes());
  s = set(d.getSeconds());

  a.innerHTML = h +':'+ m +':'+ s;

  setTimeout('jam()', 1000);
 }

 function set(a) {
  a = a < 10 ? '0'+ a : a;
  return a;
 }