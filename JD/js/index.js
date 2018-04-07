var oshortcut = document.getElementById("shortcut");
var oa = oshortcut.getElementsByClassName("s_c_ul")[0].getElementsByTagName("a");
var ospan = oshortcut.getElementsByClassName("c_i_span")[0];
//city
var aL = oa.length;
var temp = 0;
for(var ii=0 ; ii<aL ; ii++){
	oa[ii].onclick = function(){
		ospan.innerHTML = this.innerHTML;	
		for(var jj = 0; jj<aL ;jj++){
			oa[jj].className = "a2";
		}
		this.className = "a1";
	}
}

var d2_img = document.querySelectorAll("#fs .d2_imgs a"),
	d2_arrow = document.querySelectorAll("#fs .d2_arrow i"),
	d2_circle = document.querySelectorAll("#fs .d2_circle li");
var i = 0;
var inum = d2_img.length;

//onclick
d2_arrow[1].onclick = function(){
	d2_img[i].className = "";
	d2_circle[i].className = "";

	i = (i===9 ? 0 : ++i);
	d2_img[i].className = "d2_i_on";
	d2_circle[i].className = "now";
}
d2_arrow[0].onclick = function(){
	d2_img[i].className = "";
	d2_circle[i].className = "";

	i = (i===0 ? 9 : --i);
	d2_img[i].className = "d2_i_on";
	d2_circle[i].className = "now";
}

//li
var Lnum = d2_circle.length;
for(var j = 0;j<Lnum;j++){
	d2_circle[j].index = j; 
	d2_circle[j].onclick = function(){
		d2_img[i].className = " ";
		d2_circle[i].className = " ";
		i = this.index;
		d2_img[i].className = "d2_i_on";	
		d2_circle[i].className = "now";
	}
}
//set time
function slide(time){
	clearTimeout(circle);

	d2_img[i].className = "";
	d2_circle[i].className = "";

	i = (i===9 ? 0 : ++i);
	d2_img[i].className = "d2_i_on";
	d2_circle[i].className = "now";
	var circle = setTimeout("slide(5000)",time);
}
slide(5000); //bug

//onmouseover
var fs_span = document.querySelectorAll("#fs .d4_nav .h .sp"),
	fs_ul =  document.querySelectorAll("#fs .d4_nav .uls ul");
var snum = 0;

for(var q = 0;q<fs_span.length ; q++){
	fs_span[q].index = q;

	fs_span[q].onmouseenter = function(){
		fs_ul[snum].className = " ";
		snum = this.index;
		fs_ul[snum].className = "on";
	}
}
