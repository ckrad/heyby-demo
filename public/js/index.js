
$(function(){
	funds_menus = $('.funds-menus'); //侧边菜单

	//侧边菜单 点击箭头的变化
	funds_menus.on('click', '.accordion-toggle', function(event) {
		icon_chevron = $(this).find('[class*=icon-chevron]');
		if (icon_chevron.hasClass('icon-chevron-right')) {
			icon_chevron.removeClass('icon-chevron-right').addClass('icon-chevron-down');
		}else{
			icon_chevron.removeClass('icon-chevron-down').addClass('icon-chevron-right');
		};
	});

	//侧边菜单 菜单切换
	funds_menus.on('click', '.nav-list>li', function(event) {
		pre_item = funds_menus.find('.nav-list>li.active').removeClass('active');
		pre_targets = pre_item.children('a').attr('data-target').split(' ');
		for (var i = 0; i < pre_targets.length; i++) {
			$(pre_targets[i]).hide();
		};

		$(this).addClass('active');
		targets = $(this).children('a').attr('data-target').split(' ');
		for (var i = 0; i < targets.length; i++) {
			$(targets[i]).show();
		};
	});
});





