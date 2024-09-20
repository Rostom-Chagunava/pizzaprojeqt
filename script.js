const hamburgerManu = document.getElementById('hamburger-Manu')
const navbarManu =document.getElementById('navbar-manu')
const header = document.getElementsByTagName('header')[0]

// console.log(header)
let isTrue = true
hamburgerManu.addEventListener('click',()=>{
    isTrue = !isTrue
    if(isTrue== false){
        navbarManu.style.display = 'flex'
    }else{
        navbarManu.style.display = 'none'
    }
})


// ------------------------
// Menu Conatiner 
// ------------------------
const manuBtn = document.getElementsByClassName('Menu')
const pizzaCardImg = document.getElementsByClassName('pizza-card-img')
const pizzaCards= document.getElementsByClassName('pizza-card')
const mainManuDiv= document.getElementById('main-manu-div')
const salaSection = document.getElementById("salaSection")
const pizzeriaSection = document.getElementById('pizzeriaSection')


const menuCardImgStatic = [
    'url(/image/alfredo-chicken-sarpinos-static.jpg)',
    'url(/image/BLT-sarpinos-static.jpg)',
    'url(/image/cheese-bonanza-sarpinos-static.jpg)',
    'url(/image/cheese-lovers-sarpinos-static.jpg)',
    'url(/image/margherita-sarpinos-static.jpg)',
    'url(/image/new-york-deli-sarpinos-static.jpg)',
    'url(/image/ranch-style-chicken-sarpinos-static.jpg)',
    'url(/image/santorini-sarpinos-static.jpg)',
    'url(/image/sorrento-delight-sarpinos-static.jpg)',
    'url(/image/thin-crust-lovers-sarpinos-static.jpg)',
    'url(/image/tropical-hawaiian-sarpinos-static.jpg)',
    'url(/image/vegetarian-sarpinos-static.jpg)'
]

const menuCardImgHover= [
    'url(/image/alfredo-chicken-sarpinos-hover.jpg)',
    'url(/image/BLT-sarpinos-hover.jpg)',
    'url(/image/cheese-bonanza-sarpinos-hover.jpg)',
    'url(/image/cheese-lovers-sarpinos-hover.jpg)',
    'url(/image/margherita-sarpinos-hover.jpg)',
    'url(/image/new-york-deli-sarpinos-hover.jpg)',
    'url(/image/ranch-style-chicken-sarpinos-hover.jpg)',
    'url(/image/santorini-sarpinos-hover.jpg)',
    'url(/image/sorrento-delight-sarpinos-hover.jpg)',
    'url(/image/thin-crust-lovers-sarpinos-hover.jpg)',
    'url(/image/tropical-hawaiian-sarpinos-hover.jpg)',
    'url(/image/vegetarian-sarpinos-hover.jpg)'
]


for(let i=0; i< pizzaCardImg.length;i++){
    pizzaCardImg[i].style.backgroundImage = menuCardImgStatic[i]

    pizzaCardImg[i].addEventListener('mouseover', ()=>{
        pizzaCardImg[i].style.backgroundImage = menuCardImgHover[i]
        pizzaCardImg[i].style.transition = "1s"
    })

    pizzaCardImg[i].addEventListener('mouseout', ()=>{
        pizzaCardImg[i].style.backgroundImage = menuCardImgStatic[i]
        pizzaCardImg[i].style.transition = "1s"

    })
}


for(let i=0;i<manuBtn.length;i++){
    manuBtn[i].addEventListener('click', ()=>{
        header.style.height = '60vh'
        header.style.backgroundImage = "url('/image/pizzeria.gif')"
        header.style.backgroundPosition =' bottom'
        careersSection.style.display = "none"
        salaSection.style.display = 'none'
        pizzeriaSection.style.display = 'none'
        mainManuDiv.style.display = 'flex'
        pizzaDescriptionContainer.style.display = 'none'
        aboutSection.style.display = 'none'
        productDiv.style.display = 'grid'
        searchDiv.style.display = 'flex'
        basketContainer.style.display = "none"
        formOfcards.style.display = "none"
    })
}


