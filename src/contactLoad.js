export default function generateContact() {

    const contactContainer = document.createElement("div")
    contactContainer.classList = "contact"
    const footer = document.createElement("footer")
    const content = document.querySelector(".content")
    const form = document.createElement('form')
    form.classList = "contact"
    const nameInput = document.createElement("input")
    const nameLabel = document.createElement("label")
    const numberInput = document.createElement("input")
    const numberLabel = document.createElement("label")
    const commentInput = document.createElement("textarea")
    const commentLabel = document.createElement("label")
    const contactImg = document.createElement("img")
    const buttonDiv = document.createElement("div")
    buttonDiv.classList = "buttonDiv"
    const submitButton = document.createElement("button")
    const resetButton = document.createElement("button")

    if (document.querySelector(".contact")) {
        return;
    }

    if (document.querySelector(".desc")) {
        const desc = document.querySelector(".desc")
        content.removeChild(desc)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }

    if (document.querySelector(".list")) {
        const list = document.querySelector(".list")
        content.removeChild(list)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }


    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("placeholder", "Bob the Builder")
    nameInput.setAttribute("id", "name")

    nameLabel.setAttribute("for", "name")
    nameLabel.textContent = "Name"


    numberInput.setAttribute("type", "number")
    numberInput.setAttribute("placeholder", "123 456 789")
    numberInput.setAttribute("id", "number")

    numberLabel.setAttribute("for", "number")
    numberLabel.textContent = "Telephone nr"


    commentInput.setAttribute("type", "text")
    commentInput.setAttribute("size", "20")
    commentInput.setAttribute("placeholder", "The food stinks..")
    commentInput.setAttribute("id", "comment")

    commentLabel.setAttribute("for", "comment")
    commentLabel.textContent = "Comment"

    contactImg.src = "https://cdn-icons-png.flaticon.com/512/4813/4813913.png"

    submitButton.setAttribute("type", "submit")
    submitButton.textContent = "Submit Form"
    submitButton.classList = "submitBtn"

    resetButton.setAttribute("type", "reset")
    resetButton.textContent = "Reset Fields"
    resetButton.classList = "resetBtn"

    buttonDiv.appendChild(submitButton)
    buttonDiv.appendChild(resetButton)

    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(numberLabel)
    form.appendChild(numberInput)
    form.appendChild(commentLabel)
    form.appendChild(commentInput)
    form.appendChild(contactImg)
    form.appendChild(buttonDiv)

    content.appendChild(form)
    content.appendChild(footer)
}