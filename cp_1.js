let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let commentsInput = document.getElementById("comments")
let form = document.querySelector("form")

commentsInput.addEventListener("input", function() {
    let count = commentsInput.value.length
    document.getElementById("charCount").innerText = "Characters: " + count
})

nameInput.addEventListener("mouseover", function() {
    document.getElementById("nameTip").innerText = "Enter your full name"
})
nameInput.addEventListener("mouseout", function() {
    document.getElementById("nameTip").innerText = ""
})

emailInput.addEventListener("mouseover", function() {
    document.getElementById("emailTip").innerText = "Enter a valid email address"
})
emailInput.addEventListener("mouseout", function() {
    document.getElementById("emailTip").innerText = ""
})

commentsInput.addEventListener("mouseover", function() {
    document.getElementById("commentsTip").innerText = "Write your comment here"
})
commentsInput.addEventListener("mouseout", function() {
    document.getElementById("commentsTip").innerText = ""
})

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let name = nameInput.value
    let email = emailInput.value
    let comments = commentsInput.value

    if (name == "" || email == "" || comments == "") {
        document.getElementById("errorMsg").innerText = "Please fill out all fields!"
        return
    }

    document.getElementById("errorMsg").innerText = ""

    let feedbackDiv = document.getElementById("feedback-display")
    let newEntry = document.createElement("p")
    newEntry.innerText = "Name: " + name + " | Email: " + email + " | Comment: " + comments
    feedbackDiv.appendChild(newEntry)

    nameInput.value = ""
    emailInput.value = ""
    commentsInput.value = ""
})

form.addEventListener("input", function(e) {
    console.log("something changed in: " + e.target.id)

    if (e.target.id == "name") {
        console.log("name field value is: " + e.target.value)
    }

    if (e.target.id == "email") {
        console.log("email field value is: " + e.target.value)
    }

    if (e.target.id == "comments") {
        console.log("comments field value is: " + e.target.value)
    }
})

document.body.addEventListener("click", function(e) {
    console.log("you clicked the background")
    e.stopPropagation()
})

form.addEventListener("click", function(e) {
    e.stopPropagation()
    console.log("you clicked inside the form - staying inside the form")
})