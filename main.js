canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";

var last_position_of_x,last_position_of_y;

color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
    
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
    
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_of_mousex = e.clientX - canvas.offsetLeft;
    current_position_of_mousey = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){

        console.log("last position of x and y coordinates = ");
        console.log("x = " +last_position_of_x + ", y = " +last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = " +current_position_of_mousex + ", y = " +current_position_of_mousey);
        ctx.lineTo(current_position_of_mousex , current_position_of_mousey);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mousex, current_position_of_mousey,radius,0,2*Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mousex;
    last_position_of_y = current_position_of_mousey;
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}