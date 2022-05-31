let main = document.querySelector('.main');

let cellId = 1;

for (let i = 0; i < 6; i++) {

    let row = document.createElement('div');
    let brOpen = document.createElement('div');
    brOpen.textContent = '(';
    brOpen.classList.add('brOpen','extras');

    row.appendChild(brOpen);
    row.classList.add('row', 'container');

    main.appendChild(row);

    for (let j = 0; j < 3; j++) {
        let block = document.createElement('div');
        block.classList.add('block', 'container');
        row.appendChild(block);

        for (let k = 0; k < 3; k++) {
            let cell = document.createElement('div');
            cell.classList.add('cell',`id${cellId}`);
            cellId++;
            block.appendChild(cell);
        }

        let comma = document.createElement('div');
        comma.textContent = ',';
        comma.classList.add('comma','extras');
        
        if(j < 2) {
            row.appendChild(comma);
        }



    }

    let brClose = document.createElement('div');
    brClose.textContent = ')';
    brClose.classList.add('brClose','extras');

    row.appendChild(brClose);


}