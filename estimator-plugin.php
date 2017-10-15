<?php 
    /*
    Plugin Name: Custom Estimation tool
    Plugin URI: 
    Description: Plugin for custom estimation of moving
    Author: Michael
    Version: 1.0
    Author URI: 
    */


class wp_tool extends WP_Widget {

	// constructor
	function wp_tool() {
		parent::WP_Widget(false, $name = __('Estimator Tool', 'wp_tool') );
	}

	// widget form creation
	function form($instance) {
	}

	// widget update
	function update($new_instance, $old_instance) {
	}

	// widget display
	function widget($args, $instance) {
		//echo '<form action="index.php" method="post"><input type="submit" value="Click" name="btnSubmit"></form>';
		echo '
		<button id="myBtn">Open Modal</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
		';
	}
}

	// register widget
	add_action('widgets_init', create_function('', 'return register_widget("wp_tool");'));
	
	function my_script(){
		wp_enqueue_script('my-script', plugin_dir_url(__FILE__). 'scripts.js',array(), false, true);
	}
	function my_style(){
		wp_enqueue_style('my-style', plugin_dir_url(__FILE__). 'style.css');
	}
	
	add_action('wp_enqueue_scripts', 'my_script');
	add_action('wp_enqueue_scripts', 'my_style');
	
	/*if($_SERVER['REQUEST_METHOD'] === 'POST'){
		if (isset($_POST['btnSubmit'])){
			//submit button has been pressed
			
		} 
	}*/
	
	
?>


