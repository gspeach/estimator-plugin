//Checks for support
if(typeof(Storage) !== "undefined"){

	// Get the modal
	var modal = document.getElementById("modal");

	// Get the button that opens the modal
	var btn = document.getElementById("button");

	//Get the button to add room rows
	var roomButton = document.getElementById("addRooms");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	//Forms to be hidden or displayed
	var form1 = document.getElementById("form1");
	var form2 = document.getElementById("form2");
	var form3 = document.getElementById("form3");
	var form4 = document.getElementById("form4");
	
	//Submit buttons to advance the forms or close outerHTML
	var submitOne = document.getElementById("submitOne");
	var submitTwo = document.getElementById("submitTwo");
	var cancelTwo = document.getElementById("cancelTwo");
	var submitThree = document.getElementById("submitThree");
	var submitFour = document.getElementById("submitFour");
	
	var i = 1;

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
			form3.reset();
			form4.style.display = "none";
		}
	}
	
	//When the user clicks the submit button on form 1, saves the data to local web storage and advances the form
	submitOne.onclick = function(){
		var errors = [];
		document.getElementById("errors").innerHTML = "";

		if (document.getElementById("firstname").value != '') {
			localStorage.setItem("firstname", document.getElementById("firstname").value);
		} else {
			errors.push("First name required!");
		}

		if (document.getElementById("lastname").value != '') {
			localStorage.setItem("lastname", document.getElementById("lastname").value);
		} else {
			errors.push("Last name required!");
		}

		if (document.getElementById("email").value != '') {
			localStorage.setItem("email", document.getElementById("email").value);
		} else {
			errors.push("Email required!");
		}

		if (document.getElementById("phone").value != '') {
			localStorage.setItem("phone", document.getElementById("phone").value);
		} else {
			errors.push("Phone number required!");
		}

		if (document.getElementById("date").value != '') {
			localStorage.setItem("date", document.getElementById("date").value);
		} else {
			errors.push("Date required!");
		}
		
		if (errors.length > 0) {
			for (var i = errors.length - 1; i >= 0; i--) {
				document.getElementById("errors").innerHTML += errors[i] + "<br>";
			}
		} else {
			form1.style.display="none";
			form2.style.display="block";
		}
	}
	
	submitTwo.onclick = function(){
		form2.style.display="none";
		form3.style.display="block";
	}
	
	cancelTwo.onclick = function(){
		modal.style.display = "none";
		form2.style.display = "none";
	}
	
	submitThree.onclick = function(){

		var errors = [];
		document.getElementById("errors").innerHTML = "";

		if (document.getElementById("comments").value != '') {
			localStorage.setItem("comments", document.getElementById("comments").value);
		} else {
			errors.push("comments required!");
		}

		if (document.getElementById("whomoveing").value != '') {
			localStorage.setItem("whomoveing", document.getElementById("whomoveing").value);
		} else {
			errors.push("Who is Moveing?");
		}

		if (document.getElementById("fromzip").value != '') {
				localStorage.setItem("fromzip", document.getElementById("fromzip").value);
		} else {
			errors.push("From what zip code?");
		}

		if (document.getElementById("hometype").value != '') {
			localStorage.setItem("hometype", document.getElementById("hometype").value);
		} else {
			errors.push("Home Type required!");
		}

		if (document.getElementById("tozip").value != '') {
			localStorage.setItem("tozip", document.getElementById("tozip").value);
		} else {
			errors.push("To what zip code?");
		}
		
		if (errors.length > 0) {
			for (var i = errors.length - 1; i >= 0; i--) {
				document.getElementById("errors").innerHTML += errors[i] + "<br>";
			}
		} else {
		while (document.getElementsByClassName("room"+i).length > 0){
			var room = document.getElementsByClassName("room"+i);
			
			localStorage.setItem("room"+i, JSON.stringify(room));
			i = i+1;
		}
		
		form3.style.display = "none";
		form4.style.display = "block";
		}

		
	}
	
	submitFour.onclick = function(){
		modal.style.display = "none";
		form4.style.display = "none";
	}
	
	roomButton.onclick = function(){
		var container = document.getElementById("rooms");
		var roomNumber = "room"+i;
		var input1 = document.createElement("input");
		var selectList = document.createElement("select");
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");
		var option3 = document.createElement("option");
		var option4 = document.createElement("option");
		var input2 = document.createElement("input");
		
		input1.type = "text";
		input1.className = roomNumber;
		input1.placeholder = "Room Name";
		container.appendChild(input1);
		selectList.className = roomNumber;
		container.appendChild(selectList);
		option1.disabled = true;
		option1.selected = true;
		option1.text = "Furnished:";
		selectList.appendChild(option1);
		option2.value = "lightly";
		option2.text = "Lightly (500lbs)";
		selectList.appendChild(option2);
		option3.value = "medium";
		option3.text = "Medium (1000lbs)";
		selectList.appendChild(option3);
		option4.value = "heavy";
		option4.text = "Heavy (2000lbs)";
		selectList.appendChild(option4);
		input2.type="text";
		input2.className = roomNumber;
		input2.placeholder = "Addtional details...";
		container.appendChild(input2);
		container.appendChild(document.createElement("br"));
		container.appendChild(document.createElement("br"));
	}

//Displays error message in modal content instead of form.
}else{
	document.getElementById("modal-content").innerHTML = "Sorry your broswer does not support Web Storage...";
}