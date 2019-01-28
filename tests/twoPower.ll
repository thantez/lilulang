(int x, int z)=function twoPower(int a){
   const int c = 2;
   if a == 1 {
      x = 1;
   } else {
      a = a-1;
      (x, z) = twoPower(a)*2;
   }
   return;
}

(int a) = function start() {
   string str = 'hello';
   str = 'hi';
   int x = 2;
   int b;
   read(x);
   (a, b) = twoPower(x);
   write(a);
   return;
}

type A{
   public int adad = 2;

   (int plused) = function plusOne(int adad){
      plused = adad + 1;
      return;
   }

   protected (int minused) = function minusOne(int adad){
      minused = adad - 1;
      if minused == 0 {
         minused = this.adad;
      }
      return;
   }
}

type B : A{
   int adad2 = 3;

   public (int plused) = function plusOne(int adad){
      plused = adad + 1;
      return;
   }

   protected (int minused) = function minusOne(int adad){
      minused = adad - 1;
      if minused == 0 {
         minused = this.adad;
      }
      return;
   }

   protected (int minus) = function minusOne(bool adad, float adad2){
      for int i = 0; i <= 2; i = i+1 {
         int z = 1;
      }
      while(adad>2){
         this.adad2 = 4.1;
      }
      switch adad {
         case 1:{
            int p = 2;
         }
         default:{
            minus = 2;
         }
      }
   }
}

type C : A{
   (int x) = function f2 (float y){
      x = 3;
      return;
   }
   (int x) = function y (float z){
      B b = allocate B();
      x = b.plusOne(1);
      return;
   }
}