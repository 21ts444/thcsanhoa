function QTVBDownDivApp(port, id, tamp, choose){
	
	if(choose==3){
					if(leader!=0) { return;}
	    	}
	else if (choose==4) leader=1;
	if(choose==1) leader=0;
	  idShow=port+id; 
	  document.getElementById(idShow).style.display=tamp;
}	  
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
			setTimeout(function(){window.location.href=link;}, 300);
			
			//;
}
