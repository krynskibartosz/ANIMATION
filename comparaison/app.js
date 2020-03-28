
    let slide = document.getElementById('slide');
        window.onmousemove = function(e){
            let x = e.clientX;
            console.log(x);
            slide.style.left = x + "px";
        }
