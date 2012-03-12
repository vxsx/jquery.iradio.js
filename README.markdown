#jquery.iradio.js

Plugin that makes segmented control (<del>like on Mac Os X Lion</del> They actually did implement it only in first few betas) from the set of radio buttons
  
Requires  

*  jquery 1.4.4 or higher

Optional

*  jquery ui 1.8.9 or higher

Default options 

``` javascript
draggable : true
duration  : 500
vertical  : false
```

Using:

``` html
<input type="radio" name="iradio" id="radio1" value="One" checked="checked" /> <label for="radio1">One</label>
<input type="radio" name="iradio" id="radio2" value="Two" /> <label for="radio2">Two</label>
<input type="radio" name="iradio" id="radio3" value="Three" /> <label for="radio3">Three</label>
	
<script type="text/javascript">
    $(':radio[name="iradio"]').iradio();
</script>
```
