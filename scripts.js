// Variables
var roomNumber = 0, i = 0,
	modal = document.getElementById("modal"),
	btn = document.getElementById("button"),
	roomButton = document.getElementById("addRooms"),
	span = document.getElementsByClassName("close")[0],
	form1 = document.getElementById("form1"),
	form2 = document.getElementById("form2"),
	form3 = document.getElementById("form3"),
	form4 = document.getElementById("form4"),
	submitOne = document.getElementById("submitOne"),
	submitTwo = document.getElementById("submitTwo"),
	cancelTwo = document.getElementById("cancelTwo"),
	submitThree = document.getElementById("submitThree"),
	submitFour = document.getElementById("submitFour");

// When the user clicks the button, open the first form 
btn.onclick = function() {
	if(typeof(Storage) !== "undefined") { //Checks for support
		modal.style.display = "block";
		form1.style.display = "block";
		localStorage.clear();
	} else { //Displays error message in modal content instead of form.
		document.getElementById("modal-content").innerHTML = "Sorry your broswer does not support Web Storage...";
	}
}

// When the user clicks on <span> (x), close the form
span.onclick = function() {
	closeAll();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		closeAll();
	}
}

//When the user clicks the submit button on form 1, saves the data to local web storage and advances the form
submitOne.onclick = function(){
	var errors = [],
		fname = document.getElementById("firstname").value,
		lname = document.getElementById("lastname").value,
		email = document.getElementById("email").value,
		phone = document.getElementById("phone").value,
		date = document.getElementById("date").value;

	document.getElementById("errors").innerHTML = "";

	if (fname != '') {
		localStorage.setItem("firstname", fname);
	} else {
		errors.push("First name required!");
	}

	if (lname != '') {
		localStorage.setItem("lastname", lname);
	} else {
		errors.push("Last name required!");
	}

	if (email != '' && validateEmail(email)) {
		localStorage.setItem("email", email);
	} else {
		errors.push("Email is missing or incorrect!");
	}

	if (phone != '' && validatePhone(phone)) {
		localStorage.setItem("phone", phone);
	} else {
		errors.push("Phone number is missing or incorrect!");
	}

	if (date != '' && validateDate(date)) {
		localStorage.setItem("date", date);
	} else {
		errors.push("Date is missing or incorrect!");
	}
	
	if (errors.length > 0) {
		for (var i = errors.length - 1; i >= 0; i--) {
			document.getElementById("errors").innerHTML += errors[i] + "<br>";
		}
	} else {
		form1.style.display="none";
		form2.style.display="block";
		form1.reset();
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
	var room,
		errors = [],
		comments = document.getElementById("comments").value,
		whomoveing = document.getElementById("whomoveing").value,
		fromzip = document.getElementById("fromzip").value,
		hometype = document.getElementById("hometype").value,
		tozip = document.getElementById("tozip").value;

	document.getElementById("errors").innerHTML = "";

	if (whomoveing != '-- select an option --') {
		localStorage.setItem("whomoveing", whomoveing);
	} else {
		errors.push("Who is moving required!");
	}

	if (fromzip != '' && validateZip(fromzip)) {
		localStorage.setItem("fromzip", fromzip);
	} else {
		errors.push("From zip is missing or incorrect!");
	}

	if (hometype != '-- select an option --') {
		localStorage.setItem("hometype", hometype);
	} else {
		errors.push("Hometype is required!");
	}

	if (tozip != '' && validateZip(tozip)) {
		localStorage.setItem("tozip", tozip);
	} else {
		errors.push("To zip is missing or incorrect!");
	}

	localStorage.setItem("comments", comments);
	
	while (document.getElementById("roomName"+i) != null){
		room = [document.getElementById("roomName"+i).value, document.getElementById("roomFurnished"+i).value, document.getElementById("roomDetail"+i).value]
		localStorage.setItem("room"+i, room);
		i = i+1;
	}

	if (errors.length > 0) {
		for (var i = errors.length - 1; i >= 0; i--) {
			document.getElementById("errors").innerHTML += errors[i] + "<br>";
		}
	} else {
		form3.style.display = "none";
		form4.style.display = "block";
		form3.reset();
	}
}

submitFour.onclick = function(){
	modal.style.display = "none";
	form4.style.display = "none";
}

roomButton.onclick = function(){
	var container = document.getElementById("rooms"),
		input1 = document.createElement("input"),
		selectList = document.createElement("select"),
		option1 = document.createElement("option"),
		option2 = document.createElement("option"),
		option3 = document.createElement("option"),
		option4 = document.createElement("option"),
		input2 = document.createElement("input"),
		label1 = document.createElement("label"),
		label2 = document.createElement("label"),
		label3 = document.createElement("label");

	roomNumber = roomNumber + 1;
	
	//Label for Room Name
	label1.setAttribute("for", "roomName" + roomNumber);
	label1.appendChild(document.createTextNode("Room Name:"));
	container.appendChild(label1);
	//Room Name
	input1.type = "text";
	input1.id = "roomName" + roomNumber;
	container.appendChild(input1);
	//Label for Furnished
	label2.setAttribute("for", "roomFurnished" + roomNumber);
	label2.appendChild(document.createTextNode("Furnished:"));
	container.appendChild(label2);
	//Furnished
	selectList.id = "roomFurnished" + roomNumber;
	container.appendChild(selectList);
	option1.disabled = true;
	option1.selected = true;
	option1.text = " -- select an option -- ";
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
	//Label for Room Details
	label3.setAttribute("for", "roomDetail" + roomNumber);
	label3.appendChild(document.createTextNode("Additional details..."));
	container.appendChild(label3);
	//Room Detail
	input2.type="text";
	input2.id = "roomDetail" + roomNumber;
	container.appendChild(input2);
	container.appendChild(document.createElement("br"));
	container.appendChild(document.createElement("br"));
}

function closeAll() {
	modal.style.display = "none";
	form1.style.display = "none";
	form1.reset();
	form2.style.display = "none";
	form3.style.display = "none";
	form3.reset();
	form4.style.display = "none";
}

function validateDate(str) {
	var pattern = /^([0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4})$/g;

	return pattern.test(str);
}

function validatePhone(str) {
	var pattern = /^([0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4})$/g;

	return pattern.test(str);
}

function validateEmail(str) {
	var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;

	return pattern.test(str);
}

function validateZip(str) {
	var pattern = /^\d{5}(-\d{4})?$/g;
	
	return pattern.test(str);
}