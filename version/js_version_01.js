
let numColm
let tableContainer= document.querySelector('#table_container')
let tableHeadArray=['th-a', 'th-b','th-c','th-d','th-e','th-f','th-g','th-h']
function createTable(numRow,numColm) {
  tableContainer.innerHTML= ''       
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const tableHead = document.createElement("thead");
  const tableFooter = document.createElement("tfoot");
       
    for ( let i=0 ; i<numRow;i++){                       
          //let row =document.createElement('tr')
                        
          if(i==0){
              let row =document.createElement('tr')
              for(let j=0; j<numColm ; j++){
                let headCell =document.createElement('th')
                headCell.innerHTML=tableHeadArray[j]

                row.append(headCell)              
              }
              row.setAttribute('class','row1 row2')
              tableHead.append(row);
          }
          
          else if (i<numRow-1) {
              let row =document.createElement('tr')
              for(let j=0; j<numColm ; j++){
                let bodyCell =document.createElement('td')
                let cellText = document.createTextNode("table-data");                     
                bodyCell.append(cellText);
                row.append(bodyCell) 
              }  
          row.setAttribute('class','row1 row2')
          tableBody.append(row);
          tableBody.append(row);        
          }
          
          else {
              let row =document.createElement('tr')
              for(let j=0; j<numColm ; j++){
                let footerCell =document.createElement('td')
                let cellText = document.createTextNode("footer-data");                     
                footerCell.append(cellText);
                row.append(footerCell) 
              }  
         row.setAttribute('class','row1 row2')
         tableFooter.append(row);         
        }

    }   
    table.append(tableHead,tableBody,tableFooter)
    tableContainer.append(table);

}
console.log(tableContainer)
createTable(10,6)
