let answerToPrompt = prompt('Enter a list of froyo flavors separated by commas:', 
    "vanilla, strawberry, strawberry, lavender, chocolate, chocolate");

const flavorsArray = answerToPrompt.split(",");

function countFlavors(flavors) {
    const flavorCounts = {};

    for (let flavor of flavors) {
        flavor = flavor.trim().toLowerCase();
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    }
    return flavorCounts;
}

const orderSummary = countFlavors(flavorsArray);

console.table(orderSummary);