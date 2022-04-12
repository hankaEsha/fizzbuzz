/* 
-- Brief --
For multiples of three print “Fizz” instead of the number
For the multiples of five print “Buzz”
For numbers which are multiples of both three and five print “FizzBuzz”."
*/

// firts solution:
const fizzbuzzAlgoritmus1 = () => {
    let numbers = [];
    // the value is set to 50 just to distinguish the result from the second solution (when run on the web)
    for (let i = 1; i <= 50; i++) {
        if (i % 3) {
            // NOT a multiply of 3
            if (i % 5) {
                // NOT a multiply of 5
                numbers.push(i);
            } else {
                // IS a multiply of 5
                numbers.push("Buzz");
            }
        } else {
            // IS a multiply of 3
            if (i % 5) {
                // NOT a multiply of 5
                numbers.push("Fizz");
            } else {
                // IS a multiply of 5
                numbers.push("FizzBuzz");
            }
        }
    }
    return numbers;
};

// second solution / simplification:
const fizzbuzzAlgoritmus2 = () => {
    let numbers = [];
    for (let i = 1; i <= 100; i++) {
        let result = "";
        // IS a multiply of 3
        if (i % 3 === 0) {
            result += "Fizz";
        } // IS a multiply of 5
        if (i % 5 === 0) {
            result += "Buzz";
        } // did not followed any of the previous conditions
        if (result === "") {
            result = i;
        }
        numbers.push(result);
    }
    return numbers;
};

// numbersBase.innerHTML = fizzbuzzAlgoritmus1().join("\n");
// numbersBase.innerHTML = fizzbuzzAlgoritmus2().join("\n");

/* 
-- Brief --
Create a list with numbers (ul/li)
Slyle Fizz, Buzz and FizzBuzz at the list
Add an option to set the number of listings 
*/

const fizzbuzzByOptionalFigure = (listLength) => {
    let output = [];
    // check of input
    if (Number.isInteger(listLength) && listLength >= 1) {
        for (let i = 1; i <= listLength; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                output.push("FizzBuzz");
            } else if (i % 3 === 0) {
                output.push("Fizz");
            } else if (i % 5 === 0) {
                output.push("Buzz");
            } else {
                output.push(i.toString());
            }
        }
        return output;
    } else {
        return "Zadaná hodnota není číslo! Prosím zadejte libovolnou kladnou číslici.";
    }
};

// function to render the output array
const renderArray = (arr) => {
    let numbersBase = document.getElementById("numbers-base");
    numbersBase.innerHTML = "";
    // check of input
    if (Array.isArray(arr)) {
        // create list
        let numbersList = document.createElement("ol");
        // create and fill items
        arr.forEach((item) => {
            let numberListItem = document.createElement("li");
            numberListItem.textContent = item;
            if (item.includes("Fizz")) {
                numberListItem.classList.add("fizz");
            }
            if (item.includes("Buzz")) {
                numberListItem.classList.add("buzz");
            }
            numbersList.appendChild(numberListItem);
        });
        numbersBase.appendChild(numbersList);
    } else {
        numbersBase.textContent = arr;
    }
};

const form = document.querySelector("form");

// eventlistener to control which version of fizzbuzz generator is checked by the user
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let checkedValue = form.querySelector(
        "input[name=generator]:checked"
    ).value;
    if (checkedValue === "algoritmus-1") {
        renderArray(fizzbuzzAlgoritmus1());
    } else if (checkedValue === "algoritmus-2") {
        renderArray(fizzbuzzAlgoritmus2());
    } else {
        const listLength = document.getElementById("input").valueAsNumber;
        renderArray(fizzbuzzByOptionalFigure(listLength));
    }
});

// ** another option how to hide input for optional-figure (now being hidden by CSS) **
// const optionalFigureElements = form.querySelector(".optional-figure-elements");
// form.addEventListener("change", (event) => {
//     console.log(optionalFigureElements.classList);
//     if (form.querySelector("#optional-figure:checked")) {
//         optionalFigureElements.classList.remove("optional-figure-hidden");
//     } else {
//         optionalFigureElements.classList.add("optional-figure-hidden");
//     }
// });

// debug function to check whether the output of fizzbuzz generators are identical
const areArraysIdentical = (array1, array2) => {
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

console.assert(
    areArraysIdentical(fizzbuzzAlgoritmus1(), fizzbuzzByOptionalFigure(50))
);
