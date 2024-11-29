const tab_links=document.getElementsByClassName('tab-btns');
const tab_cont=document.getElementsByClassName('tabcontent');
const dbname=document.querySelector('.dbname');
const create=document.getElementById('create');
const success=document.querySelector('.success');
const suctxt=document.querySelector('.suctext');
const database=document.querySelector('.databases');
const table=document.querySelector('#CREATETABLE')
const table_comp=document.querySelector('#TABLECOMP')
const db=document.getElementById('databases');
const tab_data=document.querySelector('.tab-data');
let rowData = []; 
let columnData = []; 
let tablename="";
for (let i = 0; i < tab_links.length; i++) {
  tab_links[i].addEventListener("click", function() {
      for (let j = 0; j < tab_cont.length; j++) {
          tab_cont[j].style.display = "none";
          tab_links[j].classList.remove('active');       
        }
      tab_cont[i].style.display = "block";
      tab_links[i].classList.add('active'); 
  });
}
 function hideDiv() {
  const div = document.querySelector('.success');
  div.style.display = 'none';
}
setTimeout(hideDiv, 2000);
const createTableDiv = document.querySelector('#CREATETABLE');
create.addEventListener('click', function() {
  if (dbname.value === "") {
    success.style.display = 'none';
  } else {
    suctxt.innerHTML = '<i class="fa-solid fa-database"></i>' + dbname.value + " database created successfully";
    success.style.display = 'block';
    setTimeout(hideDiv, 2000);
    const Element = document.createElement('button');
    Element.className = 'db-det';
    Element.innerHTML = '<i class="fa-solid fa-database"></i>  ' + dbname.value;
    Element.style.backgroundColor = "black"; 
    Element.style.color = "white";
    Element.style.height = "50px";
    Element.style.width = "100%";
    database.appendChild(Element);
    Element.addEventListener('click', function() {
        for(let i=0;i<tab_cont.length;i++){
            tab_cont[i].style.display = 'none'; 
        }
      createTableDiv.style.display = 'block'; 
    });
  }
});
const firstInputName = document.getElementById('firstinput-name');
const firstInputCol = document.getElementById('firstinput-col');
const secondInputName = document.getElementById('secondinput-name');
const secondInputCol = document.getElementById('secondinput-col');
const tab_btn = document.querySelector('.tab-create');
const dynamicInputsContainer = document.createElement('div'); 
dynamicInputsContainer.className='tabcontent';
firstInputName.style.paddingLeft='10px';
firstInputCol.style.paddingLeft='10px';
secondInputName.style.paddingLeft='10px';
secondInputCol.style.paddingLeft='10px';
let colvalues=[];
let rowvalues = [];  

