function changeLoaiAlbumVideo(port){
	var loai = document.getElementById(port+"LoaiAlbumVideo").value;
	if(loai == 1){
		document.getElementById(port+"titleAlbumVideo").value = "Album video mặc định";
		document.getElementById(port+"motaAlbumVideo").value = "Loại mặc định dùng cho cấu hình";
	}
}
function changeLoaiAlbumHinhAnh(port){
	
	var loai = document.getElementById(port+"LoaiAlbumHinhAnh").value;
	if(loai == 1){
		document.getElementById(port+"titleAddAlbumHinhAnh").value = "Quảng cáo phải - Mặc định";
		document.getElementById(port+"motaAlbumHinhAnh").value = "Loại mặc định dùng cho cấu hình";
	}else if(loai == 2){
		document.getElementById(port+"titleAddAlbumHinhAnh").value = "Quảng cáo trái - Mặc định";
		document.getElementById(port+"motaAlbumHinhAnh").value = "Loại mặc định dùng cho cấu hình";
	}else if(loai == 3){
		document.getElementById(port+"titleAddAlbumHinhAnh").value = "Quảng cáo giữa - Mặc định";
		document.getElementById(port+"motaAlbumHinhAnh").value = "Loại mặc định dùng cho cấu hình";
	}else if(loai == 4){
		document.getElementById(port+"titleAddAlbumHinhAnh").value = "Quảng cáo - slideshow - Mặc định";
		document.getElementById(port+"motaAlbumHinhAnh").value = "Loại mặc định dùng cho cấu hình";
	}else{
		
	}
	
}
/*
DelLibrary('<%=DelLibrary.toString()%>','<%=aLibraryItem.getItemId() %>','<%=userId%>','<portlet:namespace/>')"
*/
function deleteAlbumHinhAnh(port,name,idAlbum){
	//alert(idAlbum);
	tenform = "#"+port+name;
	document.getElementById(port+"idXoaAlbumHinhAnh").value = idAlbum;
	//alert(idAlbum);
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
}

function openPopPlayVideo(port,name,dt,title,datecreate){
	document.getElementById(port+"QTPLAYVIDEOSRC").src = dt;
	document.getElementById(port+"videoTagId").load();
	document.getElementById(port+"videoTagId").play();
	document.getElementById(port+"videoTieuDe").innerHTML = unremoveCharSpecial(title);
	document.getElementById(port+"videoNgayTao").innerHTML = datecreate;
	document.getElementById(port+"videoLoaiTapTin").innerHTML = "."+dt.replace(/^.*\./, '');
	kkLoadViAddLoaiAlbumAudio
	tenform = "#"+port+name;
	//alert(tenform);
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	$('#xclose_x').click(function(){
		//alert("stop");
		document.getElementById(port+"videoTagId").pause();
	});
	/*e.preventDefault();*/
	$('table tr:nth-child(even)').addClass('stripe');
}


function slideSwitchIpQCS() {
	//alert("1");
    var $active = $('#slideshowIpQCS IMG.active');
    //alert("2");
    if ( $active.length == 0 ) $active = $('#slideshowIpQCS IMG:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshowIpQCS IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 3500, function() {
            $active.removeClass('active last-active');
        });
}


function setIntervalFuncion(){
	slideSwitchIpQCS();
	//slideSwitchNew();
}

$(function() {
    setInterval("setIntervalFuncion()", 5000 );
});


function changeAudio(port, dt,title){
	//alert("Ole");
	document.getElementById(port+"sourceAudio").src = dt;
	document.getElementById(port+"audioHomeTag").load();
	document.getElementById(port+"audioHomeTag").play();
	document.getElementById(port+"audioHomeAudioNameId").innerHTML = unremoveCharSpecial(title); 
}

