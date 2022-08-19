console.log("happy jonmastomi");

function getValueFrmFld(id){
    return parseInt(document.getElementById(id).value); 
}


function setValueToFld(id, value){
    document.getElementById(id).value = value; 
}




function getValueFrmElmnt(id){
    return parseInt(document.getElementById(id).innerText); 
}

function setValueToElmnt(id, value){
    document.getElementById(id).innerText = value; 
}

