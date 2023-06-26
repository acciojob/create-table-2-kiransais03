function createTable() {
    //Write your code here
  let rows=prompt("Input number of rows",0);
  let cols=prompt("Input number of columns",0);
 let table=document.getElementById('myTable');
	for(let i=0;i<rows;i++)
		{
			let newRow=document.createElement('tr');
			for(let j=0;j<cols;j++)
				{
					let newCell = document.createElement('td');
					newCell.innerText =`Row-${i} Column-${j}`;
					newRow.append(newCell);
				}
			table.append(newRow);
		}
}