function playAudio(port,name,id,src,title,datecreate,describe){
	//alert(src);
	/*ten = "#"+port+"formPopPlayAudio";
	alert(ten);
	$(ten).reset();*/
	//document.getElementById(port+"formPopPlayAudio").reset();
	//document.getElementById(port+"QTPLAYAUDIOSRC").reset();
	//alert("1:"+document.getElementById(port+"QTPLAYAUDIOSRC").src);
	//alert("aaa");
	//document.getElementById(port+"detailAudio"+id).style.color = "#F6E3CE";
	document.getElementById(port+"audioTieuDe").innerHTML = unremoveCharSpecial(title);
	document.getElementById(port+"audioMoTa").innerHTML = unremoveCharSpecial(describe);
	document.getElementById(port+"audioNgayTao").innerHTML = datecreate;
	document.getElementById(port+"audioLoaiTapTin").innerHTML = "."+src.replace(/^.*\./, '');
	//alert(src.replace(/^.*\./, ''));
	document.getElementById(port+"QTPLAYAUDIOSRC").src = src;
	document.getElementById(port+"audioTagId").load();
	document.getElementById(port+"audioTagId").play();
	//alert("2:"+document.getElementById(port+"QTPLAYAUDIOSRC").src);
	//playme.load();
	
	tenform="#"+port+name;
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	$('#close_x').click(function(){
		document.getElementById(port+"audioTagId").pause();
		//document.getElementById(port+"audioTagId").currentTime = 0;
		//document.getElementById(port+"QTPLAYAUDIOSRC").src = "";*/
		//alert("close:"+document.getElementById(port+"QTPLAYAUDIOSRC").src);
	});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

function playAudioAdmin(port,name,id,src,title,datecreate,describe){
	//alert(src);
	/*ten = "#"+port+"formPopPlayAudio";
	alert(ten);
	$(ten).reset();*/
	//document.getElementById(port+"formPopPlayAudio").reset();
	//document.getElementById(port+"QTPLAYAUDIOSRC").reset();
	//alert("1:"+document.getElementById(port+"QTPLAYAUDIOSRC").src);
	//alert("aaa");
	//document.getElementById(port+"detailAudio"+id).style.color = "#F6E3CE";
	document.getElementById(port+"audioTieuDeAdmin").innerHTML = unremoveCharSpecial(title);
	document.getElementById(port+"audioMoTaAdmin").innerHTML = unremoveCharSpecial(describe);
	document.getElementById(port+"audioNgayTaoAdmin").innerHTML = datecreate;
	document.getElementById(port+"audioLoaiTapTinAdmin").innerHTML = "."+src.replace(/^.*\./, '');
	//alert(src.replace(/^.*\./, ''));
	document.getElementById(port+"QTPLAYAUDIOSRCAdmin").src = src;
	document.getElementById(port+"audioTagIdAdmin").load();
	document.getElementById(port+"audioTagIdAdmin").play();
	//alert("2:"+document.getElementById(port+"QTPLAYAUDIOSRC").src);
	//playme.load();
	
	tenform="#"+port+name;
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	$('#close_xAdmin').click(function(){
		document.getElementById(port+"audioTagIdAdmin").pause();
		//document.getElementById(port+"audioTagId").currentTime = 0;
		//document.getElementById(port+"QTPLAYAUDIOSRC").src = "";*/
		//alert("close:"+document.getElementById(port+"QTPLAYAUDIOSRC").src);
	});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
function addAudio(port,idDiv,idAlbumAudio,inout){
	tenform = "#"+port+idDiv;
	document.getElementById(port+"FileAudio").required = true;   
	document.getElementById(port+"textThemSuaAudio").innerHTML = "Thêm Audio";
	document.getElementById(port+"UpAudios").reset();
	document.getElementById(port+"idAlbumAudios").value = idAlbumAudio;
	if(inout==1){
		document.getElementById(port+"addAlbumAudioInOutView").value = "inview";		
	}
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
function editAudio(port,control,idAu,title,describe,approve,idAlbumAudio,inout){
	
    /*alert(title);
	alert(title.split("'").join('"'));*/
	tenform = "#"+port+"QTAudioDivAddAudio";
	document.getElementById(port+"FileAudio").required = false; 
	document.getElementById(port+"textThemSuaAudio").innerHTML = "Cập nhật audio";
	document.getElementById(port+"controlAudios").value = control;
	document.getElementById(port+"idAlbumAudios").value = idAlbumAudio;
	document.getElementById(port+"idAddAudios").value = idAu;
	document.getElementById(port+"titleAudios").value = unremoveCharSpecial(title);//.split("'").join('"');
	document.getElementById(port+"describeAudios").value = unremoveCharSpecial(describe);//.split("'").join('"');	
	if(approve == 1){
		document.getElementById(port+"ViPubAudios").checked = true;
	}else{
		document.getElementById(port+"ViPubAudios").checked = false;
	}
	if(inout==1){
		document.getElementById(port+"addAlbumAudioInOutView").value = "inview";		
	}
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

function refreshAudio(port){
	document.getElementById(port+"idinPutSearchAudioTitle").value = "";
	document.getElementById("audioTuNgay").value = "";
	document.getElementById("audioDenNgay").value = "";
	document.getElementById(port+"formTimtitleAudio").submit();
	
}

function cboOnchangeSortingAudio(port){
	document.getElementById(port+"idinPutSearchAudioTitle").value = "";
	document.getElementById(port+"formTimtitleAudio").submit();
}

function cboOnchangeSortingAlbumAudio(port){
	/*document.getElementById(port+"idinPutSearchAlbumAudioTitle").value = "";*/
	
	document.getElementById(port+"formTimtitleAlbumAudio").submit();
}

function kkLVB(PoNa, NDQT){
	  tenform="#"+PoNa+NDQT;  
      idform=PoNa+"QTALBUMANH";
      idcon=PoNa+"ControlAddAlbumHinhAnh";
      document.getElementById(PoNa+"textAlbumHinhAnh").innerHTML="Thêm album hình ảnh";
      document.getElementById(idcon).value="save";
      document.getElementById(idform).reset();
	  $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function EditAlBum(title, mota, port, con, NDQT , LId, Ap){
	
	   idtitle=port+"title"; 
	   idmota=port+"mota";
	   idcon=port+"Control";
	   idItem=port+"Id"
	   idAp=port+Ap;
	   document.getElementById(idtitle).value=title;
	   document.getElementById(idmota).value=mota;
	   document.getElementById(idcon).value=con;
	   document.getElementById(idItem).value=LId;
	   if(Ap==1)
		   document.getElementById(idAp).checked=true;
	   
	       tenform="#"+port+NDQT+"DOCdiv";  
	      
		 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
				$(tenform).find("input:first").focus();
			}});
			e.preventDefault();
			$('table tr:nth-child(even)').addClass('stripe');
}

function addLoaiAlbumHinhAnh(PoNa, NDQT){
   tenform="#"+PoNa+NDQT+"DOCdiv";
   idform=PoNa+"QTLOAIALBUMHINHANH";
   idcon=PoNa+"addLoaiAlbumHinhAnhControl";
   document.getElementById(idcon).value="save";
   document.getElementById(idform).reset();
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
var xmlHttp;
function DelLibrary(ur, LId, User, port){
	var r = confirm("Bạn có thực sự muốn xóa Album này!");
    if (r == true) {
			    	//Dongan=port+"Dong"+LId; 
					//document.getElementById(Dongan).style.display='none';
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
					url +="&LId=" +LId+"&User="+User;
					//xmlHttp.onreadystatechange = degreeChange();
					xmlHttp.open("GET", url, true);
					xmlHttp.send(null);
    } else {
       return;
    }
    document.getElementById(port+"formTimtitleAlbumHinhAnh").submit();
}
function deleteAlbumVideo(name, LId, sId, port,rowId,adminSite){
	
	tenform = "#"+port+name;
	document.getElementById(port+"idXoaAlbumVideo").value = LId;
	
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
}

//DelAlbumVideo('<%=DelAlbumVideo.toString()%>','<%=ListAl.getVd_id() %>','<%=userId%>','<portlet:namespace/>')"
function DelAlbumVideo(ur, LId, sId, port,rowId,adminSite){
	//alert("rowId:::"+rowId);
	//document.getElementById(port+"addAlbumVideoControl").value=""; // đặt lại thằng này, không nó sẽ bị lỗi lúc xoá albumVideo, ( xoá ròi lại gọi add video nữa, khog rõ lý do)
	
		var r = confirm("Những video trong album này sẽ bị xoá ! Bạn có thực sự muốn xóa album video này ? ");
	    if (r == true) {
				    	//Dongan=port+"Dong"+LId; 
	    				//da = "#"+rowId;
	    				//alert("da:"+da);
	    				/*if (!document.getElementById(rowId)) {
	    					alert("It does not exist");
	    				}*/
						//document.getElementById(rowId).style.display='none';
						//$(id).hide();
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
						url +="&LId=" +LId+"&sId="+sId;
						//alert(url);
						//xmlHttp.onreadystatechange = degreeChange();
						xmlHttp.open("GET", url, true);
						xmlHttp.send(null);
				
	    } else {
	       return;
	    }
	    document.getElementById(port+"formTimtitleAlbumVideo").submit();
	    //window.location.reload(true);	
	
	
		
}
function funDelLoaiAlbumVideo(name, LId, User, port, sluong, adminSite){
	if(sluong > 0){
		alert("Loại album video này đang sử dụng, không thể xoá");
	}else{
		tenform = "#"+port+name;
		document.getElementById(port+"idXoaLoAlbumVideo").value = LId;
		
		$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		//...
	}
	
}
//DelAlbumVideo('<%=DelAlbumVideo.toString()%>','<%=ListAl.getVd_id() %>','<%=sId%>','<portlet:namespace/>')"
function DelLoaiAlbumVideo(ur, LId, User, port, sluong, adminSite){
	//alert("adminSite"+adminSite);
	
		if(sluong > 0){
			alert("Loại Album này đang sử dụng, không thể xoá !");
		}
		else if(sluong ==0){
			var r = confirm("Loại album này sẽ bị xoá ! Bạn có thực sự muốn xóa loại Album video này ? ");
		    if (r == true) {
					    	Dongan=port+"Dong"+LId; 
							//document.getElementById(Dongan).style.display='none';
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
							url +="&LId="+LId+"&sId="+User;
							//xmlHttp.onreadystatechange = degreeChange();
							xmlHttp.open("GET", url, true);
							xmlHttp.send(null);		
							
		    } else {
		       return;
		    }
		    //window.location.reload(true);
		    document.getElementById(port+"formTimtitleLoaiAlbumVideo").submit();
		}
	
	
		
}

function DelLoaiAlbumAudio(ur, LId, User, port, sluong, adminSite){
	//alert("adminSite"+adminSite);
	
		if(sluong > 0){
			alert("Loại Album này đang sử dụng, không thể xoá !");
		}
		else if(sluong ==0){
			var r = confirm("Loại album này sẽ bị xoá ! Bạn có thực sự muốn xóa loại album audio này ? ");
		    if (r == true) {
					    	Dongan=port+"Dong"+LId; 
							//document.getElementById(Dongan).style.display='none';
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
							url +="&LId="+LId+"&sId="+User;
							//xmlHttp.onreadystatechange = degreeChange();
							xmlHttp.open("GET", url, true);
							xmlHttp.send(null);		
							
		    } else {
		       return;
		    }
		    //window.location.reload(true);
		    document.getElementById(port+"formTimtitleLoaiAlbumAudio").submit();
		}	
		
}
function editAlbumHinhAnh(port,idDiv,idAlbum,title,desc,position,approve,home){
	//alert("aaa");
	//alert(approve + home);
	tenform = "#"+port+idDiv;
	document.getElementById(port+"textAlbumHinhAnh").innerHTML = "Cập nhật album hình ảnh";
	document.getElementById(port+"idAlbumHinhAnh").value = idAlbum;
	//alert(idAlbum);
	document.getElementById(port+"titleAddAlbumHinhAnh").value = unremoveCharSpecial(title);
	//alert(title);
	document.getElementById(port+"motaAlbumHinhAnh").value = unremoveCharSpecial(desc);
	//alert("1");
	document.getElementById(port+"LoaiAlbumHinhAnh").value = position;
	if(approve == 1){
		document.getElementById(port+"PubAddAlbumAnh").checked = true;
	}
	else if(approve == 0){
		document.getElementById(port+"PubAddAlbumAnh").checked = false;
	}

/*	if(home == 1){
		document.getElementById(port+"PublicHomeAddAlbumAnh").checked = true;
	}
	else if(home == 0){
		document.getElementById(port+"PublicHomeAddAlbumAnh").checked = false;
	}*/
	
	document.getElementById(port+"ControlAddAlbumHinhAnh").value = "edit";
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
//...
function addAnhToAlbumAnh(port, idDiv, idAlbumHinhAnh,outView,approve){
	//alert(idAlbumHinhAnh);
	tenform = port + "QTANHADDANH";
	document.getElementById(tenform).reset();
	//alert("1");
	document.getElementById(port+"idAddHinhAnh").value = idAlbumHinhAnh;
	//alert("2");
	document.getElementById(port+"idInOutViewHinhAnh").value = outView;
	document.getElementById(port+"idFileAnhAddAnh").required = true; 
	/*if(approve == 1){
		document.getElementById(port+"PubAddAnh").checked = true;
	}else{
		document.getElementById(port+"PubAddAnh").checked = false;
	}*/
	$("#"+port+idDiv).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$("#"+port+idDiv).find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}

function deleteLoaiAlbumHinhAnh(port,name,sluong,idLoAlbum){
	if(sluong > 0){
		alert("Loại Album này đang sử dụng, không thể xoá !");
	}else{
		//...
		tenform = "#"+port+name;
		document.getElementById(port+"idXoaLoAlbumHinhAnh").value = idLoAlbum;
		
		$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
	}
}

function DelLoaiAlbumHinhAnh(ur, LId, User, port, sluong, adminSite){
	//alert("adminSite"+adminSite);
	
		if(sluong > 0){
			alert("Loại Album này đang sử dụng, không thể xoá !");
		}
		else if(sluong ==0){
			var r = confirm("Loại album này sẽ bị xoá ! Bạn có thực sự muốn xóa loại album hình ảnh này ? ");
		    if (r == true) {
					    	Dongan=port+"Dong"+LId; 
							//document.getElementById(Dongan).style.display='none';
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
							url +="&LId="+LId+"&sId="+User;
							//xmlHttp.onreadystatechange = degreeChange();
							xmlHttp.open("GET", url, true);
							xmlHttp.send(null);		
							
		    } else {
		       return;
		    }
		    //window.location.reload(true);
		    document.getElementById(port+"formTimtitleLoaiAlbumHinhAnh").submit();
		}
	
}

//onclick="deleteLibraryFile('divXacNhanXoaDetaAlHiAnh','<%=aLibraryFile.getIFID() %>','<%=userId %>','<portlet:namespace/>', 'Anh','1')"
function deleteLibraryFile(name,LId, User, port, ImOrVi,id,ten,adminSite){
	tenform = "#"+port+name;
	
	document.getElementById(port+"idDetaHinhAnh").value = LId;
	/*document.getElementById(port+"idDetaHAImgOrVi").value = ImOrVi;*/
	
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	
    /*document.getElementById(port+"idtemDSAlbumVideo").value = id;
	document.getElementById(port+"idtenDSAlbumVideo").value = ten;
	if(ten=="Anh"){
		document.getElementById(port+"formTimtitleVideo").submit();	
	}
	document.getElementById(port+"formTimtitleVideo").submit();	*/
}

function funDeleteLibraryFileAu(name,LId, User, port, sluong, adminSite){
	tenform = "#"+port+name;
	document.getElementById(port+"idXoaDetaAudio").value = LId;

	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	
}
function funDelLoaiAlbumAudio(name,LId, User, port, sluong, adminSite){
	if(sluong > 0){
		alert("Loại Album này đang sử dụng, không thể xoá !");
	}else{
		tenform = "#"+port+name;
		document.getElementById(port+"idXoaLoAlbumAudio").value = LId;
		
		
		$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
	}
	
}

function deleteLibraryFileAudio(name,LId, User, port, ImOrVi,id,ten,adminSite){
	tenform = "#"+port+name;
	document.getElementById(port+"idXoaAlbumAudio").value = LId;
	
	
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
}

function funDelLibraryFileVideo(name, LId, User, port, ImOrVi,id,ten,adminSite){
	tenform = "#"+port+name;
	document.getElementById(port+"idDetaVideo").value = LId;
	
	
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
}
function DelLibraryFile(ur, LId, User, port, ImOrVi,id,ten,adminSite){
	
		var r = confirm("Bạn có thực sự muốn xóa!");
	    if (r == true) {
	    	
				    	Dongan=port+ImOrVi+LId;
				    	console.log("Dongan:"+Dongan);
						//document.getElementById(Dongan).style.display='none';
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
						url +="&LId=" +LId+"&User="+User+"&ImgOrVi="+ImOrVi;
						
						//xmlHttp.onreadystatechange = degreeChange();
						xmlHttp.open("GET", url, true);
						xmlHttp.send(null);
	    } else {
	       return;
	    }
	    document.getElementById(port+"idtemDSAlbumVideo").value = id;
		document.getElementById(port+"idtenDSAlbumVideo").value = ten;
		if(ten=="Anh"){
			document.getElementById(port+"formTimtitleVideo").submit();	
		}
		document.getElementById(port+"formTimtitleVideo").submit();		
}

function DelAllAudioInAlbumAudio(ur, LId, User, port, ImOrVi,id,ten,adminSite){
	
		var r = confirm("Chú ý, bạn đang thực hiện thao tác xoá Album, tất cả Audio trong Album này sẽ bị xoá hết ! Bạn thực sự muốn xoá ?");
	    if (r == true) {
	    	
				    	Dongan=port+ImOrVi+LId;
				    	console.log("Dongan:"+Dongan);
						//document.getElementById(Dongan).style.display='none';
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
						url +="&LId=" +LId+"&User="+User+"&ImgOrVi="+ImOrVi;
						
						//xmlHttp.onreadystatechange = degreeChange();
						xmlHttp.open("GET", url, true);
						xmlHttp.send(null);
	    } else {
	       return;
	    }
	   /* document.getElementById(port+"idtemDSAlbumVideo").value = id;
		document.getElementById(port+"idtenDSAlbumVideo").value = ten;
		if(ten=="Anh"){
			document.getElementById(port+"formTimtitleVideo").submit();	
		}*/
		document.getElementById(port+"formTimtitleAlbumAudio").submit();	
	
		
}

function ShowDelBar(port, ID){
	
	     idDiv=port+"Barxoa"+ID;
	    
	     document.getElementById(idDiv).style.display='block';
}
function HidDelBar(port, ID){
    idDiv=port+"Barxoa"+ID;
    document.getElementById(idDiv).style.display='none';
}
/// 
function ViIm(port, hid, show) {
    idan=port+hid;
    idhien=port+show;
    document.getElementById(idan).style.display='none';
    document.getElementById(idhien).style.display='block';
}
function kkLoad(PoNa, IName){
idload="#"+PoNa+IName;

$(idload).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
function EditAlBum1(port, con, NDQT , LId, Ap, Po){
	alert(LId);
 idtitle=port+"title"; 
 idmota=port+"mota";
 idcon=port+"Control";
 idItem=port+"Id"
 idAp=port+"Pub";
 Posi=port+"Loai";
 idtieude=port+"Hinhanhtitle"+LId;
 idmota1=port+"Hinhanhmota"+LId;
 alert(idmota1);
 title=document.getElementById(idtieude).value;
 mota=document.getElementById(idmota1).value;
 document.getElementById(idtitle).value=title;
 alert(idmota1);
 document.getElementById(idmota).value=mota;
 alert(idmota1);
 document.getElementById(idcon).value=con;
 document.getElementById(idItem).value=LId;
 document.getElementById(Posi).value=Po;
 if(Ap==1)
	   document.getElementById(idAp).checked=true;
 
     tenform="#"+port+NDQT+"DOCdiv";  
    
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
		e.preventDefault();
		$('table tr:nth-child(even)').addClass('stripe');
}
function QTHaVi_tong(port,a){
	boo=false;
 if(document.getElementById("QTHaVi_").checked==true) boo=true;
	for(i=0; i<a; i++){
		bien=port+i;
		document.getElementById(bien).checked=boo;
		 		}
		    }

/*function kkLoadViOnDetailAlbumVideo(PoNa, id,id_vd,ten){
	   //alert("id:"+id_vd);
	   tenform="#"+PoNa+id;
	   	console.log("tenform:"+tenform);
	   idform = PoNa+"UpVideos";
	   	console.log("idform:"+idform);
	   document.getElementById("VidAlbumVideo").value = id_vd;
	   	console.log("value form:"+document.getElementById("VidAlbumVideo").value);
	   document.getElementById(idform).reset();
	   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
	   	e.preventDefault();
	   	$('table tr:nth-child(even)').addClass('stripe');
}*/

function kkLoadVi(PoNa, id,id_vd,ten){
	   //alert("id:"+id_vd);
	//alert(ten);
	   tenform="#"+PoNa+id;
	   	console.log("tenform:"+tenform);
	   idform = PoNa+"UpVideos";
	   	console.log("idform:"+idform);
	   document.getElementById("VidAlbumVideo").value = id_vd;
	   	console.log("value form:"+document.getElementById("VidAlbumVideo").value);
	   document.getElementById(idform).reset();
	   document.getElementById(PoNa+"TenVidAlbumVideo").value=ten;
	   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
	   	e.preventDefault();
	   	$('table tr:nth-child(even)').addClass('stripe');
}
function kkLoadViAlbumVideo(PoNa, id){
	   tenform="#"+PoNa+id;  
	   
	   document.getElementById(PoNa+"QTALBUMANHVIDEO").reset();
	   document.getElementById(PoNa+"textThemSuaAlbumVideo").innerHTML = "Thêm album video"
	   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
	   e.preventDefault();
	   	$('table tr:nth-child(even)').addClass('stripe');
	   }
function kkLoadViAddLoaiAlbumVideo(PoNa, id){
	   //alert("form add loai album");
	   tenform="#"+PoNa+id; 
	   //console.log("tenform:"+tenform);
	   document.getElementById(PoNa+"QTLOAIALBUMANHVIDEO").reset();
	   document.getElementById(PoNa+"textThemSuaLoaiAlbumVideo").innerHTML = "Thêm loại album video";
	   //console.log("tenform:"+tenform);
	   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
	   	e.preventDefault();
	   	$('table tr:nth-child(even)').addClass('stripe');
}

function kkLoadViAddLoaiAlbumAudio(PoNa, id){
	   //alert("form add loai album");
	   tenform="#"+PoNa+id; 
	   //console.log("tenform:"+tenform);
	   document.getElementById(PoNa+"QTLOAIALBUMANHAUDIO").reset();
	   document.getElementById(PoNa+"textThemSuaLoaiAlbumAudio").innerHTML = "Thêm loại album Audio";
	   //console.log("tenform:"+tenform);
	   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
	   	e.preventDefault();
	   	$('table tr:nth-child(even)').addClass('stripe');
}


function editHinhHanh(port, idDiv,title,describe,aprove,idHinhAnh,link,target,stt){
	//alert(aprove);
	tenform ="#"+port+idDiv;
	document.getElementById(port+"titleAddAnh").value = unremoveCharSpecial(title);
	//alert("aa")
	document.getElementById(port+"motaAddAnh").value = unremoveCharSpecial(describe);
	//alert("aa")
	if(aprove == 1){
		document.getElementById(port+"PubAddAnh").checked = true;
		//alert("aa")
	}else{
		document.getElementById(port+"PubAddAnh").checked = false;
		//alert("aa")
	}
	document.getElementById(port+"idAddHinhAnh").value = idHinhAnh;
	//alert("aa")
	document.getElementById(port+"ControlAddAnh").value = "edit";
	//alert("aa")
	document.getElementById(port+"linkAddAnh").value = link;
	if(target == 1){
		document.getElementById(port+"targetAddAnhInPage").checked = true;
	}else{
		document.getElementById(port+"targetAddAnhInPage").checked = false;
		//alert("aa")
	}
	
	document.getElementById(port+"soTTAddAnh").value = stt;
	
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
   	e.preventDefault();
   	$('table tr:nth-child(even)').addClass('stripe');
}

function setForm(port,idDiv ,ten, pub, id, sort, link){
	   FID=port+"FId";
	   Ti=port+"title";
	   Hien=port+"hien";
	   idSTT=port+"STT";
	   idLink=port+"Link";
	   document.getElementById(FID).value=id;
	   document.getElementById(Ti).value=ten;
	   document.getElementById(idSTT).value=sort;
	   document.getElementById(idLink).value=link;
	   if(pub==1)
		      {
		   		document.getElementById(Hien).checked=true;
		      }
	   else document.getElementById(Hien).checked=false;
	   kkLoadVi(port, "EditAnh");
}


function editVideos(PoNa, id, pub1, idClip){

	    tenform="#"+PoNa+id;  
	    td=PoNa+"titlev";
	    pub=PoNa+"ViPubv";
	    idC=PoNa+"idclip";
	    idtieu=PoNa+"title"+idClip;
	    tieude=document.getElementById(idtieu).value;
	    document.getElementById(td).value=tieude;
	    
	  if(pub1==1)
	    document.getElementById(pub).checked='true';
		document.getElementById(idC).value=idClip;
		
		   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		   		$(tenform).find("input:first").focus();
		   	}});
		   	
		   	e.preventDefault();
		   	$('table tr:nth-child(even)').addClass('stripe');
}
function EditAlBumVideo(port, con, NDQT , LId,title,des, Ap, Po, HomeAp){
	//alert("eđit video")
	tenform="#"+port+NDQT; 
	document.getElementById(port+"textThemSuaAlbumVideo").innerHTML = "Cập nhật loại Album video"
	document.getElementById(port+"titleAlbumVideo").value = unremoveCharSpecial(title);
	//alert("eđit video")
	document.getElementById(port+"motaAlbumVideo").value = unremoveCharSpecial(des);
	//alert("eđit video")
	document.getElementById(port+"LoaiAlbumVideo").value = Po;
	//alert("eđit video")
	
	document.getElementById(port+"addAlbumVideoId_vd").value = LId;
	
	if(Ap==1)
		document.getElementById(port+"PubAlbumVideo").checked = true;
	else
		document.getElementById(port+"PubAlbumVideo").checked = false;
	/*if(HomeAp==1)
		document.getElementById(port+"PublicHomeAlbumVideo").checked = true;
	else
		document.getElementById(port+"PublicHomeAlbumVideo").checked = false;*/

	document.getElementById(port+"addAlbumVideoControl").value = con;
	//alert("con:"+con);
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
	 e.preventDefault();
	 $('table tr:nth-child(even)').addClass('stripe');
}
function EditAlBumAudio(port,NDQT, LId,title,des, Ap, Po){
	//alert("eđit video")
	tenform="#"+port+NDQT;
	document.getElementById(port+"UpAlbumAudios").reset();
	document.getElementById(port+"titleAlbumAudios").value = unremoveCharSpecial(title);
	document.getElementById(port+"describeAlbumAudios").value = unremoveCharSpecial(des);
	document.getElementById(port+"LoaiAlbumAudio").value = Po;
	document.getElementById(port+"idAddAlbumAudios").value = LId;
	document.getElementById(port+"controlAlbumAudios").value = "edit";
	if(Ap == 1){
		document.getElementById(port+"ViPubAlbumAudios").checked = true;
	}else{
		document.getElementById(port+"ViPubAlbumAudios").checked = false;
	}
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
//('<portlet:namespace />','edit','QTALBUMVIDEODOCdiv',
// '<%=labvd.getAbvd_id() %>','<%=labvd.getAbvd_title() %>','<%=labvd.getAbvd_description()%>',
//'<%=labvd.getAbvd_approved() %>','<%=labvd.getAbvd_homepage()%>');"/>
function editLoaiAlbumVideo(port, con, NDQT ,LId,title,des, Ap, HomeAp){
	//alert("eđit video");
	tenform="#"+port+NDQT; 
	document.getElementById(port+"idLoaiAlbumVideo").value = LId;
	document.getElementById(port+"textThemSuaLoaiAlbumVideo").innerHTML = "Cập nhật loại album video"
	document.getElementById(port+"titleLoaiAlbumVideo").value =  unremoveCharSpecial(title);
	//alert("eđit video")
	document.getElementById(port+"descriptionLoaiAlbumVideo").value = unremoveCharSpecial(des);
	//alert("eđit video")

	if(Ap==1)
		document.getElementById(port+"PubLoaiAlbumVideo").checked = true;
	else
		document.getElementById(port+"PubLoaiAlbumVideo").checked = false;
	/*if(HomeAp==1)
		document.getElementById(port+"PublicHomeLoaiAlbumVideo").checked = true;
	else
		document.getElementById(port+"PublicHomeLoaiAlbumVideo").checked = false;*/

	document.getElementById(port+"addLoaiAlbumVideoControl").value = con;
	//alert("con:"+con);
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
	 e.preventDefault();
	 $('table tr:nth-child(even)').addClass('stripe');
}
function addAlbumAudio(port,NDQT){
	tenform="#"+port+NDQT;
	document.getElementById(port+"UpAlbumAudios").reset();
	
	$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
		$(tenform).find("input:first").focus();
	}});
	e.preventDefault();
	$('table tr:nth-child(even)').addClass('stripe');
}
function editLoaiAlbumAudio(port, con, NDQT ,LId,title,des, Ap){
	//alert("eđit video");
	tenform="#"+port+NDQT; 
	document.getElementById(port+"idLoaiAlbumAudio").value = LId;
	document.getElementById(port+"textThemSuaLoaiAlbumAudio").innerHTML = "Cập nhật loại album Audio"
	document.getElementById(port+"titleLoaiAlbumAudio").value =  unremoveCharSpecial(title);
	//alert("eđit video")
	document.getElementById(port+"descriptionLoaiAlbumAudio").value = unremoveCharSpecial(des);
	//alert("eđit video")

	if(Ap==1)
		document.getElementById(port+"PubLoaiAlbumAudio").checked = true;
	else
		document.getElementById(port+"PubLoaiAlbumAudio").checked = false;
	/*if(HomeAp==1)
		document.getElementById(port+"PublicHomeLoaiAlbumVideo").checked = true;
	else
		document.getElementById(port+"PublicHomeLoaiAlbumVideo").checked = false;*/

	document.getElementById(port+"addLoaiAlbumAudioControl").value = con;
	//alert("con:"+con);
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
	 e.preventDefault();
	 $('table tr:nth-child(even)').addClass('stripe');
}

