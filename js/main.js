 let style = document.createElement('style');

 let cards = document.querySelectorAll(".card")
 cards.forEach(cards => {
    cards.addEventListener('click',()=>{
      cards.style.boxShadow = "10px 20px 30px rgb(0,0,0)";   
     
    })

})


    
let img = cards.querySelector(".card-img-top")
img.addEventListener("dblclick",() => {
    cards.remove();

})



let cardbody = document.querySelectorAll(".card-body")
cardbody.forEach(card => {
card.addEventListener("mouseover",()=>{
  card.style.backgroundColor ="rgb(59, 54, 54)"
  card.style.color ="white"
})

});

