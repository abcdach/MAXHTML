//#--------------------------------------------------
//#     Menu component objects
//#--------------------------------------------------
var dom__Rooms;
////////////////////////

var DOM_Room_ON_Pic  = [];
var DOM_Room_OFF_Pic = [];
var DOM_Room_InPUT   = [];

function OBJECT_DOM_Rooms() {
    
	var PIC_W = '45px';
	
	
	for (var i = 0; i < 16; i++) {
		var f1 = "pic/room/room_"+i+".jpg";
		var f2 = "pic/room/room_"+i+"x.jpg";		
		DOM_Room_ON_Pic[i] = createImg(f1);
		DOM_Room_ON_Pic[i].style('width', PIC_W);		
		DOM_Room_OFF_Pic[i] = createImg(f2);
		DOM_Room_OFF_Pic[i].style('width', PIC_W);
		DOM_Room_OFF_Pic[i].mousePressed(FSwitch_room[i]);	
		    //dom__Connect_Con.mouseOver(function(){dom__Connect_Con.style('width', '59px');});
			//dom__Connect_Con.mouseOut (function(){dom__Connect_Con.style('width', '60px');});
	}
	
	for (var i = 0; i < 16; i++) {
		DOM_Room_InPUT[i] = createInput();
		DOM_Room_InPUT[i].style('width', '140px');
		DOM_Room_InPUT[i].style('textAlign', 'CENTER');
		//DOM_Room_InPUT[i].style('background-color', '#DAF7A6');
	}
	
	
    this.show = function() {
		
		if(DOM_isSelected != "room"){		
			//CODE_Editor.getDoc().setValue(" ");
			dom__hide_all();
			W2._Text(xText[30]); //"ROOMS" 
			//iot__ROOM = 0;
			dom__switch_rooms();
			for (var i = 0; i < 8; i++) DOM_Room_InPUT[i].show();
			DOM_isSelected = "room";
			dom__W2_right_left(dom__W2_right_left_status);
		}
    };
	
    this.hide = function() {
		DOM_isSelected = "";
		for (var i = 0; i < 16; i++) {
			DOM_Room_ON_Pic[i].hide();
			DOM_Room_OFF_Pic[i].hide();
			DOM_Room_InPUT[i].hide();
		}
		
    };
}


function dom__switch_rooms(){
	
	websocket_send( "{\"F\":\"21\",\"R\":\"" + iot__ROOM + "\"}");
	for (var i = 0; i < 16; i++){
		DOM_Room_OFF_Pic[i].show();
		DOM_Room_ON_Pic[i].hide();
	}
	
	
	DOM_Room_ON_Pic[iot__ROOM].show();
	DOM_Room_OFF_Pic[iot__ROOM].hide();
	W1._Text(xText[2]+iot__ROOM);
}

var FSwitch_room = []; 
FSwitch_room[0]  = function dom__switch_room_0(){ iot__ROOM = 0; dom__switch_rooms();}
FSwitch_room[1]  = function dom__switch_room_0(){ iot__ROOM = 1; dom__switch_rooms();}
FSwitch_room[2]  = function dom__switch_room_0(){ iot__ROOM = 2; dom__switch_rooms();}
FSwitch_room[3]  = function dom__switch_room_0(){ iot__ROOM = 3; dom__switch_rooms();}
FSwitch_room[4]  = function dom__switch_room_0(){ iot__ROOM = 4; dom__switch_rooms();}
FSwitch_room[5]  = function dom__switch_room_0(){ iot__ROOM = 5; dom__switch_rooms();}
FSwitch_room[6]  = function dom__switch_room_0(){ iot__ROOM = 6; dom__switch_rooms();}
FSwitch_room[7]  = function dom__switch_room_0(){ iot__ROOM = 7; dom__switch_rooms();}
FSwitch_room[8]  = function dom__switch_room_0(){ iot__ROOM = 8; dom__switch_rooms();}
FSwitch_room[9]  = function dom__switch_room_0(){ iot__ROOM = 9; dom__switch_rooms();}
FSwitch_room[10] = function dom__switch_room_0(){ iot__ROOM = 10;dom__switch_rooms();}
FSwitch_room[11] = function dom__switch_room_0(){ iot__ROOM = 11;dom__switch_rooms();}
FSwitch_room[12] = function dom__switch_room_0(){ iot__ROOM = 12;dom__switch_rooms();}
FSwitch_room[13] = function dom__switch_room_0(){ iot__ROOM = 13;dom__switch_rooms();}
FSwitch_room[14] = function dom__switch_room_0(){ iot__ROOM = 14;dom__switch_rooms();}
FSwitch_room[15] = function dom__switch_room_0(){ iot__ROOM = 15;dom__switch_rooms();}














