// index.js

// Callbacks
const handleClick = (ramen) => { 
  
  const ramenDetail = document.querySelector('#ramen-detail')
  ramenDetail.querySelector('.detail-image').src= ramen.image
  ramenDetail.querySelector('.name').textContent = ramen.name
  ramenDetail.querySelector('.restaurant').textContent=ramen.restaurant
  
const ratingDisplay = document.querySelector('#rating-display') 
ratingDisplay.textContent = ramen.rating  

  const commentDisplay = document.querySelector('#comment-display') 
  commentDisplay.textContent = ramen.comment 


  

};

const addSubmitListener = (e) => {
  // // Add code
  e.preventDefault ()  
    const newRamen = { 
      name: document.getElementById('new-name').value, 
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
      id: 0
    }
  console.log(newRamen)
    displayRamens([newRamen])
};


   

    
  



const displayRamens = (ramenArr) => {
  const ramenContainer = document.querySelector('#ramen-menu')
 
  ramenArr.forEach((ramenObj)=> {
   
    const card = document.createElement('div')
   

  
    const img = document.createElement('img') 
    img.src= ramenObj.image  
    
     
    card.appendChild(img)  
    ramenContainer.appendChild(card)

    card.addEventListener('click',() => { 
      handleClick(ramenObj)
    })
}) 
};

const main = () => {
  // Invoke displayRamens here 
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((data) => displayRamens(data));
  
  // Invoke addSubmitListener here
  const form = document.querySelector("#new-ramen")
  form.addEventListener("submit",(e) => addSubmitListener(e))
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}; 




