document.addEventListener("DomContentloaded", function(){
    const decreseFontSizeButton = document.getElementById(decreseFontSizeButton)
    const increseFontSizeButton = document.getElementById(increseFontSizeButton)
    const changeColorButton = document.getElementById(changeColorButton)
    let currentFontSize = 26; //tamanho da fonte inicial 
    let colorsChanged = false; // estado das cores
    decreseFontSizeButton.addEventListener("click", funcition(){
        adjustFontSize(-2); //diminuir o tamanho da fonte para 2 pixels
}
});
increseFontSizeButton.addEventListener("click", function(){
    adjustFontSize(2); // A umentar o tamanho da fonte
});
changeColorButton.addEventListener("click")
