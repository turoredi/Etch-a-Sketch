document.addEventListener('DOMContentLoaded', function() {

    function createGrid(n) {
        for (let i = 0; i < n * n; i++) {
            let div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.flexGrow = '0';
            div.style.flexShrink = '0';
            div.style.flexBasis = `calc(100% / ${n})`;
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = 'black';
            });
            div.addEventListener('mouseout', function() {
                // Use a closure to capture the correct reference to div
                setTimeout(function(currentDiv) {
                    currentDiv.style.backgroundColor = 'white';
                }, 3000, div);
            });
            document.querySelector('.grid-container').appendChild(div);
        }
    }
    
    createGrid(16);

    // get ChangeGrid class button
    const changeGrid = document.querySelector('.change-grid');
    
    // add event listener to changeGrid
    changeGrid.addEventListener('click', function() {
        // remove all divs from grid-container
        const gridContainer = document.querySelector('.grid-container');
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        
        // prompt user for new grid size
        let n = parseInt(prompt("Enter new grid size (1-100): "));
        
        // create new grid
        createGrid(n);
    });

});
