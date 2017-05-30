//	HYPE.documents["intro"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="intro.hyperesources",c="intro",e="intro_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/intro_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"0":{p:1,n:"the_product.svg",g:"5",t:"image/svg+xml"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,["<link href='https://fonts.googleapis.com/css?family=Roboto+Slab&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:1240,Z:800,c:"#FFFFFF",L:[{a:[{}],B:"Custom"}],bY:1,d:1240,E:{a:[{p:5,j:"/erickv.0plast.io/main.html",k:false}]},U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4,b:[],a:[{f:"c",y:0,z:2,i:"a",e:400,s:-540,o:"12"},{f:"c",y:0,z:2,i:"e",e:0.86896756329113922,s:0,o:"14"},{f:"c",y:1,z:2,i:"a",e:356,s:1384,o:"13"},{y:2,i:"a",s:400,z:0,o:"12",f:"c"},{f:"c",y:2,z:2,i:"e",e:0,s:0.86896756329113922,o:"14"},{y:3,i:"a",s:356,z:0,o:"13",f:"c"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{p:5,j:"main.html",k:false}]},o:"kTimelineDefaultIdentifier"},{y:4,i:"e",s:0,z:0,o:"14",f:"c"}],f:30}},bZ:180,O:["12","11","14","13"],n:"Untitled Layout","_":0,v:{"13":{G:"#84BF41",aU:8,aV:8,r:"inline",s:"'Roboto Slab'",t:48,u:"normal",Z:"break-word",v:"normal",w:"The Plastic Black Hole",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:1384,b:644},"12":{G:"#84BF41",aU:8,aV:8,r:"inline",s:"'Roboto Slab'",t:48,u:"normal",Z:"break-word",v:"normal",w:"Say Hello to 0Plast",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-540,b:95},"11":{h:"5",p:"no-repeat",x:"visible",a:455,q:"100% 100%",b:234,j:"absolute",dB:"img",z:1,k:"div",c:330,d:360,r:"inline"},"14":{c:34,d:34,I:"None",e:0,J:"None",bL:0,K:"None",g:"#84BF41",L:"None",M:0,N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:4,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",P:0,a:601,aL:"50%",b:373}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,false,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
