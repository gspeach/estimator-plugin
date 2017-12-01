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
<div class="htm-widget">
	<button id="button">Get a Free Quote</button>
</div>

<!-- Form Modal -->
<div id="modal" class="modal" >

<!-- Modal content -->
<div class="modal-content">
	<span class="close">&times;</span>
	<span id="errors" class="errors"></span>
	<form id="form1" style="display: none">
		<p>Get your free quote by filling out the form!</p>
		<label for="firstname">First Name:</label>
		<input type="text" id="firstname">
		<label for="lastname">Last Name:</label>
		<input type="text" id="lastname">
		<label for="email">Email:</label>
		<input type="text" id="email" placeholder="something@gmail.com">
		<label for="phone">Phone Number:</label>
		<input type="text" id="phone" placeholder="123-456-7891">
		<label for="date">Move Date:</label>
		<input type="text" id="date" placeholder="11/02/2017"><br><br>
		<input id="submitOne" type="button" value="Submit">
	</form>
	
	<form id="form2" style="display: none">
		<p>Thank you! Please tell us more?</p>
		<input id="submitTwo" type="button" value="Yes">
		<input id="cancelTwo" type="button" value="No">
	</form>
	
	<form id="form3" style="display: none">
		<p>Thanks for providing more information! This will help us give you a more accurate quote.</p>
		<label for="comments">Comments:</label>
		<textarea row="4" col="50" id="comments"></textarea>
		<label for="whomoveing">Who is packing?</label>
		<select id="whomoveing">
			<option value="" disabled selected> -- select an option -- </option>
			<option value="owner">Owner</option>
			<option value="partial">Partial Packing Requested</option>
			<option value="full">Full Packing Requested</option>
			<option value="unpacking">Unpacking Requested</option>
		</select>
		<label for="fromzip">Moving from Zipcode:</label>
		<input type="text" id="fromzip">
		<label for="hometype">Home Type:</label>
		<select id="hometype">
			<option value="" disabled selected> -- select an option -- </option>
			<option value="house">House</option>
			<option value="townhouse">Townhouse</option>
			<option value="apartment">Apartment</option>
			<option value="condo">Condo</option>
		</select>
		<label for="tozip">Moving to Zipcode:</label>
		<input type="text" id="tozip"><br><br>
		<div id="rooms">
			<p>Give us details by room. Click the (+) to add more fields.</p>
			<label for="roomName0">Room Name:</label>
			<input class="roomNameLabel" type="text" id="roomName0">
			<label for="roomFurnished0">Furnished:</label>
			<select id="roomFurnished0">
				<option value="" disabled selected> -- select an option -- </option>
				<option value="light">Lightly Furnished (500lbs)</option>
				<option value="medium">Medium Furnished (1000lbs)</option>
				<option value="heavy">Heavily Furnished (2000lbs)</option>
			</select>
			<label for="floorType0">Floor Type:</label>
			<select id="floorType0">
				<option value="" disabled selected> -- select an option -- </option>
				<option value="carpet">Carpet</option>
				<option value="hardwood">Hardwood</option>
				<option value="ceramic">Ceramic</option>
				<option value="laminate">Laminate</option>
				<option value="other">Other</option>
			</select>
			<label for="fragilePieces0">Fragile Pieces:</label>
			<select id="fragilePieces0">
				<option value="" disabled selected> -- select an option -- </option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
			<label for="roomDetail0">Additional details...</label>
			<input type="text" id="roomDetail0"><br><br>
		</div>
		<input id="addRooms" type="button" value=" + ">
		<input id="submitThree" type="button" value="Submit">
	</form>

	<form id="form4" style="display: none">
		<p>Thank you!</p>
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


