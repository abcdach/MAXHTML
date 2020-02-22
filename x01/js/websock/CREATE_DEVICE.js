//#---------------------------------------------------------------------------
//#     CREATE_DEVICE
//#---------------------------------------------------------------------------
var DEVICE_TYPE = 0;
var CREATE_DEVICE_NAME = 0;
var CREATE_DEVICE_STEP = 0;
//var CREATE_DEVICE_BUSY = 0;

function before_do_CREATE_DEVICE() {
	dom__Compon_progress1.attribute("value", 0);
	dom__Compon_Inp1.style('background-color', '#E0F7FF');//blue
	 ///////////////////////////////////////////////////////////
	 REATE_DEVICE_NAME = Number(dom__Compon_Inp1.value());
	 if (isNaN(REATE_DEVICE_NAME) === false){
		 if(REATE_DEVICE_NAME>99){
			 if(REATE_DEVICE_NAME<100000){
				 info.announce(Info_Type_some,"", "Create Component: "+REATE_DEVICE_NAME);
				 return 1; 
			 }
		 }
	 }
	 dom__Compon_Inp1.style('background-color', '#FFF1F1');
	 info.announce(Info_Type_error, "Error !!!", "Component ID is incorrect !!!");
	 return 0;
}



function do_CREATE_DEVICE_0() { //device
	if (before_do_CREATE_DEVICE()===0) return 1;
	DEVICE_TYPE = 0;
	CREATE_DEVICE_STEP  = 1;
	setTimeout(CREATE_DEVICE, 1);
}

function do_CREATE_DEVICE_1() { //Mediator
	if (before_do_CREATE_DEVICE()===0) return 1;
	DEVICE_TYPE = 1;
	CREATE_DEVICE_STEP  = 1;
	setTimeout(CREATE_DEVICE, 1);
}

function do_CREATE_DEVICE_2() { //web
	if (before_do_CREATE_DEVICE()===0) return 1;
	DEVICE_TYPE = 2;
	CREATE_DEVICE_STEP = 1;
	setTimeout(CREATE_DEVICE, 1);
}


function CREATE_DEVICE() {
    switch (CREATE_DEVICE_STEP) {
    case 0:
        break;
    case 1:
		clearText();
        Term_textarea1.value("");
        var Msg = "{\"F\":\"1\",\"D\":\""+REATE_DEVICE_NAME+"\",\"T\":\"" + DEVICE_TYPE + "\",\"R\":\"" + iot__ROOM + "\"}";
        websocket_send(Msg);
        CREATE_DEVICE_TimeOUT = 0;
        CREATE_DEVICE_STEP ++;
        setTimeout(CREATE_DEVICE, 15);
        break;	
    case 2:
        CREATE_DEVICE_TimeOUT++;
        if (CREATE_DEVICE_TimeOUT === SYS_TimeOUT_LEN) {
            TERMINAL(FROM_SYS + "CREATE DEVICE ERROR( TimeOUT )!!! DEV:" + REATE_DEVICE_NAME+'\n');
            TERMINAL(FROM_SYS + "STOP AND EXIT !!!" + '\n');
            info.announce(Info_Type_error, "DEV:" +  REATE_DEVICE_NAME + " CREATE DEVICE ERROR !!!", "Server response TimeOUT");
            break;
        }
        setTimeout(CREATE_DEVICE, 15);
        break;
    case 3:
        API_iot_CREATE__Device(REATE_DEVICE_NAME, 50, 100, "undefined", DEVICE_TYPE, iot__ROOM);
        info.announce(Info_Type_ok,"", "Component "+REATE_DEVICE_NAME+" successfully created");
        break;
    default:
        break;
    }
}

