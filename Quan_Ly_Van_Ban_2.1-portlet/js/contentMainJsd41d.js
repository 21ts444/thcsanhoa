/**
 * 
 */

	

 $(document).ready(function(){
		$(".lich").datepicker();							   
	});
 

	//////
 var xmlHttp;
 function CountDown(ur, FID, Count, link){
 						
 			if (typeof XMLHttpRequest != "undefined"){
 												xmlHttp= new XMLHttpRequest();
 														}
 			else if (window.ActiveXObject){
 											  xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
 											}
 			if (xmlHttp==null){
 								   alert("Browser does not support XMLHTTP Request");
 								   return;
 								 }
 			var url=ur;
 			url +="&FID=" +FID+"&Count=" +Count;
 			//xmlHttp.onreadystatechange = degreeChange();
 			
 			xmlHttp.open("GET", url, true)
 			xmlHttp.send(null);
 			  var url = link;
 			    var filename = url.substring(url.lastIndexOf('/')+1);
 			    var res = filename.split(".pdf");
 			    var res1 = filename.split(".PDF");
 			    
 			    if(((res.length==1) & (res1.length==1) ) || ((((navigator.userAgent).toLowerCase()).split("chrome")).length)==1  )
 			    	{
 			    	
 				    setTimeout(function(){window.location.href=link;}, 300);
 			    	}
 			    
 			    else setTimeout(function(){SaveToDisk(link, res[0] );}, 300);
 			
 			//;
 }
 var xmlHttp;
 function CountDownConfig(ur, FID, Count, link){
 						
 			if (typeof XMLHttpRequest != "undefined"){
 												xmlHttp= new XMLHttpRequest();
 														}
 			else if (window.ActiveXObject){
 											  xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
 											}
 			if (xmlHttp==null){
 								   alert("Browser does not support XMLHTTP Request");
 								   return;
 								 }
 			var url=ur;
 			url +="&FID=" +FID+"&Count=" +Count;
 			//xmlHttp.onreadystatechange = degreeChange();
 			
 			xmlHttp.open("GET", url, true)
 			xmlHttp.send(null);
 			  var url = link;
 			    var filename = url.substring(url.lastIndexOf('/')+1);
 			    var res = filename.split(".pdf");
 			    var res1 = filename.split(".PDF");
 			    
 			    if(((res.length==1) & (res1.length==1) ) || ((((navigator.userAgent).toLowerCase()).split("chrome")).length)==1  )
 			    	{
 			    	
 				    setTimeout(function(){window.location.href=link;}, 300);
 			    	}
 			    
 			    else setTimeout(function(){SaveToDisk(link, res[0] );}, 300);
 			
 			//;
 }

 function SaveToDisk(fileURL, fileName) {
     // for non-IE
     if (!window.ActiveXObject) {
         var save = document.createElement('a');
         save.href = fileURL;
         save.target = '_blank';
         save.download = fileName || fileURL;
         var evt = document.createEvent('MouseEvents');
         
         evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0,
             false, false, false, false, 0, null);
         save.dispatchEvent(evt);
         (window.URL || window.webkitURL).revokeObjectURL(save.href);
     }

     // for IE
     else if ( !! window.ActiveXObject && document.execCommand)     {
         var _window = window.open(fileURL, "_blank");
         _window.document.close();
         _window.document.execCommand('SaveAs', true, fileName || fileURL)
         _window.close();
     }
 }
 
 /*function downloadme(x){
myTempWindow = window.open(x,'','left=10000,screenX=10000');
myTempWindow.document.execCommand('SaveAs','null','download.pdf');
myTempWindow.close();
<a href=javascript:downloadme('/test.pdf');>Download this pdf</a>
}*/

function CountDownXem(ur, FID, Count, link){
	
	if (typeof XMLHttpRequest != "undefined"){
										xmlHttp= new XMLHttpRequest();
												}
	else if (window.ActiveXObject){
									  xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
									}
	if (xmlHttp==null){
						   alert("Browser does not support XMLHTTP Request");
						   return;
						 }
	var url=ur;
	url +="&FID=" +FID+"&Count=" +Count;
	//xmlHttp.onreadystatechange = degreeChange();
	
	xmlHttp.open("GET", url, true)
	xmlHttp.send(null);
	setTimeout(function(){window.location.href=link;}, 300);
	
	//;
}

function CountDownXemConfig(ur, FID, Count, link){
	
	if (typeof XMLHttpRequest != "undefined"){
										xmlHttp= new XMLHttpRequest();
												}
	else if (window.ActiveXObject){
									  xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
									}
	if (xmlHttp==null){
						   alert("Browser does not support XMLHTTP Request");
						   return;
						 }
	var url=ur;
	url +="&FID=" +FID+"&Count=" +Count;
	//xmlHttp.onreadystatechange = degreeChange();
	
	xmlHttp.open("GET", url, true)
	xmlHttp.send(null);
	setTimeout(function(){window.location.href=link;}, 300);
	
	//;
}







