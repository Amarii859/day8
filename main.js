// var input = document.getElementById("text")
// var button = document.getElementById("btn_id");
// var text = document.getElementById("teksti_id");



// var input2 = document.getElementById("text")
// var button2 = document.getElementById("btn");



// button.onclick = function(){
//     text.innerHTML = input.value
// }

// button2.addEventListener("click",function(){
//     text.innerHTML = input.value + input2.value

// })

var text = "the best school in world is Digital School";
var result = text.replace(/world/, "universe")
document.getElementById("result1").innerHTML = result;

var text = "abc";
var regex = new RegExp("abc");
document.getElementById("resulet4").innerHTML = regex.test(text);