// basket

// date of basket
let ProductContainer = document.getElementById("Product-container")
let Order = document.getElementsByClassName("order")

let TotalPrise = document.getElementById("Total-Prise")
let TotalQuantity = document.getElementById("Total-quantity")


let basketBtn = document.getElementsByClassName("basket-shopping")
let basketContainer = document.getElementById("basket-container")
// 

for(let i = 0;i < basketBtn.length;i++){
    basketBtn[i].addEventListener("click", () =>{
        basketContainer.style.display = "flex"
        mainManuDiv.style.display = "none"
        header.style.height = '60vh'
        header.style.backgroundImage = "url('/image/pizzeria.gif')"
        header.style.backgroundPosition =' bottom'
        careersSection.style.display = "none"
        salaSection.style.display = 'none'
        pizzeriaSection.style.display = 'none'
        pizzaDescriptionContainer.style.display = 'none'
        aboutSection.style.display = 'none'
        productDiv.style.display = 'none'
        searchDiv.style.display = 'none'
        formOfcards.style.display = "none"


    })
}

class Card{
    static dateOfcard = [];
    static allProduct = [];

    constructor(Name,prise,src){
        this.Name = Name
        this.prise = prise
        this.src = src
        Card.dateOfcard.push(this)
        Card.allProduct.push(this.Name)
        this.filter()
        console.log(Card.allProduct)
    }

    // filter (){
    //     let lastElement = Card.dateOfcard[Card.dateOfcard.length-1]
        
    //     for(let i =0;i < Card.dateOfcard.length-1;i++){

    //         Card.sumPrise+= Card.dateOfcard[i].prise
            
    //         if(Card.dateOfcard[i].Name === lastElement.Name){
    //             Card.sumPrise += Number(lastElement.prise)
    //             Card.sum +=1
    //             Card.dateOfcard.pop()
    //             // console.log(Card.dateOfcard)
    //             // console.log(i)
    //         }
    //         // else{
    //         //     Card.sumPrise += Number(lastElement.prise)
    //         //     // Card.sum += 1
    //         //     // console.log(Card.sum)
    //         //     // console.log(Card.sumPrise)
    //         // }
    //     }
    // }


    filter (){
        let lastElement = Card.dateOfcard[Card.dateOfcard.length-1]
        for(let i =0;i < Card.dateOfcard.length-1;i++){
            // console.log(Card.dateOfcard)
            if(Card.dateOfcard[i].Name === lastElement.Name){
                Card.dateOfcard.pop()
            }
        }
    }
}

class App{
    static sumPrise = 0
    static sum = 0
    static countPr = 1
    static count = 0

    constructor(){
        for(let i =0; i< Order.length;i++){
            Order[i].addEventListener("click", () =>{
                
                let name = (Order[i].parentElement).parentElement.querySelector("h1")
                let prise = (Order[i].parentElement).parentElement.querySelector(".pizza-price")
                let url = (Order[i].parentElement).parentElement.querySelector('.pizza-card-img').style.backgroundImage
                const myCard = new Card(name.innerHTML,prise.innerHTML,url)
                App.sumPrise += Number(prise.innerHTML)
                TotalPrise.innerHTML = App.sumPrise
                App.sum += 1

                TotalQuantity.innerHTML = App.sum

                // console.log(App.sumPrise)
                // TotalPrise.innerHTML = App.sumPrise
                // App.sum += 1
                // TotalQuantity.innerHTML = App.sum
                // console.log("hi")
                // console.log(name.innerHTML)
                // console.log(prise.innerHTML)
                // console.log(App.sumPrise)
                // // Order[i]
                // console.log((Order[i].parentElement).parentElement.querySelector('.pizza-card-img').style.backgroundImage)
                // console.log(Card.dateOfcard)
                this.display()
            })
        }
    }

