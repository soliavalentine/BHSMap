var c = {
    a:{top:70,left:370,color:"green"},
    d:{top:80,left:450,color:"green" },
    m:{top:450,left:450,color:"green"},
    f:{top:455,left:300,color:"green"},
    e:{top:275,left:450,color:"green"},
    j:{top:545,left:230,color:"green"},
    h1:{top:75,left:90,color:"green"},
    h2:{top:205,left:70,color:"green"},
    h3:{top:145,left:70,color:"green"},
    g1:{top:285,left:70,color:"green"},
    g2:{top:385,left:80,color:"green"},
    g3:{top:335,left:90,color:"green"},
    c1:{top:305,left:350,color:"green"},
    c2:{top:305,left:270,color:"green"},
    c3:{top:310,left:190,color:"green"}
};

function locate() {
    var class1= $("#class1").val();
    var class2= $("#class2").val();
    var class3= $("#class3").val();
    var class4= $("#class4").val();
    var class5= $("#class5").val();
    var class6= $("#class6").val();
    var class7= $("#class7").val();
    var room1= $("#room1").val();
    var room2= $("#room2").val();
    var room3= $("#room3").val();
    var room4= $("#room4").val();
    var room5= $("#room5").val();
    var room6= $("#room6").val();
    var room7= $("#room7").val();
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
    }if(room.includes("j" || room.includes("J"))){
        $("#dot").css("top",c.j.top);
        $("#dot").css("left",c.j.left);
    }if(room.includes("h" || room.includes("H"))){
        var string = room.slice(1,4);
        var num = parseInt(string);
        if(num>=109 && num<=112 || num>=211 && num<=217 || num>=300 && num<=399){
            $("#dot").css("top",c.h1.top);
            $("#dot").css("left",c.h1.left);
        }if(num>=100 && num<=105 || num>=201 && num<=205){
            $("#dot").css("top",c.h2.top);
            $("#dot").css("left",c.h2.left);
        }if(num>105 && num<109 || num>205 && num<211){
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
        }if(num2>106 && num2<108 || num2>206 && num2<208){
            $("#dot").css("top",c.g3.top);
            $("#dot").css("left",c.g3.left);
        }
    }if(room.includes("c") || room.includes("C")){
        var string3 = room.slice(1,4);
        var num3 = parseInt(string3);
        if(num3>=102 && num3<=113 || num3>=204 && num3<=213 || num3>=302 || num3<=314 || num3 == 400 || num3==418){
            $("#dot").css("top",c.c1.top);
            $("#dot").css("left",c.c1.left);
        }if(num3>113 && num3<124 || num3>213 && num3<222 || num3>314 && num3<326) {
            $("#dot").css("top",c.c2.top);
            $("#dot").css("left",c.c2.left);
        }if(num3>=124 || num3>=222 || num3>=326){
            $("#dot").css("top",c.c3.top);
            $("#dot").css("left",c.c3.left);
        }
    }
}
/*make sure room is class add class name period and floor to map add error messages poisiton dots in the
same place add styling elements and resources
 */
/*
h107,8
 */
/*
add 320 and 100
m 75,450 add 375
 */