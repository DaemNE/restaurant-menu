import pageLoad from "./pageLoad.js"
import generateFoods from "./generateItems.js"
import generateContact from "./contactLoad.js"
import generateAbout from "./aboutLoad.js"

pageLoad()

const aboutHeader = document.querySelector(".aboutHeader")
const menuHeader = document.querySelector(".menuHeader")
const contactHeader = document.querySelector(".contactHeader")


aboutHeader.addEventListener("click", function() { generateAbout() })
menuHeader.addEventListener("click", function() { generateFoods() })
contactHeader.addEventListener("click", function() { generateContact() })