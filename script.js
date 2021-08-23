create_grid(16);
function create_grid(num){
    const container = document.querySelector('.container');
    container.style.cssText = "grid-template-columns: repeat("+num+",minmax(0,1fr));";
    for(i=1;i<=num*num;i++){
        const newdiv = document.createElement('div');
        newdiv.classList.toggle('blank');
        container.appendChild(newdiv);
        newdiv.addEventListener('mouseover',ink);
    }
}

function delete_grid(){
    const container = document.querySelector('.container');
    const grids= document.querySelectorAll('.blank');
    grids.forEach((grid)=>{
        container.removeChild(grid);
    });
}

function num_value(){
    let num= document.getElementById("grid-value").value;
    if(!(num>0&&num<=100)){
        alert("Please enter a value from 1 to 100");
        return;
    }
    console.log(num);
    clear_screen();
    delete_grid();
    create_grid(num);
}

function clear_screen(){
    const grids=document.querySelectorAll('.hovered');
    grids.forEach((grid)=>{
        grid.classList.remove('hovered');
        grid.classList.add('blank');
});
}
    

function ink(){
    this.classList.remove('blank');
    this.classList.add('hovered');
}


