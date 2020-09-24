window.onload = function(){
  document.getElementById("ptag-id").innerHTML = "Hello";

  const run = function () {  
    
      // Exercise 2
      var x = document.getElementById("ptag-id");
      x.style.color = "red";

      // Exercise 3 - Extra Credit
      const fruits = ['Apple', 'Banana', 'Orange'];
      var newElement1 = document.createElement("div");
      var newElement2 = document.createElement("ul");
      x.appendChild(newElement1);
      newElement1.appendChild(newElement2);
      var liHead = document.createElement("li");      
      newElement2.appendChild(liHead);
      liHead.innerHTML = "Fruit Cart";      
      // hint 1: how do we loop through items in JavaScript
      for(var i=0; i < fruits.length; i++){
        var liList = document.createElement("li");
        liList.innerHTML = fruits[i];
        liHead.appendChild(liList);
      }
      // hint 2: use how do we create an element and append an element?
  }

  run()

}
