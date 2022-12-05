console.log('%cНе вставляйте сюда ничего от другого пользователя, они могут пытаться украсть ваш аккаунт.', 'color: red; font-size: 20px');

/* if (location.protocol !== 'https:') {
	console.log("Redirecting to https...");
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
} */

/* var speed = 'slow';

$('html, body').hide(); */

/* $(document).ready(function() {
	
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
	
	$(".card").hover(
		function() {
			$(this).addClass('shadow-lg');
		},
		function() {
			$(this).removeClass('shadow-lg');
		}
	);
	
    $("#toggle-profile-3d").click(function(){
		$(this).prop("disabled",true);
        alert("произошла ошибка!");
    }); 
	
    $("#toggle-character-3d").click(function(){
		$(this).prop("disabled",true);
        alert("произошла ошибка!");
    });
}); */

/* window.onload = function() {
	$.get("/user/notifications/").then(function(data){ 
	
	  if (data != "") {
		document.getElementById("notificationtext").innerHTML = '<i class="fal fa-bell"></i><span class="badge bg-danger rounded-pill">новый</span>';
	  }
	
	  document.getElementById("notifications").innerHTML = data;

	});
	
	setInterval(function()
	{ 
		$.ajax({
		  type:"GET",
		  url:"/site/presence/register",
		  datatype:"html",
		  success:function(data)
		  {
			  //do something with response data
		  }
		});
	}, 10000);//time in milliseconds 
	
}; */
