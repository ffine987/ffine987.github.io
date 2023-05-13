function biggerText() {
    document.getElementById("text_area").style.fontSize = "4em";
}

function fancyText() {
    document.getElementById("text_area").style.fontWeight = "bold";
    document.getElementById("text_area").style.color = "blue";
    document.getElementById("text_area").style.textDecoration = "underline";
    document.getElementById("boring").checked = false;
}

function boringText() {
    document.getElementById("text_area").style.fontWeight = "normal";
    document.getElementById("text_area").style.color = "black";
    document.getElementById("text_area").style.textDecoration = "none";
    document.getElementById("fancy").checked = false;
}

function moo() {
    let textArea = document.getElementById("text_area");
    textArea.style.textTransform = "uppercase";
    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      sentences[i] = sentences[i] + "-Moo";
    }
    textArea.value = sentences.join(".");
}


