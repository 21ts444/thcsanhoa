function kiemtra(mail){

	
	 // Kiem tra xem co @ hay khong
	  if(mail.indexOf("@")<0) {
			   return false;
	  }
	  var btloc=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	  if(btloc.test(mail)) {
			   kq=true;
	  }
	  else { 
			   kq=false; 
	  } 
	  return kq; 
}

function ktSDT(sdt){
		if(isNaN(sdt)) { return false;}
		var h=sdt.length;
		if(h==11 || h==10 ) 
		return true; 
		
		else return false;	
}

function checkForm1(){

			tieude=document.getElementById("tieude").value;
			noidung=document.getElementById("editor4").value;
			
			nguoihoi=document.getElementById("nguoihoi").value;
			diachi=document.getElementById("diachi").value;
			
			email=document.getElementById("email").value;
			dienthoai=document.getElementById("dienthoai").value;
			captcha=document.getElementById("_Hoi_dap_WAR_Hoi_Dap_New_20portlet_captchaText").value;
			
			
			if(ktrong(tieude)==false)
				     {
							alert("Tiêu đề không được bỏ trống!"); document.getElementById("tieude").focus(); return  false;
				     }
			else  {
			  	
				    t=document.getElementById("tieude").value;
				    document.getElementById("tieude").value=catkhoangtrang_doi(catkhoangtrang(t));
			      }
			      
			if(ktrong(nguoihoi)==false)
			{
					alert("Họ tên không được bỏ trống!"); document.getElementById("nguoihoi").focus(); return  false;
			}
			else  {
			
					t=document.getElementById("nguoihoi").value;
					document.getElementById("nguoihoi").value= viethoachucaidau(catkhoangtrang_doi(catkhoangtrang(t)));
			}
			if(ktrong(diachi)==false)
			{
					alert("Địa chỉ không được bỏ trống!"); document.getElementById("diachi").focus(); return  false;
			}
			else  {
			
					t=document.getElementById("diachi").value;
					document.getElementById("diachi").value= viethoachucaidau(catkhoangtrang_doi(catkhoangtrang(t)));
			}
			
			
			
			
			if(email!="")
			      {
				      if(kiemtra(email)==false)
				    	          {
				    	  			alert("Email sai!"); document.getElementById("email").focus(); return false;
				    	          }
			      }
			
			if(ktSDT(dienthoai)==false)
			{
					alert(" SĐT sai hoặc bỏ trống!"); document.getElementById("dienthoai").focus(); return  false;
			}
			if(ktrong(captcha)==false)
			{
					alert("Mã xác nhận không được bỏ trống!"); document.getElementById("_Hoi_dap_WAR_Hoi_dapportlet_captchaText").focus(); return  false;
			}
			        
return true;
}


function viethoachucaidau(val){

			newVal = '';
			val = val.split(' ');
			for(var c=0; c < val.length; c++) {
			newVal += val[c].substring(0,1).toUpperCase()
			+ val[c].substring(1,val[c].length) + ' ';
									}
			newVal=catkhoangtrang(newVal);
			return newVal;
}
function ktrong(b)
{
			if(b.charAt(0)==" ")
					{
			   while(b.charAt(0)==" ")
			   b=b.substr(1,b.length-1);
				    }
			if(b.length==0)
					{
					return false;
					}
			return true;
}

function catkhoangtrang(b)
{
			if(b.charAt(0)==" ") {
				      while(b.charAt(0)==" ")
					  b=b.substr(1,b.length-1);
					  }
			if(b.charAt(b.length-1)==" ") 
			          {
				       while(b.charAt(b.length-1)==" ")
					   b=b.substr(0,b.length-1);
							  }
			return b;
}
function catkhoangtrang_doi(b)
{
		for(i=0;i<(b.length-2);i++)
		if(b.charAt(i)==" " && b.charAt(i+1)==" ")
		{
		  h=b.substr(0,i+1);
		  var r=b.substr(i+2,b.length-(i));
		  b=h+r;
		  i=0;
		}
		b=b.substr(0,b.length);
		return b;
}