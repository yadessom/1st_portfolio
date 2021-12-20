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
				$('.title').addClass('on');
			}else{
				$('.title').removeClass('on');
				$('.title').show();
			}
			if(index == 2){
				$('.about_back').addClass('on');
			}else{
				$('.about_back').removeClass('on');
			}
			if(index == 3){
				$('.w_box_01').addClass('on');
				$('.w_box_02').addClass('on');
				$('.w_box_03').addClass('on');
				$('.w_box_04').addClass('on');
			}else{
				$('.w_box_01').removeClass('on');
				$('.w_box_02').removeClass('on');
				$('.w_box_03').removeClass('on');
				$('.w_box_04').removeClass('on');			
			}
			if(index == 4){
				$('.mobile_back').addClass('on');
			}else{
				$('.mobile_back').removeClass('on');
			}
		}
	});
	// *************************************************************
	$('.m_btn').click(function(){
        $('.line').toggleClass('on');
		$('.full_menu').toggleClass('on');
		$('.blackout').toggleClass('on');
		$('.title').show(1000);
    });
	$('.blackout').click(function(){
		$('.line').toggleClass('on');
		$('.full_menu').toggleClass('on');
		$('.blackout').toggleClass('on');
		$('.title').show(1000);
	});
	// *************************************************************
	$('.circle_01').click(function(){
		$('.title').fadeOut(200);
	});
	// *************************************************************
	


});