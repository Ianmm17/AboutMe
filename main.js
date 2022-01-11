let indexValue = 1;
showImg(indexValue);

function side_slide(e) {
    showImg(indexValue += e);
}

function showImg(e) {
    let i;
    const img = document.querySelectorAll("img");
    if (e > img.length) {
        indexValue = 1
    }
    if (e < 1) {
        indexValue = img.length
    }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}

function playAudio(VladiHowl) {
    //const audio = document.getElementById("VladiHowl");
    //audio.play()
    new Audio(VladiHowl).play()
}

function spin() {
    console.log("made it")
    const img = document.getElementsByClassName(".content .photoGallery")
    let rotation = + 90;
    img.style.transform = `rotate(${rotation}deg)`
}

function roll() {

}

