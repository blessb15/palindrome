$("form#calculator").submit(function(event) {
  var word = $("input#input1").val();
  var x = word.split('').reverse().join('');

  console.log(x);

  if (x === word) {
  	alert("PAL");
    }else{
  	alert("NOT");
   }
   event.preventDefault();
 });
