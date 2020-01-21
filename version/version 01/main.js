//  const  =document.querySelector('')
let numRow,numColm,tWidth,borWidth,fSize,fweight,textAlig,borColp,tableBg,headBg,bodybg,borColor,fColor
let tableContainer= document.querySelector('#table_container')
let tableHeadArray=['th-a', 'th-b','th-c','th-d','th-e','th-f','th-g','th-h']
const numOfRow =document.querySelector('#num_Row')
const numOfColm=document.querySelector('#num_Colm')
const tableWidth =document.querySelector('#table_width')
const borderWidth =document.querySelector('#border_width')
const tableBackground =document.querySelector('#table_background')
const headBackground =document.querySelector('#head_background')
const bodyBackground =document.querySelector('#body_background')
const borderColor =document.querySelector('#border_color')
const fontColor =document.querySelector('#font_color')
const borderCollpse =document.querySelector('#border_collapse')
const fontType =document.querySelector('#font_type')
const fontWeight =document.querySelector('#font_weight')
const textAlign=document.querySelector('#text_align')
const fontSize=document.querySelector('#font_size')
const btnTableGenerate =document.querySelector('#btn_table_generate')
const btnCodeGenerate =document.querySelector('#btn_code_generate')
const inputContainer= document.querySelector('#inputContainer')


function createTable(numRow,numColm,tWidth,borWidth,fSize,fType,fweight,textAlig,borColp,tableBg,headBg,bodybg,borColor,fColor) {
  tableContainer.innerHTML= ''  
  tableContainer.textContent='' 
  console.log(tableContainer.textContent)
  console.log(tableContainer.innerHTML)
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const tableHead = document.createElement("thead");
  const tableFooter = document.createElement("tfoot");
  //
  table.setAttribute('width',tWidth)
  table.setAttribute('border',borWidth)
  table.style.fontSize = fSize
  table.style.fontFamily=fType
  table.style.fontWeight=fweight
  table.style.textAlign=textAlig
  table.style.borderCollapse=borColp
  table.style.background=tableBg
  tableHead.style.background=headBg
  tableBody.style.background= bodybg
  table.style.borderColor=borColor
  table.style.color=fColor

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
     return tableContainer
}


let generateTable = function(){
  numRow= numOfRow.value
  numColm=numOfColm.value
  tWidth=tableWidth.value+'%'
  borWidth=borderWidth.value+'px solid black'
  tableBg=tableBackground.value
  headBg=headBackground.value
  bodybg=bodyBackground.value
  borColor=borderColor.value
  fColor=fontColor.value
  borColp=borderCollpse.value
  if(borderCollpse.checked) borColp='collapse'
  else borColp='separate'
  fType=fontType.value
  fweight=fontWeight.value
  textAlig=textAlign.value
  fSize=fontSize.value+'px'
  createTable(numRow,numColm,tWidth,borWidth,fSize,fType,fweight,textAlig,borColp,tableBg,headBg,bodybg,borColor,fColor)
  }
//================
btn_table_generate.addEventListener('click',generateTable)
btn_code_generate.addEventListener('click', function(){ 
  tableContainer.textContent= tableContainer.innerHTML
})
//==================
console.log(inputContainer)
inputContainer.addEventListener('click',generateTable)




// document.querySelectorAll("#digitInput, #colorInput, #fontInput").forEach(function(el) {
//   el.addEventListener("keypress", function(e) {
//     let key = e.which || e.keyCode || 0;
//     if (key === 13) {
//        generateTable()
//     }
//   });
// });


// element.addEventListener("keypress", function(e) {
//   let key = e.which || e.keyCode || 0;
//   if (key === 13) {
//      generateTable()
//   }
// });


