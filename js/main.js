// 網頁的主程式寫在這裡

//綁定 視窗 的捲動事件
//window不用雙引號
 //視窗被捲動時，做的事
$(window).scroll(function(){
    //window.scrollY是現在捲動的位置
    console.log("視窗被捲動了!",window.scrollY);
    //如果捲動位置>=50，讓header加入一個分類；
    //if如果，(條件)下，做{事情}
    if(window.scrollY>=50){
        $("#header").addClass("scroll");
        //沒有達成上述條件，做另一件事
    }else{
        $("#header").removeClass("scroll");
        }
        }
);



// 綁定 .ad-toggle-btn 
//透過jQuery，目標.ad-toggle-btn被點擊時。
// 會在console主控台印出文字，表示綁定成功
$(".ad-toggle-btn").click(function () {
    console.log("[.ad-toggle-btn被點擊了]");
    //想在選.side-box的元素時，為其切換分類為active
$(".side-box").toggleClass("active");
});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
    console.log("[#removeSideBoxBtn被點擊了]")
    //.hide() 隱藏
    //.fadeOut(時間) 淡出，以毫秒為單位，1秒=1000毫秒
    $(".side-box").fadeOut(300);
});

// 取得現在的年份
const year = new Date().getFullYear();
// 將年份顯示在 id="yearShow" 的元素內
$("#yearShow").text(year);