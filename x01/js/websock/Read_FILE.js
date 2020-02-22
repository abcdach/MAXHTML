


var Read_FILE_NAME		= "";
var Read_FI_X    		= 0;
var Read_FI_Y    		= 0;
var Read_FI_Z    		= "";
var Read_FI_Len			= 0;
var Read_FI_Pointer		= 0;
var Read_FI_Bytes		= 0;
var Read_FI_Progress_U  = 0;
var Read_FI_Text		= "";

function Read_FILE() {
	CODE_Editor.getDoc().setValue("");
	dom__FI_progress1.value(0);
	Read_FILE_NAME = dom__FI_Inp2.value();
	Read_FI_Text = "";
	Read_FILE_STEP = 1;
	setTimeout(_Read_FILE, 1);
}

function _Read_FILE() {
    switch (Read_FILE_STEP) {
    case 0:
        break;
    case 1:     
        clearText();
		TERMINAL("FILE_NAME : " + Read_FILE_NAME + '\n\n');		
		Read_FILE_NAME_B64 = Base64.encode(Read_FILE_NAME);
        var Msg = "{\"F\":\"20\",\"X\":\"0\",\"Y\":\"0\",\"Z\":\"" + Read_FILE_NAME_B64 + "\"}";
        websocket_send(Msg);
        //////////////////////////////////////////////////////
        //Read_CODE_SYS_TimeOUT = 0;
        Read_FILE_STEP ++;
        //setTimeout(_Read_FILE, 15);
        //break;	
    case 2:	
		setTimeout(_Read_FILE, 15);	
		break;	
    case 3:	
		Read_FI_Len = Number(Read_FI_Z);
		Read_FI_Pointer	= 0;
		Read_FI_Progress_U = Read_FI_Len / 100;
		Read_FILE_STEP ++;
		//setTimeout(_Read_FILE, 15);	
		//break;		
    case 4:
        //////////////////////////////////////////////////////
        var Temp = Read_FI_Len - Read_FI_Pointer;
        if (Temp > 2048) {
            Read_FI_Bytes = 2048;
        } else {
            Read_FI_Bytes = Temp;
        }
        //////////////////////////////////////////////////////
        var Msg = "{\"F\":\"20\",\"X\":\"" + Read_FI_Pointer + "\",\"Y\":\"" + Read_FI_Bytes + "\",\"Z\":\"" + Read_FILE_NAME_B64 + "\"}";
        websocket_send(Msg);
        //////////////////////////////////////////////////////
		Read_FI_Pointer += Read_FI_Bytes;
		 //////////////////////////////////////////////////////
		Read_FILE_STEP ++ ;	
        //setTimeout(_Read_FILE, 15);
        //break;	
    case 5:	
		setTimeout(_Read_FILE, 15);	
		break;
    case 6:
        Read_FI_Text += Base64.decode(Read_FI_Z);
		if(Read_FI_Len <= Read_FI_Pointer){
			CODE_Editor.getDoc().setValue(Read_FI_Text);
			Read_FILE_STEP = 0;	
		}else{
			Read_FILE_STEP --;
			Read_FILE_STEP --;
		}
		dom__FI_progress1.value(Read_FI_Pointer / Read_FI_Progress_U );
		setTimeout(_Read_FILE, 1);
		break;								
    case 6:		
		break;		
    case 7:		
		break;		
    default:
        break;
    }
}

