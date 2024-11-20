var x = 0 // A global variable, because it is not in any function

function fun(chara) {
  // local variables
  var z = 'foxes'
  var r = 'birds'
  var m = 'fish'

  function child() {
    var r = 'monkeys' // This variable is local and does not affect the "birds" r of the parent function.
    z = 'penguins' // Closure: Child function is able to access the variables of the parent function.
    console.log(m) // This line will raise a ReferenceError exception, because the value of z is no longer available
}

twenty = 20 // This variable is declared on the next line, but usable anywhere in the function, even before, as here
var twenty

        child(twenty)
        return child// We can use x here, because it is global
        }

fun()

console.log(fun)
alert



