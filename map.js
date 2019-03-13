function locate() {
    var class1= $("#class1").val();
    var room1 = $("#room1").val();
    find(room1);

}
function find(room) {
    if(room.includes("a") || room.includes("A")){
        $("#dot").css("bottom","50px");
        $("#dot").css("right","600px");
    }if(room.includes("m") || room.includes("M")){
        $(".dot").css("top","100px");
        $(".dot").css("left","1090px");
    }if(room.includes("d" || room.includes("D"))){
        $(".dot").css("bottom","270px");
        $(".dot").css("left","2000px");
    }if(room.includes("f" || room.includes("F"))){
        $(".dot").css("top","100px");
        $(".dot").css("left","900px");
    }if(room.includes("d" || room.includes("D"))){
        $(".dot").css("bottom","270px");
        $(".dot").css("left","1085px");
    }if(room.includes("h" || room.includes("H"))){
        var string = room.slice(1,4);
        var num = parseInt(string);
        if(num>=109 && num<=112 || num>=211 && num<=217 || num>=300 && num<=399){
            $(".dot").css("bottom","1000px");
            $(".dot").css("left","855px");
        }if(num>=100 && num<=105 || num>=201 && num<=205){
            $(".dot").css("left","700px");
        }else{
            $(".dot").css("left","700px");
            $(".dot").css("bottom","200px");
        }
    }if(room.includes("g") || room.includes("G")){
        var string2 = room.slice(1,4);
        var num2 = parseInt(string2);
        if(num2>=100 && num2<=106 || num2>=200 && num2<=206){
            $(".dot").css("bottom","270px");
            $(".dot").css("left","725px");
        }
    }
}