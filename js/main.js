let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    
    card.addEventListener('click', () => {
        card.style.boxShadow = "10px 20px 30px rgb(0,0,0)";   
    });

    
    let img = card.querySelector(".card-img-top");
    img.addEventListener("dblclick", () => {
        card.remove(); 
    });

   
    let cardbody = card.querySelector(".card-body");

    cardbody.addEventListener("mouseover", () => {
        cardbody.style.backgroundColor = "rgb(59, 54, 54)";
        cardbody.style.color = "white";
    });

    cardbody.addEventListener("mouseout", () => {
        cardbody.style.backgroundColor = "";
        cardbody.style.color = "";
    });
});


let button = document.querySelector(".newsletter");
button.addEventListener('click', () => {
    alert("L'adresse est inscrite à la newsletter");
});
