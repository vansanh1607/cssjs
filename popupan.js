
	var url_popup = 'https://www.facebook.com/SecondHome-Ng%C3%B4i-nh%C3%A0-th%E1%BB%A9-hai-617287538764227/?ref=aymt_homepage_panel&eid=ARDU9HjikgYHSGC1kyufMXQ3EYNhSQGxt6yr5Ev2sSJgT7dx2qpLwe8ad58P9-r5fsmgnlSwJq2UM_Gi';

      //<![CDATA[
	  // var url_ppp = 'http://bit.ly/1KmPNYe';
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
