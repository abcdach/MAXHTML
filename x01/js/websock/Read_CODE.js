
var Read_CODE_NAME		= "";
var Read_ME_X    		= 0;
var Read_ME_Y    		= 0;
var Read_ME_Z    		= "";
var Read_ME_Len			= 0;
var Read_ME_Pointer		= 0;
var Read_ME_Bytes		= 0;
var Read_ME_Progress_U  = 0;
var Read_ME_Text		= "";

function Read_CODE() {
	CODE_Editor.getDoc().setValue("");
	dom__ME_progress1.value(0);
	Read_CODE_NAME = CODE_Mediator1_Name;
	Read_ME_Text = "";
	Read_CODE_STEP = 1;
	setTimeout(_Read_CODE, 15);
}

function _Read_CODE() {
    switch (Read_CODE_STEP) {
    case 0:
        break;
    case 1:     
        clearText();
		TERMINAL("FILE_NAME : " + Read_CODE_NAME + '\n\n');		
		//Read_CODE_NAME_B64 = Base64.encode(Read_CODE_NAME);
        var Msg = "{\"F\":\"10\",\"X\":\"0\",\"Y\":\"0\",\"Z\":\"" + Read_CODE_NAME + "\"}";
        websocket_send(Msg);
        //////////////////////////////////////////////////////
        //Read_CODE_SYS_TimeOUT = 0;
        Read_CODE_STEP ++;
        setTimeout(_Read_CODE, 1);
        break;	
    case 2:	
		setTimeout(_Read_CODE, 15);	
		break;	
    case 3:	TERMINAL(FROM_SER + Read_ME_Z + ' Read_ME_Z\n');
		Read_ME_Len = Number(Read_ME_Z);
		Read_ME_Pointer	= 0;
		Read_ME_Progress_U = Read_ME_Len / 100;
		Read_CODE_STEP ++;
		//setTimeout(_Read_CODE, 15);	
		//break;		
    case 4:
        //////////////////////////////////////////////////////
        var Temp = Read_ME_Len - Read_ME_Pointer;
        if (Temp > 2048) {
            Read_ME_Bytes = 2048;
        } else {
            Read_ME_Bytes = Temp;
        }
        //////////////////////////////////////////////////////
        var Msg = "{\"F\":\"10\",\"X\":\"" + Read_ME_Pointer + "\",\"Y\":\"" + Read_ME_Bytes + "\",\"Z\":\"" + Read_CODE_NAME + "\"}";
		websocket_send(Msg);TERMINAL(FROM_SER + Msg + '\n');
        //////////////////////////////////////////////////////
		Read_ME_Pointer += Read_ME_Bytes;
		 //////////////////////////////////////////////////////
		Read_CODE_STEP ++ ;	
        setTimeout(_Read_CODE, 1);
        break;	
    case 5:	
		setTimeout(_Read_CODE, 15);	
		break;
    case 6:
        Read_ME_Text += Base64.decode(Read_ME_Z);
		if(Read_ME_Len <= Read_ME_Pointer){
			CODE_Editor.getDoc().setValue(Read_ME_Text);
			Read_CODE_STEP = 0;	
		}else{
			Read_CODE_STEP --;
			Read_CODE_STEP --;
		}
		dom__ME_progress1.value(Read_ME_Pointer / Read_ME_Progress_U );
		setTimeout(_Read_CODE, 1);
		break;								
    case 6:		
		break;		
    case 7:		
		break;		
    default:
        break;
    }
}







