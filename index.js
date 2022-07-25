const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }

    return gifts;
}

const names = [];
function writeCards(names) {
    const thanks = [];
    for (let i = 0; i < names.length; i++){
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    console.log(thanks);
    return thanks;
}

function countDown(number) {
    number;
    while (number >= 0) {
        console.log(number);
        number--;
    }

    return number;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
wrapGifts(gifts);
countDown(10);