export default function generateAbout() {

    const descContainer = document.createElement("div")
    descContainer.classList = "desc"
    const descImg = document.createElement("img")
    const descText = document.createElement("div")
    const footer = document.createElement("footer")
    const content = document.querySelector(".content")

    if (document.querySelector(".desc")) {
        return;
    }

    if (document.querySelector(".list")) {
        const list = document.querySelector(".list")
        content.removeChild(list)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }

    if (document.querySelector(".contact")) {
        const contact = document.querySelector(".contact")
        content.removeChild(contact)
        const footer = document.querySelector("footer")
        content.removeChild(footer)
    }

    descImg.src = 'https://thumbs.dreamstime.com/b/pasta-logo-hand-drawn-vector-illustration-plate-spaghetti-stock-italian-163269011.jpg'

    descText.textContent = "This is some description about our restaurant"

    descContainer.appendChild(descImg)
    descContainer.appendChild(descText)


    content.appendChild(descContainer);
    content.appendChild(footer)
}