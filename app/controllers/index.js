// var win2 = Titanium.UI.createWindow({
    // backgroundColor: 'red',
    // title: 'Red Window'
// });
var win1 = Titanium.UI.createView({
       backgroundColor: 'red',
    title: 'Red Window',
    height:"30dp",
    top:"0"
});
$.index.add(win1);

function final(e) {
	Ti.API.info(JSON.stringify(e));
    alert("in final");
    Ti.API.info(JSON.stringify($.first.value));
    firstname();
    lastname();
    phone();
    email();
    password();
    repassword();
}
function firstname(){
	if($.first.value=="")
    {
    	$.err.setText("can not be empty");
    }
    else{
    	$.err.setText("");
    }
}
function lastname(){
	if($.last.value=="")
    {
    	$.errlast.setText("can not be empty");
    }
    else{
    	$.errlast.setText("");
    }
}
function phone(){
	var b=$.phone.value;
	var regex=/^\d{10}$/;	
	if(b.match(regex))
    {
    	$.errphone.setText("");
    }
    else{
    	$.errphone.setText("phone number 10 digit");
    }
}
function email(){
	var b=$.email.value;
	var regex=/\w*\.?\w+@[a-zA-Z]+\.[a-z]{2,4}/;	
	if(b.match(regex))
    {
    	$.erremail.setText("");
    }
    else{
    	$.erremail.setText("enter valid email");
    }
}
function password(){
	var b=$.pass.value;
	var regex=/^\w{8,12}$/;	
	if(b.match(regex))
    {
    	$.errpass.setText("");
    }
    else{
    	$.errpass.setText("plz eneter password 8 digit");
    }
}
function repassword(){
	var b=$.pass.value;
	var a=$.repass.value;	
	if(b===a)
    {
    	$.errepass.setText("");
    }
    else{
    	$.errepass.setText("password did not match");
    }
}

    //	$.first.addEventListener('blur',firstname(a));
$.index.open();