function editLoaiAlbumHinhAnh(port, con, NDQT ,LId,title,des, Ap, HomeAp){
	//alert("eđit video");
	tenform="#"+port+NDQT; 
	document.getElementById(port+"idLoaiAlbumHinhAnh").value = LId;
	document.getElementById(port+"textThemSuaLoaiAlbumHinhAnh").innerHTML = "Cập nhật loại album video"
	document.getElementById(port+"titleLoaiAlbumHinhAnh").value = unremoveCharSpecial(title);
	//alert("eđit video")
	document.getElementById(port+"descriptionLoaiAlbumHinhAnh").value = unremoveCharSpecial(des);
	//alert("eđit video")

	if(Ap==1)
		document.getElementById(port+"PubLoaiAlbumHinhAnh").checked = true;
	else
		document.getElementById(port+"PubLoaiAlbumHinhAnh").checked = false;
	/*if(HomeAp==1)
		document.getElementById(port+"PublicHomeLoaiAlbumVideo").checked = true;
	else
		document.getElementById(port+"PublicHomeLoaiAlbumVideo").checked = false;*/

	document.getElementById(port+"addLoaiAlbumHinhAnhControl").value = con;
	//alert("con:"+con);
	 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
			$(tenform).find("input:first").focus();
		}});
	 e.preventDefault();
	 $('table tr:nth-child(even)').addClass('stripe');
}
function QTHaViSubmit(a){
	//alert("a="+a);
	if(a=="Publish")
		{	
		//alert(a);
		//document.getE
		//document.getElementById("QTHiVi").submit();
		//$('#QTHiVi').submit();
		document.QTHiVi.submit();
		//alert(a);
		}
	else if(a=="UnPublish")
		{
 		document.getElementById("QTHHaVipproved").value="0";
 		document.QTHiVi.submit();
		}

}
function QTHaViSubmitVideo(a){
	//alert("a="+a);
	if(a=="Publish")
		{	
		//alert(a);
		//document.getE
		//document.getElementById("QTHiVi").submit();
		//$('#QTHiVi').submit();
		document.QTHiVi.submit();
		//alert(a);
		}
	else if(a=="UnPublish")
		{
	 		document.getElementById("QTHHaVipproved").value="0";
	 		document.QTHiVi.submit();
		}

}
//editVideos4('<portlet:namespace/>','QTANHDOCdivEdit','<%=LIF.getApproved()%>','<%=LIF.getVId()%>','<%=LIF.getTitle()%>')
function editVideos4(PoNa, id, pub1, idClip, Title){
	//alert("Title"+Title);
	
    tenform="#"+PoNa+id;
    //console.log("1");
    td=PoNa+"titlev";
    //console.log("2");
    pub=PoNa+"ViPubv";
    //console.log("3");
    idC=PoNa+"idclip";
    //console.log("4");
    idtieu=PoNa+"titlev";
    //console.log(idtieu);
    idhid=PoNa+"titleHid";
    //console.log("6");
    //_Hinh_anh_va_Videos_WAR_HinhAnh_Videos_21portlet_titlev
    //alert("idtieu:"+idtieu);
    //document.getElementById(idtieu).value = Title;
    var viet = (Title.split("-Vi_Vi-"))[1];
    var anh = (Title.split("-En_En-"))[1];
    if(viet=="Noi_dung_rong"){
    	 document.getElementById(PoNa+"ngonNguAnh").checked = "true";
    	 document.getElementById(td).value=unremoveCharSpecial((Title.split("-En_En-"))[1]);
    }else if(anh == "Noi_dung_rong"){
    	document.getElementById(PoNa+"ngonNguViet").checked = "true";
    	document.getElementById(td).value=unremoveCharSpecial((Title.split("-Vi_Vi-"))[1]);
    }
    tieude=document.getElementById(idtieu).value;
    //console.log("7");
    document.getElementById(idhid).value=unremoveCharSpecial((Title.split("-Vi_Vi-"))[1]);
    //console.log("(Title.split('-Vi_Vi-'))[1]:"+(Title.split("-Vi_Vi-"))[1]);
    
   // document.getElementById(td).value=(Title.split("-Vi_Vi-"))[1];
    //console.log("(Title.split('-En_En-'))[1]:"+(Title.split("-En_En-"))[1]);
 
  if(pub1==1)
    document.getElementById(pub).checked='true';
	document.getElementById(idC).value=idClip;
	
	   $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
	   		$(tenform).find("input:first").focus();
	   	}});
	   	
	   	e.preventDefault();
	   	$('table tr:nth-child(even)').addClass('stripe');
}
function EditAlBum2(port, con, NDQT , LId, Ap, Po, HomeAp){
	
	 idtitle=port+"title"; 
	 idmota=port+"mota";
	 idcon=port+"Control";
	 idItem=port+"Id"
	 idAp=port+"Pub";
	 idApH=port+"PublicHome";
	 Posi=port+"Loai";
	 idtieude=port+"Hinhanhtitle"+LId;
	 idmota1=port+"Hinhanhmota"+LId;
	 title=document.getElementById(idtieude).value;
	 mota=document.getElementById(idmota1).value;
	 document.getElementById(idtitle).value=title;

	 document.getElementById(idmota).value=mota;

	 document.getElementById(idcon).value=con;
	 document.getElementById(idItem).value=LId;
	 document.getElementById(Posi).value=Po;
	 if(Ap==1)
		   document.getElementById(idAp).checked=true;
	 else 
		 document.getElementById(idAp).checked=false;
	 
	 if(HomeAp==1)
		   document.getElementById(idApH).checked=true;
	else 
		 document.getElementById(idApH).checked=false;

	     tenform="#"+port+NDQT+"DOCdiv";  
	    
		 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
				$(tenform).find("input:first").focus();
			}});
			e.preventDefault();
			$('table tr:nth-child(even)').addClass('stripe');
	}