    display(){
        ProductContainer.innerHTML = ""
        for(let i = 0;i < Card.dateOfcard.length;i++){
            let div = document.createElement("div")
            div.classList.add("Product-div")
            let img = document.createElement("div")
            img.classList.add("src-basket")
            img.style.backgroundImage = Card.dateOfcard[i].src
            // console.log(Card.dateOfcard[i].src)

            let Name = document.createElement("p")
            Name.innerHTML = Card.dateOfcard[i].Name
            let prise = document.createElement("p")
            prise.innerHTML = Card.dateOfcard[i].prise
            let spanPrise = document.createElement("span")
            spanPrise.innerHTML = "₾"
            prise.appendChild(spanPrise)
            // let productCount = document.createElement('p')
            let count = document.createElement("p")
            let del = document.createElement("p")
            del.classList.add("stylecursor")
            del.innerHTML = "X"
            // for(let element of Card.allProduct){
            //     if(Name.innerHTML == element){
            //         App.countPr+=1
            //     }
            // }

            for(let x of Card.allProduct){
                if(x === Card.dateOfcard[i].Name){
                    count.innerHTML = Card.allProduct.filter((item) => {
                        return item === x
                    }).length
                }
            }

            del.addEventListener("click", () =>{
                console.log(App.sumPrise)
                console.log(Number(Card.dateOfcard[i].prise))

                // App.sumPrise -= Number(Card.dateOfcard[i].prise)
                // console.log(App.sumPrise)
                // TotalPrise.innerHTML = App.sumPrise

                this.remove(i,count,Card.dateOfcard[i].Name,Number(Card.dateOfcard[i].prise))
                if(Card.dateOfcard.length === 0){
                    // menuSection.style.display = "flex"
                    // pizzeriaSection.style.display = "flex"
                    // basketContainer.style.display = "none"
                }
           
                // console.log(Card.dateOfcard.length)
            })

            div.appendChild(img)
            div.appendChild(Name)
            div.appendChild(prise)
            div.appendChild(count)
            div.appendChild(del)
            ProductContainer.appendChild(div)

 

            
        }
    }

    remove(idx,conut,nameI,priseI){
        // console.log(typeof(conut.innerHTML))
        if(conut.innerHTML >= 1){
            conut.innerHTML --
            console.log(App.sumPrise)
            console.log(priseI)

            App.sumPrise -= priseI
                // console.log(App.sumPrise)
            TotalPrise.innerHTML = App.sumPrise

            App.sum -= 1 
            TotalQuantity.innerHTML = App.sum
            
        }else if(conut.innerHTML == 0){

            Card.dateOfcard.splice(idx,1)
            for(let x =0;x<=Card.allProduct.length;x++){
                if(Card.allProduct[x] == nameI){
                    Card.allProduct.splice(x,1)
                }
            //     console.log(Card.allProduct)
            //    console.log(x) 
            //    console.log(nameI) 
            }
            this.display() 
        }
           
            
    
    }
}


const app = new App()


// ---------------------
// search-container
// -------------------
const pizzaPrise = document.getElementsByClassName('pizza-price')
const minPriseInp = document.getElementById("min-price")
const maxPriseInp = document.getElementById("max-price")
const priceBtn = document.getElementsByClassName('prise-arrow')[0]
const searchBtn = document.getElementsByClassName('search-Btn')[0]
const searchInp = document.getElementById('search')
let nameOfbtn = document.getElementsByClassName("name-of-btn1")



let serchLst = [];
let serchLst1 = [];


priceBtn.addEventListener('click',()=>{
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'none'
        if(pizzaPrise[x].innerHTML >= minPriseInp.value && maxPriseInp.value == '' && minPriseInp.value != '' ){
            pizzaCards[x].style.display = 'flex'
            console.log(maxPriseInp.value)
        }else if(pizzaPrise[x].innerHTML >= minPriseInp.value && pizzaPrise[x].innerHTML<= maxPriseInp.value && maxPriseInp.value != '' && minPriseInp.value != ''){
            pizzaCards[x].style.display = 'flex'
        }else if(pizzaPrise[x].innerHTML <= maxPriseInp.value &&  minPriseInp.value ==''){
            pizzaCards[x].style.display = 'flex'
        }else if(minPriseInp.value =='' && maxPriseInp.value ==''){
            pizzaCards[x].style.display = 'flex'
        }
    }
})




