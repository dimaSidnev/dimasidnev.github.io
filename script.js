//баги: когда много sscc кодов при удалении 1 удаляется ещё 1, почему ? нахуя хз

ssccButtonsContainer = document.getElementsByClassName("sscc-buttons-container");
sscc = document.getElementsByClassName("sscc");
ssccS = document.getElementsByClassName("ssccS");

generateBtn = document.getElementsByClassName("generate-btn");
deleteBtn = document.getElementsByClassName("deleteBtn");

ssccInput = document.getElementsByClassName("sscc-input");

let ssccNumber = 1;

barcodeOptions = {
    displayValue: false
}

function createNewSSCC(){
    ssccS[0].appendChild(sscc[0].cloneNode(true)).dataset.number = ssccNumber;

    let newDeleteBtn = deleteBtn[0].cloneNode(true);
    newDeleteBtn.dataset.number = ssccNumber;
    newDeleteBtn.addEventListener("click", deleteSSCC);
    ssccButtonsContainer[0].appendChild(newDeleteBtn);

    let allInputs = document.getElementsByClassName("sscc-input");

    let allbtns = document.getElementsByClassName("deleteBtn");

    for(let i=0; i < allInputs.length; i++){
        ssccInput[i].removeEventListener("change", generateBarcode);
        ssccInput[i].addEventListener("change", generateBarcode);
    }

    for(let i=0; i < allbtns.length; i++){ //мб в этом смысла нету
        allbtns[i].removeEventListener("change", deleteSSCC);
        allbtns[i].addEventListener("change", deleteSSCC);
    }

    return ssccNumber++;
}

function deleteSSCC(){
    _buttons = document.getElementsByClassName("deleteBtn");
    _ssccs = document.getElementsByClassName("sscc");

    for(let i=0; i < _ssccs.length; i++){
        if(_buttons[i].dataset.number == 0 && _ssccs[i].dataset.number == 0){
        } else 
        if(_buttons[i].dataset.number == _ssccs[i].dataset.number){
            _buttons[i].remove();
            _ssccs[i].remove();
        }
    }
}

function generateBarcode(){
    _inputs = document.getElementsByClassName("sscc-input");
    _outputs = document.getElementsByClassName("sscc-output");

    for(let i=0; i < _inputs.length; i++){
        if(_inputs[i].parentElement.dataset.number == _outputs[i].parentElement.dataset.number){
            JsBarcode(_outputs[i], _inputs[i].value, barcodeOptions)
        }
    }
}

generateBtn[0].addEventListener("click", createNewSSCC);
deleteBtn[0].addEventListener("click", deleteSSCC);
ssccInput[0].addEventListener("change", generateBarcode);

