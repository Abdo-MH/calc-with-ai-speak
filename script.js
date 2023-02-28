let save = JSON.parse(localStorage.getItem("items")) || [];
window.addEventListener("load", () => {
    const gitOne = [
        "Hy",
        "I'am Wally.",
        "This Is A Inline Calculator App.",
        "You Can Type A calculation On Input Below.",
        "Like 1+2*5 ?",
        "Or Complications Calculated => (5+9) * (850/5) % 2.",
        "Note: This Is A DEMO Of This Website website.",
        "Take Some Advice On Math And For Help You To Use This Calculator: ",
    ];
    const gitTow = [
        `Question: Given the function f(x) = 5x - 1, find f(3).
        Solution: f(3) = 5(3) - 1 = 14.`,
        `You Can Type More Than Space:
        => 1 + 5         * 5.`,
        "You Could Use ().",
        "If You Enter With a calc Any Letter Will Give You: Error.",
        `num / 0:
        => Infinity.`,
        "You Can Use %.",
        "You Can Use ^.",
        "You Can Use %.",
        `You Cant Use:
        => log Or F(n).`,
        `Could Use a Decimal Point:
        => 3.5 * 2.`,
        `In History Tap We Will Save Your Question.`,
        `Your History Will Be Saved if You Leave And Back Again
        So Welcome Back🙌.`,
        `This Make With ABDOO.`,
        `This Is The DEMO Of website.`,
        "Practice regularly: Math is like a sport or a musical instrument — the more you practice, the better you'll get.",
        "Don't be afraid to make mistakes: Making mistakes is a natural part of learning math. Don't let fear of making mistakes hold you back from trying.",
        "Stay organized: Keeping your notes, assignments, and study materials organized can help you stay on top of your math studies.",
        "Double-check your work: Always double-check your calculations to catch any errors you might have made.",
        "Use a calculator wisely: While calculators can be helpful, they can also lead to errors if used incorrectly. Make sure you know how to use your calculator properly.",
        "Practice mental math: Developing mental math skills can help you solve problems more quickly and efficiently.",
        "Be aware of rounding errors: Rounding can introduce errors, so be mindful of when and how you round.",
        "80/20 rule: Focus on the 20% of math concepts that will give you 80% of the results.",
        "3-4-5 rule: If you need to make a right angle, a triangle with sides of 3, 4, and 5 units will always create one.",
        "2πr: The formula for the circumference of a circle is 2 times pi times the radius.",
        "9's trick: To multiply a number by 9, multiply by 10 and subtract the original number.",
        "1/x rule: As x gets larger, 1/x gets smaller.",
        "30-60-90 rule: In a triangle with angles of 30, 60, and 90 degrees, the sides are in a ratio of 1:√3:2.",
        "180 rule: The sum of the angles in a triangle is 180 degrees.",
        "7x7 rule: To multiply numbers that end in 7, multiply the tens digits together and add 1 to get the first part of the answer. Then, multiply the units digits together and add them to the end.",
        "3-6-9 rule: If the digits of a number add up to a multiple of 3, the number is divisible by 3.",
        "4-5-6 rule: In a right triangle, if one leg is 4 and the hypotenuse is 6, then the other leg is 5.",
        "Pythagorean theorem: In a right triangle, a² + b² = c².",
        "Pi: Pi (π) is approximately equal to 3.14.",
        "Quadratic formula: The quadratic formula is -b ± √(b² - 4ac) / 2a.",
        `Question: Given the function f(x) = 5x - 1, find f(3).
        Solution: f(3) = 5(3) - 1 = 14.`,
        `Question: Given the function g(x) = 2x + 1, find g(-2).
        Solution: g(-2) = 2(-2) + 1 = -3.`,
        `Question: Given the function h(x) = 3x² - 4x + 1, find h(1).
        Solution: h(1) = 3(1)² - 4(1) + 1 = 0.`,
        `Question: Given the function f(x) = x² + 2x - 3, find f(-1).
        Solution: f(-1) = (-1)² + 2(-1) - 3 = -2.`,
        `Question: Given the function g(x) = 4x + 2, find g(0).
        Solution: g(0) = 4(0) + 2 = 2.`,
        `Question: Given the function h(x) = 2x - 4, find h(5).
        Solution: h(5) = 2(5) - 4 = 6.`,
        `Question: Given the function f(x) = x³ - 2x² + x - 1, find f(2).
        Solution: f(2) = 2³ - 2(2)² + 2 - 1 = 1.`,
        `Question: Given the function g(x) = 3x - 2, find g(4).
        Solution: g(4) = 3(4) - 2 = 10.`,
        `Question: Given the function h(x) = x² - 5x + 6, find h(3).
        Solution: h(3) = 3² - 5(3) + 6 = 0.`,
        `Question: Given the function g(x) = 5x - 2, find g(-1).
        Solution: g(-1) = 5(-1) - 2 = -7.`,

        `g(2) = 4(2)² + 3(2) - 2 = 20.`,
    ];
    setTimeout(() => {
        printNamesOne(gitOne, ".cousor").then(() => printNames(gitTow, ".cousor"));
    }, 4000);
    if (window.innerWidth < 900) {
        document.querySelector("span").innerHTML = "Enter";
    }
    addHistory();
    const form = document.querySelector("form");
    const items = document.querySelector(".items");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const test = document.querySelector("input[type=text]");

        if (!test) {
            console.log(Error("Please enter a value"));
            test.focus();
            return;
        }

        const show = document.querySelector(".value > button");
        const result = eval(test.value);
        if (typeof result === "number") {
            show.innerHTML = result;
            test.focus();
            if (items.hasChildNodes()) {
                if (items.firstChild.firstChild.textContent === test.value) {
                    return;
                }
            }
        } else {
            test.focus();
            return;
        }
        let ob = {
            value: test.value,
            result: result,
        };
        save.push(ob);
        window.localStorage.setItem("items", JSON.stringify(save));

        let item = document.createElement("div");
        item.className = "item";
        item.id = ob.value;

        let btn1 = document.createElement("button");
        btn1.className = "calc";

        let h1 = document.createElement("h1");
        let icon = document.createElement("i");
        icon.className = "fa-solid fa-right-long";

        let btn2 = document.createElement("button");
        btn2.className = "value";

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";

        btn1.innerHTML = test.value;
        h1.appendChild(icon);
        btn2.innerHTML = result;
        deleteBtn.innerHTML = "Delete";

        item.appendChild(btn1);
        item.appendChild(h1);
        item.appendChild(btn2);
        item.appendChild(deleteBtn);
        items.insertBefore(item, items.firstChild);

        // delete item
        deleteBtn.addEventListener("click", function () {
            for (let i in save) {
                if (save[i].value == this.parentElement.id) {
                    save.splice(i, 1);
                }
            }
            this.parentElement.remove();
            window.localStorage.setItem("items", JSON.stringify(save));
        });
    });
});
function addHistory() {
    if (window.localStorage.getItem("items")) {
        let items = document.querySelector(".items");
        let result = JSON.parse(localStorage.getItem("items"));
        for (let i = 0; i < result.length; i++) {
            let item = document.createElement("div");
            item.className = "item";
            item.id = result[i].value;

            let btn1 = document.createElement("button");
            btn1.className = "calc";

            let h1 = document.createElement("h1");
            let icon = document.createElement("i");
            icon.className = "fa-solid fa-right-long";

            let btn2 = document.createElement("button");
            btn2.className = "value";

            let deleteBtn = document.createElement("button");
            deleteBtn.className = "delete";

            h1.appendChild(icon);
            btn1.innerHTML = result[i].value;
            btn2.innerHTML = result[i].result;
            deleteBtn.innerHTML = "Delete";

            item.appendChild(btn1);
            item.appendChild(h1);
            item.appendChild(btn2);
            item.appendChild(deleteBtn);
            items.insertBefore(item, items.firstChild);
            deleteBtn.addEventListener("click", function () {
                for (let i in save) {
                    if (result[i].value == this.parentElement.id) {
                        save.splice(i, 1);
                    }
                }
                window.localStorage.setItem("items", JSON.stringify(save));
                this.parentElement.remove();
            });
        }
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 900) {
        document.querySelector("span").innerHTML = "Enter";
    }
});

