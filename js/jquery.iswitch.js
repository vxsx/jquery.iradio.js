/**
*  @author Vadim Sikora ( http://vxsx.ru )
*  NO COPYRIGHTS, DO WHAT YOU WANT
*  @requires jquery 1.4.4 or higher
*/
//TODO: fix speed 
//		fix width
//		do vertical
(function($){
    $.fn.iradio = function(options) {
        var settings = $.extend({
			duration : 400
        }, options);
		
		var inputs = $(this).hide(),
			labelsSelector = inputs.map(function(i, el) {
				return $('label[for="'+$(el).attr('id')+'"]').selector
			}).get().join(', ');

		$(inputs.selector + ', ' + labelsSelector).wrapAll('<div class="iradio-wrap"></div>');

		var w = inputs.parent().append('<div class="knob"></div>'),
			knob = $('.knob', w).append('<span>'+$('label[for="'+inputs.filter(':checked').attr('id')+'"]').text()+'</span>'),
			knobText = $('span', knob),
			labels = $('label', w);
			
			labels.width( Math.max.apply(labels, $(labels).map(function(i,e){ return $(e).width() }).get() ) );
			knob.width(labels.width());

		inputs.change(function(){
			var checkedLabel = $('label[for="'+$(this).attr('id')+'"]'),
				checkedText = checkedLabel.text();
			if (knob.is(':animated'))
			{
				knob.stop();
				knobText.stop();
			}
			knob.animate({'left': checkedLabel.position().left}, settings.duration, 'linear' )
			knobText.animate({'opacity':'0.2'},  settings.duration/2, 'linear',  function() {
				$(this).text(checkedText).animate({'opacity':'1'}, settings.duration/2 , 'linear')
			})
		});
			
        return this;
    };

})(jQuery);
