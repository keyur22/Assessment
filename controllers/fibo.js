/*COntrollers to check if a no is prime or not*/
app.controller("fibo", function(){

  var main = this;//Create a context

  //function to check if prime or not
  this.generate = function(number){
    var i;
    var fib = []; // Initialize array!
    var final = [];

    fib[0] = 0;
    fib[1] = 1;

    if(number == undefined){
      main.message = "Enter a valid number";
    }
    else if(number == 0){
      main.message = "0";
    }
    else if(number == 1){
      final.push(fib[0]);
      final.push(fib[1]);
      main.message=final.toString();
    }
    else{
      final.push(fib[0]);
      final.push(fib[1]);
      for(i=2; i<=number; i++)
      {
          // Next fibonacci number = previous + one before previous
          fib[i] = fib[i-2] + fib[i-1];
          if(fib[i] > number ){
            break;
          }
          final.push(fib[i]);
      }
      main.message=final.toString();
    }

  }

});
