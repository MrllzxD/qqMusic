/*
* @Author: Administrator
* @Date:   2016-11-01 11:15:52
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-01 16:45:43
*/
(function(){
	
   var index=1;
  
   setInterval(function(){
      KGGMove($('.banner_ul')[0],"left",index%3*-300*4);
      index++;
   },5000);

})();