const names = ["Alice", "Bob", "Charlie", "David"];
const selectorDiv = document.querySelector(".test");

function printNamesOne(names, selector) {
    const div = document.querySelector(selector);
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    return names.reduce((prevPromise, name) => {
        return prevPromise.then(async () => {
            for (let i = 0; i < name.length; i++) {
                div.textContent += name[i];
                await delay(70);
            }
            await delay(5000);
            for (let i = name.length; i > 0; i--) {
                div.textContent = div.textContent.slice(0, -1);
                await delay(25);
            }
            await delay(2000)
        });
    }, Promise.resolve());
}

function printNames(namesArray, selector) {
    let lastRandomIndex = -1;
    let currentIndex;
    const nameLength = namesArray.length;
    const selectorDiv = document.querySelector(selector);
    function printName(name) {
        let letters = name.split("");
        let i = 0;
        setTimeout(()=>{

            let intervalID = setInterval(function () {
                if (i < letters.length) {
                    selectorDiv.textContent += letters[i];
                    i++;
                } else {
                    clearInterval(intervalID);
                    setTimeout(function () {
                        deleteName(letters);
                    }, 5000);
                }
            }, 70);

        },3000)
    }

    function deleteName(letters) {
        let i = letters.length - 1;
        
            let intervalID = setInterval(function () {
                if (i >= 0) {
                    selectorDiv.textContent = selectorDiv.textContent.slice(0, -1);
                    i--;
                } else {
                    clearInterval(intervalID);
                    printRandomName();
                }
            }, 20);

        
    }
    
    
    function printRandomName() {
        do {
            currentIndex = Math.floor(Math.random() * nameLength);
        } while (currentIndex === lastRandomIndex);

        lastRandomIndex = currentIndex;
        printName(namesArray[currentIndex]);
    }

    printRandomName();
}


