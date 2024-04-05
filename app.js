
let eded = 0;
let geri = 1
let paragraph = document.getElementById("btn").addEventListener("click", () => {
    if (eded === 10) {
     geri = -1;
    } else if (eded === 1) {
        geri = +1;
    }
    eded += geri
    btn.textContent = `Kliklə baxım ${eded}`
 
});

console.log(paragraph);