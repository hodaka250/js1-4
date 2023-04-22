let number=1;
while(number<=100){
   if(number%3===0 && number%5===0){
      console.log('FizzBizz!!');
      number++;
      continue;
   }else if(number%5===0){
      console.log('Bizz!');
      number++;
      continue;
   }else if(number%3===0){
      console.log('Fizz!');
      number++;
      continue;
   }
   console.log(number);
   number++;
}