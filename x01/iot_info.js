///////////////////////////////////////////////
 //info.announce(Info_Type_info, "", "");
 //info.announce(Info_Type_error, "", "");
 //info.announce(Info_Type_ok, "", "");
 //info.announce(Info_Type_some, "", "");
///////////////////////////////////////////////
var Info_Type_info = 2;
var Info_Type_error = 3;
var Info_Type_ok = 1;
var Info_Type_some = 0;
var info;
info_icon = [];
///////////////////////////////////////////////

function OBJECT_info(x, y){   
    this.x = x;
    this.y = y;
    this.SizeW = 600;
    this.SizeH = 60;
  
    this.type = 0;
  
    this.lines = 0;
    this.line_1 = "";
    this.line_2 = "";
    
    ///////////////////////////////////////////////
    var N = 0;
    ///////////////////////////////////////////////   
    info_icon[N] = createImg('pic/info_0.png');
    info_icon[N].position(this.x - this.SizeW/2 + 1 , this.y -this.SizeH/2+0 );
    info_icon[N].style('width', '40px');
    info_icon[N].hide();
    N++;
    ///////////////////////////////////////////////
    info_icon[N] = createImg('pic/info_1.png');
    info_icon[N].position(this.x - this.SizeW/2 + 1 , this.y -this.SizeH/2+0 );
    info_icon[N].style('width', '40px');
    info_icon[N].hide();
    N++;
    ///////////////////////////////////////////////
    info_icon[N] = createImg('pic/info_2.png');
    info_icon[N].position(this.x - this.SizeW/2 + 1 , this.y -this.SizeH/2+0 );
    info_icon[N].style('width', '40px');
    info_icon[N].hide();
    N++;
    ///////////////////////////////////////////////
    info_icon[N] = createImg('pic/info_3.png');
    info_icon[N].position(this.x - this.SizeW/2 + 1 , this.y -this.SizeH/2+0 );
    info_icon[N].style('width', '40px');
    info_icon[N].hide();
    N++;
    ///////////////////////////////////////////////    
    
    this.announce = function( type, text1, text2 ) {
        ///////////////////////////////////////////////
        for (var i = 0; i < info_icon.length; i++) {
            info_icon[i].hide();
        }
        ///////////////////////////////////////////////
        info_icon[type].show();
        ///////////////////////////////////////////////
        this.type = type;
        this.line_1 = text1;
        this.line_2 = text2;
        ///////////////////////////////////////////////
    };
    
    this.display = function() {       
        ///////////////////////////////////////////////
        //stroke(118, 163, 188);
        stroke(200);
        fill(255);
        rect(this.x, this.y, this.SizeW, this.SizeH, 2);
        ///////////////////////////////////////////////
        textAlign(CENTER);
        textFont("Arial");
        textStyle(NORMAL);
        ///////////////////////////////////////////////
        textStyle(BOLD);
        fill(0);
        noStroke(); 
        textSize(13);
        text(this.line_1, this.x, this.y - this.SizeH/2 + 17 );
        ///////////////////////////////////////////////
        textStyle(NORMAL);
        fill(0);
        noStroke();;  
        textSize(14);
        text(this.line_2, this.x, this.y - this.SizeH/2 + 44, 500 , 40 );
        ///////////////////////////////////////////////
    };      
}
//////////////////////////////////////////////////////////////////////////
//
//   
//
//
//////////////////////////////////////////////////////////////////////////
function setup__info(){
    
    info = new OBJECT_info(W3.X + W3.SizeW/2 + 170 , W3.Y+W3.SizeH/2+10);
    
    language_EN();
    //language_GE();
    
    
    info.announce(1,xText[0],xText[1]);
    info.announce(0,"",xText[1]);
    
}
///////////////////////////////////////////////
function draw__info(){
    info.display();
}
//////////////////////////////////////////////////////////////////////////
//
//   
//
//
//////////////////////////////////////////////////////////////////////////
var xText = [];
function language_EN(){

    xText[0] = "Information";
    xText[1] = "Welcome to the Internet of Things ( MAXIOT )";   
    xText[2] = "ROOM "//"Virtual device board";
    xText[3] = "Internet of Things ( MAXIOT )";
    xText[4] = "Successfully connected to the MAXIOT server";
    xText[5] = "Connecting";
    xText[6] = "Disconnected";
    xText[7] = "Packets";
    xText[8] = "Terminal";
    xText[9] = "Components";
    xText[10] = "Device:";
    xText[11] = "Socket Device";
    xText[12] = "Mediator";
    xText[13] = "Python Code:";
    xText[14] = "Description:"; 
    xText[15] = "Device:";
    xText[16] = "OutPut:";
    xText[17] = "Debugger Messages:";
    xText[18] = "Data Packets:";
    xText[19] = "Components";
    xText[20] = "Options";
    xText[21] = "Connected";
    xText[22] = "WebSocket Device";
    xText[23] = "Mobile screen 320 x 480";
    xText[24] = "Device NUM:";
    xText[25] = "Device description:";
    xText[26] = "Device - OutPut";
    xText[27] = "UI Element:";
    xText[28] = "InPut:";
    xText[29] = "Device - InPut";
    xText[30] = "ROOMS";
    xText[31] = "Rooms"; 
    xText[32] = "SERVER IP:";
    xText[33] = "PORT:";
    xText[34] = "Remote IP:";
    xText[35] = "PORT:";
//    xText[36] = "IP :";
//   xText[37] = "Password:";
//    xText[38] = "Connection";
    
   
//  xText[39] = 
//  xText[40] = 
//  xText[41] = 
//  xText[42] = 
}

