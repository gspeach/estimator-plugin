// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the submit buttons
var submitButton = document.getElementById('submit');

var formcontent = document.getElementById('formcontent');
//forms
var formNum = 1;
var form2 = "\
		First name: <input type='text' name='FirstName'><br>\
";


// When the user clicks the button, open the first form 
btn.onclick = function() {
	modal.style.display = "block";
	formcontent.innerHTML=form1;
}

// When the user clicks on <span> (x), close the first form
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
        modal.style.display = "none";
    }
}

submit.onclick = function(){
	if(formNum == 1){
		formcontent.innerHTML=form2 + document.getElementById('FirstName');
		formNum = 2;
	}
	else{
		formcontent.innerHTML="";
	}
}