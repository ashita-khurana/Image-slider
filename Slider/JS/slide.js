$(document).ready(function(){
	var i='a.jpg';
	var ind=0,temp=0;
	var last=$('.thumbnail').last().index();
	var address,scroll=0;
	var status="on";
	$("#thumbs").niceScroll();
	$('.thumbnail img').first().css('border','3px solid #fff');
	$('#imgs').html("<img class='style_img' src='Images/"+i+"'>");

	var loop=setInterval(slide,2000);


function slide(){
	$('.thumbnail').eq(ind).find('img').css('border','3px solid rgba(0, 0, 0,0.4)');
	if(ind===last){
		ind=0;
		temp=1;
	}
	else
		ind=ind+1;
	address=$('.thumbnail').eq(ind).find("img").attr("src");
	var list=address.split('/',3);


	$('#imgs img').fadeOut(300,function(){
		$('#imgs').html("<img class='style_img' src='Images/"+list[2]+"'>");
		$('#imgs img').fadeOut(0);
		$('#imgs img').fadeIn(300);	
	});

	$('#large').fadeOut(300,function(){
		$(this).attr('src','Images/'+list[2]);
		$(this).fadeIn(300);
		
	});

	$('.thumbnail').eq(ind).find('img').css('border','3px solid #fff');
	if(ind>=4)
	{
	scroll=$('#thumbs').scrollLeft()+115;
	$('#thumbs').animate({
		scrollLeft:scroll
	},500);
	}
	if(temp==1){
		$('#thumbs').animate({scrollLeft:0});	
		temp=0;
	}
	
}

$('.thumbnail img').click(function(){
	clearInterval(loop);
	$('.thumbnail img').css('border','3px solid rgba(0,0,0,0.4)');
	$(this).css('border','3px solid #fff');
	address=$(this).attr("src");
	var list=address.split('/',3);
	$('#imgs img').fadeOut(300,function(){
		$('#imgs').html("<img class='style_img' src='Images/"+list[2]+"'>");
		$('#imgs img').fadeOut(0);
		$('#imgs img').fadeIn(300);	
	});
	ind=$(this).parent().index();
	if(status=="on")
	loop=setInterval(slide,2000);

});




	i=$('.style_img').attr('src');
	$('body').append("<div id='enlarge'><div> <img id='large' src='"+i+"'><img id='close' src='images/icons/close.png'><img id='largeL' src='images/icons/left.png'><img id='largeR' src='images/icons/right.png'><img id='largePa' src='images/icons/pause.png'><img id='largePl' src='images/icons/play.png'></div></div>");
	$('#enlarge').hide();
	$('#expand').click(function(){

		$('#enlarge').fadeIn(250);
	})

	$('#enlarge').css({
	'background':'rgb(0,0,0)',
	 'width':'100%',
	 'height':'100%',
	 'position':'fixed',
	 'top':'0','left':'0',
	 'border':'3px solid #fff'
	});

	$('#enlarge div').css({
	 'width':'1000px',
	 'height':'550px',
	 'margin':'0 auto',
	 'margin-top':'35px',
	 'position':'relative',
	 'border':'1px solid red'
	});
	$('#large').css({
	'width':'1000px',
	 'height':'550px'
	});

	$('#close').css({
		'width':'13px',
		'position':'absolute',
		'top':'8px',
		'right':'4px'
	});
	$('#largeL').css({
		'width':'23px',
		'position':'absolute',
		'top':'314px',
		'left':'10px'
	});
	$('#largeR').css({
		'width':'23px',
		'position':'absolute',
		'top':'314px',
		'right':'10px'
	});

	$('#largePa').css({
	'width':'12px',
	'position':'absolute',
	'top':'318px',
	'right':'40px',
});

	$('#largePl').css({
	'width':'12px',
	'position':'absolute',
	'top':'318px',
	'right':'40px',
	'display':'none',
});

	$('#close').click(function(){

		$('#enlarge').fadeOut(250,function(){
			$(this).hide();
		});
	});
	$('#pause,#largePa').click(function(){
	$('#pause,#largePa').fadeOut();
	$('#play,#largePl').fadeIn();
	status="off";
	clearInterval(loop);
});
$('#play,#largePl').click(function(){
	status="on";
	$('#play,#largePl').fadeOut();
	$('#pause,#largePa').fadeIn();
	loop=setInterval(slide,2000);
});

$('#right,#largeR').click(function(){
	clearInterval(loop);
	$('.thumbnail').eq(ind).find('img').css('border','3px solid rgba(0, 0, 0,0.4)');
	if(ind===last){
		ind=0;
	}
	else
		ind=ind+1;
	address=$('.thumbnail').eq(ind).find("img").attr("src");
	var list=address.split('/',3);


	$('#imgs img').fadeOut(300,function(){
		$('#imgs').html("<img class='style_img' src='Images/"+list[2]+"'>");
		$('#imgs img').fadeOut(0);
		$('#imgs img').fadeIn(300);	
	});

	$('#large').fadeOut(250,function(){
		$(this).attr('src','Images/'+list[2]);
		$(this).fadeIn(250);
		
	});
	$('.thumbnail').eq(ind).find('img').css('border','3px solid #fff');
	if(status=="on")
	loop=setInterval(slide,2000);

});
$('#left, #largeL').click(function(){
	clearInterval(loop);
	$('.thumbnail').eq(ind).find('img').css('border','3px solid rgba(0, 0, 0,0.4)');
	if(ind===0){
		ind=last;
	}
	else
		ind=ind-1;
	address=$('.thumbnail').eq(ind).find("img").attr("src");
	var list=address.split('/',3);


	$('#imgs img').fadeOut(300,function(){
		$('#imgs').html("<img class='style_img' src='Images/"+list[2]+"'>");
		$('#imgs img').fadeOut(0);
		$('#imgs img').fadeIn(300);	
	});

	$('#large').fadeOut(250,function(){
		$(this).attr('src','Images/'+list[2]);
		$(this).fadeIn(250);
		
	});
	$('.thumbnail').eq(ind).find('img').css('border','3px solid #fff');
	if(status=="on")
	loop=setInterval(slide,2000);

});

});