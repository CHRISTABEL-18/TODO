var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li")

function inputLengTH() {
    return input.value.length;
}

function listLengTH() {
    return item.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));

    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
    }
    deleteButton.addEventListener("click", deleteListItem);


}
function addListAfterClick() {
    if (inputLengTH() > 0) {
        createListElement();
    }

}
function addListAfterKeypress(event) {
    if (inputLengTH() > 0 && event.which === 13) {
        createListElement();

    }
}
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

