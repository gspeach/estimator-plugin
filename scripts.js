// Variables
var roomNumber = 0, i = 0,
	modal = document.getElementById("modal"),
	btn = document.getElementsByClassName("est-tool-button"),
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

for(h=0; h< btn.length; h++) {
 	btn[h].onclick = function() {
		if(typeof(Storage) !== "undefined") { //Checks for support
			modal.style.display = "block";
			form1.style.display = "block";
			
			initLocalStorage();
		} else { //Displays error message in modal content instead of form.
			document.getElementById("est-tool-modal-content").innerHTML = "Sorry your broswer does not support Web Storage...";
		}
	}
}

// When the user clicks the button, open the first form
/*
btn.onclick = function() {
	if(typeof(Storage) !== "undefined") { //Checks for support
		modal.style.display = "block";
		form1.style.display = "block";
		
		initLocalStorage();
	} else { //Displays error message in modal content instead of form.
		document.getElementById("est-tool-modal-content").innerHTML = "Sorry your broswer does not support Web Storage...";
	}
}
*/

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
		email = document.getElementById("email-custom").value,
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

	sendForm();
}

submitThree.onclick = function(){
	var room, i, j,
		errors = [],
		comments = document.getElementById("comments").value,
		whomoveing = document.getElementById("whomoveing").value,
		fromzip = document.getElementById("fromzip").value,
		hometype = document.getElementById("hometype").value,
		tozip = document.getElementById("tozip").value,
		roomCount = document.getElementsByClassName("roomNameLabel").length - 1;

	document.getElementById("errors").innerHTML = "";

	if (whomoveing != '') {
		localStorage.setItem("whomoveing", whomoveing);
	} else {
		errors.push("Who is moving required!");
	}

	if (fromzip != '' && validateZip(fromzip)) {
		localStorage.setItem("fromzip", fromzip);
	} else {
		errors.push("From zip is missing or incorrect!");
	}

	if (hometype != '') {
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

	for (var i = 0; i < roomCount; i++) {
		var roomName = document.getElementById("roomName"+i).value,
			roomFurnished = document.getElementById("roomFurnished"+i).value,
			floorType = document.getElementById("floorType"+i).value,
			fragilePieces = document.getElementById("fragilePieces"+i).value,
			roomDetail = document.getElementById("roomDetail"+i).value;

		if(typeof roomName !== 'undefined' && roomName !== null) { localStorage.setItem("roomName"+i, roomName); }
		if(typeof roomFurnished !== 'undefined' && roomFurnished !== null) { localStorage.setItem("roomFurnished"+i, roomFurnished); }
		if(typeof floorType !== 'undefined' && floorType !== null) { localStorage.setItem("floorType"+i, floorType); }
		if(typeof fragilePieces !== 'undefined' && fragilePieces !== null) { localStorage.setItem("fragilePieces"+i, fragilePieces); }
		if(typeof roomDetail !== 'undefined' && roomDetail !== null) { localStorage.setItem("roomDetail"+i, roomDetail); }
	}

	if (errors.length > 0) {
		for (var j = errors.length - 1; j >= 0; j--) {
			document.getElementById("errors").innerHTML += errors[j] + "<br>";
		}
	} else {
		form3.style.display = "none";
		form4.style.display = "block";
		form3.reset();
		sendForm();
	}
}

submitFour.onclick = function(){
	modal.style.display = "none";
	form4.style.display = "none";
}

roomButton.onclick = function(){
	var container = document.getElementById("rooms"),
		input1 = document.createElement("input"),
		selectListA = document.createElement("select"),
		option1A = document.createElement("option"),
		option2A = document.createElement("option"),
		option3A = document.createElement("option"),
		option4A = document.createElement("option"),
		selectListB = document.createElement("select"),
		option1B = document.createElement("option"),
		option2B = document.createElement("option"),
		option3B = document.createElement("option"),
		option4B = document.createElement("option"),
		option5B = document.createElement("option"),
		option6B = document.createElement("option"),
		fragileSelect = document.createElement("select"),
		fragileOption1 = document.createElement("option"),
		fragileOption2 = document.createElement("option"),
		fragileOption3 = document.createElement("option"),
		input2 = document.createElement("input"),
		label1 = document.createElement("label"),
		label2 = document.createElement("label"),
		label3 = document.createElement("label"),
		label4 = document.createElement("label"),
		label5 = document.createElement("label"),
		hr = document.createElement("hr");

	roomNumber = roomNumber + 1;
	
	if(roomNumber <= 9) {
		container.appendChild(hr);
		//Label for Room Name
		label1.setAttribute("for", "roomName" + roomNumber);
		label1.appendChild(document.createTextNode("Room Name:"));
		container.appendChild(label1);
		//Room Name
		input1.type = "text";
		input1.id = "roomName" + roomNumber;
		input1.className += "roomNameLabel";
		container.appendChild(input1);
		//Label for Furnished
		label2.setAttribute("for", "roomFurnished" + roomNumber);
		label2.appendChild(document.createTextNode("Furnished:"));
		container.appendChild(label2);
		//Furnished
		selectListA.id = "roomFurnished" + roomNumber;
		container.appendChild(selectListA);
		option1A.disabled = true;
		option1A.selected = true;
		option1A.value = "";
		option1A.text = " -- select an option -- ";
		selectListA.appendChild(option1A);
		option2A.value = "light";
		option2A.text = "Lightly Furnished (500lbs)";
		selectListA.appendChild(option2A);
		option3A.value = "medium";
		option3A.text = "Medium Furnished (1000lbs)";
		selectListA.appendChild(option3A);
		option4A.value = "heavy";
		option4A.text = "Heavily Furnished (2000lbs)";
		selectListA.appendChild(option4A);
		//Label for Floor Type
		label5.setAttribute("for", "floorType" + roomNumber);
		label5.appendChild(document.createTextNode("Floor Type:"));
		container.appendChild(label5);
		//Floor Type
		selectListB.id = "floorType" + roomNumber;
		container.appendChild(selectListB);
		option1B.disabled = true;
		option1B.selected = true;
		option1B.value = "";
		option1B.text = " -- select an option -- ";
		selectListB.appendChild(option1B);
		option2B.value = "carpet";
		option2B.text = "Carpet";
		selectListB.appendChild(option2B);
		option3B.value = "hardwood";
		option3B.text = "Hardwood";
		selectListB.appendChild(option3B);
		option4B.value = "ceramic";
		option4B.text = "Ceramic";
		selectListB.appendChild(option4B);
		option5B.value = "laminate";
		option5B.text = "Laminate";
		selectListB.appendChild(option5B);
		option6B.value = "other";
		option6B.text = "Other";
		selectListB.appendChild(option6B);
		//Label for Fragile
		label4.setAttribute("for", "fragilePieces" + roomNumber);
		label4.appendChild(document.createTextNode("Fragile Pieces:"));
		container.appendChild(label4);
		//Fragile
		fragileSelect.id = "fragilePieces" + roomNumber;
		container.appendChild(fragileSelect);
		fragileOption1.disabled = true;
		fragileOption1.selected = true;
		fragileOption1.value = "";
		fragileOption1.text = " -- select an option -- ";
		fragileSelect.appendChild(fragileOption1);
		fragileOption2.value = "yes";
		fragileOption2.text = "Yes";
		fragileSelect.appendChild(fragileOption2);
		fragileOption3.value = "no";
		fragileOption3.text = "No";
		fragileSelect.appendChild(fragileOption3);
		//Label for Room Details
		label3.setAttribute("for", "roomDetail" + roomNumber);
		label3.appendChild(document.createTextNode("Additional details..."));
		container.appendChild(label3);
		//Room Detail
		input2.type="text";
		input2.id = "roomDetail" + roomNumber;
		container.appendChild(input2);
	}
}

function initLocalStorage() {
	localStorage.setItem("firstname", '');
	localStorage.setItem("lastname", '');
	localStorage.setItem("email", '');
	localStorage.setItem("phone", '');
	localStorage.setItem("date", '');
	localStorage.setItem("comments", '');
	localStorage.setItem("whomoveing", '');
	localStorage.setItem("fromzip", '');
	localStorage.setItem("hometype", '');
	localStorage.setItem("tozip", '');

	for (var i = 0; i < 10; i++) {
		localStorage.setItem("roomName"+i, '');
		localStorage.setItem("roomFurnished"+i, '');
		localStorage.setItem("floorType"+i, '');
		localStorage.setItem("fragilePieces"+i, '');
		localStorage.setItem("roomDetail"+i, '');
	}
}

function sendForm() {
	var i,
		firstname = localStorage.getItem("firstname"),
		lastname = localStorage.getItem("lastname"),
		email = localStorage.getItem("email"),
		phone = localStorage.getItem("phone"),
		date = localStorage.getItem("date"),
		comments = localStorage.getItem("comments");
		whomoveing = localStorage.getItem("whomoveing"),
		fromzip = localStorage.getItem("fromzip"),
		hometype = localStorage.getItem("hometype"),
		tozip = localStorage.getItem("tozip"),
		roomName1 = localStorage.getItem("roomName0"),
		roomFurnished1 = localStorage.getItem("roomFurnished0"),
		floorType1 = localStorage.getItem("floorType0"),
		fragilePieces1 = localStorage.getItem("fragilePieces0"),
		roomDetail1 = localStorage.getItem("roomDetail0"),
		roomName2 = localStorage.getItem("roomName1"),
		roomFurnished2 = localStorage.getItem("roomFurnished1"),
		floorType2 = localStorage.getItem("floorType1"),
		fragilePieces2 = localStorage.getItem("fragilePieces1"),
		roomDetail2 = localStorage.getItem("roomDetail1"),
		roomName3 = localStorage.getItem("roomName2"),
		roomFurnished3 = localStorage.getItem("roomFurnished2"),
		floorType3 = localStorage.getItem("floorType2"),
		fragilePieces3 = localStorage.getItem("fragilePieces2"),
		roomDetail3 = localStorage.getItem("roomDetail2"),
		roomName4 = localStorage.getItem("roomName3"),
		roomFurnished4 = localStorage.getItem("roomFurnished3"),
		floorType4 = localStorage.getItem("floorType3"),
		fragilePieces4 = localStorage.getItem("fragilePieces3"),
		roomDetail4 = localStorage.getItem("roomDetail3"),
		roomName5 = localStorage.getItem("roomName4"),
		roomFurnished5 = localStorage.getItem("roomFurnished4"),
		floorType5 = localStorage.getItem("floorType4"),
		fragilePieces5 = localStorage.getItem("fragilePieces4"),
		roomDetail5 = localStorage.getItem("roomDetail4"),
		roomName6 = localStorage.getItem("roomName5"),
		roomFurnished6 = localStorage.getItem("roomFurnished5"),
		floorType6 = localStorage.getItem("floorType5"),
		fragilePieces6 = localStorage.getItem("fragilePieces5"),
		roomDetail6 = localStorage.getItem("roomDetail5"),
		roomName7 = localStorage.getItem("roomName6"),
		roomFurnished7 = localStorage.getItem("roomFurnished6"),
		floorType7 = localStorage.getItem("floorType6"),
		fragilePieces7 = localStorage.getItem("fragilePieces6"),
		roomDetail7 = localStorage.getItem("roomDetail6"),
		roomName8 = localStorage.getItem("roomName7"),
		roomFurnished8 = localStorage.getItem("roomFurnished7"),
		floorType8 = localStorage.getItem("floorType7"),
		fragilePieces8 = localStorage.getItem("fragilePieces7"),
		roomDetail8 = localStorage.getItem("roomDetail7"),
		roomName9 = localStorage.getItem("roomName8"),
		roomFurnished9 = localStorage.getItem("roomFurnished8"),
		floorType9 = localStorage.getItem("floorType8"),
		fragilePieces9 = localStorage.getItem("fragilePieces8"),
		roomDetail9 = localStorage.getItem("roomDetail8"),
		roomName10 = localStorage.getItem("roomName9"),
		roomFurnished10 = localStorage.getItem("roomFurnished9"),
		floorType10 = localStorage.getItem("floorType9"),
		fragilePieces10 = localStorage.getItem("fragilePieces9"),
		roomDetail10 = localStorage.getItem("roomDetail9");

	jQuery(document).ready( function($) {
		$.ajax({
			method: "POST",
			url: "http://suite-crm.gzstudios.net/index.php?entryPoint=WebToPersonCapture",
			data: { 
					first_name: firstname, 
					last_name: lastname,
					email1: email,
					phone_custom_c: phone,
					move_date_c: date,
					comments_c: comments,
					who_is_packing_c: whomoveing,
					from_zip_code_c: fromzip,
					house_type_c: hometype,
					to_zip_code_c: tozip,
					room_name1_c: roomName1,
					furnished1_c: roomFurnished1,
					floor_type1_c: floorType1,
					fragile_pieces1_c: fragilePieces1,
					additional_details1_c: roomDetail1,
					room_name2_c: roomName2,
					furnished2_c: roomFurnished2,
					floor_type2_c: floorType2,
					fragile_pieces2_c: fragilePieces2,
					additional_details2_c: roomDetail2,
					room_name3_c: roomName3,
					furnished3_c: roomFurnished3,
					floor_type3_c: floorType3,
					fragile_pieces3_c: fragilePieces3,
					additional_details3_c: roomDetail3,
					room_name4_c: roomName4,
					furnished4_c: roomFurnished4,
					floor_type4_c: floorType4,
					fragile_pieces4_c: fragilePieces4,
					additional_details4_c: roomDetail4,
					room_name5_c: roomName5,
					furnished5_c: roomFurnished5,
					floor_type5_c: floorType5,
					fragile_pieces5_c: fragilePieces5,
					additional_details5_c: roomDetail5,
					room_name6_c: roomName6,
					furnished6_c: roomFurnished6,
					floor_type6_c: floorType6,
					fragile_pieces6_c: fragilePieces6,
					additional_details6_c: roomDetail6,
					room_name7_c: roomName7,
					furnished7_c: roomFurnished7,
					floor_type7_c: floorType7,
					fragile_pieces7_c: fragilePieces7,
					additional_details7_c: roomDetail7,
					room_name8_c: roomName8,
					furnished8_c: roomFurnished8,
					floor_type8_c: floorType8,
					fragile_pieces8_c: fragilePieces8,
					additional_details8_c: roomDetail8,
					room_name9_c: roomName9,
					furnished9_c: roomFurnished9,
					floor_type9_c: floorType9,
					fragile_pieces9_c: fragilePieces9,
					additional_details9_c: roomDetail9,
					room_name10_c: roomName10,
					furnished10_c: roomFurnished10,
					floor_type10_c: floorType10,
					fragile_pieces10_c: fragilePieces10,
					additional_details10_c: roomDetail10,
					Submit: 'Submit',
					campaign_id: 'e5de65d8-e5f7-cd39-3ef1-59d643bffa57',
					assigned_user_id: 1,
					moduleDir: 'Leads'
				  },
			success: function( data ) {
				//console.log(data)
			}
		})
	})
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