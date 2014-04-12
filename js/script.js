/**
 * PX to EM Calculator created while reading
 * http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter
 * Inspired by http://pxtoem.com/
 */

 function log(string) {
   return window.console.log(string);
 }

 var $pxInput = $('#px'),
 $emInput = $('#em');

 function convertToEm(target, context) {
   context = context | 16;
   return target / context;
 }

 function convertToPx(target, context){
   context = context | 16;
   return target * context;
 }

 function clearInputs(){
   $pxInput.val('');
   $emInput.val('');
 }

 $pxInput.on('focus', function(){
   clearInputs();
 })

 $emInput.on('focus', function(){
   clearInputs();
 })

 $('input[type="submit"]').on("click",function(event){

   event.preventDefault();

   var pxValue = document.getElementById("px").value.replace(/[^0-9.]/g, ''),
   emValue = document.getElementById("em").value.replace(/[^0-9.]/g, ''),
   resultId = document.getElementById("result");

   if (!pxValue && !emValue) {
    log("Please Insert PX or EM values");
    return;
  }

  if (pxValue) {
    var pxToEmResult =  convertToEm(pxValue) + "em";
  }

  if (emValue) {
    var emToPxResult =  convertToPx(emValue) + "px";
  }

  resultId.innerHTML = (pxValue ? pxValue + "/" + 16 : emValue + "*" + 16)  + " = " + (pxValue ? pxToEmResult : emToPxResult );

});

 resultId = document.getElementById("result");

 $("#change").keyup(function(){
   console.log(12);
   resultId.innerHTML = $(this).val();
 })
