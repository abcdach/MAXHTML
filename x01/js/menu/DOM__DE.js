var dom__DE_P3;
var dom__DE_P4;

function OBJECT__DOM__DE() {

	
    //////////////////////////////////////
	dom__DE_P3 = createP(xText[15]); //"Name:"
	dom__DE_P3.style('font-size', '10pt');
	dom__DE_P3.style('font-family', 'Arial');
	dom__DE_P3.style('font-color', '100');;
	dom__DE_P3.style('font-weight', 'bold');
	dom__DE_P3.style('font-style', 'italic')
    //////////////////////////////////////       
    dom__DE_P4 = createP(xText[14]); //"Description:"
	dom__DE_P4.style('font-size', '10pt');
	dom__DE_P4.style('font-family', 'Arial');
	dom__DE_P4.style('font-color', '#AAAAAA');
	dom__DE_P4.style('font-weight', 'bold');
	dom__DE_P4.style('font-style', 'italic')
    //////////////////////////////////////         
    dom__DE_Inp1 = createInput(); //"Name:"
	dom__DE_Inp1.style('width', '60px');
	dom__DE_Inp1.style('textAlign', 'CENTER');
	dom__DE_Inp1.style('background-color', '#DAF7A6');
    //////////////////////////////////////
	dom__DE_Inp2 = createInput(); //"Description:"
	dom__DE_Inp2.style('width', '165px');
	dom__DE_Inp2.style('textAlign', 'CENTER');
	dom__DE_Inp2.style('background-color', '#DAF7A6');
    ///////////////////////////////////////////////	 
    dom__DE_progress1 = createElement('progress', '0');
    dom__DE_progress1.style('width', (W2.SizeW - 115) + 'px');
    dom__DE_progress1.attribute("max", "100");
    dom__DE_progress1.attribute("value", "0");
    dom__DE_progress1.style('height', '10px');

    ///////////////////////////////////////////////	 
    dom__DE_P5 = createP("Devce Config:"); //"Python Code:"
    dom__DE_P5.style('font-size', '10pt');
    dom__DE_P5.style('font-family', 'Arial');
    dom__DE_P5.style('font-color', '#AAAAAA');
    dom__DE_P5.style('font-weight', 'bold');
    dom__DE_P5.style('font-style', 'italic')
    ///////////////////////////////////////////////   
    dom__DE_Sav_0 = createImg('pic/Save_0.png');
    dom__DE_Sav_0.style('width', '65px');
    dom__DE_Sav_0.mousePressed(doSave);
    ///////////////////////////////////////////////   
    dom__DE_Sav_1 = createImg('pic/Save_1.png');
    dom__DE_Sav_1.style('width', '65px');
    dom__DE_Sav_1.mousePressed(Save_CODE);
    ///////////////////////////////////////////////
    dom__DE_Sav_2 = createImg('pic/Save_2.png');
    dom__DE_Sav_2.style('width', '65px');
    //////////////////////////////////////////////////	
    dom__DE_Rea_0 = createImg('pic/Read_1.png');
    dom__DE_Rea_0.style('width', '65px');
    dom__DE_Rea_0.mousePressed(Read_CODE);
    ///////////////////////////////////////////////   
    dom__DE_Rea_1 = createImg('pic/Read_1.png');
    dom__DE_Rea_1.style('width', '65px');
    //dom__DE_Rea_1.mousePressed(Save_CODE);
    ///////////////////////////////////////////////
    dom__DE_Rea_2 = createImg('pic/Read_2.png');
    dom__DE_Rea_2.style('width', '65px');
    //////////////////////////////////////////////////	
	
	
	
	
	
	
    this.show = function(x, y, Device_Name, Device_Index, Device_Name_Text, Device_Type) {
        this.x = x;
        this.y = y;
        this.Device_Name = Device_Name;
        this.Device_Index = Device_Index;;
        this.Device_Name_Text = Device_Name_Text;
        this.Device_Type = Device_Type;

		
		if(dom__ME_Device_Name_Old != this.Device_Name){
			dom__ME_Device_Name_Old = this.Device_Name;
			TERMINAL("111111111111111111111111111\n");
			CODE_Editor.getDoc().setValue(" ");
			CODE_Editor.getDoc().setValue(" ");			
		}
		
		
		
        dom__hide_all();
        W2._Text(xText[11]); //"Device - Sensor/Action "
        
        
        dom__DE_Inp1.value(this.Device_Name);
		CODE_Mediator1_Name = this.Device_Name;
        dom__DE_Inp2.value(this.Device_Name_Text);
        dom__DE_P3.show();
        dom__DE_P4.show();
		dom__DE_P5.show();
        dom__DE_Inp1.show();
        dom__DE_Inp2.show();
        //dom__DE_Logo.show();
        dom__DE_progress1.show();
		dom__DE_Sav_1.show();
		dom__DE_Rea_0.show();
		div0.show();
    };
    this.hide = function() {
    	
        dom__DE_P3.hide();
        dom__DE_P4.hide();
		dom__DE_P5.hide();
        dom__DE_Inp1.hide();
        dom__DE_Inp2.hide();
        //dom__DE_Logo.hide();
		dom__DE_progress1.hide();
		dom__DE_Sav_0.hide();
        dom__DE_Sav_1.hide();
        dom__DE_Sav_2.hide();
		dom__DE_Rea_0.hide();
		dom__DE_Rea_1.hide();
		dom__DE_Rea_2.hide();
		div0.hide();
    };
}
