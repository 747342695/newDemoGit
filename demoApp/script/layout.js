//计算高
function fitHeight(boxclass, otherclass, statusHeight) {
    statusHeight = statusHeight == null || statusHeight == undefined ? 0 : statusHeight;
    // var height = api.winHeight - $('.' + otherclass).outerHeight();
    // $('.' + boxclass).height(height - statusHeight);
    var height = api.winHeight - document.getElementsByClassName(otherclass)[0].clientHeight;
    document.getElementsByClassName(boxclass)[0].style.height=(height - statusHeight) + "px";
}

function fitBusinessHeight(boxclass,statusHeight) {
    // var height = api.winHeight - $('.' + otherclass).outerHeight();
    // $('.' + boxclass).height(height - statusHeight);
    document.getElementsByClassName(boxclass)[0].style.height=(statusHeight) + "px";
}

// $(window).bind("resize", fitHeight);
/* function fitHeight(boxclass,otherclass) {
 	console.log(document.getElementsByClassName(otherclass));
 	
        var height =  window.screen.height-document.getElementsByClassName(otherclass)[0].clientHeight;
       console.log(document.getElementsByClassName(document.getElementsByClassName(boxclass).style));
      // document.getElementsByClassName(boxclass).style.height=height + "px";
       document.getElementsByClassName(boxclass).setAttribute("height",height);
   }
 window.onresize = function () {fitHeight();}*/

//宽等于高
// function widthHeight(boxclass, otherclass) {
//     var height = $('.' + otherclass).width();
//     $('.' + boxclass).height(height);
// }

// $(window).bind("resize", widthHeight);
 function widthHeight(boxclass,otherclass) {
     var height = document.getElementsByClassName(otherclass)[0].clientWidth;
     document.getElementsByClassName(boxclass)[0].style.height = height + "px";
 }
// $(window).bind("resize", widthHeight);
/*function widthHeight(boxclass,otherclass) {
        var height =document.getElementsByClassName(otherclass).width;   
        document.getElementsByClassName(boxclass).style.height=height + "px"; 
                    
   }
 window.onresize = function () {widthHeight();}*/