////
	/*k=0; h=0;
function myFunction(q) {
    k=k+1; h=k-1; 
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    x.setAttribute("name", q+"AT"+k);
    x.setAttribute("id", "File"+k);

     var y = document.createElement("INPUT");
         y.setAttribute("type", "button");
         y.setAttribute("value", "Xoa");
         y.setAttribute("onclick", "xoa("+k+")");
         y.setAttribute("id", k+"+1");
         y.setAttribute("class", "QLVBButton");
        
     
    document.getElementById('VanBan_file').appendChild(x);
    document.getElementById('VanBan_file').appendChild(y);
    document.getElementById('QTVBMAXK').value=k;
}

function xoa(k){
	     bien="File"+k;
	     var elem = document.getElementById(bien);
         elem.parentNode.removeChild(elem);


         var elem = document.getElementById(k+"+1");
         elem.parentNode.removeChild(elem);

}  */

//*Them file*//
k=0; h=0;
function myFunction(n) {
	
    k=k+1; h=k-1;  id="divleft"+k;
	var d=document.createElement("div");
	 d.setAttribute("class", "QTVBdivleft");
	 d.setAttribute("id", "divfileleft"+k);
	 
	  var q=document.createElement("div");
	 q.setAttribute("class", "QTVBdivright");
	 q.setAttribute("id", "divfileright"+k);
	 
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    x.setAttribute("name", n+"AT"+k);
    x.setAttribute("id", "File"+k);


     var y = document.createElement("INPUT");
         y.setAttribute("type", "button");
         y.setAttribute("value", "Xoa");
         y.setAttribute("onclick", "xoa("+k+")");
         y.setAttribute("id", k+"+1");
         y.setAttribute("class", "QLVBButton");
        
      d.appendChild(x);
	  q.appendChild(y)
    document.getElementById('VanBan_file').appendChild(d);
    document.getElementById('VanBan_file').appendChild(q);
    document.getElementById('QTVBMAXK').value=k;
}

function xoa(k){
	     bien="File"+k;
		 DLeft="divfileleft"+k
		 DRight="divfileright"+k;
		
		 
	     var elem = document.getElementById(bien);
         elem.parentNode.removeChild(elem);


         var elem = document.getElementById(k+"+1");
         elem.parentNode.removeChild(elem);
		
		  var elem = document.getElementById(DLeft);
         elem.parentNode.removeChild(elem);
		 
		  var elem = document.getElementById(DRight);
          elem.parentNode.removeChild(elem);
} 

 
function checkFile()
		{
	max=document.getElementById("QTVBMAXK").value;
	demfile=0;
	for(i=0;i<=max;i++)
		   {      
		 			bien="File"+i; 
				if(document.getElementById(bien))
				   { 
					    file_attach=document.getElementById(bien).value;
					if((file_attach)!="")
			                {
						demfile++;
					    mag = (file_attach).split("."); 		   
				        k=mag.length;
				        duoi=mag[k-1].toLowerCase();
				        if(duoi!="doc" && duoi!="pdf" && duoi!="xls" && duoi!="xlsx" && duoi!="docx" && duoi!="docx" && duoi!="txt" && duoi!="zip" && duoi!="rar")
				        return false;
							}
					
				   }
			}
	if(demfile==0) return false;
	return true;
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
function kiemTraFormUser(){
	//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
	//str[0].toUpperCase()+str.substr(1,str.length-1);
			idUser=document.getElementById("idUser").value;
			//alert(idUser)
			PB=document.getElementById("PB").value;
			//alert(PB)
			ChucVu=document.getElementById("ChucVu").value;
	      if(idUser==-1) {alert("User chưa được chọn!");document.getElementById("idUser").focus(); return false;}
	 else if (PB==-1) {alert("Phòng ban chưa được chọn!");document.getElementById("PB").focus(); return false;}
	 else if (ktrong(ChucVu)==false) {alert("Chức vụ không được bỏ rống!");document.getElementById("ChucVu").focus(); return false;}
	      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
	      document.getElementById("idUser").value=catkhoangtrang(catkhoangtrang_doi(idUser));
	      document.getElementById("PB").value=catkhoangtrang(catkhoangtrang_doi(PB));
	      document.getElementById("ChucVu").value=Sohieu[0]+Sohieu.substr(1,ChucVu.length-1);
	      /*if(document.getElementById("QTVBDHFORM").value=="save")
	    	  {
	    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
	    	  }*/
	      
	      return true;
  }

var _validFileExtensions = [".xlsx",".xls",".doc",".docx",".txt",".pdf",".rar",".zip"];    
function ValidateAudioFile(oForm,port) {
 id ="#"+"File0";
 var fileName = $(id).val();
 if(fileName.length <= 0)
  return true;
 else{
  //alert(fileName.length);
     var arrInputs = oForm.getElementsByTagName("input");
     for (var i = 0; i < arrInputs.length; i++) {
         var oInput = arrInputs[i];
         if (oInput.type == "file"){
             var sFileName = oInput.value;
             
             if(sFileName.length <= 0)
             {
                   alert("Bạn chưa chọn tập tin  !");
                      return false;
             }
             
             if (sFileName.length > 0) {
                 var blnValid = false;
                 for (var j = 0; j < _validFileExtensions.length; j++) {
                     var sCurExtension = _validFileExtensions[j];
                     if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                         blnValid = true;
                         break;
                     }
                 }
                 
                 if (!blnValid) {
                     alert("Tập tin không thuộc định đạng .xlsx,.xls,.doc,.docx,.txt,.pdf, .rar, .zip !, xin vui lòng chọn lại");
                     return false;
                 }
             }
         }
     }
   
     return true;
 }

}

