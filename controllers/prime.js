/*Controllers to check if a no is prime or not*/
app.controller("prime", function(){

  var main = this;//Create a context

  //function to check if prime or not
  this.check = function(number){
    let c = 0;//dummy variable
    console.log(number);
    if(number == undefined){
      main.message = "Enter a valid number";
    }
    else if(number == 1){
      main.message = "Not a prime number";
    }
    else{
      for(i = 2; i < number; i++){
        if( number % i == 0){
          c = 1;
        }
      }
      if( c == 1){
        main.message = "Not a prime number"
      }
      else{
        main.message = "Prime number";
      }
    }
  }

});
