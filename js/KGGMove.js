function KGGMove(obj,attr,target,cFn){//obj是让什么物体运动  , 属性名 , 目标值(最好传入纯数字), 链式运动的方法

	clearInterval(obj.KGGTimer)
	obj.KGGTimer = setInterval(function(){
		//opacity: 0-1
		//filter: alpha(opacity = 0- 100)
		//width  height  left right  bottom right top line-height 都能改
		// var currentValue = obj.style[attr]//这个东西无法获取不在内联标签中的属性
		var currentValue = getStyle(obj , attr);
		var speed = (target - currentValue) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(attr == "opacity" || attr == "filter"){
			
			//
			if (target <= 1 && target >0 ){
				target *= 100
			}
			speed = (target - currentValue) / 8;
			obj.style[attr] = (currentValue + speed)/100
			obj.style[attr] = "alpha(opacity="+(currentValue + speed)+")"
			if(currentValue == target){
				clearInterval(obj.KGGTimer)
			}

		}else{
			if( speed <0){
				if( currentValue <= target ){
					clearInterval(obj.KGGTimer)
				}else{
					obj.style[attr] = currentValue + speed + "px"
				}
			}else{
				if( currentValue >= target ){
					clearInterval(obj.KGGTimer)
				}else{
					obj.style[attr] = currentValue + speed + "px"
				}
			}
			
		}
	},30)
}

function getStyle(obj,attr){ //在这里要写 获取什么对象的什么属性

	// window.getComputedStyle(obj,null) //获取那个对象 , 那个为类
	// obj.currentStyle(attr)
	var a = "";
	if(obj.currentStyle){
		a = obj.currentStyle(attr)
	}else{
		a = window.getComputedStyle(obj,null)[attr]
	}
	if(attr == "opacity" || attr == "filter"){

		a *= 100; // 如果是透明度 . 得到一个0 - 100 的数字
	}

	
	return parseInt(a);
}