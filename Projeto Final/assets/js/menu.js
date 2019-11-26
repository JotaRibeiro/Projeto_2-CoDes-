// document.addEventListener("click", myScript){
// function myFunction() {
// 	  var element = document.getElementById("myDIV");
// 	  element.classList.add("show-menu");
// 	}

document.addEventListener('DOMContentLoaded', function(){
	var button = document.querySelector('.imagem_lado')
	console.log(button)
	button.addEventListener('click', function() {
	    var menu = document.getElementById("myDIV");
	    menu.classList.add("show-menu");

	    // console.log('teste')
	})


	window.removeEventListener('click', function() {
	    var jota = document.getElementById("window");
	    jota.classList.remove("show-menu");

	    console.log('teste')
	})




	// function myFunction() {
	//   var element = document.getElementById("myDIV");
	//   element.classList.add("show-menu");
	// }
	// alert();




})





// Get the modal
	// var menu = document.getElementById('myDIV');

	// When the user clicks anywhere outside of the modal, close it
	// window.onclick = function() {
	// var menu = document.getElementById("myDIV");
	//   if (event.target == menu) {
	//   	menu.classList.remove("show-menu");
	//     // menu.style.display = "none";
	//   }
	// }
