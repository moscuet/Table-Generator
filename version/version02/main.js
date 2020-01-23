
let numRow,numColm,tWidth,borWidth,fSize,fweight,textAlig,borColp,tableBg,headBg,bodybg,borColor,fColor
let tableContainer= document.querySelector('#table_container')
let tableHeadArray=['th-A', 'th-B','th-C','th-D','th-E','th-F','th-G','th-H','th-I','th-J','th-K','th-L']
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
const btnCopy=document.querySelector("#btn_copy")


function createTable() {
  tableContainer.innerHTML= '' 
  btnCopy.textContent='' 
  btnCopy.innerHTML='copy'
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const tableHead = document.createElement("thead");
  const tableFooter = document.createElement("tfoot");
  table.setAttribute('width',tableWidth.value+'%')
  table.setAttribute('border',borderWidth.value+'px solid black')
  table.style.fontSize = fontSize.value+'px'
  table.style.fontFamily=fontType.value
  table.style.fontWeight=fontWeight.value
  table.style.textAlign=textAlign.value
  table.style.background=tableBackground.value
  tableHead.style.background=headBackground.value
  tableBody.style.background= bodyBackground.value
  table.style.borderColor=borderColor.value
  table.style.color=fontColor.value
  tableContainer.style.padding='20px'
  tableContainer.style.height= 'calc(100% - 514px)'
  tableContainer.style.minHeight = "calc(100vh - 514px"
  if(borderCollpse.checked) table.style.borderCollapse=borderCollpse.value
  else table.style.borderCollapse='separate'

  for ( let i=0 ; i<numOfRow.value;i++){                                           
    if(i==0){
      let row =document.createElement('tr')
      for(let j=0; j<numOfColm.value ; j++){
        let headCell =document.createElement('th')
        headCell.innerHTML=tableHeadArray[j]
        row.append(headCell)
        row.style.lineHeight= '30px'              
      }
      row.setAttribute('class','row1 row2')
      tableHead.append(row);
    }
        
    else if (i<numOfRow.value-1) {
      let row =document.createElement('tr')
      for(let j=0; j<numOfColm.value; j++){
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
        for(let j=0; j<numOfColm.value; j++){
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
  
  createTable()
}
btnTableGenerate.addEventListener('click',createTable)
btnCodeGenerate.addEventListener('click', function(){ 
  createTable()
  let copyInput=tableContainer.innerHTML
  tableContainer.textContent=copyInput
  btnCopy.addEventListener ("click", ()=> {
    copyFunction(tableContainer)
    btnCopy.textContent='copied'
  });
})

inputContainer.addEventListener('click',generateTable)
inputContainer.addEventListener("keypress", function(e) {
  let key = e.which || e.keyCode || 0;
  if (key === 13) {
     generateTable()
  }
});



const copyFunction=(element)=> {
  let fakeTextArea = document.createElement("textarea");
  fakeTextArea.value = element.textContent; //element is the js variable which content to be copied
  document.body.appendChild(fakeTextArea);
  fakeTextArea.select();
  document.execCommand("Copy");
  fakeTextArea.remove()} 



// document.querySelectorAll("#digitInput, #colorInput, #fontInput").forEach(function(el) {
//   el.addEventListener("keypress", function(e) {
//     let key = e.which || e.keyCode || 0;
//     if (key === 13) {
//        generateTable()
//     }
//   });
// });
