document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("intro").textContent = "Tip Calculator"

    const button = document.getElementById("calculate")

    button.addEventListener("click", function () {
        const billAmount = document.getElementById("bill-amount").valueAsNumber;
        const tipPercentage = document.getElementById("percentage").valueAsNumber;

        if (tipPercentage && billAmount) {

            const percentageAmount = (billAmount * tipPercentage) / 100;
            console.log(percentageAmount)
            const tipAmountLabel = document.getElementById("tip-amount");
            tipAmountLabel.textContent = "Tip Amount:₹" + percentageAmount;

            const totalAmount = document.getElementById("total");
            totalAmount.textContent = "Total Amount:₹" + (percentageAmount + billAmount);
        } else {
            alert("Please enter bill amount and tip percentage")
        }
    })
})

function createDOMNodes() {
    const para = document.createElement('p');
    para.id = "first-para";
    para.textContent = 'this is the first para';

    document.body.appendChild(para);

    const hobbies = ["coding", 'singing', 'painting'];
    const listOfHobbies = document.createElement("ul");
    let htmlString = "";
    for (let hobby of hobbies) {
        htmlString += "<li>" + hobby + " </li>";
    }
    console.log(htmlString);
    listOfHobbies.innerHTML = htmlString;
    // listOfHobbies.innerText = htmlString;
    document.body.appendChild(listOfHobbies);
}

createDOMNodes();

function getNodes() {
    // getElementById
    const para = document.getElementById("first-para");
    para.style.background = "yellow";

    // gets all the elements with the matching tag name
    const listOfHobbies = document.getElementsByTagName("ul")[0];
    console.log(listOfHobbies)

    // children property contains all the child element of a tag
    const children = listOfHobbies.children;
    for (let child of children) {
        // class list is a property which allows you to manipulate classes on an element
        child.classList.add("royal-blue")
    }

    // query selector returns the first element which matches the rule
    const result = document.querySelector('ul > li');
    result.style.background = "royalblue";
    console.log((result));
    // query selector all returns all the elements which match the
    //specified rule
    const listItems = document.querySelectorAll("ul > li");
    for (let item of listItems) {
        item.style.background = "coral";
    }

    // getElementsByClassName returns all the elements which match the specified classname
    console.log(document.getElementsByClassName("royal-blue"))

    console.log(document.querySelectorAll(".royal-blue"))
    console.log(document.querySelectorAll("#first-para"))

}

getNodes();



//grab the elements we want to work upon.

const stateElement = document.getElementById("states");
const cityElement = document.getElementById("cities");

window.onload = function () {
    // fill the states.
    // fill the cities based on the state.

    stateElement.length = 0;
    cityElement.length = 0;

    fillStates();
    getCitiesForState(null);

    stateElement.onchange = function () {
        cityElement.length = 0;
        getCitiesForState(stateElement.value);
    }
}

function fillStates() {
    for (let i = 0; i < states.length; i++) {
        const element = states[i];
        stateElement.options[i] = new Option(element, element);
    }
}

function getCitiesForState(state) {
    try {
        const citiesIndex = states.indexOf(state);
        const cityList = cities[citiesIndex].split("|");

        for (let i = 0; i < cityList.length; i++) {
            const element = cityList[i].trim();
            cityElement.options[i] = new Option(element, element);
        }
    } 
    catch(ex){
        console.log(ex);
        throw ex;
    } 
    finally {
        console.log("I am Finally block code")
        // always gets executed.
    }
}


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("intro").textContent = "Tip Calculator"

    const button = document.getElementById("calculate")

    button.addEventListener("click", function () {
        const billAmount = document.getElementById("bill-amount").valueAsNumber;
        const tipPercentage = document.getElementById("percentage").valueAsNumber;

        if (tipPercentage && billAmount) {

            const percentageAmount = (billAmount * tipPercentage) / 100;
            console.log(percentageAmount)
            const tipAmountLabel = document.getElementById("tip-amount");
            tipAmountLabel.textContent = "Tip Amount:₹" + percentageAmount;

            const totalAmount = document.getElementById("total");
            totalAmount.textContent = "Total Amount:₹" + (percentageAmount + billAmount);
        } else {
            alert("Please enter bill amount and tip percentage");
        }
    });
});                                                                                                                                                                                                                        `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````!
