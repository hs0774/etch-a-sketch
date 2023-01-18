const grid = document.querySelector('.container');
const color =document.getElementById('color');
const reset =document.getElementById('reset');
const erase =document.getElementById('erase');

document.getElementById('submitbutton').onclick = function (){
    let x = document.getElementById('size').value;
    deleteGrid();
    createGrid(x);
}


function createGrid(x){   
    for(let i=0;i<x;i++){
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(let j=0;j<x;j++){
            let column= document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
            column.addEventListener('mouseover',() => {
                column.style.backgroundColor="black";
            });
            erase.addEventListener('click',() => {
                column.addEventListener('mouseover',() => {
                         column.style.backgroundColor="white";
                     });
             });
             color.addEventListener('click',() => {
                column.addEventListener('mouseover',() => {
                         column.style.backgroundColor="black";
                     });
             });
           
        }
       
    }
 

}

function resetit(){
    reset.addEventListener('click',() => {
      document.querySelectorAll('.column').forEach(e => 
        e.style.backgroundColor="");
 });
}


function deleteGrid() {
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}
createGrid(16);
resetit();

