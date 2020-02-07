const elements = document.querySelectorAll('div');

let totalCounter = 0;
let deadCounter = 0;
let smallCounter = 0;
let madCounter = 0;
let strongCounter = 0;

for (let i = 0; i < zombiesData.length; i++) {
    if (zombiesData[i] !== undefined) {
        let zombie = Number(zombiesData[i]);

        totalCounter++;
        if (zombie < 1 || isNaN(zombie)) {
            deadCounter++;
        } else if (zombie > 0 && zombie < 11) {
            smallCounter++;
        } else if (zombie > 10 && zombie < 21) {
            madCounter++;
        } else if (zombie > 20) {
            strongCounter++;
        }
    }
}

elements[0].textContent += totalCounter;
elements[1].textContent += deadCounter;
elements[2].textContent += smallCounter;
elements[3].textContent += madCounter;
elements[4].textContent += strongCounter;
console.info('Total zombies count: ', totalCounter);
console.info('Dead zombies count: ', deadCounter);
console.info('Small zombies count: ', smallCounter);
console.info('Mad zombies count: ', madCounter);
console.info('Strong zombies count: ', strongCounter);
