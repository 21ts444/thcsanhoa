function ValidateFileIcoIcon(oForm,port) {
	var checkUploadIcon = document.getElementById(port + "checkUploadIcon").value;
	//alert(checkUploadIcon);
	if(checkUploadIcon == "uploadIcon"){
		//alert("aâ");
		var _validFileIcoIcon = [".ico"]; 
		var arrInputs = oForm.getElementsByTagName("input");
	    //alert("arrInputs.length:"+arrInputs.length);
	    for (var i = 0; i < arrInputs.length; i++) {
	        var oInput = arrInputs[i];
	        if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            //alert("sFileName:"+sFileName);
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin icon !");
	                     return false;
	            }
	            
	            if (sFileName.length > 0) {
	                var blnValid = false;
	                for (var j = 0; j < _validFileIcoIcon.length; j++) {
	                    var sCurExtension = _validFileIcoIcon[j];
	                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid = true;
	                        break;
	                    }
	                }
	                
	                if (!blnValid) {
	                    alert("Tập tin không thuộc định đạng .ico xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	}else if(checkUploadIcon == "uploadIconNew"){
		var _validFileIcoIcon = [".png", ".jpg"];    
		var arrInputs = oForm.getElementsByTagName("input");
	    //alert("arrInputs.length:"+arrInputs.length);
	    for (var i = 0; i < arrInputs.length; i++) {
	        var oInput = arrInputs[i];
	        if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            //alert("sFileName:"+sFileName);
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin !");
	                     return false;
	            }
	            if (sFileName.length > 0) {
	                var blnValid = false;
	                for (var j = 0; j < _validFileIcoIcon.length; j++) {
	                    var sCurExtension = _validFileIcoIcon[j];
	                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid = true;
	                        break;
	                    }
	                }
	                
	                if (!blnValid) {
	                    alert("Tập tin không thuộc định đạng .png/.jpg xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	}else if(checkUploadIcon == "uploadIconNewFlash"){
		var _validFileIcoIcon = [".swf",];    
		var arrInputs = oForm.getElementsByTagName("input");
	    //alert("arrInputs.length:"+arrInputs.length);
	    for (var i = 0; i < arrInputs.length; i++) {
	        var oInput = arrInputs[i];
	        if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            //alert("sFileName:"+sFileName);
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin !");
	                     return false;
	            }
	            if (sFileName.length > 0) {
	                var blnValid = false;
	                for (var j = 0; j < _validFileIcoIcon.length; j++) {
	                    var sCurExtension = _validFileIcoIcon[j];
	                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid = true;
	                        break;
	                    }
	                }
	                
	                if (!blnValid) {
	                    alert("Tập tin không thuộc định đạng Flash (.swf) xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	}
	return true;
}

function scrOpenAddBannerImage(port,idDiv,banner){
	//alert("Banner"+banner);
	tenform = "#"+port+idDiv;
	document.getElementById(port+"idFormAddBannerImage").reset();
	document.getElementById(port+"Control").value = banner;
	if(banner == 1){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"checkUploadIcon").value = "uploadIconNew";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD BANNER";
	}else if(banner == 3){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"checkUploadIcon").value = "uploadIconNewFlash";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD BANNER";
	}else if(banner == 2){
		document.getElementById(port+"checkUploadIcon").value = "uploadIconNew";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD BANNER";
	}else if(banner == 5){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"checkUploadIcon").value = "uploadIconNew";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD BANNER";
	}else if(banner == 4){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"checkUploadIcon").value = "uploadIconNew";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD HÌNH NỀN FOOTER";
	}else if(banner == 6){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"checkUploadIcon").value = "uploadIcon";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD ICON";
	}else{
		document.getElementById(port+"trSoThuTu").style.display = "block";
		document.getElementById(port+"trGhiChu").style.display = "block";
		document.getElementById(port+"idTitleFormUploadBn").innerHTML = "UPLOAD BANNER";
	}
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

function submitFormSubmitGhiChuFooter(port,cn){
	//alert(cn);
	document.getElementById(port+"FIdBannerdddd").value = cn;
	document.getElementById(port+"formSubmitGhiChuFooter").submit();
}
function scrOpenEditAddBannerImage(port,idDiv,approve,stt,fid,banner,approve){
	//alert("temp banner:"+banner);
	tenform = "#"+port+idDiv;
	/*if(approve == 1)
		document.getElementById(port+"PublicBanner").checked = true;
	else
		document.getElementById(port+"PublicBanner").checked = false;*/
	document.getElementById(port+"soTTBanner").value = stt;
	document.getElementById(port+"FIdBanner").value = fid;
	
	
	if(banner == 1){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"idApproveChung").value = approve;
		document.getElementById(port+"checkUploadIcon").value = "0";
	}else if(banner == 2){
		document.getElementById(port+"trSoThuTu").style.display = "block";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"idApproveChung").value = approve;
		document.getElementById(port+"checkUploadIcon").value = "0";
	}else if(banner == 3){
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"idApproveChung").value = approve;
		document.getElementById(port+"checkUploadIcon").value = "0";
	}else if(banner == 4){
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"idApproveChung").value = approve;
		document.getElementById(port+"checkUploadIcon").value = "0";
	}else if(banner == 5){
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"idApproveChung").value = approve;
		document.getElementById(port+"checkUploadIcon").value = "0";
	}else if(banner == 6){
		document.getElementById(port+"trGhiChu").style.display = "none";
		document.getElementById(port+"trSoThuTu").style.display = "none";
		document.getElementById(port+"idApproveChung").value = approve;
		document.getElementById(port+"checkUploadIcon").value = "0";
	}else{
		document.getElementById(port+"trSoThuTu").style.display = "block";
		document.getElementById(port+"trGhiChu").style.display = "block";
		document.getElementById(port+"checkUploadIcon").value = "0";
	}
	

	document.getElementById(port+"controlEdit").value = "editBanner";
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

 function select(a, giatri, tendiv){
	 
	// alert("1");
    	   port="_Banner_WAR_Bannerportlet_";
    	   
    	   hinhanh=port+"hinhanh";
    	   javascript=port+"javascript";
    	   flash=port+"flash";
    	   foot=port+"DivFooter";
    	   icon = port + "DivIcon"
    	   
    	   hinhanhD=port+"DivHinhanh";
    	   javascriptD=port+"DivJava";
    	   flashD=port+"DivFlash";
    	   footer=port+"footer";
    	   ghichu=port+"ghiChu";
    	   banmobile=port+"Mobi_DivHinhanh";
    	   banmobileM=port+"Bmobile";
    	   /*iconM = port + "icon";*/
    	   DivShow=port+tendiv;
    	   
    	   document.getElementById(hinhanh).className=""; //alert("2");
    	   document.getElementById(javascript).className="";
    	   document.getElementById(flash).className="";
    	   document.getElementById(banmobileM).className="";
    	   document.getElementById(footer).className="";
    	   /*document.getElementById(iconM).className ="";*/
    	//   alert("3");
    	   
    	   document.getElementById(hinhanhD).style.display='none';
    	   //alert("befjavascriptD");
    	   document.getElementById(javascriptD).style.display='none';
    	   //alert("javascriptD");
    	   document.getElementById(flashD).style.display='none';
    	   document.getElementById(foot).style.display='none';
    	   document.getElementById(icon).style.display='none';
    	   
    	   document.getElementById(banmobile).style.display='none';
    	   document.getElementById(ghichu).style.display='none';
    	   //alert(DivShow);
    	   document.getElementById(DivShow).style.display='block';
    	   
    	   a.className="active"; 
    	   
    	   cont=port+"Control";
    	   if(giatri==4)
    		   {
    		     document.getElementById(ghichu).style.display='block';
    		   }
    	   
    	     document.getElementById(cont).value=giatri;
    	  
    	     
    	     
       }
       function ShowDelBar(port, ID){
    		
    	    idDiv=port+"Barxoa"+ID;   	   
    	    document.getElementById(idDiv).style.display='block';
    	}
    	function HidDelBar(port, ID){
	    	idDiv=port+"Barxoa"+ID;
	    	document.getElementById(idDiv).style.display='none';
    	}



    	function DelLibraryFile(ur, LId, port, ImOrVi, User, control, sId){
    		//alert("DelLibraryFile");
    		var r = confirm("Bạn có thực sự muốn xóa !");
    		//alert(r);
    	    if (r == true) {
    	    	//alert("a");
    				    	/*Dongan=port+ImOrVi+LId; 
    						document.getElementById(Dongan).style.display='none';*/
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
    						url +="&LId=" +LId+"&User=" +User+"&Control="+control+"&sId="+sId+"&ImgOrVi="+ImOrVi;
    						
    						//alert("a");
    						//xmlHttp.onreadystatechange = degreeChange();
    						xmlHttp.open("GET", url, true);
    						xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
    						xmlHttp.send(null);
    						alert("Đã xoá");
    	    } else {
    	       return;
    	    }
    	    
    	    	document.getElementById(port+"banerName").value = ImOrVi;
    	    	document.getElementById(port+"formUsingToRefreshDeleteBanner").submit();		    
    	}
    	function CheckLibraryFile(ur, LId, port, ImOrVi, User, control, sId){
    		var r = confirm("Bạn có thực sự muốn Chọn hình này làm banner!");
    	    if (r == true) {
    	    	
    				    
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
    						url +="&LId=" +LId+"&User=" +User+"&Control="+control+"&sId="+sId+"&ImgOrVi="+ImOrVi;
    						
    						//xmlHttp.onreadystatechange = degreeChange();
    						xmlHttp.open("GET", url, true);
    						xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
    						xmlHttp.send(null);
    						alert("Thao tác thành công, Load lại để xem kết quả!");
    	    } else {
    	       return;
    	    }
    	}
    	function HidDelBarJava(port, fid){
    		idCheckbox=port+"Choose"+fid;
    		if(document.getElementById(idCheckbox).checked==false)
    			  {
    				document.getElementById(idDiv).style.display='none';
    			  }
    		
    	}



function slideSwitchBanner() {
    var $active = $('#Banner_slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#Banner_slideshow IMG:last');
    var $next =  $active.next().length ? $active.next()
        : $('#Banner_slideshow IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 2500, function() {
            $active.removeClass('active last-active');
        });
}

function slideSwitchBannerNew() {
    var $active = $('#Banner_slideshowNew IMG.active');

    if ( $active.length == 0 ) $active = $('#Banner_slideshowNew IMG:last');
    var $next =  $active.next().length ? $active.next()
        : $('#Banner_slideshowNew IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 2500, function() {
            $active.removeClass('active last-active');
        });
}
$(function() {
    setInterval( "slideSwitchBanner()", 6000 );
});

$(function() {
    setInterval( "slideSwitchBannerNew()", 6000 );
});