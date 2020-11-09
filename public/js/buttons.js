// grab all the buttons

export class Buttons {
    constructor() {
        this.buttons = document.querySelectorAll(".selectSection button");

        button.addEventListener()
    }

}

let Buttons = document.querySelectorAll(".selectSection button");

// loop through the buttons using for..of 
for (let button of Buttons) {

    // listen for a click event 
    button.addEventListener('click', (e) => {
        // Store the event target in a const
        const et = e.target;

        // select active class
        const active = document.querySelector(".active");

        /* when a button is clicked, remove the active class 
        from the button that has it */
        if (active) {
            active.classList.remove("active");
        }

        // Add active class to the clicked element
        et.classList.add("active");     

        // select all classes with the name content
        let allContent = document.querySelectorAll('.content');

        // loop through all content classes
        for (let content of allContent) {

            /* display the content if the value in the data attribute of the button and content are the same */
            if(content.getAttribute('data-number') === button.getAttribute('data-number')) {
                content.style.display = "block";
            }

            // if it's not equal then hide it.
            else {
                content.style.display = "none";
            }
        }
    });
}


// const table = document.createElement(table);
// const thead = document.createElement(thead);
// const tbody = document.createElement(tbody);
// const tr = document.createElement(tr);
// const th = document.createElement(th);
// const td1 = document.createElement(td);
// const td2 = document.createElement(td);


// let data1 = document.createTextNode("안녕");
// let data2 = document.createElement("no");

// td1.appendChild(data1);
// td2.appendChild(data2);

// tr.appendChild(td1);
// tr.appendChild(td2);

// let table = document.getElementById("table");
// table.appendChild(tr);