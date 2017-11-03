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
<button id="button">Open Modal</button>

<!-- Form Modal -->
<div id="modal" class="modal" >

<!-- Modal content -->
<div class="modal-content">
	<span class="close">&times;</span>
	
	<form id="form1" style="display: none"><br>
		Get your free qoute by filling out the form!
		<input type="text" id="firstname" placeholder="First Name">
		<input type="text" id="lastname" placeholder="Last Name">
		<input type="email" id="email" placeholder="Email">
		<input type="text" id="phone" placeholder="Phone Number">
		<input type="text" id="date" placeholder="Moving Date" onfocus="(this.type=\'date\')" onblur="(this.type=\'text\')"><br><br>
		<input id="submitOne" type="button" value="Submit">
	</form>
	
	<form id="form2" style="display: none"><br>
		Thank you!<br> Please..................<br>Tell us more?<br><br>
		<input id="submitTwo" type="button" value="Yes">
		<input id="cancelTwo" type="button" value="No">
	</form>
	
	<form id="form3" style="display: none"><br>
		Thanks for providing more information! This will help us give you a more accurate quote.
		<textarea col="50" row="5" id="comments" placeholder="Comments"></textarea>
		<select id="whomoveing">
			<option disabled selected>Who is moving?</option>
			<option value="Owner">Owner</option>
			<option value="Partial Packing">Partial packing requested</option>
			<option value="Full Packing">Full packing requested</option>
			<option value="Unpacking">Unpacking requested</option>
		</select>
		<input type="text" id="fromzip" placeholder="Moving from Zipcode">
		<select id="hometype">
			<option disabled selected>Home Type</option>
			<option value="Condo/Apartment">Condo/Apartment</option>
			<option value="Townhome">Townhome</option>
			<option value="Single">Single Home</option>
		</select>
		<input type="text" id="tozip" placeholder="Moving to Zipcode"><br><br>
		
		<div id="rooms">
		Give us details by room. Click the (+) to add more fields.
			<input type="text" class="room1" placeholder="Room Name">
			<select class="room1">
				<option disabled selected>Furnished:</option>
				<option value="lightly">Lightly (500lbs)</option>
				<option value="medium">Medium (1000lbs)</option>
				<option value="heavy">Heavy (2000lbs)</option>
			</select>
			<input type="text" class="room1" placeholder="Additional details..."><br><br>
		</div>
		
		<br><br>
		<input id="addRooms" type="button" value=" + ">
		<input id="submitThree" type="button" value="Submit">
	</form>
	
	<form id="form4" style="display: none"><br>
		Thank you!<br><br>Pleasessess.........<br><br>
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


