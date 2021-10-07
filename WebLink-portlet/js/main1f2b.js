function kkLVB(PoNa){
			   tenform="#"+PoNa+"QLWeb";  
			   idaction=PoNa+"action";
			   document.getElementById(PoNa+"QLWeb").reset();
			   document.getElementById(idaction).value="save";
			 $(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
					$(tenform).find("input:first").focus();
				}});
				
				e.preventDefault();
				$('table tr:nth-child(even)').addClass('stripe');
		}
		function editWeb(port, ten, url, sort, id){
			idten=port+"ten";
			idurl=port+"url";
			idsort=port+"sort";
			idaction=port+"action";
			idLinkid=port+"weblink";
			document.getElementById(idten).value=ten;
			document.getElementById(idurl).value=url;
			document.getElementById(idsort).value=sort;
			document.getElementById(idaction).value="edit";
			document.getElementById(idLinkid).value=id;
			tenform="#"+port+"QLWeb";  
			$(tenform).lightbox_me({centered: true, preventScroll: true, onLoad: function() {
					$(tenform).find("input:first").focus();
				}});
				
				e.preventDefault();
				$('table tr:nth-child(even)').addClass('stripe');
		}
		
		
		function DelLibrary(ur, port, AId){
			var xmlHttp;
			var r = confirm("Bạn có thực sự muốn xóa!");
		    if (r == true) {
					    	Dongan=port+"Dong"+AId; 
							document.getElementById(Dongan).style.display='none';
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
							
							url +="&id="+AId;alert(url);
							//xmlHttp.onreadystatechange = degreeChange();
							xmlHttp.open("GET", url, true);
							xmlHttp.send(null);
		    } else {
		       return;
		    }
					
		}
		
		 function redir(value)
         
         {
       	  
       	  window.location.href=value;
       	  
         }