function showtime(){
var now=new Date();
var year=now.getFullYear();
var month=now.getMonth()+1;
var day=now.getDate();
var hours=now.getHours();
var minutes=now.getMinutes();
var seconds=now.getSeconds();
time="现在是"+year+'/'+month+'/'+day +'/'+hours+':'+minutes+':'+seconds;
var nowtime=document.getElementById('nowtime');
nowtime.innerHTML=time;
}
function letstart(){
taskId=setInterval(showtime,500);
}

window.onload=function(){
	/*var div1=document.getElementById('div1');
	div1.onclick=letstart;*/
	letstart();
}