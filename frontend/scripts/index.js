$(function(){  
		//激活导航栏链接样式
		var  filename=$("title").text();
		filename=filename.substr(filename.lastIndexOf('-')+1);  
		$("nav a").each(function(){
			if($(this).text()==filename){
				$(this).addClass("active");
				console.log(1);
			}
    		else{
    			$(this).removeClass("active");
    		}
  		});
  		//微信二维码弹窗
  		$("#wechat").click(function(){
  			$(".wechat-code").fadeIn(300);
		});
		$(".wechat-code span").click(function(){
  			$(".wechat-code").fadeOut(300);
		});
		//隐藏置顶按钮
		$("#back-to-top").hide();
		$('body,html').animate({scrollTop:0},1);
		//点击置顶按钮，回到页面顶部位置
		$("#back-to-top").click(function(){
			$('body,html').animate({scrollTop:0},400);
			return false;
		});
		//滚动条滚动及停止事件
		var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
 
    special.scrollstart = {
        setup: function() {
 
            var timer,
                handler =  function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.handle.apply(_self, _args);
                    }
 
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid1, handler);
 
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };
 
    special.scrollstop = {
        latency: 300,
        setup: function() {
 
            var timer,
                    handler = function(evt) {
 
                    var _self = this,
                        _args = arguments;
 
                    if (timer) {
                        clearTimeout(timer);
                    }
 
                    timer = setTimeout( function(){
 
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.handle.apply(_self, _args);
 
                    }, special.scrollstop.latency);
 
                };
 
            jQuery(this).bind('scroll', handler).data(uid2, handler);
 
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };
		//监听滚动条	
		$(window).scroll(function(){
			var top=$(window).scrollTop();//滚动条滚动距离
			//当滚动条的位置处于距顶部500像素以下时，置顶按钮出现，否则消失
			if (top>500){
				$("#back-to-top").fadeIn(600);
			}
			else
			{
				$("#back-to-top").fadeOut(600);
			}
			
		});
		//监听滚动条是否滚动
		var scroll_flag=false;
		jQuery(window).bind('scrollstart', function(){
        	scroll_flag=true;
    	});
 
    	jQuery(window).bind('scrollstop', function(e){
       	 	scroll_flag=false;
    	});
		//产品列表交互事件
		$(".product-list img").mouseover(function(){
			if(!scroll_flag){
  				$(this).prev().fadeIn(150);
			}
		});
		$(".product-list .p-mask").mouseleave(function(){
			if(!scroll_flag){
  				$(this).fadeOut(150);
  			}
		});
});
