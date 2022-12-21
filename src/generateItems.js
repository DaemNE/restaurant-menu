import { orderedFoods, saladAmount, spaghettiAmount, lasagnaAmount } from "./pageLoad"

export default function generateFoods() {

    const listContainer = document.createElement("div")
    listContainer.classList = "list"
    const footer = document.createElement("footer")
    const content = document.querySelector(".content")
    const placeOrderButton = document.createElement("button")
    const orderedItemsList = document.querySelector(".orderedItemsList")
    orderedItemsList.classList = "orderedItemsList"
    const removeListBtn = document.querySelector(".removeListBtn")
    removeListBtn.addEventListener("click", function() {
        orderedFoods = []
        renderList()
    })
    const orderListBtn = document.querySelector(".orderListBtn")
    orderListBtn.addEventListener("click", function() {

        console.log(orderedFoods)
        if (orderedFoods.length > 0) {
            let prompt = confirm("do you want to order?")

            if (prompt) {
                alert("Thanks for ordering, we are preparing your meal!")
                orderedFoods = []
                renderList()
            }
        } else {
            alert("there is nothing in your cart")
        }

    })


    let listOfFoods = [{
        name: 'salad',
        img: 'https://images-platform.99static.com//5GaMaD5-NhCb1svuLQilXu3Vf8M=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/62/62480/attachment_62480756',
        description: 'healthy salad',
        price: '5'
    }, {
        name: 'spaghetti',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoMdLGVxNbFgKNiw3jWiQDpOU8xrSTHo4NOByaAQVpA&s',
        description: 'spaghetti healthy Veggie, gluten free, plant based, paleo Low sodium, low protein, very low fat Low Sodium, high starch diet',
        price: '10'
    }, {
        name: 'lasagna',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC9MPTj71YdfqbzrmffoP9LMYfKsRxc6ygaBqH23Q&s',
        description: 'lasagna healthy and a great vegan option to eat whenever you like!',
        price: '15'
    }]


    if (document.querySelector(".list")) {
        return;
    }

    if (document.querySelector(".desc")) {
        const desc = document.querySelector(".desc")
        content.removeChild(desc)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }

    if (document.querySelector(".contact")) {
        const contact = document.querySelector(".contact")
        content.removeChild(contact)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }


    for (let food in listOfFoods) {
        const foodLi = document.createElement('li')
        const foodName = document.createElement("div")
        const foodImg = document.createElement("img")
        const foodPrice = document.createElement("div")
        foodPrice.classList = "priceDiv"
        const foodDescription = document.createElement("div")
        const addButton = document.createElement("button")
        const removeButton = document.createElement("button")
        const buttonDiv = document.createElement("div")
        const card = document.createElement("div")
        card.classList = "card"

        foodName.textContent = listOfFoods[food].name
        foodImg.src = listOfFoods[food].img
        foodPrice.textContent = listOfFoods[food].price
        foodDescription.textContent = listOfFoods[food].description
        addButton.textContent = "Add to cart"
        addButton.classList = "addBtn"
        addButton.addEventListener("click", function() { addFood(foodName.textContent, foodPrice.textContent) })
        removeButton.textContent = "Remove from cart"
        removeButton.classList = "rmvBtn"
        removeButton.addEventListener("click", () => { removeFood(foodName.textContent, foodPrice.textContent) })


        buttonDiv.appendChild(addButton)
        buttonDiv.appendChild(removeButton)

        foodLi.appendChild(foodName)
        foodLi.appendChild(foodImg)
        foodLi.appendChild(foodPrice)
        foodLi.appendChild(foodDescription)
        foodLi.appendChild(buttonDiv)

        foodLi.classList = "itemList"
        card.appendChild(foodLi)
        listContainer.appendChild(card)

    }

    function removeFood(foodName) {

        if (foodName === "lasagna" && lasagnaAmount > 0) {
            const indexOfObject = orderedFoods.findIndex(object => {
                return object.name === foodName;
            });
            orderedFoods.splice(indexOfObject, 1);
            lasagnaAmount--

            renderList()
        } else if (foodName === "spaghetti" && spaghettiAmount > 0) {
            const indexOfObject = orderedFoods.findIndex(object => {
                return object.name === foodName;
            });
            orderedFoods.splice(indexOfObject, 1);
            spaghettiAmount--

            renderList()
        } else if (foodName === "salad" && saladAmount > 0) {
            const indexOfObject = orderedFoods.findIndex(object => {
                return object.name === foodName;
            });
            orderedFoods.splice(indexOfObject, 1);
            saladAmount--

            renderList()
        }


    }

    function addFood(foodName, foodPrice) {
        switch (foodName) {
            case "salad":
                saladAmount++;
                break;
            case "spaghetti":
                spaghettiAmount++;
                break;
            case "lasagna":
                lasagnaAmount++;
                break;
        }

        let item = {
            name: foodName,
            price: foodPrice,
        }
        orderedFoods.push(item)
        renderList()
    }

    function renderList() {

        const totalAmountDiv = document.querySelector(".totalAmount")
        let totalAmount = 0;


        while (orderedItemsList.firstChild) {
            orderedItemsList.removeChild(orderedItemsList.lastChild)
        }


        for (let food in orderedFoods) {
            const foodDiv = document.createElement("div")
            foodDiv.classList = `${orderedFoods[food].name} item`

            const priceDiv = document.createElement("div")
            priceDiv.classList = "priceDiv"

            const nameDiv = document.createElement("div")
            nameDiv.classList = "nameDiv"

            priceDiv.textContent = orderedFoods[food].price
            nameDiv.textContent = orderedFoods[food].name


            if (orderedFoods[food].price.length < 5) {
                totalAmount += parseInt(orderedFoods[food].price)
            }



            foodDiv.appendChild(nameDiv)
            foodDiv.appendChild(priceDiv)

            orderedItemsList.appendChild(foodDiv)

        }

        totalAmountDiv.textContent = totalAmount


    }

    placeOrderButton.textContent = "Place order now!"
    placeOrderButton.addEventListener("click", () => {
        console.log(orderedFoods)
        if (orderedFoods.length > 0) {
            let prompt = confirm("do you want to order?")

            if (prompt) {
                alert("Thanks for ordering, we are preparing your meal!")
                orderedFoods = []
                renderList()
            }
        } else {
            alert("there is nothing in your cart")
        }
    })
    placeOrderButton.classList = "orderBtn"

    listContainer.appendChild(placeOrderButton)

    content.appendChild(listContainer)
    content.appendChild(footer)

}