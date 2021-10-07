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
  function kiemTraForm(){
	  //alert("1");
	//document.getElementById("QTVBSoH").value= catkhoangtrang(catkhoangtrang_doi(b));
	//str[0].toUpperCase()+str.substr(1,str.length-1);
	      Sohieu=document.getElementById("QTVBSoH").value;
	      //alert("2");
	      Tieude=document.getElementById("QTVBTiD").value;
	      //alert("3");
	    //  Trichyeu=document.getElementById("QTVBTrY").value;
	     // alert("4");
	     // Noibo=document.getElementById("NoiboF").value;
	     // alert("here"+Trichyeu);
	      //Pub=document.getElementById("pubF").value;
	      //alert("here"+Pub);
	     // Show=document.getElementById("SHome").value;
	      //if(pub==1) document.getElementById(publ).checked=true;
	      //else document.getElementById(publ).checked=false;
	     
	     
	      if(ktrong(Sohieu)==false) {alert("Nguồn cung cấp không được bỏ rỗng!");document.getElementById("QTVBSoH").focus(); return false;}
	      
	      else if (ktrong(Tieude)==false) {alert("Tiêu đề không được bỏ rỗng!");document.getElementById("QTVBTiD").focus(); return false;}
	    
	      /*else if (ktrong(Trichyeu)==false) {alert("Trích yếu không được bỏ rống!");document.getElementById("QTVBTrY").focus(); return false;}*/
	      Sohieu=catkhoangtrang(catkhoangtrang_doi(Sohieu));
	      document.getElementById("QTVBTiD").value=catkhoangtrang(catkhoangtrang_doi(Tieude));
	      document.getElementById("QTVBTrY").value=catkhoangtrang(catkhoangtrang_doi(Trichyeu));
	      document.getElementById("QTVBSoH").value=Sohieu[0]+Sohieu.substr(1,Sohieu.length-1);
	      if(document.getElementById("QTVBDHFORM").value=="save")
	    	  {
	    	  	if(checkFile()== false){alert("File đính kèm không hợp lệ hoặc rống!"); return false;}
	    	  }
	      
	     // alert(document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_pubF").checked);
	      /*if((document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_pubF").checked && document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_NoiboF").checked) || (document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_SHome").checked && document.getElementById("_Van_Ban_content_WAR_Quan_Ly_Van_Ban_3portlet_NoiboF").checked)){
	    	  alert("Chọn hiển thị nội bộ hoặc trang chủ!");
	    	 return false;
	    	  }*/
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
				    	document.getElementById(option).value=op;
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

function setValueFormTag(port, op, ND, Form, idtex){
    id=port+ND+Form;
	option=port+ND+"QTVBdieuhuong3";
if(op=="xoa")
	    {
				var r = confirm("Bạn có thực sự muốn xóa mục này!");
			    if (r == true) {
			    	document.getElementById(option).value=op;
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


function setValueFormDM(port, op, ND, Form, idtex){
    id=port+ND+Form;
	option=port+ND+"QTVBdieuhuong3";
if(op=="xoa")
	    {
				var r = confirm("Bạn có thực sự muốn xóa mục này!");
			    if (r == true) {
			    	document.getElementById(option).value=op;
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

function setValueFormLDM(port, op, ND, Form, idtex){
    id=port+ND+Form;
	option=port+ND+"QTVBdieuhuong3";
if(op=="xoa")
	    {
				var r = confirm("Bạn có thực sự muốn xóa mục này!");
			    if (r == true) {
			    	document.getElementById(option).value=op;
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

function kkLVB(PoNa, NDQT){
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
	 $("#addTaiNguyenForm").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$("#addTaiNguyenForm").find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function kkUpdate(id, kieudv,dm,ldm,tag, sohieu, pub, Shome, port){
	
	  donvi=port+ "DVF";
	  DMF=port+ "DMF";
	  LDMF=port+ "LDMF";
	  TagF=port+ "TagF";
	  publ=port+ "pubF";
	  
	  
	  ShowHome=port+"SHome";
	
	  idtieude=port+"tieude_"+id;
	
	  idtrichyeu=port+"tomtat_"+id;
	
	  tieude=document.getElementById(idtieude).value;
	 
	  trichyeu=document.getElementById(idtrichyeu).value;
	 
	  document.getElementById(donvi).value=kieudv;	 
	  document.getElementById(DMF).value=dm;
	  document.getElementById(LDMF).value=ldm;
	  document.getElementById(TagF).value=tag;
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

$("#addTaiNguyenForm").lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	
		$("#addTaiNguyenForm").find("input:first").focus();
		
	}});

	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
	
}

function reFormTim(PoNa)
  {
tenform=PoNa+"timForm";  
 		  donvi = PoNa+ "DVTimkiem";
		  nam=PoNa+"NamTimkiem";
		  textname=PoNa+"QTVBTimFull";
	      document.getElementById(tenform).reset();
	      document.getElementById(textname).value ="";
	      document.getElementById(donvi).selectedIndex = 0;
	     //document.getElementById(loai).selectedIndex = 0;
	     // document.getElementById(linhvuc).selectedIndex = 0;
	     // document.getElementById(coquan).selectedIndex = 0;
	     // document.getElementById(Phongban).selectedIndex = 0;
	      document.getElementById(nam).selectedIndex = 0;
	      document.getElementById(tenform).submit();
	      
  }

function DelDoc(port, va, value){

	id=port+ "IdForDel";
	fo=port+ "QTVBFormDel"; 
	var r = confirm("Bạn có thực sự muốn xóa tài nguyên này!");
    if (r == true) {
    	id1=port+"QTVBControl";
  	    document.getElementById(id1).value=value;
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

function ChangeContol(port, id, value, num){
	  id=port+id; dem=0;
	  fo=port+ "QTVBFormDel"; 
	  for(j=0; j<num; j++){
			bien="QTVB"+j;
			if(document.getElementById(bien).checked==true )dem++;
			 		}
	  if(dem==0) {alert("Bạn chưa chọn tài nguyên nào!"); return;}
	  document.getElementById(id).value=value;
	  document.getElementById(fo).submit();
	}