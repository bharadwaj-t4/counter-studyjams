var count = 0;

const h1 = document.querySelector('h1');

const addButton = document.getElementById('add')

const subButton = document.getElementById('sub')

h1.innerHTML = count;

addButton.addEventListener("click",()=>{
    count=count+1
    h1.innerHTML=count
})

subButton.addEventListener("click",()=>{
    count=count-1
    h1.innerHTML=count
})


