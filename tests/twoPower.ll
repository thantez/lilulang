(int a) = function start() {
   int x;
   read(x);
   a = twoPower(x);
   write(a);
   return;
}

(int x)=function twoPower(int a){
   if a == 1 {
      x = 1;
   } else {
      a = a-1;
      x = twoPower(a)*2;
   }
   return;
}