/**
 *  Events - 
 *  instead of using onclick() in html inline, use the same onclick() in js as an arrow function.
 *  
 *  listerners - add event listener will take argument event, and one callback. Can be used in place of events.
 * 
 * btn1.addEventListener("click", () => {
    
})
 */
let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    try {
        let response = await fetch("https://fakestoreapi.com/products/", {method : "GET"});
    if (!response.ok) {
        throw new Error(response.statusText);
    } else {
        let data = await response.json();
        displayData(data);
    }
    } catch (error) {
        console.error(error);
    }
})

function displayData(data) {
    let container = document.getElementsByClassName("container")[0];
    data.forEach((element, index) => {
        let item = document.createElement("div");
        item.innerHTML = `
            <img src='${element.image}'>
            <p>${element.title}</p>
            <p>${element.category}</p>
            <button id="btn-${index}">Remove</button>`;
        container.appendChild(item);
        
        let button = document.getElementById(`btn-${index}`);
        let elementID = async (index) => {

        }
        button.onclick = async () => {
            try {
                let getResponse = await fetch("https://fakestoreapi.com/products/", {method : "GET"});
                if (!getResponse.ok) {
                    throw new Error(getResponse.statusText);
                } else {
                    let data = await getResponse.json();
                    var elementId = data[index]['id'];
                    // console.log(elementId);
                }
                let response = await fetch(`https://fakestoreapi.com/products/${elementId}`, 
                    {method : "DELETE", "contentType" : "application/json" })
                    if (!response.ok) {
                        throw new Error(response.status + " " + response.statusText);
                    }
                    else {
                        console.log("Data item deleted successfully");
                    }
            } catch (error) {
                console.error(error)
            }
            // item.remove();
        }
    });
    document.body.appendChild(container);
}