function ValidateAudioFile1(oForm,port) {
	 id ="#"+"File01";
	 var fileName = $(id).val();
	 if(fileName.length <= 0)
	  return true;
	 else{
	  //alert(fileName.length);
	     var arrInputs = oForm.getElementsByTagName("input");
	     for (var i = 0; i < arrInputs.length; i++) {
	         var oInput = arrInputs[i];
	         if (oInput.type == "file"){
	             var sFileName = oInput.value;
	             
	             if(sFileName.length <= 0)
	             {
	                   alert("Bạn chưa chọn tập tin  !");
	                      return false;
	             }
	             
	             if (sFileName.length > 0) {
	                 var blnValid = false;
	                 for (var j = 0; j < _validFileExtensions.length; j++) {
	                     var sCurExtension = _validFileExtensions[j];
	                     if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                         blnValid = true;
	                         break;
	                     }
	                 }
	                 
	                 if (!blnValid) {
	                     alert("Tập tin không thuộc định đạng .xlsx,.xls,.doc,.docx,.txt,.pdf, .rar, .zip !, xin vui lòng chọn lại");
	                     return false;
	                 }
	             }
	         }
	     }
	   
	     return true;
	 }

	}

  function kiemTraForm1(oForm,port){
	//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
	//str[0].toUpperCase()+str.substr(1,str.length-1);
	      Sohieu=document.getElementById("QTVBSoH").value;
	      Tieude=document.getElementById("QTVBTiD").value;
	      Trichyeu=document.getElementById("QTVBTrY").value;
	      if(ktrong(Sohieu)==false) {alert("Số hiệu không được bỏ rỗng!");document.getElementById("QTVBSoH").focus(); return false;}
	 else if (ktrong(Tieude)==false) {alert("Tiêu đề không được bỏ rỗng!");document.getElementById("QTVBTiD").focus(); return false;}
	 else if (ktrong(Trichyeu)==false) {alert("Trích yếu không được bỏ rống!");document.getElementById("QTVBTrY").focus(); return false;}
	      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
	      document.getElementById("QTVBTiD").value=catkhoangtrang(catkhoangtrang_doi(Tieude));
	      document.getElementById("QTVBTrY").value=catkhoangtrang(catkhoangtrang_doi(Trichyeu));
	      document.getElementById("QTVBSoH").value=Sohieu[0]+Sohieu.substr(1,Sohieu.length-1);
	      if(document.getElementById("QTVBDHFORM").value=="save")
	    	  {
	    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
	    	  }
	      NgBH = document.getElementById(port+"NgBHF").value;
	      //alert(NgBH)
	      var  banhanh = NgBH.split('-');
	     // alert("banhanh: "+banhanh);
	      NgHL = document.getElementById(port+"NgHLF").value;
	      var  hieulenh = NgHL.split('-');
	     // alert("hieulenh: "+hieulenh);
	      var d2 = Number(hieulenh[2] + hieulenh[1] + hieulenh[0]);
	     // alert("d1: "+d1);
	      var d1 = Number(banhanh[2] + banhanh[1] + banhanh[0]);
	      //alert("d2: "+d2);
	      if(d2 < d1){
	    	  alert("Ngày ban hành không được lớn hơn Ngày hiệu lệnh!");
		    	 return false;
	      }
	      var no_file = ValidateAudioFile(oForm,port);
	      	if(no_file == true){
	      		return true;
	      	}else {
	      		return false;
	      	}
	      return true;
  }
  function kiemTraForm(oForm,port){
	  //alert("1");
	//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
	//str[0].toUpperCase()+str.substr(1,str.length-1);
	      Sohieu=document.getElementById("QTVBSoH").value;
	      //alert("2");
	      Tieude=document.getElementById("QTVBTiD").value;
	      //alert("3");
	      Trichyeu=document.getElementById("QTVBTrY").value;
	     // alert("4");
	   //  Noibo=document.getElementById("NoiboF").value;
	     // alert("here"+Trichyeu);
	     // Pub=document.getElementById("pubF").value;
	      //alert("here"+Pub);
	     // Show=document.getElementById("SHome").value;
	      //if(pub==1) document.getElementById(publ).checked=true;
	      //else document.getElementById(publ).checked=false;
	     //if(document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_pubF").checked)
	     
	      if(ktrong(Sohieu)==false) {alert("Số hiệu không được bỏ rỗng!");document.getElementById("QTVBSoH").focus(); return false;}
	      
	      else if (ktrong(Tieude)==false) {alert("Tiêu đề không được bỏ rỗng!");document.getElementById("QTVBTiD").focus(); return false;}
	    
	      else if (ktrong(Trichyeu)==false) {alert("Trích yếu không được bỏ rống!");document.getElementById("QTVBTrY").focus(); return false;}
	      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
	      document.getElementById("QTVBTiD").value=catkhoangtrang(catkhoangtrang_doi(Tieude));
	      document.getElementById("QTVBTrY").value=catkhoangtrang(catkhoangtrang_doi(Trichyeu));
	      document.getElementById("QTVBSoH").value=Sohieu[0]+Sohieu.substr(1,Sohieu.length-1);
	      if(document.getElementById("QTVBDHFORM").value=="save")
	    	  {
	    	  var no_file = ValidateAudioFile(oForm,port);
		      
	    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
	    	  }
	      
	     // alert(document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_pubF").checked);
	      if((document.getElementById(port+"pubF").checked && document.getElementById(port+"NoiboF").checked) || (document.getElementById(port+"SHome").checked && document.getElementById(port+"NoiboF").checked)){
	    	  alert("Chọn hiển thị nội bộ hoặc trang chủ!");
	    	 return false;
	    	  }
	      NgBH = document.getElementById(port+"NgBHF").value;
	      //alert(NgBH)
	     
	      //alert("banhanh: "+banhanh);
	      NgHL = document.getElementById(port+"NgHLF").value;
	      var  banhanh = NgBH.split('-');
	      var  hieulenh = NgHL.split('-');
	    // alert("hieulenh: "+hieulenh);
	      var d2 = Number(hieulenh[2] + hieulenh[1] + hieulenh[0]);
	     // alert("d2: "+d2);
	      var d1 = Number(banhanh[2] + banhanh[1] + banhanh[0]);
	     // alert("d1: "+d1);
	      if(d2 < d1){
	    	  alert("Ngày ban hành không được lớn hơn Ngày hiệu lệnh!");
		    	 return false;
	      }
	      var no_file = ValidateAudioFile(oForm,port);
	      	if(no_file == true){
	      		return true;
	      	}else {
	      		return false;
	      	}
	      	return true;
}
  function kiemTraFormBTE(oForm,port){
	  //alert("1");
	//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
	//str[0].toUpperCase()+str.substr(1,str.length-1);
	      Sohieu=document.getElementById("QTVBSoH").value;
	      //alert("2");
	      Tieude=document.getElementById("QTVBTiD").value;
	      //alert("3");
	      Trichyeu=document.getElementById("QTVBTrY").value;
	    
	     	     
	      if(ktrong(Sohieu)==false) {alert("Số hiệu không được bỏ rỗng!");document.getElementById("QTVBSoH").focus(); return false;}
	      
	      else if (ktrong(Tieude)==false) {alert("Tiêu đề không được bỏ rỗng!");document.getElementById("QTVBTiD").focus(); return false;}
	    
	      else if (ktrong(Trichyeu)==false) {alert("Trích yếu không được bỏ rống!");document.getElementById("QTVBTrY").focus(); return false;}
	      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
	      document.getElementById("QTVBTiD").value=catkhoangtrang(catkhoangtrang_doi(Tieude));
	      document.getElementById("QTVBTrY").value=catkhoangtrang(catkhoangtrang_doi(Trichyeu));
	      document.getElementById("QTVBSoH").value=Sohieu[0]+Sohieu.substr(1,Sohieu.length-1);
	      if(document.getElementById("QTVBDHFORM").value=="save")
	    	  {
	    	
	    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
	    	  }
	      
	    // alert(document.getElementById(port+"pubF").checked);
	      if((document.getElementById(port+"pubF").checked && document.getElementById(port+"NoiboF").checked) || (document.getElementById(port+"SHome").checked && document.getElementById(port+"NoiboF").checked)){
	    	  alert("Chọn hiển thị nội bộ hoặc trang chủ!");
	    	 return false;
	    	  }
	      NgBH = document.getElementById(port+"NgBHF").value;
	      //alert(NgBH)
	      var  banhanh = NgBH.split('-');
	      //alert("banhanh: "+banhanh);
	      NgHL = document.getElementById(port+"NgHLF").value;
	      var  hieulenh = NgHL.split('-');
	     // alert("hieulenh: "+hieulenh);
	      var d2 = Number(hieulenh[2] + hieulenh[1] + hieulenh[0]);
	      //alert("d2: "+d2);
	      var d1 = Number(banhanh[2] + banhanh[1] + banhanh[0]);
	     // alert("d1: "+d1);
	      if(d2 < d1){
	    	  alert("Ngày ban hành không được lớn hơn Ngày hiệu lệnh!");
		    	 return false;
	      }
	      var no_file = ValidateAudioFile(oForm,port);
	      	if(no_file == true){
	      		return true;
	      	}else {
	      		return false;
	      	}
	      	return true;
}
  function kiemTraFormPB(oForm,port){
		//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
		//str[0].toUpperCase()+str.substr(1,str.length-1);
		      Sohieu=document.getElementById("QTVBSoH").value;
		      Tieude=document.getElementById("QTVBTiD").value;
		      Trichyeu=document.getElementById("QTVBTrY").value;
		      if(ktrong(Sohieu)==false) {alert("Số hiệu không được bỏ rỗng!");document.getElementById("QTVBSoH").focus(); return false;}
		 else if (ktrong(Tieude)==false) {alert("Tiêu đề không được bỏ rỗng!");document.getElementById("QTVBTiD").focus(); return false;}
		 else if (ktrong(Trichyeu)==false) {alert("Trích yếu không được bỏ rống!");document.getElementById("QTVBTrY").focus(); return false;}
		      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
		      document.getElementById("QTVBTiD").value=catkhoangtrang(catkhoangtrang_doi(Tieude));
		      document.getElementById("QTVBTrY").value=catkhoangtrang(catkhoangtrang_doi(Trichyeu));
		      document.getElementById("QTVBSoH").value=Sohieu[0]+Sohieu.substr(1,Sohieu.length-1);
		      if(document.getElementById("QTVBDHFORMPB").value=="save")
		    	  {
		    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
		    	  }
		      NgBH = document.getElementById(port+"NgBHF").value;
		      //alert(NgBH)
		      var  banhanh = NgBH.split('-');
		      //alert("banhanh: "+banhanh);
		      NgHL = document.getElementById(port+"NgHLF").value;
		      var  hieulenh = NgHL.split('-');
		     // alert("hieulenh: "+hieulenh);
		      var d2 = Number(hieulenh[2] + hieulenh[1] + hieulenh[0]);
		      //alert("d1: "+d1);
		      var d1 = Number(banhanh[2] + banhanh[1] + banhanh[0]);
		     // alert("d2: "+d2);
		      if(d2 < d1){
		    	  alert("Ngày ban hành không được lớn hơn Ngày hiệu lệnh!");
			    	 return false;
		      }
		      var no_file = ValidateAudioFile(oForm,port);
		      	if(no_file == true){
		      		return true;
		      	}else {
		      		return false;
		      	}
		      return true;
	  }
  function kiemTraFormPB1(oForm,port){
		//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
		//str[0].toUpperCase()+str.substr(1,str.length-1);
		      Sohieu=document.getElementById("QTVBSoH1").value;
		      Tieude=document.getElementById("QTVBTiD1").value;
		      Trichyeu=document.getElementById("QTVBTrY1").value;
		      if(ktrong(Sohieu)==false) {alert("Số hiệu không được bỏ rỗng!");document.getElementById("QTVBSoH1").focus(); return false;}
		 else if (ktrong(Tieude)==false) {alert("Tiêu đề không được bỏ rỗng!");document.getElementById("QTVBTiD1").focus(); return false;}
		 else if (ktrong(Trichyeu)==false) {alert("Trích yếu không được bỏ rống!");document.getElementById("QTVBTrY1").focus(); return false;}
		      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
		      document.getElementById("QTVBTiD1").value=catkhoangtrang(catkhoangtrang_doi(Tieude));
		      document.getElementById("QTVBTrY1").value=catkhoangtrang(catkhoangtrang_doi(Trichyeu));
		      document.getElementById("QTVBSoH1").value=Sohieu[0]+Sohieu.substr(1,Sohieu.length-1);
		      if(document.getElementById("QTVBDHFORMPB1").value=="save")
		    	  {
		    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
		    	  }
		      NgBH = document.getElementById(port+"NgBHF1").value;
		      //alert(NgBH)
		      var  banhanh = NgBH.split('-');
		      //alert("banhanh: "+banhanh);
		      NgHL = document.getElementById(port+"NgHLF1").value;
		      var  hieulenh = NgHL.split('-');
		    //  alert("hieulenh: "+hieulenh);
		      var d2 = Number(hieulenh[2] + hieulenh[1] + hieulenh[0]);
		     // alert("d1: "+d1);
		      var d1 = Number(banhanh[2] + banhanh[1] + banhanh[0]);
		      //alert("d2: "+d2);
		      if(d2 < d1){
		    	  alert("Ngày ban hành không được lớn hơn Ngày hiệu lệnh!");
			    	 return false;
		      }
		      var no_file = ValidateAudioFile1(oForm,port);
		      	if(no_file == true){
		      		return true;
		      	}else {
		      		return false;
		      	}
		      return true;
	  }
  /*Kiem tra form Danh muc*/
  function QTVBcheckFormDM(port,idtext){
		  idtext=port+idtext;
		  text=document.getElementById(idtext).value;
	    if(ktrong(text)==false) {alert("Mục có dấu (*) không được rỗng!"); return false;}
	    else 
	       {
		  document.getElementById(idtext).value=catkhoangtrang(catkhoangtrang_doi(text));
		  return true;
		   }
	  
  }
  //Loai van ban
  function setForm(port, id, nam, mota, NoiDungQT){
      idsetnam=port+NoiDungQT+"QTVBTextLVB";
      idsetmota=port+NoiDungQT+"QTVBMotaLVB";
      choncu=port+NoiDungQT+"QTVBhiddenclick";
      idu=port+NoiDungQT+"IdUse";
      document.getElementById(choncu).value='cu'
	  document.getElementById(idsetnam).value=nam;
	  document.getElementById(idu).value=id;
	  document.getElementById(idsetmota).value=mota;
}
function setValueForm(port, op, ND, Form, idtex){
        id=port+ND+Form;
		option=port+ND+"QTVBdieuhuong3";
	if(op=="xoa")
		    {
					var r = confirm("Bạn có thực sự muốn xóa mục này!");
				    if (r == true) {
				    	//alert(option)
				    	document.getElementById(option).value=op;
				    	//alert(id)
						document.getElementById(id).submit();
				    } else {
				       return;
				    }
		
		
		    }
	else {
		if(QTVBcheckFormDM(port, idtex)== true)
			{
			document.getElementById(option).value=op;
			document.getElementById(id).submit();
			}
	
	}
		
		
}
function open_user_doc(PoNa, NDQT){
	   tenform="#"+PoNa+NDQT;  
	  
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kkLVB(PoNa, NDQT){
	   tenform="#"+PoNa+NDQT+"FormEditLVB";  
	  
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kkLVB_PB(PoNa, NDQT){
	   tenform="#"+PoNa+NDQT+"FormEditLVB";  
	  
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kk(PoNa){

	   tenform=PoNa+"addD";  
       document.getElementById(tenform).reset();
       document.getElementById("QTVBDHFORM").value="save";
	 $("#addDocumentForm").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$("#addDocumentForm").find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kkBTE(PoNa){

	   tenform=PoNa+"addDBTE";  
    document.getElementById(tenform).reset();
    document.getElementById("QTVBDHFORM").value="save";
	 $("#addDocumentFormBTE").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$("#addDocumentFormBTE").find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kkPB(PoNa){

	   tenform=PoNa+"addD_PB";  
    document.getElementById(tenform).reset();
    document.getElementById("QTVBDHFORMPB").value="save";
	 $("#addDocumentFormPB").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$("#addDocumentFormPB").find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kkUpdate(id, kieuvb, sohieu, loaivb, linhvuc, coquan, ngaybh, ngayhl, pub, Shome, phongban, nguoiky, noibo, port){
	  kieuvanban=port+ "KVBF";
	  loaivanban=port+ "LoVBF";
	  coquanBH=port+ "CoQBHF";
	  linhvucvb=port+ "LiVF";
	  ngaybanhanh=port+ "NgBHF";
	  ngayhieuluc=port+ "NgHLF";
	  publ=port+ "pubF";
	  NoiBo=port+"NoiboF";
	  ShowHome=port+"SHome";
	  phongb=port+"PB";
	  idtieude=port+"tieude_"+id;
	  idtrichyeu=port+"tomtat_"+id;
	  nguoikyid=port+"Signer";
	  tieude=document.getElementById(idtieude).value;
	  trichyeu=document.getElementById(idtrichyeu).value;
	  document.getElementById(loaivanban).value=loaivb;
	  document.getElementById(kieuvanban).value=kieuvb;
	  document.getElementById(coquanBH).value=coquan;
	  document.getElementById(linhvucvb).value=linhvuc;
	  document.getElementById(ngayhieuluc).value=ngayhl;
	  document.getElementById(ngaybanhanh).value=ngaybh;
	  document.getElementById(phongb).value=phongban;
	  document.getElementById(nguoikyid).value=nguoiky;
	  document.getElementById('QTVBSoH').value=sohieu;
document.getElementById('QTVBTiD').value=tieude;
document.getElementById('QTVBIDFORM').value=id;
document.getElementById('QTVBTrY').value=trichyeu; 
document.getElementById('File0').value=""; 
if(pub==1) document.getElementById(publ).checked=true;
else document.getElementById(publ).checked=false;

if(Shome==1) document.getElementById(ShowHome).checked=true;
else document.getElementById(ShowHome).checked=false;

if(noibo==1) document.getElementById(NoiBo).checked=true;
else document.getElementById(NoiBo).checked=false;



document.getElementById("QTVBDHFORM").value="update";
$("#addDocumentForm").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$("#addDocumentForm").find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
function kkUpdateBTE(trangthai,id, kieuvb, sohieu, loaivb, linhvuc, coquan, ngaybh, ngayhl, pub, Shome, phongban, nguoiky, noibo, port){
	trthai = port + "TrangThai"  
	kieuvanban=port+ "KVBF";
	  loaivanban=port+ "LoVBF";
	  coquanBH=port+ "CoQBHF";
	  linhvucvb=port+ "LiVF";
	  ngaybanhanh=port+ "NgBHF";
	  ngayhieuluc=port+ "NgHLF";
	  publ=port+ "pubF";
	  NoiBo=port+"NoiboF";
	  ShowHome=port+"SHome";
	  phongb=port+"PB";
	  idtieude=port+"tieude_"+id;
	  idtrichyeu=port+"tomtat_"+id;
	  nguoikyid=port+"Signer";
	  tieude=document.getElementById(idtieude).value;
	  trichyeu=document.getElementById(idtrichyeu).value;
	  document.getElementById(loaivanban).value=loaivb;
	  document.getElementById(kieuvanban).value=kieuvb;
	  document.getElementById(trthai).value=trangthai;
	  document.getElementById(coquanBH).value=coquan;
	  document.getElementById(linhvucvb).value=linhvuc;
	  document.getElementById(ngayhieuluc).value=ngayhl;
	  document.getElementById(ngaybanhanh).value=ngaybh;
	  document.getElementById(phongb).value=phongban;
	  document.getElementById(nguoikyid).value=nguoiky;
	  document.getElementById('QTVBSoH').value=sohieu;
document.getElementById('QTVBTiD').value=tieude;
document.getElementById('QTVBIDFORM').value=id;
document.getElementById('QTVBTrY').value=trichyeu; 
document.getElementById('File0').value=""; 
if(pub==1) document.getElementById(publ).checked=true;
else document.getElementById(publ).checked=false;

if(Shome==1) document.getElementById(ShowHome).checked=true;
else document.getElementById(ShowHome).checked=false;

if(noibo==1) document.getElementById(NoiBo).checked=true;
else document.getElementById(NoiBo).checked=false;



document.getElementById("QTVBDHFORM").value="update";
$("#addDocumentFormBTE").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$("#addDocumentFormBTE").find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

function kkUpdate1(id, kieuvb, sohieu, loaivb, linhvuc, coquan, ngaybh, ngayhl, pub, Shome, phongban, nguoiky, port){
	  kieuvanban=port+ "KVBF";
	  loaivanban=port+ "LoVBF";
	  coquanBH=port+ "CoQBHF";
	  linhvucvb=port+ "LiVF";
	  ngaybanhanh=port+ "NgBHF";
	  ngayhieuluc=port+ "NgHLF";
	  publ=port+ "pubF";
	  ShowHome=port+"SHome";
	  phongb=port+"PB";
	  idtieude=port+"tieude_"+id;
	  idtrichyeu=port+"tomtat_"+id;
	  nguoikyid=port+"Signer";
	  tieude=document.getElementById(idtieude).value;
	  trichyeu=document.getElementById(idtrichyeu).value;
	  document.getElementById(loaivanban).value=loaivb;
	  document.getElementById(kieuvanban).value=kieuvb;
	  document.getElementById(coquanBH).value=coquan;
	  document.getElementById(linhvucvb).value=linhvuc;
	  document.getElementById(ngayhieuluc).value=ngayhl;
	  document.getElementById(ngaybanhanh).value=ngaybh;
	  document.getElementById(phongb).value=phongban;
	  document.getElementById(nguoikyid).value=nguoiky;
	  document.getElementById('QTVBSoH').value=sohieu;
    document.getElementById('QTVBTiD').value=tieude;
    document.getElementById('QTVBIDFORM').value=id;
    document.getElementById('QTVBTrY').value=trichyeu; 
    document.getElementById('File0').value=""; 
 if(pub==1) document.getElementById(publ).checked=true;
 else document.getElementById(publ).checked=false;
 if(Shome==1) document.getElementById(ShowHome).checked=true;
 else document.getElementById(ShowHome).checked=false;
 
document.getElementById("QTVBDHFORM").value="update";
$("#addDocumentForm").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$("#addDocumentForm").find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
function kkUpdatePB(id, kieuvb, sohieu, loaivb, linhvuc, coquan, ngaybh, ngayhl, pub, Shome, phongban, nguoiky, port){
	  kieuvanban=port+ "KVBF1";
	  loaivanban=port+ "LoVBF1";
	  coquanBH=port+ "CoQBHF1";
	  linhvucvb=port+ "LiVF1";
	  ngaybanhanh=port+ "NgBHF1";
	  ngayhieuluc=port+ "NgHLF1";
	  publ=port+ "pubF1";
	  ShowHome=port+"SHome1";
	  phongb=port+"PB1";
	  idtieude=port+"tieude_"+id;
	  idtrichyeu=port+"tomtat_"+id;
	  nguoikyid=port+"Signer";
	  tieude=document.getElementById(idtieude).value;
	  trichyeu=document.getElementById(idtrichyeu).value;
	  document.getElementById(loaivanban).value=loaivb;
	  document.getElementById(kieuvanban).value=kieuvb;
	  document.getElementById(coquanBH).value=coquan;
	  document.getElementById(linhvucvb).value=linhvuc;
	  document.getElementById(ngayhieuluc).value=ngayhl;
	  document.getElementById(ngaybanhanh).value=ngaybh;
	  document.getElementById(phongb).value=phongban;
	  document.getElementById(nguoikyid).value=nguoiky;
	  document.getElementById('QTVBSoH1').value=sohieu;
  document.getElementById('QTVBTiD1').value=tieude;
  document.getElementById('QTVBIDFORM1').value=id;
  document.getElementById('QTVBTrY1').value=trichyeu; 
  document.getElementById('File01').value=""; 
/*if(pub==1) document.getElementById(publ).checked=true;
else document.getElementById(publ).checked=false;
if(Shome==1) document.getElementById(ShowHome).checked=true;
else document.getElementById(ShowHome).checked=false;*/

document.getElementById("QTVBDHFORMPB1").value="update";
$("#addDocumentFormPB1").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$("#addDocumentFormPB1").find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}


function reFormTim(PoNa)
  {
tenform=PoNa+"timForm";  
 
		  loai=PoNa+ "KVBTimkiem";
		  coquan= PoNa+"CoQBHTimkiem";
		  linhvuc= PoNa+ "LiVTimkiem";
		  Phongban= PoNa+ "Phongban";
		  nam=PoNa+"NamTimkiem";
		  textname=PoNa+"QTVBTimFull";
	      document.getElementById(tenform).reset();
	      document.getElementById(textname).value ="";
	      document.getElementById(loai).selectedIndex = 0;
	      document.getElementById(linhvuc).selectedIndex = 0;
	      document.getElementById(coquan).selectedIndex = 0;
	      document.getElementById(Phongban).selectedIndex = 0;
	      document.getElementById(nam).selectedIndex = 0;
	      document.getElementById(tenform).submit();
  }
function reFormTimBTE(PoNa)
{
		tenform=PoNa+"timFormBTE";  

		  loai=PoNa+ "KVBTimkiem";
		  coquan= PoNa+"CoQBHTimkiem";
		  trthai= PoNa+"TrangThai";
		  linhvuc= PoNa+ "LiVTimkiem";
		  Phongban= PoNa+ "Phongban";
		  nam=PoNa+"NamTimkiem";
		  textname=PoNa+"QTVBTimFull";
	      document.getElementById(tenform).reset();
	      document.getElementById(textname).value ="";
	      document.getElementById(trthai).value ="";
	      document.getElementById(loai).selectedIndex = 0;
	      document.getElementById(linhvuc).selectedIndex = 0;
	      document.getElementById(coquan).selectedIndex = 0;
	      document.getElementById(Phongban).selectedIndex = 0;
	      document.getElementById(nam).selectedIndex = 0;
	      document.getElementById(tenform).submit();
}
function DelDoc(port, va, value){

	id=port+ "IdForDel";
	fo=port+ "QTVBFormDel"; 
	var r = confirm("Bạn có thực sự muốn xóa văn bản này!");
    if (r == true) {
    	id1=port+"QTVBControl";
  	    document.getElementById(id1).value=value;
    	document.getElementById(id).value=va;
    	document.getElementById(fo).submit();
    } else {
       return;
    }
	
}
function DelDocPB(port, va, value){

	id=port+ "IdForDel";
	fo=port+ "QTVBFormDelPB"; 
	var r = confirm("Bạn có thực sự muốn xóa văn bản này!");
    if (r == true) {
    	id1=port+"QTVBControl";
  	    document.getElementById(id1).value=value;
    	document.getElementById(id).value=va;
    	document.getElementById(fo).submit();
    } else {
       return;
    }
	
}
function DelDocUser(port, va, value){

	id=port+ "IdForDelUser";
	fo=port+ "QTVBFormDelUser"; 
	var r = confirm("Bạn có thực sự muốn xóa văn bản này!");
    if (r == true) {
    	id1=port+"QTVBControl";
  	    //document.getElementById(id1).value=value;
    	document.getElementById(id).value=va;
    	document.getElementById(fo).submit();
    } else {
       return;
    }
	
}
leader=0;
function QTVBDownDivApp(port, id, tamp, choose){
	
	if(choose==3){
					if(leader!=0) { return;}
	    	}
	else if (choose==4) leader=1;
	if(choose==1) leader=0;
	  idShow=port+id; 
	  document.getElementById(idShow).style.display=tamp;
}	 

function QTVB_tong(a){
	boo=false;
  if(document.getElementById("QTVB_").checked==true) boo=true;
	for(i=0; i<a; i++){
		bien="QTVB"+i;
		document.getElementById(bien).checked=boo;
		 		}
	    }
function QTVB_tongPB(a){
	boo=false;
  if(document.getElementById("QTVBPB_").checked==true) boo=true;
	for(i=0; i<a; i++){
		bien="QTVBPB"+i;
		document.getElementById(bien).checked=boo;
		 		}
	    }
function ChangeContol(port, id, value, num){
	  id=port+id; dem=0;
	  fo=port+ "QTVBFormDel"; 
	  for(j=0; j<num; j++){
			bien="QTVB"+j;
			if(document.getElementById(bien).checked==true )dem++;
			 		}
	  if(dem==0) {alert("Bạn chưa chọn văn bản nào!"); return;}
	  document.getElementById(id).value=value;
	  document.getElementById(fo).submit();
	}
function ChangeContolPB(port, id, value, num){
	  id=port+id; dem=0;
	 // alert(id)
	  fo=port+ "QTVBFormDelPB"; 
	 // alert(fo)
	  for(j=0; j<num; j++){
			bien="QTVBPB"+j;
			//alert(bien)
			if(document.getElementById("QTVBPB"+j).checked==true ){			
				dem++;
			}
	  }
			 		
	  if(dem==0) {alert("Bạn chưa chọn văn bản nào!"); return;}
	  document.getElementById(id).value=value;
	  document.getElementById(fo).submit();
}
function kkUpdateUser(id, iduser, idphong, chucvu, quyen,port){
	 tenform="#"+port+"addUserDoc";  
	  chucvu1=port+ "ChucVu";
	  quyen0="Quyen0";
	  quyen1="Quyen1";
	  quyen2="Quyen2";
	  user=port+ "idUser";
	  pb=port+ "PB";
	  document.getElementById(chucvu1).value=chucvu;
	  document.getElementById(user).value=iduser;
	  document.getElementById(pb).value=idphong;
	if(quyen==0){
		document.getElementById(quyen0).checked=true;
	}if(quyen==1){
		document.getElementById(quyen1).checked=true;
	}if(quyen==2){
		document.getElementById(quyen2).checked=true;
	}if(quyen==-1) {
		document.getElementById(quyen0).checked=false;
		document.getElementById(quyen1).checked=false;
		document.getElementById(quyen2).checked=false;
	}

	document.getElementById("QTVBDHFORMUser").value="update";
	document.getElementById("QTVBIDUser").value=id;
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

