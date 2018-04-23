/*Controllers to check if a no is prime or not*/
app.controller("palindrome", function() {

  var main = this;//Create a context

  //function to check if prime or not
  this.check = function(str) {
    if(str == undefined) {
      main.message = "Enter a valid string";
    }
    else if (str == str.split('').reverse().join('')) {
      main.message = str +" is palindrome";
    }
    else {
        main.message = str  +" is not palindrome";
    }
  }
});
