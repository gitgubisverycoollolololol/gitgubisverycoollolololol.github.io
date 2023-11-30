function HandleColorChange(){
    var textElement = document.getElementById("Texttochange");

    console.log(textElement)
    for (const element of textElement){
        element.style.color = "blue";


    }

}