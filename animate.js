//元素移动封装
    function moveX(obj,distance,speed,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            if( obj.offsetLeft == distance){
                clearInterval(obj.timer);
                if(callback){
                   callback(); 
                }
            }else{ 
                var step = (distance - obj.offsetLeft)/20; //设置步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        },speed);
    }
    function moveY(obj,distance,speed){
        var sk = document.documentElement;
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            if( sk.scrollTop == distance){
                clearInterval(obj.timer);
            }else{ 
                var step = (distance - sk.scrollTop)/20; //设置步长
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                window.scroll(0,sk.scrollTop + step);
            }
        },speed);
    }
