//####################################### Account Name ##################################################
/*************** Kiem tra ky tu (.,_) o dau va cuoi *****************/
function acc_checkCharBegin(obj){
	if(obj.charAt(0) == '.' || obj.charAt(0) == '_'){
		return false;	
	}	
	return true;
}
/*************** Kiem tra ky tu (.,_) va cuoi *****************/
function acc_checkCharEnd(obj){
	if(obj.charAt(obj.length-1) == '.' || obj.charAt(obj.length-1) == '_'){
		return false;	
	}
	return true;
}
/*************** Kiem tra ky tu gach duoi va dau cham lien tiep *****/
function acc_checkCharContinuous(obj){
	if(obj.indexOf('._') != -1 || obj.indexOf('_.') != -1 || obj.indexOf('__') != -1 || obj.indexOf('..') != -1){
		return false;
	}	
	return true;
}
//////////////////////////////////
/*************** Kiem tra khong cho nhap ky tu dat biet *****/
function acc_checkSpecialChars(obj){
	return checkCharacter(obj);
}
function checkCharacter(str){	
	for(i=0;i<str.length;i++){
		//alert(str.charCodeAt(i));
		if((str.charCodeAt(i) < 48 && str.charCodeAt(i) != 46)|| str.charCodeAt(i) > 122)
			return false;
		if(str.charCodeAt(i) > 57 && str.charCodeAt(i) < 65)
			return false;
		if(str.charCodeAt(i) > 90 && str.charCodeAt(i) < 97 && str.charCodeAt(i) != 95)
			return false;		
	}
	return true;
}
/*********** check len **************/
function acc_checkLen(obj){
	if((obj.length != 0 & obj.length < 2) || obj.length > 32)
		return false;
	return true;
}
function checkAccount(username,minlen,maxlen,chkAll)
{	
/*	if(checkStringIsNum(username)){
		return false;	
	}*/
	if(username.charAt(0) == ' ' || username.charAt(username.length-1) == ' ')
	{
		return false;	
	}
	if(username == '')
		return false;
		/*
	if(!acc_checkCharBegin(username)){
		return false;
	}	
	if(!acc_checkCharContinuous(username)){
		return false;
	}*/
	//if(!acc_checkSpecialChars(username)){
	//	return false;
	//}	
	//if(!acc_checkLen(username)){
	//	return false;
	//}	
	return true;
}
function checkPassField(pass, minlen, maxlen){
	if(checkTextLength(pass,minlen,maxlen)==false)	{
		return false;
	}
	if(checkUnicode(pass)==false){
		return false;
	}
	return true;
}
function checkUnicode(stringIn) {
	retval = false 
	for (var i=0;i<=stringIn.length-1;i++) { 
		if  ( (stringIn.charCodeAt (i) >= 32)&&(stringIn.charCodeAt (i) <= 126) ) { 
				   retval = true;
		}else{
			  retval = false;
			  break;
		}
	}
	return retval;
	}

function Trim(text)
{
	var len=text.length;
	var i=0;
	var j=len-1;
	var s="";
	
	while(text.charAt(i)==" ")
		i++;
	
	while(text.charAt(j)==" ")
		j--;
	
	if(i>j) 
		s="";
	else 
		s=text.substring(i,j+1);
	
	return s;
}
//*********************** Check field range length ***************
function checkTextLength(str,minlen,maxlen)
{
	if(str.length<minlen || str.length>maxlen)
	{
		
		return false;
	}
	return true;
}
//************************************ check number (integer) **************************
function checkIsNum(val,name,obj)
{
	if((val!="")&&(!isNaN(val)) && (val>=0))
		return true;
	else
	{	
		errormsg=errormsg + name+" khong hop le (chi chap nhan ky tu so).\n";
		return false;
	}

}

function checkSpecialChars(str,obj,chkAll)
{
		if(chkAll)
			var re = /^[0-9a-zA-Z]*$/;
		else
			var re = /^[0-9a-z]*$/;
		str = trim(str);
		var pos = str.search(re);                                                
		if(pos == -1)
		{
			return false;
		} 
		else
		{
			return true;
		}
}

function checkNum(c){
	if(c > 47 && c < 58)
		return true;
	return false;
}
function checkStringIsNum(str){
	for(i=0;i<str.length;i++){
		if(!checkNum(str.charCodeAt(i)))
			return false;
	}
	return true;
}
function checkUnicode(stringIn) {
	retval = false 
	for (var i=0;i<=stringIn.length-1;i++) { 
		if  ( (stringIn.charCodeAt (i) >= 32)&&(stringIn.charCodeAt (i) <= 126) ) { 
				   retval = true;
		}else{
			  retval = false;
			  break;
		}
	}
	return retval;
	}

