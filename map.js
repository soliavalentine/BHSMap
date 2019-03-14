var c = {
    a: {top:-250,left:270,color:"green"},
    d: {top:-300,left:450,color:"green" },
    m: {top:75,left:450,color:"green"},
    f: {top:80,left:300,color:"green"},
    e: {top:-100,left:450,color:"green"},
    h1:{top:-300,left:90,color:"green"},
    h2:{top:-170,left:70,color:"green"},
    h3:{top:-230,left:70,color:"green"},
    g1:{top:-90,left:70,color:"green"},
    g2:{top:10,left:80,color:"green"},
    g3:{top:-40,left:90,color:"green"}
};

function locate() {
    var class1= $("#class1").val();
    var room1 = $("#room1").val();
    find(room1);

}
function find(room) {
    if(room.toLowerCase() == "a") {
        $("#dot").css("top",c.a.top);
        $("#dot").css("left",c.a.left);
    }if(room.includes("d") || room.includes("D")){
        $("#dot").css("top",c.d.top);
        $("#dot").css("left",c.d.left);
    }if(room.includes("m" || room.includes("M"))){
        $("#dot").css("top",c.m.top);
        $("#dot").css("left",c.m.left);
    }if(room.includes("f" || room.includes("F"))){
        $("#dot").css("top",c.f.top);
        $("#dot").css("left",c.f.left);
    }if(room.includes("e" || room.includes("E"))){
        $("#dot").css("top",c.e.top);
        $("#dot").css("left",c.e.left);
    }if(room.includes("h" || room.includes("H"))){
        var string = room.slice(1,4);
        var num = parseInt(string);
        if(num>=109 && num<=112 || num>=211 && num<=217 || num>=300 && num<=399){
            $("#dot").css("top",c.h1.top);
            $("#dot").css("left",c.h1.left);
        }if(num>=100 && num<=105 || num>=201 && num<=205){
            $("#dot").css("top",c.h2.top);
            $("#dot").css("left",c.h2.left);
        }else{
            $("#dot").css("top",c.h3.top);
            $("#dot").css("left",c.h3.left);
        }
    }if(room.includes("g") || room.includes("G")){
        var string2 = room.slice(1,4);
        var num2 = parseInt(string2);
        if(num2>=100 && num2<=106 || num2>=200 && num2<=206){
            $("#dot").css("top",c.g1.top);
            $("#dot").css("left",c.g1.left);
        }if(num2<108 || num2<208 || num2<=300){
            $("#dot").css("top",c.g2.top);
            $("#dot").css("left",c.g2.left);
        }else{
            $("#dot").css("top",c.g3.top);
            $("#dot").css("left",c.g3.left);
        }
    }if(room.includes("c") || room.includes("C")){
        var string3 = room.slice(1,4);
        var num3 = parseInt(string3);
        if(num3>=102 && num3<=113 || num3>=204 && num3<=213){
            $("#dot").css("top",c.g1.top);
            $("#dot").css("left",c.g1.left);
        }if(num3<113 && num3<124 || num3<213 && num3<222){
            $("#dot").css("top",c.g2.top);
            $("#dot").css("left",c.g2.left);
        }else{
            $("#dot").css("top",c.g3.top);
            $("#dot").css("left",c.g3.left);
        }
    }
}
//c- highest 135 lowest 102
//lowest 204 highest 232
//lowest 302 highest 338