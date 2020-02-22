
var Save_ME_MaxLen = 2040;
var Save_ME_Encode = "";
var Save_ME_Decode = "";
var Save_ME_STEP = 0;
var Save_ME_Pointer=0;
var Save_ME_Len=0;
var Save_ME_Bytes=0;
var Save_ME_Progress_U=0;


function Save_CODE() {
	
	var r = confirm("Do you want to save code ?");
	if (r == true) {
		dom__ME_progress1_value(0);
		clearText();
		Save_ME_STEP = 1;
		setTimeout(_Save_CODE,300); 
	}
	
	

}


function _Save_CODE() {
    switch (Save_ME_STEP) {
    case 0:
        break;
    case 1:
        API_iot_RESET();
        ///////////////////////////////////////////////
        TERMINAL("............................." + '\n');
        TERMINAL(dom__ME.get_code() + '\n');
        TERMINAL(".............................x" + '\n');
        Save_ME_Encode = Base64.encode(dom__ME.get_code());
        TERMINAL(Save_ME_Encode + '\n');
        TERMINAL("............................." + '\n');
		///////////////////////////////////////////////
		Save_ME_Pointer = 0;
		Save_ME_Len = Save_ME_Encode.length;
		Save_ME_Progress_U = Read_ME_Len / 100;
		///////////////////////////////////////////////
        TERMINAL("Python_Base64_Len:" + Save_ME_Len + '\n');
		///////////////////////////////////////////////
        if (Read_ME_Len > Save_ME_MaxLen){	
        	TERMINAL("Error !!!! Python_Base64_Len > "+Save_ME_MaxLen + '\n');       
        	info.announce(Info_Type_error, "DEV:" +  CODE_Mediator1_Name + " MEDIATOR PYTHON CODE LENGTH ERROR !!!", "Python Base64 Length("+Save_CODE_TEXT_Len+") > "+Save_ME_MaxLen);       	
        	Save_ME_STEP = 0;
            setTimeout(_Save_CODE,1);
            break;
        }
		///////////////////////////////////////////////
		TERMINAL("............................." + '\n');
        Save_ME_Decode = Base64.decode(Save_ME_Encode);
        TERMINAL(Save_ME_Decode + '\n');
        TERMINAL("............................." + '\n');
        ///////////////////////////////////////////////
        Save_ME_STEP = 2;
		dom__ME_progress1_value(0);
        setTimeout(_Save_CODE,1);
        break
		
		
    case 2:
		//////////////////////////////////////////////////////
		var Save_ME_Exit = 0;
        var Temp = Save_ME_Len - Save_ME_Pointer; 
        if (Temp > 1024) {
            Save_ME_Bytes = 1024;
        } else {
            Save_ME_Bytes = Temp;
			Save_ME_Exit = 1;
        }
        //////////////////////////////////////////////////////
		TERMINAL("............................." + '\n');
		TERMINAL("Pointer : " + Save_ME_Pointer + " Bytes : " + Save_ME_Bytes + '\n');
		TERMINAL("............................." + '\n');
		//////////////////////////////////////////////////////
		var Msg = "{\"F\":\"11\",\"X\":\"" + Save_ME_Pointer + "\",\"Y\":\"" + Save_ME_Bytes + "\",\"Z\":\"" + Save_ME_Encode.substring(Save_ME_Pointer,(Save_ME_Pointer+Save_ME_Bytes)) + "\"}";
		websocket_send(Msg);
		TERMINAL(FROM_SER + Msg + '\n');
		TERMINAL("............................." + '\n');
		//////////////////////////////////////////////////////
		Save_ME_Pointer += Save_ME_Bytes;
		//////////////////////////////////////////////////////
		dom__ME_progress1.value(Read_ME_Pointer / Read_ME_Progress_U );
		//////////////////////////////////////////////////////
		if(Save_ME_Exit===1)Save_ME_STEP = 3;
        setTimeout(_Save_CODE, 10);
        break;		

    case 3:		
		var Msg = "{\"F\":\"11\",\"X\":\"" + 0 + "\",\"Y\":\"" + 0 + "\",\"Z\":\"" + CODE_Mediator1_Name + "\"}";
		websocket_send(Msg);
		TERMINAL(FROM_SER + Msg + '\n');
		Save_ME_STEP = 0;// EXIT!!!	
		setTimeout(_Save_CODE, 10);		
        break;	

    default:
        break;
    }
}


