/**
*  @author Vadim Sikora ( http://vxsx.ru )
*  NO COPYRIGHTS, DO WHAT YOU WANT
*  @requires jquery 1.4.4 or higher
*/
//TODO: fix speed -- done
//		do vertical
//		drag'n'drop support
(function($){
    $.fn.iradio = function(options) {
        var settings = $.extend({
			duration  : 500,
			draggable : true
        }, options);
		
		var inputs = $(this).hide(),
			labelsSelector = inputs.map(function(i, el) {
				return $('label[for="'+$(el).attr('id')+'"]').selector
			}).get().join(', ');

		$(inputs.selector + ', ' + labelsSelector).wrapAll('<div class="iradio-wrap"></div>');

		var w = inputs.parent().append('<div class="knob"></div>'),
			knob = $('.knob', w).append('<span>'+$('label[for="'+inputs.filter(':checked').attr('id')+'"]').text()+'</span>'),
			knobText = $('span', knob),
			labels = $('label', w),
			maxWidth = Math.max.apply(labels, $(labels).map(function(i,e){ return $(e).width() }).get() ),
			inputsCount = inputs.length;

		
			
			labels.width(maxWidth);
			knob.width(maxWidth);

		var wWidth = w.width(),
			step = wWidth / inputsCount;

		//knob speed
		for (var i = 0; i < labels.length; i++ ) {
			$(labels[i]).data('step',i);
		}
		var currentLabel = $('label[for="'+$(':checked', w).attr('id')+'"]');
		
		inputs.change(function(){
			var	checkedLabel = $('label[for="'+$(this).attr('id')+'"]'),
				checkedText = checkedLabel.text();
			
			//knob speed	
			var cDuration = settings.duration * ( Math.abs(currentLabel.data('step') - checkedLabel.data('step'))) / inputsCount;
			currentLabel = checkedLabel;
				
			if (knob.is(':animated'))
			{
				knob.stop();
				knobText.stop();
			}
			knob.animate({'left': checkedLabel.position().left}, cDuration, 'linear' )
			knobText.animate({'opacity':'0.2'},  cDuration/2, 'linear',  function() {
				$(this).text(checkedText).animate({'opacity':'1'}, cDuration/2 , 'linear')
			})
		});
			
		settings.draggable && knob.draggable({
	        containment: 'parent',
	        axis: 'x',
	        drag: function(event, ui) {
				var currentStep =  parseInt((ui.position.left + knob.width() / 2) / step),
					currentLabel = $(labels).eq(currentStep).text();
				
				if (knobText.text() != currentLabel) 	
					knobText.animate({'opacity':'0.2'},  25, 'linear',  function() {
						$(this).text(currentLabel).animate({'opacity':'1'}, 25 , 'linear')
					}); //don't know if this really needed
			},
			stop: function(event, ui) {
				var currentStep =  parseInt((ui.position.left + knob.width() / 2) / step);
				knob.animate({'left': currentStep*step}, 200, 'linear')
			}
	    })
	
			
			
        return this;
    };

})(jQuery);
