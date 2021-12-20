$(function(){

    $('#fullpage').fullpage({
		//options here
        sectionsColor: ["#bf3f4a","#d94862","#2c3359","#3b8dbf","#7ed9d0","#5451A6","#2c3359"],
		anchors: ['home','about','web','mobile','responsive','graphic','contact'],
		autoScrolling:true,
		scrollHorizontally: true,
		navigation:true,
		// navigationPosition:'left'
		afterLoad: function(anchorLink, index){
			console.log("현재섹션=" + index);
			
			if(index == 1){
				
			}
		}
	});
	// *************************************************************
	$('.m_btn').click(function(){
        $('.line').toggleClass('on');
		$('.full_menu').toggleClass('on');
		$('.blackout').toggleClass('on');
		$('.title').fadeIn(500);
    });
	$('.blackout').click(function(){
		$('.line').toggleClass('on');
		$('.full_menu').toggleClass('on');
		$('.blackout').toggleClass('on');
	});
	// *************************************************************
	$('.circle_01').click(function(){
		$('.title').fadeOut(200);
	});
	// *************************************************************
	// $(window).scroll(function(){
	// 	var num = $(document).scrollTop();
	// 	console.log(num);

	// });

});