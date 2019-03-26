var c = {
    a:{top:70,left:370},
    d:{top:80,left:450},
    m:{top:450,left:450},
    f:{top:455,left:300},
    e:{top:275,left:450},
    j:{top:545,left:230},
    h1:{top:75,left:90},
    h2:{top:205,left:70},
    h3:{top:145,left:70},
    g1:{top:285,left:70},
    g2:{top:385,left:80},
    g3:{top:335,left:90},
    c1:{top:305,left:350},
    c2:{top:305,left:270},
    c3:{top:310,left:190},
    x:{top:1,left:0}
};
var dots = ["dot","dot2","dot3","dot4","dot5","dot6","dot7"];
var tags = ["","tag","tag2","tag3","tag4","tag5","tag6","tag7"];
var buildings = "acdefghjm ";
function start() {
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
    var rooms =[room1,room2,room3,room4,room5,room6,room7];
    for(var i=0; i<rooms.length;i++){
        find(rooms[i],i);
    }
    tag(room1,class1,1,30,0);
    tag(room2,class2,2,-30,-30);
    tag(room3,class3,3,0,30);
    tag(room4,class4,4,-30,0);
    tag(room5,class5,5,30,30);
    tag(room6,class6,6,-30,30);
    tag(room7,class7,7,30,-30);
}
function find(room,arr) {
    var letter = room.slice(0,1);
    if(letter.toLowerCase()=="a") {
        $("#" + dots[arr]).css("top",c.a.top);
        $("#" + dots[arr]).css("left",c.a.left);
    }if(letter.toLowerCase()=="d"){
        $("#" + dots[arr]).css("top",c.d.top);
        $("#" + dots[arr]).css("left",c.d.left);
    }if(letter.toLowerCase()=="m"){
        $("#" + dots[arr]).css("top",c.m.top);
        $("#" + dots[arr]).css("left",c.m.left);
    }if(letter.toLowerCase()=="f"){
        $("#" + dots[arr]).css("top",c.f.top);
        $("#" + dots[arr]).css("left",c.f.left);
    }if(letter.toLowerCase()=="e"){
        $("#" + dots[arr]).css("top",c.e.top);
        $("#" + dots[arr]).css("left",c.e.left);
    }if(letter.toLowerCase()=="j"){
        $("#" + dots[arr]).css("top",c.j.top);
        $("#" + dots[arr]).css("left",c.j.left);
    }if(letter.toLowerCase()=="h"){
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
    }if(letter.toLowerCase()=="g"){
        var string2 = room.slice(1,4);
        var num2 = parseInt(string2);
        if(num2>=100 && num2<=106 || num2>=200 && num2<=206){
            $("#" + dots[arr]).css("top",c.g1.top);
            $("#" + dots[arr]).css("left",c.g1.left);
        }if(num2<108 || num2>208 || num2>=300){
            $("#" + dots[arr]).css("top",c.g2.top);
            $("#" + dots[arr]).css("left",c.g2.left);
        }if(num2>106 && num2<108 || num2>206 && num2<208){
            $("#" + dots[arr]).css("top",c.g3.top);
            $("#" + dots[arr]).css("left",c.g3.left);
        }
    }if(letter.toLowerCase()=="c") {
        var string3 = room.slice(1, 4);
        var num3 = parseInt(string3);
        if (num3 >= 102 && num3 <= 113 || num3 >= 204 && num3 <= 213 || num3 >= 302 || num3 <= 314 || num3 == 400 || num3 == 418) {
            $("#" + dots[arr]).css("top", c.c1.top);
            $("#" + dots[arr]).css("left", c.c1.left);
        }
        if (num3 > 113 && num3 < 130 || num3 > 213 && num3 < 222 || num3 > 314 && num3 < 326) {
            $("#" + dots[arr]).css("top", c.c2.top);
            $("#" + dots[arr]).css("left", c.c2.left);
        }
        if (num3 >= 131 || num3 >= 222 || num3 >= 326) {
            $("#" + dots[arr]).css("top", c.c3.top);
            $("#" + dots[arr]).css("left", c.c3.left);
        }
    }if(buildings.includes(letter)==false){
        document.getElementById("error").innerHTML="Please enter a valid room number";
        reset();
    }
}
function tag(room,name,period,num,nums) {
    var p = name;
    var x = period;
    var letter = room.slice(0,1);
    $("#" + tags[period]).append(x+"\n");
    $("#" + tags[period]).append(p);
    if(letter.toLowerCase()=="a") {
        $("#" + tags[period]).css("top",c.a.top + num);
        $("#" + tags[period]).css("left",c.a.left + nums);
    }if(letter.toLowerCase()=="d"){
        $("#" + tags[period]).css("top",c.d.top+num);
        $("#" + tags[period]).css("left",c.d.left+nums);
    }if(letter.toLowerCase()=="m"){
        $("#" + tags[period]).css("top",c.m.top+num);
        $("#" + tags[period]).css("left",c.m.left+nums);
    }if(letter.toLowerCase()=="f"){
        $("#" + tags[period]).css("top",c.f.top+num);
        $("#" + tags[period]).css("left",c.f.left+nums);
    }if(letter.toLowerCase()=="e"){
        $("#" + tags[period]).css("top",c.e.top+num);
        $("#" + tags[period]).css("left",c.e.left+nums);
    }if(letter.toLowerCase()=="j"){
        $("#" + tags[period]).css("top",c.j.top+num);
        $("#" + tags[period]).css("left",c.j.left+nums);
    }if(letter.toLowerCase()=="h"){
        var string = room.slice(1,4);
        var num1 = parseInt(string);
        if(num1>=109 && num1<=112 || num1>=211 && num1<=217 || num1>=300 && num1<=399){
            $("#" + tags[period]).css("top",c.h1.top+num);
            $("#" + tags[period]).css("left",c.h1.left+nums);
        }if(num1>=100 && num1<=105 || num1>=201 && num1<=205){
            $("#" + tags[period]).css("top",c.h2.top+num);
            $("#" + tags[period]).css("left",c.h2.left+nums);
        }if(num1>105 && num1<109 || num1>205 && num1<211){
            $("#" + tags[period]).css("top",c.h3.top+num);
            $("#" + tags[period]).css("left",c.h3.left+nums);
        }
    }if(letter.toLowerCase()=="g"){
        var string2 = room.slice(1,4);
        var num2 = parseInt(string2);
        if(num2>=100 && num2<=106 || num2>=200 && num2<=206){
            $("#" + tags[period]).css("top",c.g1.top+num);
            $("#" + tags[period]).css("left",c.g1.left+nums);
        }if(num2>108 && num2<200|| num2>208 || num2>=300){
            $("#" + tags[period]).css("top",c.g2.top+num);
            $("#" + tags[period]).css("left",c.g2.left+nums);
        }if(num2>106 && num2<108 || num2>206 && num2<208){
            $("#" + tags[period]).css("top",c.g3.top+num);
            $("#" + tags[period]).css("left",c.g3.left+nums);
        }
    }if(letter.toLowerCase()=="c"){
        var string3 = room.slice(1,4);
        var num3 = parseInt(string3);
        if(num3>=102 && num3<=113 || num3>=204 && num3<=213 || num3>=302 && num3<=314 || num3 == 400 || num3==418){
            $("#" + tags[period]).css("top",c.c1.top+num);
            $("#" + tags[period]).css("left",c.c1.left+nums);
        }if(num3>113 && num3<131 || num3>213 && num3<222 || num3>314 && num3<326) {
            $("#" + tags[period]).css("top",c.c2.top+num);
            $("#" + tags[period]).css("left",c.c2.left+nums);
        }if(num3>=131 && num3<200 || num3>=222 && num3<300 || num3>=326){
            $("#" + tags[period]).css("top",c.c3.top+num);
            $("#" + tags[period]).css("left",c.c3.left+nums);
        }
    }
}
function reset() {
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
    for(var i = 0; i<tags.length;i++){
        $("#" + tags[i+1]).css("top",c.x.top);
        $("#" + tags[i+1]).css("left",c.x.left);
        $("#" + tags[i+1]).empty();
    }
    for(var i = 0; i<dots.length;i++){
        $("#" + dots[i]).css("top",c.x.top);
        $("#" + dots[i]).css("left",c.x.left);
    }
}