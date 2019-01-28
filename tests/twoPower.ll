(int x, int z)=function twoPower(int a){
   const int c = 2;
   if a == 1 {
      x = 1;
   } else {
      a = a-1;
      (x, z) = twoPower(a)*(2);
   }
   return;
}

(int a) = function start() {
   int x = 2;
   int b;
   read(x);
   (a, b) = twoPower(x);
   write(a);
   return;
}
