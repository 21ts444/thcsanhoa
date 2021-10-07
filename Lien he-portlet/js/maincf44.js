function QTLHonsubmit(port){
			idname=port+"QTLHname";
			idSDT=port+"QTLHPhone";
			idDiacchi=port+"QTLHdiachi";
			idNoidung=port+"QTLHNoidung";
			idForm=port+"THEMLH";
			if(ktrong(document.getElementById(idname).value)==false){alert("Họ tên không được bỏ trống!"); document.getElementById(idname).focus(); return false;}
			else  {
				  	
				     t=document.getElementById(idname).value;
				     document.getElementById(idname).value=viethoachucaidau(catkhoangtrang_doi(catkhoangtrang(t)));
				  }
			if(ktrong(document.getElementById(idDiacchi).value)==false){alert("Địa chỉ không được bỏ trống!");  document.getElementById(idDiacchi).focus(); return false;}
			else  {
				  	
				     t=document.getElementById(idDiacchi).value;
				     document.getElementById(idDiacchi).value=viethoachucaidau(catkhoangtrang_doi(catkhoangtrang(t)));
				  }
			if(ktrong(document.getElementById(idNoidung).value)==false){alert("Nội dung không được bỏ trống!"); document.getElementById(idNoidung).focus(); return false;}
			else  {
				     t=document.getElementById(idNoidung).value;
				     document.getElementById(idNoidung).value=catkhoangtrang_doi(catkhoangtrang(t));
				  }
			if(ktSDT(document.getElementById(idSDT).value)==false)  { alert("SĐT sai hoặc rỗng!"); document.getElementById(idSDT).focus(); return false;}
		
			document.getElementById(idForm).submit();
			//return false;
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
		function ktSDT(sdt){
					if(isNaN(sdt)) { return false;}
					var h=sdt.length;
					if(h==11 || h==10 ) 
						      return true; 
						    
					else return false;
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