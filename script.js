var m = 64;

const grid = document.querySelector('.grid');
let input = document.querySelector('input');
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        deleteGrid(m);
        createGrid(Math.pow((input.value),2));
        m = Math.pow((input.value),2);

        
      // code for enter
    }
});


function createGrid(n){
    let perc = (1/Math.sqrt(n)*100)+"%"
    console.log(perc)

    for (i=0;i<n;i++){
        let box = document.createElement('div');
        grid.appendChild(box);
        box.addEventListener('click',()=>{
            box.style.backgroundColor = 'black';
        })
    }
    let allitems = document.querySelectorAll('div.grid div');
    for (i=0;i<n;i++){

    allitems[i].style.height = perc;
    allitems[i].style.width = perc;
   
}

}

createGrid(64);

function deleteGrid(n){
    for (i=0;i<n;i++){
        grid.removeChild(document.querySelector('div.grid div'));
    }
}




const button = document.querySelector('button');
button.addEventListener('click',()=>{
    deleteGrid(m);
    createGrid(m);
    
})