// variables

// let h1 = document.getElementById("h1");
// let inp = document.getElementById("search");
// let btn = document.getElementsByClassName("search-Btn");
let searchDivNameOfItem = document.getElementById("search-div-name-of-item")

for(let i = 0;i<nameOfbtn.length;i++){
    serchLst.push(nameOfbtn[i].innerHTML.toUpperCase())
}

console.log(serchLst)
let filter = []
searchInp.addEventListener("input",() =>{
    // console.log('1')
    searchDivNameOfItem.style.display = "flex"
    searchDivNameOfItem.innerHTML = ""

    let inputOfsearch = searchInp.value

    filter = serchLst.reduce((myArr,item) =>{
        if(item.includes(inputOfsearch.toUpperCase())){
            myArr.push(item)
        }
        return myArr
    },[])
    // console.log(filter)

    for(let i =0;i < filter.length;i++){
        
        let p = document.createElement("p")
        p.classList.add("titel-of-serch")

        p.innerHTML = filter[i].split(" ").reduce((arr,item) =>{
            arr.push(item.split("")[0] + item.split("").splice(1).join("").toLowerCase())
            return arr
        },[]).join(" ")
        searchDivNameOfItem.appendChild(p)

        p.addEventListener("click", () =>{
            searchInp.value = p.innerHTML
            searchDivNameOfItem.style.display = "none"
            console.log('2')

            for(let index = 0;index < nameOfbtn.length;index ++){
                pizzaCards[index].style.display = "none"

                // if(nameOfbtn[index].innerHTML.toUpperCase().includes(inputOfsearch.toUpperCase())){
                //     // console.log(nameOfbtn[index].innerHTML.toUpperCase())
                //     pizzaCards[index].style.display = "flex"
                // }
                console.log(nameOfbtn[index].innerHTML.toUpperCase())
                console.log(p.innerHTML.toUpperCase())
                if(nameOfbtn[index].innerHTML.toUpperCase()== p.innerHTML.toUpperCase()){
                    pizzaCards[index].style.display = "flex"
                }
            }
            searchInp.value = ' '

        })


    }
})

// ------------------
// menu-choice-mapping
// ------------------

const  allMapping = document.getElementById('all-mapping')
const vegetarianMapping = document.getElementById('vegetarian-mapping')
const fastingMapping = document.getElementById('fasting-mapping')
const createYourOwn = document.getElementById('create-your-own')
const createYourOwnDiv = document.getElementById('create-own-container')
const productDiv = document.getElementById('container-menu')
const searchDiv = document.getElementById('search-container')

allMapping.addEventListener('click', ()=>{
    createYourOwnDiv.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    productDiv.style.display = 'grid'
    searchDiv.style.display = 'flex'
    aboutSection.style.display = 'none'
    basketContainer.style.display = "none"
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'flex'
        pizzaDescriptionContainer.style.display = 'none'
    }
})

vegetarianMapping.addEventListener('click',()=>{
    createYourOwnDiv.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    productDiv.style.display = 'grid'
    searchDiv.style.display = 'flex'
    aboutSection.style.display = 'none'
    basketContainer.style.display = "none"
    formOfcards.style.display = 'none'
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'none'
        console.log(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' '))
        if(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' ').includes('VEGETARIAN' )){
            pizzaCards[x].style.display = 'flex'
        }
    }
})

