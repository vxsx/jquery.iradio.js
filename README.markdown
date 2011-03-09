#jquery.iradio.js

Plugin that makes segmented control (like on Mac Os X Lion) from the set of radio buttons
  
Requires  

*  jquery 1.4.4 or higher

Optional

*  jquery ui 1.8.9 or higher

Default options 

	draggable : true
	duration  : 500
	
Using:

    <input type="radio" name="iradio" id="radio1" value="One" checked="checked" /> <label for="radio1">One</label>
	<input type="radio" name="iradio" id="radio2" value="Two" /> <label for="radio2">Two</label>
	<input type="radio" name="iradio" id="radio3" value="Three" /> <label for="radio3">Three</label>
	
	<script type="text/javascript">
    	$(':radio[name="iradio"]').iradio();
	</script>

