var dom__InOUT_P3;
var dom__InOUT_P4;
//var dom__InOUT_Inp1;
//var dom__InOUT_Inp2;
var dom__InOUT_Logo;
function OBJECT__DOM__InOUT() {

	
    //////////////////////////////////////
	dom__InOUT_P3 = createP("In / Out");
	dom__InOUT_P3.style('font-size', '10pt');
	dom__InOUT_P3.style('font-family', 'Arial');
	dom__InOUT_P3.style('font-color', '100');;
	dom__InOUT_P3.style('font-weight', 'bold');
	dom__InOUT_P3.style('font-style', 'italic')
    //////////////////////////////////////       
    dom__InOUT_P4 = createP("Description");
	dom__InOUT_P4.style('font-size', '10pt');
	dom__InOUT_P4.style('font-family', 'Arial');
	dom__InOUT_P4.style('font-color', '#AAAAAA');
	dom__InOUT_P4.style('font-weight', 'bold');
	dom__InOUT_P4.style('font-style', 'italic')
    //////////////////////////////////////       
    dom__InOUT_P5 = createP("Time");
	dom__InOUT_P5.style('font-size', '10pt');
	dom__InOUT_P5.style('font-family', 'Arial');
	dom__InOUT_P5.style('font-color', '#AAAAAA');
	dom__InOUT_P5.style('font-weight', 'bold');
	dom__InOUT_P5.style('font-style', 'italic')	
    //////////////////////////////////////       
    dom__InOUT_P6 = createP("Velue");
	dom__InOUT_P6.style('font-size', '10pt');
	dom__InOUT_P6.style('font-family', 'Arial');
	dom__InOUT_P6.style('font-color', '#AAAAAA');
	dom__InOUT_P6.style('font-weight', 'bold');
	dom__InOUT_P6.style('font-style', 'italic')		
	
	
    //////////////////////////////////////         
    dom__InOUT_Inp1 = createInput(); //"Name:"
	dom__InOUT_Inp1.style('width', '60px');
	dom__InOUT_Inp1.style('textAlign', 'CENTER');
	dom__InOUT_Inp1.style('background-color', '#DAF7A6');
    //////////////////////////////////////
	dom__InOUT_Inp2 = createInput(); //"Description:"
	dom__InOUT_Inp2.style('width', '165px');
	dom__InOUT_Inp2.style('textAlign', 'CENTER');
	dom__InOUT_Inp2.style('background-color', '#DAF7A6');
    ////////////////////////////////////// 
	dom__InOUT_Inp3 = createInput(); //"Description:"
	dom__InOUT_Inp3.style('width', '170px');
	dom__InOUT_Inp3.style('textAlign', 'CENTER');
	dom__InOUT_Inp3.style('background-color', '#DAF7A6');
    ////////////////////////////////////// 
	dom__InOUT_Inp4 = createInput(); //"Description:"
	dom__InOUT_Inp4.style('width', '210px');
	dom__InOUT_Inp4.style('textAlign', 'CENTER');
	dom__InOUT_Inp4.style('background-color', '#DAF7A6');
    ////////////////////////////////////// 
	dom__InOUT_Inp5 = createInput(); //"Description:"
	dom__InOUT_Inp5.style('width', '220px');
	dom__InOUT_Inp5.style('textAlign', 'CENTER');
	dom__InOUT_Inp5.style('background-color', '#DAF7A6');
    ////////////////////////////////////// 
	//dom__InOUT_Save_Descr = createImg('pic/Save_1.png'); //"Description:"
	//dom__InOUT_Save_Descr.style('width', '38px');
	//dom__InOUT_Save_Descr.mousePressed(dom__InOUT_Change_Device_Description);
    ///////////////////////////////////////////////	 
	dom__InOUT_Logo = createImg('pic/max_4.png');
	dom__InOUT_Logo.style('width', '200px');
    //////////////////////////////////////
	
	this.show = function(Device_ID, In_Out_index, Description, In_Out, Status) {
    //this.show = function(x, y, Device_Name, Device_Index, Device_Name_Text, Device_Type) {
        //this.x = x;
        //this.y = y;
        //this.Device_ID = In_Out_index;
        //this.In_Out_index = In_Out_index;;
        //this.Device_Name_Text = OutPut_index;
        //this.Device_Type = OutPut_index;

        dom__hide_all();
        
        //W2._Text("Davice: "+Device_ID+"  "+In_Out+": "+In_Out_index);
        W2._Text("Davice: "+Device_ID);
        
		if(In_Out === "InPut"){
			dom__InOUT_Inp1.style('background-color', '#E0F7FF');
			dom__InOUT_Inp2.style('background-color', '#E0F7FF');
			dom__InOUT_Inp3.style('background-color', '#E0F7FF');
			dom__InOUT_Inp4.style('background-color', '#E0F7FF');
			dom__InOUT_Inp5.style('background-color', '#E0F7FF');
		}else{
			dom__InOUT_Inp1.style('background-color', '#FFF1F1');
			dom__InOUT_Inp2.style('background-color', '#FFF1F1');
			dom__InOUT_Inp3.style('background-color', '#FFF7D8');
			dom__InOUT_Inp4.style('background-color', '#FFF7D8');
			dom__InOUT_Inp5.style('background-color', '#C6FFC4');
		}
		
		
        dom__InOUT_Inp1.value(In_Out_index);
        //dom__InOUT_Inp2.value(Description);
		//dom__InOUT_Inp2.value(Description);
		
		
        dom__InOUT_P3.show();
        dom__InOUT_P4.show();
		dom__InOUT_P5.show();
		dom__InOUT_P6.show();
        dom__InOUT_Inp1.show();
        dom__InOUT_Inp2.show();
		dom__InOUT_Inp3.show();
        dom__InOUT_Inp4.show();
		dom__InOUT_Inp5.show();
        //dom__InOUT_Save_Descr.show();
        dom__InOUT_Logo.show();
		
		
		Popup_window_Device_OutPut_index = In_Out_index;
        Popup_window_Device_Device_name  = Device_ID;
		Popup_window = 1;
        
    };
    this.hide = function() {
    	
        dom__InOUT_P3.hide();
        dom__InOUT_P4.hide();
		dom__InOUT_P5.hide();
		dom__InOUT_P6.hide();
        dom__InOUT_Inp1.hide();
        dom__InOUT_Inp2.hide();
		dom__InOUT_Inp3.hide();
        dom__InOUT_Inp4.hide();
		dom__InOUT_Inp5.hide();
        dom__InOUT_Logo.hide();
        //dom__InOUT_Save_Descr.hide();
		Popup_window = 0;
    };
}
//###############################################################
//function dom__InOUT_Change_Device_Description() {
//	var Device_Name = Number(dom__InOUT_Inp1.value());
//	var Description = dom__InOUT_Inp2.value();
//	API_iot_CHANGE__Device_Description(Device_Name,Description);
//}
