var fs=require('fs-extra'); //magiczny lib do kopiowania
var selected_unit;
var selected_size;
var selected_energy;
var fdialogs=require('node-webkit-fdialogs'); //fdialos narazie nie uzywany


//jQuery pole select id unit jezeli zostanie zmienione "change()" to zmienna selected_unit1 zawiera wybrana opcje
$("#unit").change(function(){

   selected_unit=$('option:selected', $(this)).text();
        console.log(selected_unit);
});
$("#size").change(function(){

   selected_size=$('option:selected', $(this)).text();
        console.log(selected_size);
});
$("#energy").change(function(){

   selected_energy=$('option:selected', $(this)).text();
        console.log(selected_energy);
});

function load_site(site) { //funkcja ladowania stron jQuery
    if(selected_unit=="SCC_WE line"){
        site="step5.html";
    }
    $("#steps").load(site);

}

//signal to hidden selected_dir from apply button :)
function save_src(){
    console.log("Save src func:#########")
   document.getElementById("select_dir").click();

}
var tmppath;

//get select directory
$('#select_dir').change(function(event){
    tmppath=$(this).val();
    console.log("--------------TMPPATH-------------");
    console.log(tmppath);
    make_usb();
})
//get select directory

//make recovery|rollback usb
function make_rational(src,dst){

fs.copy(src,dst,function(err){
        if(err) return console.error(err);

        console.log("success!")
    });


}
//make recovery|rollback function

function make_usb(){


    if(selected_unit==null)selected_unit="SCC line";
    if(selected_size==null)selected_size="61";
    if(selected_energy==null)selected_energy="Electric";
    console.log("Generuje USB stick: "+selected_unit+"|"+selected_size+"|"+selected_energy);

    /*tutaj zagniezdzone switche do kopiowania odpowiednieog pliku na usb*/
    switch(selected_unit){
        case "SCC line":
            switch(selected_size){
                case "61":
                    switch(selected_energy){
                        case "Electric":
                            console.log("Wybrano SCC 61 Electric");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_61_E/',tmppath+'/');
                            break;
                        case "Gas":
                            console.log("Wybrano SCC 61 Gas");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_61_G/',tmppath+'/');
                            break;
                    }
                    break;
                case "62":
                    switch(selected_energy){
                        case "Electric":
                            console.log("Wybrano SCC 62 Electric");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_62_E/',tmppath+'/');
                            break;
                        case "Gas":
                            console.log("Wybrano SCC 62 Gas");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_62_G/',tmppath+'/');
                            break;
                    }
                    break;
                case "101":
                    switch(selected_energy){
                        case "Electric":
                            console.log("Wybrano SCC 101 Electric");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_101_E/',tmppath+'/');
                            break;
                        case "Gas":
                            console.log("Wybrano SCC 101 Gas");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_101_G/',tmppath+'/');
                            break;
                    }
                    break;
                case "102":
                    switch(selected_energy){
                        case "Electric":
                            console.log("Wybrano SCC 102 Electric");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_102_E/',tmppath+'/');
                            break;
                        case "Gas":
                            console.log("Wybrano SCC 102 Gas");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_102_G/',tmppath+'/');
                            break;
                    }
                    break;
                case "201":
                    switch(selected_energy){
                        case "Electric":
                            console.log("Wybrano SCC 201 Electric");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_201_E/',tmppath+'/');
                            break;
                        case "Gas":
                            console.log("Wybrano SCC 201 Gas");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_201_G/',tmppath+'/');
                            break;
                    }
                    break;
                case "202":
                    switch(selected_energy){
                        case "Electric":
                            console.log("Wybrano SCC 202 Electric");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_202_E/',tmppath+'/');
                            break;
                        case "Gas":
                            console.log("Wybrano SCC 62 Gas");
                            make_rational('/Users/macos/Desktop/Node/usb/scc_line_recovery/Repair_Software_SCC_202_G/',tmppath+'/');
                            break;
                    }
                    break;

            };
            break;
//    scc line

        case "SCC_WE line":




        case "CM_Plus line":
                switch(selected_size){
                case "61":
                    console.log("Wybrano CM_Plus 61");
                    break;
                case "62":
                    console.log("Wybrano CM_Plus 62");
                    break;
                case "101":
                    console.log("Wybrano CM_Plus 101");
                    break;
                case "102":
                    console.log("Wybrano CM_Plus 102");
                    break;
                case "201":
                    console.log("Wybrano CM_Plus 201");
                    break;
                case "202":
                    console.log("Wybrano CM_Plus 202");
                    break;

            };
            break;
    }
    /*tutaj zagniezdzone switche do kopiowania odpowiednieog pliku na usb*/



}
