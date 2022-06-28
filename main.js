
const grid_container = document.querySelector(".grid")
const grid_button = document.querySelector('.grid-button')

function createGrid(number_of_grid) {
    // Function to create default grid with 16x16 sides.
    let grid;
    let size = number_of_grid
    let pixels = `${25}px`
    number_of_grid = number_of_grid * number_of_grid

    for (let i=1; i < number_of_grid+1; i++) {
        grid = document.createElement('div')
        grid.textContent = ""
        grid.classList.add(`l${i}`, "grid-div")
        grid_container.appendChild(grid)
    }    

    // Set the grid rows and column using dynamic properties. 
    // Adjust pixel size based on input to accomodate screen size.
    if (size < 16) {
        pixels = `${30}px`
        console.log(pixels)
    }
    if (size >= 16 <= 25) {
        pixels = `${25}px`
        console.log(pixels)
    }
    
    if (size >= 26 ){
        pixels = `${15}px`
        console.log(pixels)
    }
    
    grid_container.style.gridTemplateColumns = `repeat(${size}, ${pixels})`
    grid_container.style.gridTemplateRows = `repeat(${size}, ${pixels})`
    
}

function setGridSize() {
    // Collect input from user and set the pixel sizes for the grid
    grid_button.addEventListener('click', () => {
        grid_container.innerHTML='';
        grid_size = Number(prompt("Enter the grid size you desire. Max: 100"))   
        if (grid_size > 100|| isNaN(grid_size) || grid_size == ''){
            createGrid(16)
        }
        else {
            createGrid(grid_size)
        }
    
    })
    
}
createGrid(16)
setGridSize()












