let text = "Familia #restaurant, #company"

arrayCards = [
    {
        "nome": "card1",
        "tags": ["#restaurant"],
        "tags_called": 0
    },
    {
        "nome": "card2",
        "tags": ["#pokemon"],
        "tags_called": 0
    },
    {
        "nome": "card3",
        "tags": ["#company"],
        "tags_called": 0
    },
    {
        "nome": "card4",
        "tags": ["#restaurant", "#company"],
        "tags_called": 0
    }
]



const re = RegExp("#[a-z A-Z]+", "g");
arrayTagSearch = text.match(re)

// console.log(arrayTagSearch)

let tagsFilter = [];
cardsFiltrados = arrayCards.filter((card)=> {
    tagsFilter = card.tags.filter((tag)=>{
        return arrayTagSearch.includes(tag)
    });
    card.tags_called = tagsFilter.length
    return (tagsFilter.length > 0)
})


// let a = [1, 5, 3, 2, 8]
// b = [
//     {"nome": "ob1", "value": 6},
//     {"nome": "ob2", "value": 3},
//     {"nome": "ob3", "value": 5},
// ]
// console.log(a.sort())
// console.log(b.sort((a, b)=> a.value - b.value))

console.log(cardsFiltrados.sort((a, b) => b.tags_called - a.tags_called))