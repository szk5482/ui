$(function(){
	setTimeout(function(){
		$(".accessbility_notice").addClass("hide");
	}, 4000);
	$(".accessbility_notice").find("a").focusin(function(){
		$(this).parent().removeClass("hide");
	});
	$(".accessbility_notice").find("a").focusout(function(){
		$(this).parent().addClass("hide");
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > $("#header").height()){
			$("#header").addClass("fixed");
		}else{
			$("#header").removeClass("fixed");
		}
	});
	$(".tab_container .navi a").click(function(e){
		e.preventDefault();
		$(this).parents(".navi").find("li").removeClass("active");
		$(this).parent().addClass("active");

		var index=$(this).parent().index()
		// console.log("index : "+index);
		$(".tab_container .content").children("div").removeClass("on")
		$(".tab_container .content").find("#tab"+index).addClass("on");
	});

	function GetCookie(name){
		var value=null, search=name+"=";
		if(document.cookie.length > 0){
			var offset=document.cookie.indexOf(search);
			if(offset != -1){
				offset+=search.length;
				var end=document.cookie.indexOf(";", offset);
				if(end == -1) end=document.cookie.length;
				value=unescape(document.cookie.substring(offset, end));
			}
		} return value;
	}

	// console.log('GetCookie("notice") : '+GetCookie("notice")); // GetCookie("notice") : 1 '오늘 하루 그만보기' 기능으로 팝업이 닫힌 경우입니다.
	if(GetCookie("notice") != "1"){
		window.open("popup.html", "xyy", "toolbar=no, width=400,height=440,status=yes,menubar=no,scrollbars=no");
	}
});