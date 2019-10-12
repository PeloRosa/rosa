window.onload = function(){
    // 效果一：
    // header_top部分网页滚动，导航变化效果
    if($(window).scrollTop()>100){
        $(".header_top").addClass("scrolling_header_top");
        $(".header_btm").addClass("scrolling_header_btm");
        $(".header_btm li a").css({lineHeight:"70px",height:"70px"});
        $(".header_btm a:first").addClass("header_left_logo");
        $(".levelTwo ul li a").css({lineHeight:"30px",height:"13px"});
    }
    window.onscroll = function(){
        if($(window).scrollTop()>100){
            $(".header_top").addClass("scrolling_header_top");
            $(".header_btm").addClass("scrolling_header_btm");
            $(".header_btm li a").css({lineHeight:"70px",height:"70px"});
            $(".header_btm a:first").addClass("header_left_logo");
            $(".levelTwo ul li a").css({lineHeight:"30px",height:"13px"});
        }else{
            $(".header_top").removeClass("scrolling_header_top");
            $(".header_btm").removeClass("scrolling_header_btm");
            $(".header_btm li a").css({lineHeight:"61.6px",height:"61.6px"});
            $(".header_btm a:first").removeClass("header_left_logo");
            $(".levelTwo ul li a").css({lineHeight:"30px",height:"13px"});
        }
    }

    // 效果二：
    // 鼠标悬浮header_btm li , 二级菜单div显示
    $(".header_btm li").mouseover(function(){
        $(this).children(".levelTwo").show();
    });
    $(".header_btm li").mouseout(function(){
        $(this).children(".levelTwo").hide();
    });

    // 二级菜单显示鼠标悬浮在第二列出现不同第三列
    $(".inner_two > li").mouseover(function(){
        $($(".inner_two ~ .inner_three")[0]).show();
        $($(".inner_two ~ .inner_three")[1]).hide();
        $($(".inner_two ~ .inner_three")[2]).hide();
    });
    for(let i = 0 ; i < 3 ; i++){
        $($(".inner_two > li")[i]).mouseover(function(){
            $($(".inner_two ~ .inner_three")[0]).hide();
            $($(".inner_two ~ .inner_three")[1]).hide();
            $($(".inner_two ~ .inner_three")[2]).hide();
            $($(".inner_two ~ .inner_three")[i]).show();
        });
    }

    // 效果五：用户登录购物车点击显示
    $("body").click(function(e){
        let target = $(e.target);
        if(target.is(".header_user") || target.is(".header_user span")){
            $(".userLogin").css({display:"block"});
        }else{
            $(".userLogin").css({display:"none"});
        }
    })
    $("body").click(function(e){
        let target = $(e.target);
        if(target.is(".header_cart") || target.is(".header_cart span")){
            $(".mini_cart").css({right:"0"});
            $(".mini_cart_cover").css({display:"block"});
            $("body").css({overflowY:"hidden"});
        }else if(target.is(".mini_cart_cover") || target.is(".mini_cart_header img")){
            $(".mini_cart").css({right:"-475px"});
            $(".mini_cart_cover").css({display:"none"});
            $("body").css({overflow:"auto"});
        }
    });

    // 效果六：点击更多
    $(".more_box").click(function(){
        let flag = false;
        let productItems = $(this).parent().prev().children().children();
        for(let i = 0 ; i < productItems.size()-1; i++){
            if(productItems[i].style.display=="none"){
                productItems[i].style.display = "block";
                flag = true;
            }
        }
        if(flag){
            $(this).parent().css({display:"none"});
        }
    });
}

//注册页面的Ajax部分
$("#register_btn_submit").click(function(){
    //创建对象
    let xhr = new XMLHttpRequest();
    xhr.open("post","php/register.php",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            // console.log(xhr.responseText);
            if(xhr.responseText == "-1"){
                $(".mobliePhone_error")[0].innerHTML = "*该手机号已经注册";
                $(".mobliePhone_error")[0].style.display = "block";
            }else if(xhr.responseText == "0"){
                $(".mobliePhone_error")[0].innerHTML = "*注册失败";
                $(".mobliePhone_error")[0].style.display = "block";
            }else{
                $(".mobliePhone_error")[0].innerHTML = "√注册成功";
                $(".mobliePhone_error")[0].style.display = "block";
                $(".mobliePhone_error")[0].style.color = "green";
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    let sendstr = `username=${$("#name")[0].value}&mobliePhoneNum=${$("#mobliePhone")[0].value}&sex=${$("#sex")[0].value}`;
    xhr.send(sendstr);
});