function createInputs(numCols) {
    dynamicInputsContainer.innerHTML = '';
    dynamicInputsContainer.style.display='flex'; 
    dynamicInputsContainer.style.flexDirection='column'; 
    for (let i = 1; i <= numCols; i++) {
        const create_input_label = document.createElement('label');
        const create_input = document.createElement('input');
        create_input_label.style.padding='5px';
        create_input.style.height='30px';
        create_input.style.width='300px';
        create_input.style.borderRadius='10px';
        create_input.style.paddingLeft='10px';
        create_input_label.textContent = `Column ${i}`;
        create_input_label.style.color = "black";
        create_input.type ='text';
        create_input.classList.add('dynamic-input'); 
        dynamicInputsContainer.appendChild(create_input_label);
        dynamicInputsContainer.appendChild(create_input);
        dynamicInputsContainer.appendChild(document.createElement('br')); 
    }
    const proceed_btn=document.createElement('button');
    proceed_btn.style.backgroundColor="dodgerblue";
    proceed_btn.textContent="proceed";
    proceed_btn.style.width="70px";
    proceed_btn.style.height="30px";
    proceed_btn.style.borderRadius='5px';
    proceed_btn.style.padding='5px';
    dynamicInputsContainer.appendChild(proceed_btn);
    table_comp.appendChild(dynamicInputsContainer); 
    proceed_btn.addEventListener('click',function(){
      console.log('GANESH');
      colvalues = []; // Clear previous column values
    for (let i = 0; i < numCols; i++) {
      colvalues.push(dynamicInputsContainer.querySelectorAll('input')[i].value);
    }
    console.log('Column values:', colvalues);
      for(let i=0;i<tab_cont.length;i++){
            tab_cont[i].style.display='none';
      }
      table_comp.style.display='none';
      const Element=document.createElement('div');
      const disp=document.createElement("button");
      disp.style.height="50px";
      disp.style.width="250px";
      disp.style.backgroundColor="dodgerblue";
      disp.style.borderRadius="10px";
      disp.textContent="Display Table";
      disp.style.color="white";
      Element.className='tabcontent';
      tab_data.appendChild(Element);
      Element.style.height='100%';
      Element.style.width='100%';
      Element.style.display='block';
      Element.style.padding='50px';
      Element.style.backgroundColor='#ccc';
      const rows_label=document.createElement('label');
      rows_label.textContent='Enter No of Rows:';
      const input_rows=document.createElement('input');
      input_rows.style.outline='none';
      input_rows.type = 'number';
      const submit_btn = document.createElement('button');
      const add_btn = document.createElement('button');
      submit_btn.textContent = 'submit';
      add_btn.textContent = 'Insert row';
      Element.appendChild(rows_label);
      Element.appendChild(input_rows);
      Element.appendChild(submit_btn);
      Element.appendChild(add_btn);
      Element.appendChild(disp);
      submit_btn.style.height='40px';
      submit_btn.style.width='70px';
      submit_btn.style.borderRadius='10px';
      submit_btn.style.backgroundColor='dodgerblue';
      submit_btn.style.margin='40px';
      add_btn.style.height='40px';
      add_btn.style.width='100px';
      add_btn.style.borderRadius='10px';
      add_btn.style.backgroundColor='dodgerblue';
      add_btn.style.margin='40px';
      submit_btn.addEventListener('click', function() {
        console.log(input_rows.value); 
        Element.appendChild(createInputrows(input_rows.value,firstInputCol.value));
        // const rowCount = input_rows.value;
        // console.log(`Creating ${rowCount} rows...`);
        // Element.appendChild(createInputrows(rowCount, colvalues.length));
    });
  
  
add_btn.addEventListener('click', function(i) {
    console.log(`Adding row ${currentRowNumber}`);
    const currentRowNumber = rowvalues.length + 1;

    // Element.appendChild(createInputrows(i, parseInt(firstInputCol.value), currentRowNumber));
    // currentRowNumber++;  // Increment row number after adding a row
    Element.appendChild(createInputrows(1, colvalues.length));
  });

disp.addEventListener('click', function () {
  for (let i = 0; i < tab_cont.length; i++) {
      tab_cont[i].style.display = 'none';
  }
  table_comp.style.display = 'none';
  const Element = document.createElement('div');
  Element.className = 'tabcontent';
  Element.style.height = '100%';
  Element.style.width = '100%'; 
  tab_data.style.display = 'flex';
  tab_data.style.flexWrap='wrap';
  tab_data.style.overflowY="SCROLL";
  tab_data.style.justifyContent = 'center';
  tab_data.style.alignItems = 'center'; 
  Element.style.display = 'flex';
  Element.style.justifyContent = 'center';
  Element.style.alignItems = 'center';
  Element.style.padding = '50px';
  tab_data.style.backgroundColor = 'white';
  displayTable(rowvalues); 
  tab_data.appendChild(Element);
});

function displayTable(rowvalues) {
  const tableElement = document.createElement('table');
  tableElement.padding='20px';
  const caption=document.createElement('caption');
  caption.textContent = tablename || "Table"; 
  tableElement.appendChild(caption);
  caption.className='caption';
  tableElement.style.backgroundColor = "white";
 tableElement.style.width = '500px';
  tableElement.style.border = '2px solid black';
  const headerRow = document.createElement('tr');
  
  colvalues.forEach(col => {
    const th = document.createElement('th');
    th.style.border = '2px solid black'; 
    th.textContent = col;
    headerRow.appendChild(th);
  });
  
  tableElement.appendChild(headerRow);

  rowvalues.forEach(row => {
    const tr = document.createElement('tr');
    
    row.forEach(input => {
      const td = document.createElement('td');
      td.style.border = '2px solid black';  
      tr.style.textAlign = 'center';
      td.textContent = input.value || '';  
      tr.appendChild(td);
    });
    
    tableElement.appendChild(tr);
  });

  tab_data.appendChild(tableElement); 


}} )}
 function createInputrows(numRows, numCols) {
  const container = document.createElement('div');
  container.style.marginTop = '20px';
  
  for (let i = 0; i < numRows; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row-container';
    rowContainer.style.marginBottom = '10px';

    const inputLabel = document.createElement('label');
    inputLabel.textContent = `Row ${i + 1}: `;
    rowContainer.appendChild(inputLabel);

    const rowInputs = [];  // Ensure this is an array to store input values for the row
    for (let j = 0; j < numCols; j++) {
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.placeholder = `Column ${j + 1}`;
      inputField.style.marginRight = '10px';
      rowInputs.push(inputField);  // Store input fields for this row
      rowContainer.appendChild(inputField);
    }

    container.appendChild(rowContainer);
    rowvalues.push(rowInputs); // Store the row inputs in the global array
  }
  return container;
}
function displayTable(rowvalues) {
  const tableElement = document.createElement('table');
  const caption=document.createElement('caption');
  caption.innerHTML=tablename[0];
  tableElement.appendChild(caption);
  const headerRow = document.createElement('tr'); 
  colvalues.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col;
    headerRow.appendChild(th);
  });
  
  tableElement.appendChild(headerRow);

  rowvalues.forEach(row => {
    const tr = document.createElement('tr');
    
    row.forEach(input => {
      const td = document.createElement('td');
      td.textContent = input.value || ''; 
      tr.appendChild(td);
    });
    
    tableElement.appendChild(tr);
  });

  table_comp.appendChild(tableElement);
}
  function rowdata(numCols)
  {
    dynamicInputsContainer.innerHTML = '';
    dynamicInputsContainer.style.display='flex'; 
    dynamicInputsContainer.style.flexDirection='column'; 
    for(let i=1;i<=numCols;i++ ){
    for (let j = 1; j <= numCols; j++) {
        const create_input_label = document.createElement('label');
        const create_input = document.createElement('input');
        create_input_label.style.padding='5px';
        create_input.style.height='30px';
        create_input.style.width='300px';
        create_input.style.borderRadius='10px';
        create_input.style.paddingLeft='10px';
        create_input_label.textContent = `Column ${i}`;
        create_input_label.className='colname';
        create_input_label.style.color = "black";
        create_input.type ='text';
        create_input.classList.add('dynamic-input'); 
        dynamicInputsContainer.appendChild(create_input_label);
        dynamicInputsContainer.appendChild(create_input);
        dynamicInputsContainer.appendChild(document.createElement('br')); 
        dynamicInputsContainer.appendChild()
    }
  }
  }
tab_btn.addEventListener('click', function(e) {
    e.preventDefault();
    for (let i = 0; i < tab_cont.length; i++) {
        tab_cont[i].style.display = 'none';
    }
    table_comp.style.display = 'block';
    secondInputName.value = firstInputName.value;
    secondInputCol.value = firstInputCol.value;
    const numCols = parseInt(firstInputCol.value, 10);
    if (!isNaN(numCols) && numCols > 0) {
        createInputs(numCols);
    }
});
firstInputName.addEventListener('input', function() {
    secondInputName.value = firstInputName.value;
    tablename=firstInputName.value;
});
firstInputCol.addEventListener('input', function() {
    secondInputCol.value = firstInputCol.value;
});



 