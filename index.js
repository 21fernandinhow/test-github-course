const textPlace1 = document.getElementById('text1');
const textPlace2 = document.getElementById('text2');
const textPlace3 = document.getElementById('text3');

setInterval(function () {
    let i = Math.floor(Math.random() * 3 + 1)
    if(i===1){
        textPlace1.innerText=writeRandom()
    } else if(i===2){
        textPlace2.innerText=writeRandom()
    } else if(i===3){
        textPlace3.innerText=writeRandom()
    };
}, 1500);

function writeRandom(){
    let randomNumber = Math.floor(Math.random() * 2);
    let anotherRandomNumber = Math.floor(Math.random() * 2);
    let oneMoreRandomNumber = Math.floor(Math.random() * 2);
    let textSize = Math.floor(Math.random() * 250 + 1);
    let putText = " "+randomNumber+" "+anotherRandomNumber+" "+oneMoreRandomNumber+" ";
    let putLotOfText = "";
    for(i=0;i<textSize;i++){
        putLotOfText = putLotOfText + putText;
    };
    return putLotOfText;
}