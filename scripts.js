//Checks for support
if(typeof(Storage) !== "undefined"){

	// Get the modal
	var modal = document.getElementById("modal");

	// Get the button that opens the modal
	var btn = document.getElementById("button");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	//Forms to be hidden or displayed
	var form1 = document.getElementById("form1");
	var form2 = document.getElementById("form2");
	var form3 = document.getElementById("form3");
	
	//Submit buttons to advance the forms or close outerHTML
	var submitOne = document.getElementById("submitOne");
	var submitTwo = document.getElementById("submitTwo");
	var cancelTwo = document.getElementById("cancelTwo");

	// When the user clicks the button, open the first form 
	btn.onclick = function() {
		modal.style.display = "block";
		form1.style.display = "block";
	}

	// When the user clicks on <span> (x), close the form
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			form1.style.display = "none";
			form1.reset();
			form2.style.display = "none";
			form3.style.display = "none";
		}
	}
	
	//When the user clicks the submit button on form 1, saves the data to local web storage and advances the form
	submitOne.onclick = function(){
		localStorage.setItem("firstname", document.getElementById("firstname").value);
		localStorage.setItem("lastname", document.getElementById("lastname").value);
		localStorage.setItem("email", document.getElementById("email").value);
		localStorage.setItem("phone", document.getElementById("phone").value);
		localStorage.setItem("date", document.getElementById("date").value);
		
		form1.style.display="none";
		form2.style.display="block";
	}
	
	submitTwo.onclick = function(){
		form2.style.display="none";
		form3.style.display="block";
	}
	
	cancelTwo.onclick = function(){
		modal.style.display = "none";
		form2.style.display = "none";
	}

//Displays error message in modal content instead of form.
}else{
	document.getElementById("modal-content").innerHTML = "Sorry your broswer does not support Web Storage...";
}