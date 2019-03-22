var c = {
    a:{top:70,left:370},
    d:{top:80,left:450},
    m:{top:450,left:450},
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
    c3:{top:310,left:190,color:"green"},
    0:{top:1,left:0, color:"green"}
};
var dots = ["dot","dot2","dot3","dot4","dot5","dot6","dot7"];
var tags = ["","tag","tag2","tag3","tag4","tag5","tag6","tag7"];
//start function
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
    find(room1,0);
    find(room2,1);
    find(room3,2);
    find(room4,3);
    find(room5,4);
    find(room6,5);
    find(room7,6);
    tag(room1,class1,"1",30,0);
    tag(room2,class2,"2",-30,-30);
    tag(room3,class3,"3",0,30);
    tag(room4,class4,"4",0,-30);
    tag(room5,class5,"5",30,30);
    tag(room6,class6,"6",-30,30);
    tag(room7,class7,"7",30,-30);
}

function find(room,arr) {
    if(room.includes("a") || room.includes("A")) {
        $("#" + dots[arr]).css("top",c.a.top);
        $("#" + dots[arr]).css("left",c.a.left);
    }if(room.includes("d") || room.includes("D")){
        $("#" + dots[arr]).css("top",c.d.top);
        $("#" + dots[arr]).css("left",c.d.left);
    }if(room.includes("m" || room.includes("M"))){
        $("#" + dots[arr]).css("top",c.m.top);
        $("#" + dots[arr]).css("left",c.m.left);
    }if(room.includes("f" || room.includes("F"))){
        $("#" + dots[arr]).css("top",c.f.top);
        $("#" + dots[arr]).css("left",c.f.left);
    }if(room.includes("e" || room.includes("E"))){
        $("#" + dots[arr]).css("top",c.e.top);
        $("#" + dots[arr]).css("left",c.e.left);
    }if(room.includes("j" || room.includes("J"))){
        $("#" + dots[arr]).css("top",c.j.top);
        $("#" + dots[arr]).css("left",c.j.left);
    }if(room.includes("h" || room.includes("H"))){
        var string = room.slice(1,4);
        var num = parseInt(string);
        if(num>=109 && num<=112 || num>=211 && num<=217 || num>=300 && num<=399){
            $("#" + dots[arr]).css("top",c.h1.top);
            $("#" + dots[arr]).css("left",c.h1.left);
        }if(num>=100 && num<=105 || num>=201 && num<=205){
            $("#" + dots[arr]).css("top",c.h2.top);
            $("#" + dots[arr]).css("left",c.h2.left);
        }if(num>105 && num<109 || num>205 && num<211){
            $("#" + dots[arr]).css("top",c.h3.top);
            $("#" + dots[arr]).css("left",c.h3.left);
        }
    }if(room.includes("g") || room.includes("G")){
        var string2 = room.slice(1,4);
        var num2 = parseInt(string2);
        if(num2>=100 && num2<=106 || num2>=200 && num2<=206){
            $("#" + dots[arr]).css("top",c.g1.top);
            $("#" + dots[arr]).css("left",c.g1.left);
        }if(num2<108 || num2<208 || num2>=300){
            $("#" + dots[arr]).css("top",c.g2.top);
            $("#" + dots[arr]).css("left",c.g2.left);
        }if(num2>106 && num2<108 || num2>206 && num2<208){
            $("#" + dots[arr]).css("top",c.g3.top);
            $("#" + dots[arr]).css("left",c.g3.left);
        }
    }if(room.includes("c") || room.includes("C")){
        var string3 = room.slice(1,4);
        var num3 = parseInt(string3);
        if(num3>=102 && num3<=113 || num3>=204 && num3<=213 || num3>=302 || num3<=314 || num3 == 400 || num3==418){
            $("#" + dots[arr]).css("top",c.c1.top);
            $("#" + dots[arr]).css("left",c.c1.left);
        }if(num3>113 && num3<130 || num3>213 && num3<222 || num3>314 && num3<326) {
            $("#" + dots[arr]).css("top",c.c2.top);
            $("#" + dots[arr]).css("left",c.c2.left);
        }if(num3>=131 || num3>=222 || num3>=326){
            $("#" + dots[arr]).css("top",c.c3.top);
            $("#" + dots[arr]).css("left",c.c3.left);
        }
    }
}
/*function place(location){
    if(num3>=102 && num3<=113 || num3>=204 && num3<=213 || num3>=302 || num3<=314 || num3 == 400 || num3==418){
        $("#" + dots[arr]).css("top",c.location.top);
        $("#" + dots[arr]).css("left",c.location.left);
    }if(num3>113 && num3<130 || num3>213 && num3<222 || num3>314 && num3<326) {
        $("#" + dots[arr]).css("top",c.location.top);
        $("#" + dots[arr]).css("left",c.location.left);
    }if(num3>=131 || num3>=222 || num3>=326){
        $("#" + dots[arr]).css("top",c.locationz.top);
        $("#" + dots[arr]).css("left",c.c3.left);
    }
}
*/
function tag(room,clas,period,num,nums) {
    var p = clas;
    var x = period;
    var y = parseInt(period);
    $("#" + tags[y]).append(x+"\n");
    $("#" + tags[y]).append(p);
    if(room.includes("a") || room.includes("A")) {
        $("#" + tags[y]).css("top",c.a.top + num);
        $("#" + tags[y]).css("left",c.a.left + nums);
    }if(room.includes("d") || room.includes("D")){
        $("#" + tags[y]).css("top",c.d.top+num);
        $("#" + tags[y]).css("left",c.d.left+nums);
    }if(room.includes("m" || room.includes("M"))){
        $("#" + tags[y]).css("top",c.m.top+num);
        $("#" + tags[y]).css("left",c.m.left+nums);
    }if(room.includes("f" || room.includes("F"))){
        $("#" + tags[y]).css("top",c.f.top+num);
        $("#" + tags[y]).css("left",c.f.left+nums);
    }if(room.includes("e" || room.includes("E"))){
        $("#" + tags[y]).css("top",c.e.top+num);
        $("#" + tags[y]).css("left",c.e.left+nums);
    }if(room.includes("j" || room.includes("J"))){
        $("#" + tags[y]).css("top",c.j.top+num);
        $("#" + tags[y]).css("left",c.j.left+nums);
    }if(room.includes("h" || room.includes("H"))){
        var string = room.slice(1,4);
        var num1 = parseInt(string);
        if(num1>=109 && num1<=112 || num1>=211 && num1<=217 || num1>=300 && num1<=399){
            $("#" + tags[y]).css("top",c.h1.top+num);
            $("#" + tags[y]).css("left",c.h1.left+nums);
        }if(num1>=100 && num1<=105 || num1>=201 && num1<=205){
            $("#" + tags[y]).css("top",c.h2.top+num);
            $("#" + tags[y]).css("left",c.h2.left+nums);
        }if(num1>105 && num1<109 || num1>205 && num1<211){
            $("#" + tags[y]).css("top",c.h3.top+num);
            $("#" + tags[y]).css("left",c.h3.left+nums);
        }
    }if(room.includes("g") || room.includes("G")){
        var string2 = room.slice(1,4);
        var num2 = parseInt(string2);
        if(num2>=100 && num2<=106 || num2>=200 && num2<=206){
            $("#" + tags[y]).css("top",c.g1.top+num);
            $("#" + tags[y]).css("left",c.g1.left+nums);
        }if(num2>108 && num2<200|| num2>208 || num2>=300){
            $("#" + tags[y]).css("top",c.g2.top+num);
            $("#" + tags[y]).css("left",c.g2.left+nums);
        }if(num2>106 && num2<108 || num2>206 && num2<208){
            $("#" + tags[y]).css("top",c.g3.top+num);
            $("#" + tags[y]).css("left",c.g3.left+nums);
        }
    }if(room.includes("c") || room.includes("C")){
        var string3 = room.slice(1,4);
        var num3 = parseInt(string3);
        if(num3>=102 && num3<=113 || num3>=204 && num3<=213 || num3>=302 && num3<=314 || num3 == 400 || num3==418){
            $("#" + tags[y]).css("top",c.c1.top+num);
            $("#" + tags[y]).css("left",c.c1.left+nums);
        }if(num3>113 && num3<131 || num3>213 && num3<222 || num3>314 && num3<326) {
            $("#" + tags[y]).css("top",c.c2.top+num);
            $("#" + tags[y]).css("left",c.c2.left+nums);
        }if(num3>=131 && num3<200 || num3>=222 && num3<300 || num3>=326){
            $("#" + tags[y]).css("top",c.c3.top+num);
            $("#" + tags[y]).css("left",c.c3.left+nums);
        }
    }
}
function reset() {
    $(".resetMe").addClass("resetNow");
    document.getElementById("class1").value= "";
    document.getElementById("class2").value="";
    document.getElementById("class3").value="";
    document.getElementById("class4").value="";
    document.getElementById("class5").value="";
    document.getElementById("class6").value="";
    document.getElementById("class7").value="";
    document.getElementById("room1").value="";
    document.getElementById("room2").value="";
    document.getElementById("room3").value="";
    document.getElementById("room4").value="";
    document.getElementById("room5").value="";
    document.getElementById("room6").value="";
    document.getElementById("room7").value="";
}