function refreshtitleAlbumVideo(Pona){
	//document.getElementById(Pona+"sortingAlbumVideo").value="1";
	document.getElementById(Pona+"informtitleAlbumVideo").value="";
	document.getElementById("mainVideoTuNgay").value="";
	document.getElementById("mainVideoDenNgay").value="";
	document.getElementById(Pona+"formTimtitleAlbumVideo").submit();
}

function refreshtitleAlbumHinhAnh(pp,Pona){
	//alert("a");
	document.getElementById(Pona+"sortingAlbumHinhAnh").value="1";
	//alert("a");
	document.getElementById(Pona+"informtitleAlbumHinhAnh").value="";
	//alert("a");
	document.getElementById(Pona+"formTimtitleAlbumHinhAnh").submit();
	//alert("a");
} 

function refreshtitleLoaiAlbumHinhAnh(pp,Port){
	document.getElementById(Port+"sortingLoaiAlbumHinhAnh").value="1";
	document.getElementById(Port+"informtitleLoaiAlbumHinhAnh").value="";
	document.getElementById(Port+"formTimtitleLoaiAlbumHinhAnh").submit();
}
function onchangeSortLoaiAlbumHinhAnh(pp,Port){
	document.getElementById(Port+"formTimtitleLoaiAlbumHinhAnh").submit();
}
function refreshtitleLoaiAlbumVideo(pp,Pona){
	//alert("aaâ");
	document.getElementById(Pona+"sortingLoaiAlbumVideo").value="1";
	//alert("aaâ");
	document.getElementById(Pona+"informtitleLoaiAlbumVideo").value="";
	//alert("aaâ");
	document.getElementById(Pona+"formTimtitleLoaiAlbumVideo").submit();
}
function refreshtitleLoaiAlbumAudio(pp,Pona){
	//alert("aaâ");
	/*document.getElementById(Pona+"sortingLoaiAlbumAudio").value="1";*/
	//alert("aaâ");
	document.getElementById(Pona+"informtitleLoaiAlbumAudio").value="";
	//alert("aaâ");
	document.getElementById(Pona+"formTimtitleLoaiAlbumAudio").submit();
}
function refreshtitleAlbumAudio(pp,Pona){
	//alert("aaâ");
	/*document.getElementById(Pona+"sortingLoaiAlbumAudio").value="1";*/
	//alert("aaâ");
	document.getElementById(Pona+"idinPutSearchAlbumAudioTitle").value="";
	document.getElementById("mainAudioTuNgay").value="";
	document.getElementById("mainAudioDenNgay").value="";
	//alert("aaâ");
	document.getElementById(Pona+"formTimtitleAlbumAudio").submit();
}
function refreshtitleVideo(pp,Pona,id,ten){
	//document.getElementById(Pona+"sortingVideo").value="1";
	document.getElementById(Pona+"informlbumVideo").value="";
	document.getElementById(Pona+"idtemDSAlbumVideo").value = id;
	document.getElementById(Pona+"idtenDSAlbumVideo").value = ten;
	document.getElementById("detailVideoTuNgay").value = "";
	document.getElementById("detailVideoDenNgay").value = "";
	document.getElementById(Pona+"formTimtitleVideo").submit();
	
}
function refreshtitleHinhAnh(pp,Pona,id,ten){
	document.getElementById(Pona+"informAlbumHinhAnh").value="";
	document.getElementById(Pona+"idtemDSAlbumHinhAnh").value = id;
	document.getElementById(Pona+"idtenDSAlbumHinhAnh").value = ten;
	document.getElementById(Pona+"formTimtitleHinhAnh").submit();
}
function cnsearchVideo(res,Pona,id,ten){
	document.getElementById(Pona+"idtemDSAlbumVideo").value = id;
	document.getElementById(Pona+"idtenDSAlbumVideo").value = ten;
	document.getElementById(Pona+"formTimtitleVideo").submit();
}

