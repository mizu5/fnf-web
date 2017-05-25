$(document).ready(function(){
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1500);
}
function showPage() {
	$('.loader').animate({opacity:0},500,function(){});
	$('.mainWrap').css({'display':'block','opacity':0});
	$('.mainWrap').animate({opacity:1},500,function(){});
}
myFunction();
});