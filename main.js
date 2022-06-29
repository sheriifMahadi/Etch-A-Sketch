const grid_container = document.querySelector(".grid")
const grid_button = document.querySelector('.grid-button')
const random_button = document.querySelector('.random-button')
const color_button = document.querySelector('.color-button')
const reset_button = document.querySelector('.reset-button')


function createGrid(number_of_grid) {

    // Function to create default grid with 16x16 sides.
    let grid;
    let size = number_of_grid
    let pixels = `${25}px`
    number_of_grid = number_of_grid * number_of_grid

    for (let i=1; i < number_of_grid+1; i++) {
        grid = document.createElement('div')
        grid.textContent = ""
        grid.classList.add(`c${i}`, "grid-div")
        grid_container.appendChild(grid)
    }    

    // Set the grid rows and column using dynamic properties. 
    // Adjust pixel size based on input to accomodate screen size.
    if (size < 16) {
        pixels = `${30}px`
    }
    if (size >= 16 <= 25) {
        pixels = `${25}px`
    }
    
    if (size >= 26 ){
        pixels = `${15}px`
    }
    
    grid_container.style.gridTemplateColumns = `repeat(${size}, ${pixels})`
    grid_container.style.gridTemplateRows = `repeat(${size}, ${pixels})`
    addColor()

}


function setGridSize() {
    // Collect input from user and set the pixel sizes for the grid
    grid_button.addEventListener('click', () => {
        grid_container.innerHTML='';
        grid_size = Number(Math.floor(prompt("Enter the grid size you desire. Max: 100")))   
        if (grid_size > 100 || isNaN(grid_size) || grid_size == ''){
            createGrid(16)
        }
        else {
            createGrid(grid_size)
        }
    })
    
}

function addColor() {

    // Set the color for the cells. Either the default black random color 
    // or pass an arguement on which color to put
    const cells = document.querySelectorAll('.grid-div')
    cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black"
    })
    })

    // Generate a random color and change background every time the mouse move
    random_button.addEventListener("click", () => {
        cells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
                const color = `#${Math.floor(Math.random()*16777215).toString(16)}`
                cell.style.backgroundColor = color
                console.log(color)
            })
        })
    })

    // collect user color and change background
    color_button.addEventListener("click", () => {
        let color_arg = String(prompt("Enter The Color You Wish"))
        cells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
                const color = `#${Math.floor(Math.random()*16777215).toString(16)}`
                cell.style.backgroundColor = color_arg
            })
        })
    })
}

function reset(grid_size) {
    // Reset the board to default color; white
    reset_button.addEventListener("click", () => {
        const cells = document.querySelectorAll('.grid-div')

        cells.forEach(cell => {
            cell.style.backgroundColor = "white"
        })
 

    })
}


createGrid(16)
setGridSize()
reset()