fastingMapping.addEventListener('click',()=>{
    createYourOwnDiv.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    productDiv.style.display = 'grid'
    searchDiv.style.display = 'flex'
    aboutSection.style.display = 'none'
    basketContainer.style.display = "none"
    formOfcards.style.display = 'none'
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'none'
        console.log(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' '))
        if(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' ').includes('VEGETARIAN' ) || pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' ').includes('BLT' ) ){
            pizzaCards[x].style.display = 'flex'
        }
    }
})


createYourOwn.addEventListener('click',()=>{
    createYourOwnDiv.style.display = 'flex'
    pizzaDescriptionContainer.style.display = 'none'
    productDiv.style.display = 'none'
    searchDiv.style.display = 'none'
    aboutSection.style.display = 'none'
    basketContainer.style.display = "none"
    formOfcards.style.display = 'none'
})


// ---------------------------------
// menu pizza description
// ---------------------------------

const pizzaArrDescription = [
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'Baked to perfection on a mayonnaise base and loaded with crispy smoked bacon, our signature gourmet cheese blend, crisp Romaine lettuce and ripe tomatoes. Enjoy this unique, Sarpino’s specialty pizza near you.',
        calories: 240.89,
        FatCals:109.87,
        SaturatedCals: 12.25,
        SaturatedFat: 4.45,
        TransFat:0
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    }
]

const pizzaDescriptionContainer = document.getElementById('pizza-description-container')
let descriptionImg = document.getElementById('img-description') 
let nameDescription = document.getElementById('name-description')
let titleDescription =document.getElementById('title-description')
let caloriesDesc = document.getElementById('Calories')
let fatCalsDesc = document.getElementById('fat-cals')
let saturateCalsDesc = document.getElementById('saturated-cals')
let saturatedFatsDesc = document.getElementById('saturated-fat')
let transFatDesc = document.getElementById('trans-fat')
let descPrice = document.getElementById('desc-price')
const pizzaZoom = document.getElementsByClassName('pizza-zoom')


for(let x=0; x<pizzaCards.length;x++){
    pizzaCards[x].querySelector('a').addEventListener('click',()=>{
        header.style.height = '60vh'
        productDiv.style.display = 'none'
        searchDiv.style.display = 'none'
        pizzaDescriptionContainer.style.display = 'flex'
        aboutSection.style.display = 'none'
        basketContainer.style.display = "none"
        descriptionImg.style.backgroundImage = menuCardImgStatic[x]
        nameDescription.innerHTML = pizzaCards[x].querySelector('h1').innerHTML
        titleDescription.innerHTML = pizzaArrDescription[x].description
        caloriesDesc.innerHTML= pizzaArrDescription[x].calories
        fatCalsDesc.innerHTML = pizzaArrDescription[x].FatCals
        saturateCalsDesc.innerHTML = pizzaArrDescription[x].SaturatedCals
        saturatedFatsDesc.innerHTML = pizzaArrDescription[x].SaturatedFat
        transFatDesc.innerHTML = pizzaArrDescription[x].TransFat
        descPrice.innerHTML = pizzaPrise[x].innerHTML

        for(let i=0;i<pizzaZoom.length;i++){
            pizzaZoom[i].addEventListener('click', ()=>{
                descPrice.innerHTML = pizzaPrise[x].innerHTML/ 8 * pizzaZoom[i].innerHTML
                caloriesDesc.innerHTML=Number(pizzaArrDescription[x].calories/8 * pizzaZoom[i].innerHTML).toFixed(2)
                fatCalsDesc.innerHTML = Number(pizzaArrDescription[x].FatCals/8 * pizzaZoom[i].innerHTML).toFixed(2)
                saturateCalsDesc.innerHTML = Number(pizzaArrDescription[x].SaturatedCals/8 * pizzaZoom[i].innerHTML).toFixed(2)
                saturatedFatsDesc.innerHTML = Number(pizzaArrDescription[x].SaturatedFat/8 * pizzaZoom[i].innerHTML).toFixed(2)
                transFatDesc.innerHTML = Number(pizzaArrDescription[x].TransFat/8 * pizzaZoom[i].innerHTML).toFixed(2)
            })
        }

    })

    

}