function cnsearchHinhAnh(res,Pona,id,ten){
	document.getElementById(Pona+"idtemDSAlbumHinhAnh").value = id;
	document.getElementById(Pona+"idtenDSAlbumHinhAnh").value = ten;
	document.getElementById(Pona+"formTimtitleVideo").submit();
}
function onchangeSortAlbumVideo(Port){
	document.getElementById(Port+"formTimtitleAlbumVideo").submit();
}
function onchangeSortAlbumHinhAnh(Port){
	document.getElementById(Port+"formTimtitleAlbumHinhAnh").submit();
}
function onchangeSortLoaiAlbumVideo(Port){
	document.getElementById(Port+"formTimtitleLoaiAlbumVideo").submit();
}

function onchangeSortLoaiAlbumAudio(port){
	document.getElementById(port+"informtitleLoaiAlbumAudio").value = "";
	document.getElementById(port+"formTimtitleLoaiAlbumAudio").submit();
}

function onchangeSortVideo(pp,Port){
	document.getElementById(Port+"formTimtitleVideo").submit();
}
/*function refreshTab(){
	alert("tab changed");
	window.location.reload(true);
}*/

//This code use to check type of file and file null when we choose a file for upload file function.
var _validFileExtensions = [".mp3", ".ogg", ".wav"];    
function ValidateAudioFile(oForm,port) {
	id ="#"+port+"FileAudio";
	var fileName = $(id).val();
	if(fileName.length <= 0)
		return true;
	else{
		//alert(fileName.length);
	    var arrInputs = oForm.getElementsByTagName("input");
	    for (var i = 0; i < arrInputs.length; i++) {
	        var oInput = arrInputs[i];
	        if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin audio !");
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
	                    alert("Tập tin không thuộc định đạng .Mp3/.Ogg/.Wav, xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	  
	    return true;
	}

}
// End: This code use to check type of file and file null when we choose a file for upload file function. 



var _validFileAnhVideo = [".mp4"]; 
var _validateFileAnhDDVideo1 = [".png", ".jpg", ".gif"];  

function ValidateFileAnhVideo(oForm,port) {
	//alert("aâ");
	idAnh ="#"+port+"idFileAnhAddVideo";
	var fileNameAnh = $(idAnh).val();
	//alert("fileNameAnh:"+fileNameAnh);
	//alert(fileName.length);
	if(fileNameAnh.length <= 0 ){
		return true;
	}else{
		//alert(fileName.length);
	    var arrInputs1 = oForm.getElementsByTagName("input");
	    
	    for (var i = 0; i < arrInputs1.length; i++) {
	        var oInput = arrInputs1[i];
	        //alert("arrInputs1:"+arrInputs1[i]);
	        if (oInput.type == "file") {
	            var sFileName1 = oInput.value;
	            //alert("path ảnh:"+sFileName1);
	            if(sFileName1.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin hình ảnh !");
	                     return false;
	            }
	            
	            if (sFileName1.length > 0) {
	                var blnValid1 = false;
	                //alert(blnValid1);
	                for (var j = 0; j < _validateFileAnhDDVideo1.length; j++) {
	                    var sCurExtension = _validateFileAnhDDVideo1[j];
	                    if (sFileName1.substr(sFileName1.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid1 = true;
	                        //alert(blnValid);
	                        break;
	                    }
	                }
	                //alert(blnValid1);
	                if (!blnValid1) {
	                	alert("Tập tin hình ảnh không thuộc định đạng .png/.jpg/.gif, xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	            break;
	        }
	    }
	}
	
	id ="#"+port+"idFileVideoAddVideo";
	var fileName = $(id).val();
	//alert("aaa");
	if(fileName.length <= 0 )
		return true;
	else{
		//alert(fileName.length);
	    var arrInputs = oForm.getElementsByTagName("input");
	    for (var i = 2; i < arrInputs.length; i++) {
	         var oInput = arrInputs[i];
	         if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            //alert("sFileName:"+sFileName);
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin video !");
	                     return false;
	            }
	            
	            if (sFileName.length > 0) {
	                var blnValid = false;
	                for (var j = 0; j < _validFileAnhVideo.length; j++) {
	                    var sCurExtension = _validFileAnhVideo[j];
	                    //alert("sCurExtension:"+sCurExtension);
	                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid = true;
	                        break;
	                    }
	                }
	                
	                if (!blnValid) {
	                    alert("Tập tin video không thuộc định đạng .mp4 xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	}
	return true;
}

/*var _validateFileAnhDDVideo = [".png", ".jpg", ".gif"];    
function ValidateFileAnhDDVideo(oForm,port) {
	//alert("aâ");
	id ="#"+port+"idFileAnhAddVideo";
	var fileName = $(id).val();
	//alert(fileName.length);
	
	if(fileName.length <= 0)
		return true;
	else{
		//alert(fileName.length);
	    var arrInputs = oForm.getElementsByTagName("input");
	    for (var i = 0; i < arrInputs.length; i++) {
	        var oInput = arrInputs[i];
	        if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin hình ảnh !");
	                     return false;
	            }
	            
	            if (sFileName.length > 0) {
	                var blnValid = false;
	                for (var j = 0; j < _validateFileAnhDDVideo.length; j++) {
	                    var sCurExtension = _validateFileAnhDDVideo[j];
	                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid = true;
	                        break;
	                    }
	                }
	                
	                if (!blnValid) {
	                    alert("Tập tin không thuộc định đạng .png/.jpg/.gif, xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	}
	    return true;
}*/
var _validFileAnh = [".png", ".jpg", ".gif"];    
function ValidateFileAnh(oForm,port) {
	//alert("aâ");
	id ="#"+port+"idFileAnhAddAnh";
	var fileName = $(id).val();
	//alert(fileName.length);
	if(fileName.length <= 0)
		return true;
	else{
		//alert(fileName.length);
	    var arrInputs = oForm.getElementsByTagName("input");
	    for (var i = 0; i < arrInputs.length; i++) {
	        var oInput = arrInputs[i];
	        if (oInput.type == "file") {
	            var sFileName = oInput.value;
	            
	            if(sFileName.length <= 0)
	            {
	                	 alert("Bạn chưa chọn tập tin hình ảnh !");
	                     return false;
	            }
	            
	            if (sFileName.length > 0) {
	                var blnValid = false;
	                for (var j = 0; j < _validFileAnh.length; j++) {
	                    var sCurExtension = _validFileAnh[j];
	                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
	                        blnValid = true;
	                        break;
	                    }
	                }
	                
	                if (!blnValid) {
	                    alert("Tập tin không thuộc định đạng .png/.jpg/.gif, xin vui lòng chọn lại");
	                    return false;
	                }
	            }
	        }
	    }
	}
 return true;
}

function unremoveCharSpecial(str){
	str = str.split("&quote1_").join("'");
	str = str.split("&quote2_").join('"');
	return str;
}
function notAllowSpecialChar(event) {
    if ((event.keyCode > 32 && event.keyCode < 48) || 
    	(event.keyCode > 57 && event.keyCode < 65) || 
    	(event.keyCode > 90 && event.keyCode < 97) || 
    	 event.keyCode==34 || event.keyCode==39) 
    	event.returnValue = false;
}