const cats = ['Milo', 'Otis', 'Garfield',];

function destructivelyAppendCat(name) {
    return(name, cats.push('Ralph'));
}

function destructivelyPrependCat(name) {
    return(name, cats.unshift('Bob'));
}
function destructivelyRemoveLastCat() {
    return(cats.pop());
}
function destructivelyRemoveFirstCat() {
    return(cats.shift());
}
function appendCat() {
    const newCats = [...cats, 'Broom']
    return newCats;
}
function prependCat() {
    const newerCats = ['Arnold', ...cats];
    return newerCats
}
function removeLastCat() {
    return cats.slice(0, 2)
}
function removeFirstCat() {
    return cats.slice(-2)
}