// create your own




const peperonInp = document.getElementById('peperoniInp')
const hamInp = document.getElementById('hamInp')
const tomatoinp = document.getElementById('tomatoinp')
const onionIpn = document.getElementById('onionIpn')
const vegetableInp =document.getElementById('vegetableInp')
const mashroomInp =document.getElementById('mashroomInp')
const oreganoInp = document.getElementById("oreganoInp")

const ham = document.getElementById('lori-div')
const mashroom = document.getElementById('mashroom-div')
const peperoni = document.getElementById('peperoni-div')
const tomato = document.getElementById('tomato-div')
const vegetable = document.getElementById('vegetable-div')
const onion = document.getElementById('onion-div')
const oregano = document.getElementById('oregano-div')
const ingredients = document.getElementsByClassName('ingredients-check')
const totalIngredientsPrise = document.getElementById('total-ingredient-prise')

let sumOfPriseIngredients = 0
const foodMap = new Map([
    [1,"peperoni"],
    [2,'ham'],
    [3,'tomato'],
    [4,'vegetable'],
    [5,'onion'],
    [6,'mashroom'],
    [7,'oregano'],

])


const ingredientPrise = new Map([
    ["peperoni",10],
    ['ham',9],
    ['tomato',3],
    ['vegetable',2],
    ['onion',1],
    ['mashroom',3],
    ['oregano',2],
])



for(let i=0;i<ingredients.length;i++){
    ingredients[i].addEventListener('click', ()=>{
        let keyInp 
        foodMap.forEach((value,key)=>{
            if(key == ingredients[i].value){
                keyInp = key
            }
        })


        if(ingredients[i].checked == true ){
            switch(keyInp){
                case 1:
                    peperoni.style.opacity = '1'
                    sumOfPriseIngredients += 10
                    // peperoni.style.transition = '0.5'
                    break;
                case 2:
                    ham.style.opacity = '1'
                    sumOfPriseIngredients += 9
                    break;
                case 3:
                    tomato.style.opacity = '1'
                    sumOfPriseIngredients += 3
                    break;
                case 4:
                    vegetable.style.opacity = '1'
                    sumOfPriseIngredients += 2
                    break;
                case 5:
                    onion.style.opacity = '1'
                    sumOfPriseIngredients += 1
                    break;
                case 6:
                    mashroom.style.opacity = '1'
                    sumOfPriseIngredients += 3
                    break;
                case 7: 
                    oregano.style.opacity = '1'
                    sumOfPriseIngredients += 2
        }}
        else{
                switch(keyInp){
                    case 1:
                        console.log('1')
                        peperoni.style.opacity = '0'
                        sumOfPriseIngredients -= 10
                        break;
                    case 2:
                        ham.style.opacity = '0'
                        sumOfPriseIngredients -= 9
                        break;
                    case 3:
                        tomato.style.opacity = '0'
                        sumOfPriseIngredients -= 3
                        break;
                    case 4:
                        vegetable.style.opacity = '0'
                        sumOfPriseIngredients -= 2
                        break;
                    case 5:
                        onion.style.opacity = '0'
                        sumOfPriseIngredients -= 1
                        break;
                    case 6:
                        mashroom.style.opacity = '0'
                        sumOfPriseIngredients -= 3
                        break;
                    case 7: 
                        oregano.style.opacity = '0'
                        sumOfPriseIngredients -= 2
                } }
                
                totalIngredientsPrise.innerHTML = sumOfPriseIngredients
    })
}



// --------------------------
// about container
// --------------------------

const aboutBtn = document.getElementsByClassName('about')
const aboutSection = document.getElementById('about-container')
console.log(aboutBtn)
for(x=0;x<aboutBtn.length;x++){
    aboutBtn[x].addEventListener('click',()=>{
    header.style.height = '60vh'
    aboutSection.style.display = 'flex'
    createYourOwnDiv.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    mainManuDiv.style.display = 'none'
    salaSection.style.display = 'none'
    pizzeriaSection.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    careersSection.style.display = "none"
    basketContainer.style.display = "none"
    formOfcards.style.display = 'none'
}) 
}



