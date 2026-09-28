
function scaleRecipe(recipe, portions) {
    let scaledRecipe = {}

    for (let ingredient in recipe) {
        scaledRecipe[ingredient] = recipe[ingredient] * portions / 2
    }

    return scaledRecipe
}

function preparationTime(layers, averageTime = 2) {
    return layers.length * averageTime
}

function cookingStatus(timer) {
    if (timer === undefined) {
        return "You forgot to set the timer."
    } else if (timer === 0) {
        return "Lasagna is done."
    } else {
        return "Not done, please wait."
    }
}

function addSecretIngredient(firstArray, secondArray) {
    secondArray.push(firstArray[firstArray.length - 1])
}

function quantities(layers) {
    let noodles = 0
    let sauce = 0

    for (let layer of layers) {
        if (layer === "noodles") {
            noodles += 50
        }

        if (layer === "sauce") {
            sauce += 0.2
        }
    }

    return {
        noodles: noodles,
        sauce: sauce
    }
}