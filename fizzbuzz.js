/* 
-- Brief --
For multiples of three print “Fizz” instead of the number
For the multiples of five print “Buzz”
For numbers which are multiples of both three and five print “FizzBuzz”."
*/

const fizzbuzzAlgoritmus1 = () => {
    let numbers = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3) {
            // pokud neni delitelne 3 - NE
            if (i % 5) {
                // pokud neni delitelne 5 - NE
                numbers.push(i);
            } else {
                // pokud je delitelne 5 - ANO
                numbers.push("Buzz");
            }
        } else {
            // pokud je delitelne 3 - ANO
            if (i % 5) {
                // neni delitelne 5 - NE
                numbers.push("Fizz");
            } else {
                // je delitelne i 5 - ANO
                numbers.push("FizzBuzz");
            }
        }
    }
    return numbers;
};

const fizzbuzzAlgoritmus2 = () => {
    let numbers = [];
    for (let i = 1; i <= 100; i++) {
        let result = "";
        // pokud je delitelne 3
        if (i % 3 === 0) {
            result += "Fizz";
        } // pokud je delitelne 5
        if (i % 5 === 0) {
            result += "Buzz";
        }
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
List with numbers (ul/li)
Slyle of Fizz, Buzz and FizzBuzz at the list
Optional number of listings
*/

const fizzbuzzByOptionalFigure = (listLength) => {
    let output = [];
    if (Number.isInteger(listLength) && listLength >= 1) {
        for (let i = 1; i <= listLength; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                output.push("FizzBuzz");
            } else if (i % 3 === 0) {
                output.push("Fizz");
            } else if (i % 5 === 0) {
                output.push("Buzz");
            } else {
                output.push(i);
            }
        }
        return output;
    } else {
        return "Zadaná hodnota není číslo! Prosím zadejte libovolnou kladnou číslici.";
    }
};

const renderArray = (arr) => {
    let numbersBase = document.getElementById("numbers-base");
    numbersBase.innerHTML = "";
    if (Array.isArray(arr)) {
        let numbersList = document.createElement("ol");
        arr.forEach((item) => {
            let numberListItem = document.createElement("li");
            numberListItem.innerHTML = item;
            if (item === "Fizz") {
                numberListItem.classList.add("fizz");
            } else if (item === "Buzz") {
                numberListItem.classList.add("buzz");
            } else if (item === "FizzBuzz") {
                numberListItem.classList.add("fizzbuzz");
            }
            numbersList.appendChild(numberListItem);
        });
        numbersBase.appendChild(numbersList);
    } else {
        numbersBase.innerHTML = arr;
    }
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let checkedValue = form.querySelector(
        "input[name=generator]:checked"
    ).value;
    console.log(checkedValue);
    if (checkedValue === "algoritmus-1") {
        renderArray(fizzbuzzAlgoritmus1());
    } else if (checkedValue === "algoritmus-2") {
        renderArray(fizzbuzzAlgoritmus2());
    } else {
        const listLength = Number.parseInt(
            document.getElementById("input").value
        );
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

function areArraysIdentical(array1, array2) {
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
}
// console.log(areArraysIdentical(fizzbuzzAlgoritmus1(), fizzbuzzByOptionalFigure(listLength)));