// ------------------
// Careeer Page
// ------------------


let Careers = document.getElementsByClassName("Careers")
let careersSection = document.getElementById("careers")
// career-slide - /*/*/*/*/

let slide =  document.getElementById("child-container")
let imageOfslide = document.getElementsByClassName("team")

let index = -1
let aryOfslideimage = ["url('/image/team1.jpeg')","url('/image/Team2.jpg')","url('/image/Team3.jpeg')","url('/image/Team4.jpeg')","url('/image/Team5.jpg')",
    "url('/image/Team6.jpg')","url('/image/Team7.jpg')","url('/image/Team8.jpg')","url('/image/Team9.jpg')","url('/image/Team10.jpg')","url('/image/Team11.jpg')","url('/image/Team12.jpg')","url('/image/Team13.webp')","url('/image/Team14.jpg')","url('/image/Team15.jpg')"]

const Slide = () => {
    index ++ 
    if(index > aryOfslideimage.length-1){
        index = 0
    }
    let div = document.createElement("div")
    div.style.backgroundImage = aryOfslideimage[index]

    div.classList.add("team")
    slide.appendChild(div)
    slide.removeChild(slide.querySelector("div"))
    // console.log(slide)
}

setInterval(Slide,1000)

// career form  - card//
let inputName = document.getElementById("input-Name")
let inputSurname = document.getElementById("input-Surname")
let inputPhone = document.getElementById("input-Phone")
let inputEmail = document.getElementById("input-email")
let inputFile = document.getElementById("input-file")

let input = document.getElementsByClassName("input")

let catdName = document.getElementById("user-name")
let catdSurname = document.getElementById("user-surname")
let catdPhon = document.getElementById("user-phone")
let catdEmail = document.getElementById("user-email")
let catdbtn = document.getElementById("career-btn")

let User = document.getElementsByClassName("user")

for(let i =0;i < input.length;i ++){
        input[i].addEventListener("input", () => {
            User[i].textContent = ""
            User[i].textContent = input[i].value
    })
}

class DateOfuser{
    static userdate = []
    constructor(Username,Usersurname,UserPhone,UserEmail){
        this.Username = Username,
        this.Usersurname = Usersurname,
        this.UserPhone = UserPhone,
        this.UserEmail = UserEmail
        DateOfuser.userdate.push(this) 
    }
}

catdbtn.addEventListener("click", () =>{
    const Date = new DateOfuser(inputName.value,inputSurname.value,inputPhone.value,inputEmail.value)
    for(let i =0;i < input.length;i ++){
        input[i].value = ""
        User[i].textContent = " . . ."
    }
})


// 
let InputOfcard = document.getElementsByClassName("input-of-card")

let TextOfcard = document.getElementsByClassName("text-of-card")

let btn = document.getElementById("btn-card")

let formOfcards = document.getElementById("form-of-cards")

let bayBnt = document.getElementsByClassName("bay1")



// let isTrue = true
// hamburgerManu.addEventListener('click',()=>{
//     isTrue = !isTrue
//     if(isTrue== false){
//         navbarManu.style.display = 'flex'
//     }else{
//         navbarManu.style.display = 'none'
//     }
// })


