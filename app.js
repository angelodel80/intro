var obj = {
    prop : "property ",
    parse : function(){return parseInt("11", 2)}
}

var strObj = {
    value : "ciao, mamma!",
    length : function(){
        return " - the length of the string value is: " + this.value.length;
    },
    replacement : function(){
        return this.value.replace("mamma", "mondo");
    }
}

var app = function(){
    var main = this;
    var p = "";
    p = main.obj.prop;
    var s = ""
    s = main.obj.parse();

    // operare sui numeri
    var divMain = document.getElementById("main");
    divMain.innerHTML = p.concat(s);

    // operare sulle stringhe
    var stringSpan = document.createElement("p");
    stringSpan.innerText = main.strObj.value + main.strObj.length();
    

    var replaceElement = document.createElement("p");
    replaceElement.innerText = main.strObj.replacement();
    
    divMain.appendChild(stringSpan);
    divMain.appendChild(replaceElement);

    // variabili
    if(strObj.value){
        let str = strObj.value + "!!";
        var newElem = document.createElement("p");
        newElem.innerText = str;
        divMain.appendChild(newElem);
    }

    var lastElem = divMain.querySelectorAll("p").item(2);
    try{
    lastElem.innerText = str; // errore in console: str non è definita
    }
    catch(e){}

    const addValue = "!!!!";
    var addValueElem = document.createElement("span");
    addValueElem.innerText = addValue;
    lastElem.appendChild(addValueElem);

}


window.onload = app;