/**
var Read_CODE_STEP = 0;
var Read_CODE_FRAME = 0;
var Read_CODE_STEP_ENABLE = 0;
var Read_CODE_TEXT = 0;
var Read_CODE_SPEED = 0;

var CODE_Mediator1_Name_Last = 0;

function Read_CODE() {  
	//if(CODE_Mediator1_Name_Last !== CODE_Mediator1_Name){
		Read_CODE_SPEED = 1;
		CODE_Mediator1_Name_Last = CODE_Mediator1_Name;	
	    Read_CODE_STEP_ENABLE 	= 1;
	    Read_CODE_STEP 			= 1;
	    Read_CODE_SYS_TimeOUT 	= 0;
	    Read_CODE_SPEED 		= 15;
	    setTimeout(_Read_CODE, Read_CODE_SPEED);
    //}
}

function _Read_CODE() {
    switch (Read_CODE_STEP) {
    case 0:
        break;
    case 1:
        dom__ME.put_code("Please wait data is loaded...");
        clearText();
        //API_iot_RESET();
        TERMINAL("............................." + '\n');
        //////////////////////////////////////////////////////
        iot__CODE       = "";
        iot__CODE_Len   = 0;
        iot__CODE_Start = 0;
        iot__CODE_End   = 0;
        iot__CODE_FRAME = 0;
        iot__CODE_EXIT  = 0;
        //////////////////////////////////////////////////////
        var Msg = "{\"F\":\"10\",\"R\":\"" + "255" + "\",\"T\":\"" + CODE_Mediator1_Name + "\"}";
        TERMINAL(TO_SER + Msg + '\n');
        websocket_send(Msg);
        //////////////////////////////////////////////////////
        Read_CODE_SYS_TimeOUT = 0;
        Read_CODE_SPEED = 15;
        Read_CODE_STEP = 2;
        setTimeout(_Read_CODE, Read_CODE_SPEED);
        break;
    case 2:
        Read_CODE_SYS_TimeOUT++;
        if (Read_CODE_SYS_TimeOUT === SYS_TimeOUT_LEN) {
            TERMINAL(FROM_SYS + "READ MEDIATOR PYTHON CODE ERROR( TimeOUT )!!! DEV:" + CODE_Mediator1_Name+'\n');
            TERMINAL(FROM_SYS + "STOP AND EXIT !!!" + '\n');
            info.announce(Info_Type_error, "DEV:" +  CODE_Mediator1_Name + " READ MEDIATOR PYTHON CODE ERROR !!!", "Server response TimeOUT");
            ////////////////////////////////////////////
            Read_CODE_SPEED = 1;
            Read_CODE_STEP = 255;
            setTimeout(_Read_CODE, Read_CODE_SPEED);
            break; //goto Next Step ...
        }
        setTimeout(_Read_CODE, Read_CODE_SPEED);
        break;
    case 3:
    	Read_CODE_SPEED = 1;
        if (SQL_RESPONSE === "OK") {
            TERMINAL(FROM_SYS + "OK" + '\n');            
	        if (iot__CODE_Len > 0) {
	            iot__CODE_Progress_Coefficient = iot__CODE_Len / 100;
	            Read_CODE_STEP = 4;
	            setTimeout(_Read_CODE, Read_CODE_SPEED);
	            break;
	        }
        }
        if (SQL_RESPONSE === "ERROR") {      
            TERMINAL(FROM_SYS + "READ MEDIATOR PYTHON CODE SERVER ERROR !!! DEV:" + CODE_Mediator1_Name+'\n');
            TERMINAL(FROM_SYS + "STOP AND EXIT !!!" + '\n');
            info.announce(Info_Type_error, "DEV:" +  CODE_Mediator1_Name + " READ MEDIATOR PYTHON CODE ERROR !!!",  "Server response with Error: " + ERROR_Num + "\n( "+ERROR_Description+" )");
            ////////////////////////////////////////////
        	Read_CODE_STEP = 255; // EXIT !!!!
        	setTimeout(_Read_CODE, Read_CODE_SPEED);
        	break;    
        }
        Read_CODE_STEP = 255; // EXIT !!!!
        setTimeout(_Read_CODE, Read_CODE_SPEED);
    	break; 
    case 4:
        iot__CODE_Start += iot__CODE_End;
        iot__CODE_Progress_Value = iot__CODE_Start / iot__CODE_Progress_Coefficient;
        dom__ME_progress1_value(iot__CODE_Progress_Value);
        if (iot__CODE_Len === iot__CODE_Start) {

            TERMINAL("............................." + '\n');
            TERMINAL(iot__CODE + '\n');
            TERMINAL("............................." + '\n');
            decodedString = Base64.decode(iot__CODE);
            TERMINAL(decodedString + '\n');
            TERMINAL("............................." + '\n');
            dom__ME.put_code(decodedString);
            ///////////////////////////////////
            iot__CODE_Len = iot__CODE.length;
            info.announce(Info_Type_some, "DEV: "+CODE_Mediator1_Name,"Successfully Read Mediator Python Code "+iot__CODE_Len+" Byte");
            Read_CODE_STEP = 255;// EXIT !!!!
            setTimeout(_Read_CODE, Read_CODE_SPEED);
            break;
        }
        //////////////////////////////////////////////////////
        var Temp1 = iot__CODE_Len - iot__CODE_Start;
        if (Temp1 > 1024) {
            iot__CODE_End = 1024;
        } else {
            iot__CODE_End = Temp1;
        }
        //////////////////////////////////////////////////////
        var Msg = "{\"F\":\"10\",\"R\":\"" + iot__CODE_FRAME + "\",\"T\":\"" + iot__CODE_End + "\"}";
        TERMINAL(TO_SER + Msg + '\n');
        websocket_send(Msg);
        //////////////////////////////////////////////////////
        iot__CODE_FRAME++;
        //////////////////////////////////////////////////////
        Read_CODE_SYS_TimeOUT = 0;
        Read_CODE_SPEED = 15;
        Read_CODE_STEP = 5;
        setTimeout(_Read_CODE, Read_CODE_SPEED);
        break;
    case 5:
        Read_CODE_SYS_TimeOUT++;
        if (Read_CODE_SYS_TimeOUT === SYS_TimeOUT_LEN) {
            TERMINAL(FROM_SYS + "READ MEDIATOR PYTHON CODE ERROR( TimeOUT )!!! DEV:" + CODE_Mediator1_Name+'\n');
            TERMINAL(FROM_SYS + "STOP AND EXIT !!!" + '\n');
            info.announce(Info_Type_error, "DEV:" +  CODE_Mediator1_Name + " READ MEDIATOR PYTHON CODE ERROR !!!", "Server response TimeOUT");
            ////////////////////////////////////////////
            Read_CODE_SPEED = 1;
            Read_CODE_STEP = 255; // EXIT !!!!
            setTimeout(_Read_CODE, Read_CODE_SPEED);
            break;
        }
        setTimeout(_Read_CODE, Read_CODE_SPEED);
        break;
    case 6:
    	Read_CODE_SPEED = 1;
        if (SQL_RESPONSE === "OK") {
            TERMINAL(FROM_SYS + "OK" + '\n');
            iot__CODE = iot__CODE.concat(Read_CODE_TEXT);
            Read_CODE_STEP = 4;
            setTimeout(_Read_CODE, Read_CODE_SPEED);
            break; 
        }
        if (SQL_RESPONSE === "ERROR") {  
            TERMINAL(FROM_SYS + "READ MEDIATOR PYTHON CODE SERVER ERROR !!! DEV:" + CODE_Mediator1_Name+'\n');
            TERMINAL(FROM_SYS + "STOP AND EXIT !!!" + '\n');
            info.announce(Info_Type_error, "DEV:" +  CODE_Mediator1_Name + " READ MEDIATOR PYTHON CODE ERROR !!!",  "Server response with Error: " + ERROR_Num + "\n( "+ERROR_Description+" )");
            ////////////////////////////////////////////
        	Read_CODE_STEP = 255; // EXIT !!!!
        	setTimeout(_Read_CODE, Read_CODE_SPEED);
        	break;    
        }
        Read_CODE_STEP = 255; // EXIT !!!!
        setTimeout(_Read_CODE, Read_CODE_SPEED);
        break;
    case 7:
        break;
    case 8:
        break;
    case 10:
        break;
    case 11:
        break;
    case 255:// EXIT !!!
        Read_CODE_STEP_ENABLE = 0;
        Read_CODE_STEP = 0;
        setTimeout(_Read_CODE, Read_CODE_SPEED);
        break;
    default:
        break;
    }
}

**/