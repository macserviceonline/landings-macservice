window.MS_ADS={id:"AW-18510002224",labels:{whatsapp:"pwjMCNvA-5odELDwoPpE",call:"0UDyCN7A-5odELDwoPpE"}};

(function(){var c=window.MS_ADS;if(!c||c.id.indexOf("XXXX")>-1)return;var s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+c.id;document.head.appendChild(s);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",c.id);
document.addEventListener("click",function(e){var a=e.target.closest("a");if(!a)return;var h=a.getAttribute("href")||"";
if(h.indexOf("wa.me")>-1)gtag("event","conversion",{send_to:c.id+"/"+c.labels.whatsapp,value:60000,currency:"COP"});
if(h.indexOf("tel:")===0)gtag("event","conversion",{send_to:c.id+"/"+c.labels.call,value:90000,currency:"COP"});});})();