function language_GE(){
    xText[0] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â¤Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢";
    xText[1] = "Internet of Things (IOT) Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";   
    xText[2] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â¤Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢";
    xText[3] = "Internet of Things (IOT)";
    xText[4] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â€šÂ¬Ã¯Â¿Â½ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã†â€™Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ IOT Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹";
    xText[5] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã†â€™Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â€šÂ¬Ã¯Â¿Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢";
    xText[6] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â€šÂ¬Ã¯Â¿Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã†â€™Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢";
    xText[7] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";
    xText[8] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";
    xText[9] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";
    xText[10] = "";
    xText[11] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â§Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ - Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦/Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¢Ãƒâ€˜Ã¢â‚¬â„¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢";
    xText[12] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â§Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ - Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";
    xText[13] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â€šÂ¬Ã¯Â¿Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡.";
    xText[14] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢:";
    xText[15] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â®Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦:";  
    xText[16] = "";
    xText[17] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â«Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã¢â‚¬Â¹ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦:";
    xText[18] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¢Ã¢â€šÂ¬Ã¯Â¿Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦:";
    xText[19] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";
    xText[20] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã¢â‚¬ï¿½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡Ãƒâ€˜Ã¢â‚¬ÂºÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦";
    xText[21] = "Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¡Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…Â¾Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â Ãƒï¿½Ã†â€™Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã¢â‚¬â„¢Ãƒâ€šÃ‚Â Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡Ãƒâ€˜Ã…â€œÃƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â²Ãƒï¿½Ã¢â‚¬Å¡ÃƒÂ¯Ã‚Â¿Ã‚Â½Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¿Ãƒâ€˜Ã¢â‚¬â€�Ãƒï¿½Ã¢â‚¬Â¦Ãƒï¿½Ã‚Â Ãƒâ€šÃ‚Â±Ãƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒï¿½Ã‚Â¡ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢";
    xText[22] = "Device - Mobile Web";
//    xText[23] = 
//    xText[24] = 
//    xText[25] = 
//    xText[26] = 
//    xText[27] = 
//    xText[28] = 
//    xText[29] = 
//    xText[30] = 
//    xText[31] = 
//    xText[32] = 
//    xText[33] = 
}

