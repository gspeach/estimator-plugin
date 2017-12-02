<?php 
    /*
    Plugin Name: Custom Estimator Tool for Hometown Services LLC
    Plugin URI: 
    Description: Plugin for custom estimation of moving
    Author: GMU Team 1 Town Movers
    Version: 1.0
    Author URI: 
    */


class wp_estimatorTool extends WP_Widget {

	// constructor
	function wp_estimatorTool() {
		parent::WP_Widget(false, $name = __('Custom Estimation Tool', 'wp_estimatorTool') );
	}

	// widget form creation
	function form($instance) {
	}

	// widget update
	function update($new_instance, $old_instance) {
	}

	// widget display
	function widget($args, $instance) {
		echo ' 
<!--Trigger/Open the Modal -->
<button id="button">Get Your FREE Moving Quote!</button>

<!-- Form Modal -->
<div id="modal" class="modal" >

<!-- Modal content -->
<div class="modal-content">
	<span class="close">&times;</span>
	<span id="errors" class="errorMessages"></span>
	<form id="form1" style="display: none">
		<p>Please fill out the following form to get started!</p>
		<label for="firstname">First Name:</label>
		<input title="Please provide your first name here." type="text" id="firstname">
		<label for="lastname">Last Name:</label>
		<input title="Please provide your last name here." type="text" id="lastname">
		<label for="email">Email:</label>
		<input title="Please provide your email here." type="text" id="email" placeholder="something@gmail.com">
		<label for="phone">Phone Number:</label>
		<input title="Please provide your phone number here." type="text" id="phone" placeholder="123-456-7891">
		<label for="date">Move Date:</label>
		<input title="Please tell us when you plan on moving." type="text" id="date" placeholder="11/02/2017"><br><br>
		<input id="submitOne" type="button" value="Submit">
	</form>
	
	<form id="form2" style="display: none">
		<p class="formParagraphSpacing"> Thank you for providing us with your information!</p>
		<p class="formParagraphSpacing">Our sales representatives will be in contact with you shortly to provide you with your free moving quote.</p>
		<p class="formParagraphSpacing">Would you like to provide additional details about your move to further help us provide you with a more accurate moving quote?</p>
		<input id="submitTwo" type="button" value="Yes">
		<input id="cancelTwo" type="button" value="No">
	</form>
	
	<form id="form3" style="display: none">
		<p>Please fill out the following form to the best of your abilities.</p>
		<label for="comments">Comments:</label>
		<textarea title="Please provide us with any information here." row="4" col="50" id="comments"></textarea>
		<label for="whomoveing">Who is packing?</label>
		<select title="Please select the best title for who is doing the move." id="whomoveing" class="formSelect">
			<option value="whomoveing" disabled selected> -- select an option -- </option>
			<option value="owner">Owner</option>
			<option value="partial">Partial Packing Requested</option>
			<option value="full">Full Packing Requested</option>
			<option value="unpacking">Unpacking Requested</option>
		</select>
		<label for="fromzip">Moving from Zipcode:</label>
		<input title="Please provide us with your current location zip code." type="text" id="fromzip">
		<label for="hometype">Home Type:</label>
		<select title="Please provide us with your current hometype." id="hometype" class="formSelect">
			<option value="" disabled selected> -- select an option -- </option>
			<option value="house">House</option>
			<option value="townhouse">Townhouse</option>
			<option value="apartment">Apartment</option>
			<option value="condo">Condo</option>
		</select>
		<label for="tozip">Moving to Zipcode:</label>
		<input title="Please provide us with the location zip code you are planning to move to." type="text" id="tozip"><br><br>
		<div id="rooms">
			<p>You may provide us additional details by room. Click the (+) to add more fields for additional rooms.</p>
			<label for="roomName0">Room Name:</label>
			<input title="Please tell us what kind of room it is." class="roomNameLabel" type="text" id="roomName0">
			<label for="roomFurnished0">Furnished:</label>
			<select title="Please specify how furnised this room is." id="roomFurnished0" class="formSelect">
				<option value="" disabled selected> -- select an option -- </option>
				<option value="light">Lightly Furnished (500lbs)</option>
				<option value="medium">Medium Furnished (1000lbs)</option>
				<option value="heavy">Heavily Furnished (2000lbs)</option>
			</select>
			<label for="floorType0">Floor Type:</label>
			<select title="Please tell us what type of flooring is in this room." id="floorType0" class="formSelect">
				<option value="" disabled selected> -- select an option -- </option>
				<option value="carpet">Carpet</option>
				<option value="hardwood">Hardwood</option>
				<option value="ceramic">Ceramic</option>
				<option value="laminate">Laminate</option>
				<option value="other">Other</option>
			</select>
			<label for="fragilePieces0">Fragile Pieces:</label>
			<select title="Are there any fragile furniture we need to worry about?" id="fragilePieces0" class="formSelect">
				<option value="" disabled selected> -- select an option -- </option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
			<label for="roomDetail0">Additional details...</label>
			<input title="Provide us with additional details for this room." type="text" id="roomDetail0"><br><br>
		</div>
		<input title="Click to add additional room form fields." id="addRooms" type="button" value=" + ">
		<input id="submitThree" type="button" value="Submit">
	</form>

	<form id="form4" style="display: none">
		<p class="formParagraphSpacing"> Thank you for providing us with your information!</p>
		<p class="formParagraphSpacing">Our sales representatives will be in contact with you shortly to provide you with your free moving quote.</p>
		<input id="submitFour" type="button" value="OK"> 
	</form>
</div>
</div>
		'; //close the echo statement.
	}
}

	// register widget
	add_action('widgets_init', create_function('', 'return register_widget("wp_estimatorTool");'));
	
	function my_script(){
		wp_enqueue_script('my_script', plugin_dir_url(__FILE__). 'scripts.js',array(), false, true);
	}
	function my_style(){
		wp_enqueue_style('my_style', plugin_dir_url(__FILE__). 'style.css');
	}
	
	add_action('wp_enqueue_scripts', 'my_script');
	add_action('wp_enqueue_scripts', 'my_style');
?>


