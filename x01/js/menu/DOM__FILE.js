
//#--------------------------------------------------
//#     Menu File
//#--------------------------------------------------
/**
var div_QR;
var qrcode;
var dom__WE_QR;
var dom__WE_TUN;


var dom__WE_Save_Descr;
var WE_DEV_ID;
var dom__WE_P5;

**/
var dom__FI_P3;
var dom__FI_P4;
var dom__FI_Inp1;
var dom__FI_Inp2;



function OBJECT__DOM__FILE() {
	//is_createP(dom__FI_P3, "ID") 
    //////////////////////////////////////
	dom__FI_P3 = createP("ID");
	dom__FI_P3.style('font-size', '10pt');
	dom__FI_P3.style('font-family', 'Arial');
	dom__FI_P3.style('font-color', '100');;
	dom__FI_P3.style('font-weight', 'bold');
	dom__FI_P3.style('font-style', 'italic')
    //////////////////////////////////////       
    dom__FI_P4 = createP("FILE");
	dom__FI_P4.style('font-size', '10pt');
	dom__FI_P4.style('font-family', 'Arial');
	dom__FI_P4.style('font-color', '#AAAAAA');
	dom__FI_P4.style('font-weight', 'bold');
	dom__FI_P4.style('font-style', 'italic')
    //////////////////////////////////////   
    dom__FI_Inp1 = createInput(); //"Name:"
	dom__FI_Inp1.style('width', '60px');
	dom__FI_Inp1.style('textAlign', 'CENTER');
	dom__FI_Inp1.style('background-color', '#DAF7A6');
    //////////////////////////////////////
	dom__FI_Inp2 = createInput(); //"Description:"
	dom__FI_Inp2.style('width', '165px');
	dom__FI_Inp2.style('textAlign', 'CENTER');
	dom__FI_Inp2.style('background-color', '#DAF7A6');
    ////////////////////////////////////// 
	dom__FI_Save_Descr = createImg('pic/Save_1.png');
	dom__FI_Save_Descr.style('width', '38px');
	dom__FI_Save_Descr.mousePressed(dom__FI_Change_Device_Description);
	dom__FI_Save_Descr.mouseOver(function(){dom__FI_Save_Descr.style('width', '39px');});
	dom__FI_Save_Descr.mouseOut (function(){dom__FI_Save_Descr.style('width', '38px');});
    //////////////////////////////////////
	
    ///////////////////////////////////////////////	 
    dom__FI_P5 = createP("File Data:");
    dom__FI_P5.style('font-size', '10pt');
    dom__FI_P5.style('font-family', 'Arial');
    dom__FI_P5.style('font-color', '#AAAAAA');
    dom__FI_P5.style('font-weight', 'bold');
    dom__FI_P5.style('font-style', 'italic')
    ///////////////////////////////////////////////   
    dom__FI_Sav_0 = createImg('pic/Save_0.png');
    dom__FI_Sav_0.style('width', '65px');
    //dom__FI_Sav_0.mousePressed(doSave);
    ///////////////////////////////////////////////   
    dom__FI_Sav_1 = createImg('pic/Save_1.png');
    dom__FI_Sav_1.style('width', '65px');
    //dom__FI_Sav_1.mousePressed(Save_CODE);
    ///////////////////////////////////////////////
    dom__FI_Sav_2 = createImg('pic/Save_2.png');
    dom__FI_Sav_2.style('width', '65px');
    //////////////////////////////////////////////////
    dom__FI_Rea_0 = createImg('pic/Read_1.png');
    dom__FI_Rea_0.style('width', '65px');
    //dom__FI_Rea_0.mousePressed(Read_CODE);
    ///////////////////////////////////////////////   
    dom__FI_Rea_1 = createImg('pic/Read_1.png');
    dom__FI_Rea_1.style('width', '65px');
    dom__FI_Rea_1.mousePressed(Read_FILE);
    ///////////////////////////////////////////////
    dom__FI_Rea_2 = createImg('pic/Read_2.png');
    dom__FI_Rea_2.style('width', '65px');
    //////////////////////////////////////////////////
    dom__FI_progress1 = createElement('progress', '0');
    dom__FI_progress1.style('width', (W2.SizeW - 115) + 'px');
    dom__FI_progress1.attribute("max", "100");
    dom__FI_progress1.attribute("value", "0");
    dom__FI_progress1.style('height', '10px');
    //##########################################################################	
	dom__FI_P5
	dom__FI_Sav_0
	dom__FI_Sav_1
	dom__FI_Sav_2
	dom__FI_Rea_0
	dom__FI_Rea_1
	dom__FI_Rea_2
	dom__FI_progress1


    
    this.show = function(x, y, Device_Name, Device_Index, Device_Name_Text, Device_Type) {
        this.x = x;
        this.y = y;
        this.Device_Name = Device_Name;
        this.Device_Index = Device_Index;
        this.Device_Name_Text = Device_Name_Text;
        this.Device_Type = Device_Type;
				
				
		if(dom__ME_Device_Name_Old != this.Device_Name){
			dom__ME_Device_Name_Old = this.Device_Name;
			CODE_Editor.getDoc().setValue(" ");		
		}			
				
								
		dom__hide_all();
        dom__FI_P3.show();
        dom__FI_P4.show();		
		dom__FI_Inp1.show();
        dom__FI_Inp2.show();
        dom__FI_Save_Descr.show();
		dom__FI_Inp1.value(this.Device_Name);
        dom__FI_Inp2.value(this.Device_Name_Text);
		
		dom__FI_P5.show();
		//dom__FI_Sav_0.show();
		dom__FI_Sav_1.show();
		//dom__FI_Sav_2.show();
		//dom__FI_Rea_0.show();
		dom__FI_Rea_1.show();
		//dom__FI_Rea_2.show();
		dom__FI_progress1.show();	
		
		 div0.show();
	
    };
    this.hide = function() {
		
		dom__FI_P3.hide();
        dom__FI_P4.hide();
		dom__FI_Inp1.hide();
        dom__FI_Inp2.hide();
        dom__FI_Save_Descr.hide();	
		dom__FI_P5.hide();
		dom__FI_Sav_0.hide();
		dom__FI_Sav_1.hide();
		dom__FI_Sav_2.hide();
		dom__FI_Rea_0.hide();
		dom__FI_Rea_1.hide();
		dom__FI_Rea_2.hide();
		dom__FI_progress1.hide();	

		div0.hide();			
    };
}
//###############################################################
function dom__FI_Change_Device_Description() {
	var Device_Name = Number(dom__FI_Inp1.value());
	var Description = dom__FI_Inp2.value();
	API_iot_CHANGE__Device_Description(Device_Name,Description);
	doSave();
}
