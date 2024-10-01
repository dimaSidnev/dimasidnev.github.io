palette = {
    text: "#fefefe",
    background: "#1a1e27",
    buttonMenu : "#181c24",
    logo: "#1b85bd"
}

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

function generateBarcode(){
    let unsortedValue = document.getElementById("input").value;
    let sortedValue = unsortedValue.split(" ");

    for(let i = 0; i < sortedValue.length; i++){
        let subj = document.getElementsByClassName("sscc-container");

        let ssccContainers = document.getElementsByClassName("resultBox-container");
        let SSSCs = document.getElementsByClassName("SSCC-barcode");

        let copy = subj[0].cloneNode(true);
        copy.addEventListener("click", deleteBarcode);

        copy.classList.remove("_hidden");
        JsBarcode(SSSCs[i], sortedValue[i])

        ssccContainers[0].appendChild(copy);
    }
}

function deleteBarcode(){
   this.remove();
}

function ssccToCanvas(){
    html2canvas(document.querySelector("#capture")).then(canvas => {
        let link = document.createElement("a");
        link.download = "sidSSCC.png";
        link.href = canvas.toDataURL();
        link.click();
        //document.body.appendChild(canvas)
    });
}

generateBtn.addEventListener("click", generateBarcode);
downloadBtn.addEventListener("click", ssccToCanvas);
