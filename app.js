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

var oprObj = {
    value_X : 39, /* commentare per testare la funzione getValue*/
    value_Y : "39", /* commentare per testare la funzione getValue */
    otherValues : [2, 19, 80],
    equal : function(){
        return this.value_X == this.value_Y;
    },
    equalequal : function(){
        return this.value_X === this.value_Y;
    },
    sum : function(){
        var sum = (this && this.value_X) || 0;
        for(let value of this.otherValues){
            sum += value;
        }
        return sum;
    },
    getValue : function(){
        var value = this && this.value_X;
        if(!value){
            console.log(value);
            value = this.value_Y || (this.otherValues && this.otherValues[0]);
        }
        return value;
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

    // operatori

    var isEqual = main.oprObj.equal();
    var isEqualequal = main.oprObj.equalequal();

    var opeElem = document.createElement("p");
    opeElem.innerText = "*" + isEqual + "-" + isEqualequal;
    divMain.appendChild(opeElem);

    var addition = main.oprObj.sum();
    var sumElem = document.createElement("p");
    sumElem.innerText = "the sum of " + main.oprObj.value_X +","+ main.oprObj.otherValues + " is: " + addition;
    divMain.appendChild(sumElem);

    var val = main.oprObj.getValue();
    var valElem = document.createElement("p");
    valElem.innerText = val;
    divMain.appendChild(valElem);

}


window.onload = app;