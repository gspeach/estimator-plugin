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
		First name: <input type="text" id="firstname"><br>
		Last name: <input type="text" id="lastname"><br>
		Email: <input type="text" id="email"><br>
		Phone: <input type="text" id="phone"><br>
		Moving Date: <input type="date" id="date"><br><br>
		<input id="submitOne" type="button" value="Submit">
	</form>
	
	<form id="form2" style="display: none"><br>
		Thank you!<br> Please..................<br>Tell us more?<br><br>
		<input id="submitTwo" type="button" value="Yes">
		<input id="cancelTwo" type="button" value="No">
	</form>
	
	<form id="form3" style="display: none"><br>
		next cscdscdsc
		<input id="submitThree" type="button" value="Yes">
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