for(let i = 0; i < bayBnt.length;i++){
    bayBnt[i].addEventListener("click", () =>{
        if(Card.dateOfcard.length == 0){
            console.log(Card.dateOfcard.length)
            let Confirm = confirm("Please fill the cart")
            console.log(Confirm)
            if(Confirm == true){
                header.style.height = '60vh'
                header.style.backgroundImage = "url('/image/pizzeria.gif')"
                header.style.backgroundPosition =' bottom'
                careersSection.style.display = "none"
                salaSection.style.display = 'none'
                pizzeriaSection.style.display = 'none'
                mainManuDiv.style.display = 'flex'
                pizzaDescriptionContainer.style.display = 'none'
                aboutSection.style.display = 'none'
                productDiv.style.display = 'grid'
                searchDiv.style.display = 'flex'
                basketContainer.style.display = "none"
                formOfcards.style.display = "none"
            }
        }else{
            for(let i = 0;i < InputOfcard.length;i++){
                InputOfcard.value = ""
                TextOfcard.innerHTML = ""
            }
    
            isTrue = !isTrue
            if(isTrue == false){
                formOfcards.style.display = 'grid'
                header.style.backgroundImage = "url(/image/pizzeria.gif)"
                header.style.backgroundPosition = "bottom"
                aboutSection.style.display = 'none'
                createYourOwnDiv.style.display = 'none'
                pizzaDescriptionContainer.style.display = 'none'
                mainManuDiv.style.display = 'none'
                salaSection.style.display = 'none'
                pizzeriaSection.style.display = 'none'
                pizzaDescriptionContainer.style.display = 'none'
                basketContainer.style.display = "none"
                careersSection.style.display = "none"
    
            }else{
                formOfcards.style.display = 'none'
                salaSection.style.display = 'flex'
                pizzeriaSection.style.display = 'flex'
    
            }
        }
        

    })
}


btn.addEventListener("click", () =>{
    let num = 0
    for(let i = 0;i < InputOfcard.length;i++){
        if(InputOfcard[i].value === ""){
            InputOfcard[i].style.border = "2px solid red"

        }else if(InputOfcard[i].value != ""){
            num += 1
            InputOfcard[i].style.border = "2px solid white"

            if(num >3){
                formOfcards.style.display = "none"
                header.style.backgroundImage = "url(/image/pizzeria.gif)"
                header.style.backgroundPosition = "bottom"
                aboutSection.style.display = 'none'
                createYourOwnDiv.style.display = 'none'
                pizzaDescriptionContainer.style.display = 'none'
                mainManuDiv.style.display = 'none'
                salaSection.style.display = 'flex'
                pizzeriaSection.style.display = 'flex'
                pizzaDescriptionContainer.style.display = 'none'
                basketContainer.style.display = "none"
                careersSection.style.display = "none"
            }
        }

        
    }
    
    
})

for(let i =0;i < InputOfcard.length;i ++){
    InputOfcard[i].addEventListener("input", () =>{
        // console.log(InputOfcard[i].value)
        TextOfcard[i].innerHTML = ""
        
        TextOfcard[i].innerHTML = InputOfcard[i].value
        
    })
}


// -----------------------/////

for(let x= 0; x< Careers.length;x++){
    Careers[x].addEventListener("click", () =>{
    careersSection.style.display = "flex"
    header.style.backgroundImage = "url('/image/career.jpg')"
    header.style.backgroundPosition =' center'
    header.style.height = '60vh'
    aboutSection.style.display = 'none'
    createYourOwnDiv.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    mainManuDiv.style.display = 'none'
    salaSection.style.display = 'none'
    pizzeriaSection.style.display = 'none'
    pizzaDescriptionContainer.style.display = 'none'
    basketContainer.style.display = "none"
    formOfcards.style.display = 'none'

})  
}


let main = document.getElementsByClassName("header-cover-image")

for(let i =0;i<main.length;i++)
    main[i].addEventListener("click", () =>{
        header.style.backgroundImage = "url(/image/pizzeria.gif)"
        header.style.backgroundPosition = "bottom"
        aboutSection.style.display = 'none'
        createYourOwnDiv.style.display = 'none'
        pizzaDescriptionContainer.style.display = 'none'
        mainManuDiv.style.display = 'none'
        salaSection.style.display = 'flex'
        pizzeriaSection.style.display = 'flex'
        pizzaDescriptionContainer.style.display = 'none'
        basketContainer.style.display = "none"
        careersSection.style.display = "none"
        formOfcards.style.display = 'none'
    })
