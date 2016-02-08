var fs=require('fs-extra')
var selected_unit;
var selected_size;
var selected_energy;
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

function make_usb(){
    if(selected_unit==null)selected_unit="SCC line";
    if(selected_size==null)selected_size="61";
    if(selected_energy==null)selected_energy="ELectric";
    console.log("Generuje USB stick: "+selected_unit+"|"+selected_size+"|"+selected_energy);

    /*tutaj zagniezdzone switche do kopiowania odpowiednieog pliku na usb*/
    switch(selected_unit){
        case "SCC line":
            switch(selected_size){
                case "61":
                    console.log("Wybrano SCC 61");
                    break;
                case "62":
                    console.log("Wybrano SCC 62");
                    break;
                case "101":
                    console.log("Wybrano SCC 101");
                    break;
                case "102":
                    console.log("Wybrano SCC 102");
                    break;
                case "201":
                    console.log("Wybrano SCC 201");
                    break;
                case "202":
                    console.log("Wybrano SCC 202");
                    break;

            };
            break;

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
