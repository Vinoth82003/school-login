// function downloadExcel() {
//   // Get the HTML table
//   var htmlTable = document.getElementById("marks");
  
//   // Create a new XML document with the Excel namespace
//   var parser = new DOMParser();
//   var xml = parser.parseFromString('<?xml version="1.0" encoding="UTF-8"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"></Workbook>', 'text/xml');
//   var root = xml.documentElement;
  
//   // Create a worksheet element and append it to the XML document
//   var worksheet = xml.createElement("Worksheet");
//   worksheet.setAttribute("ss:Name", "Sheet1");
//   root.appendChild(worksheet);
  
//   // Loop through the rows of the HTML table and create a row element for each row
//   var rows = htmlTable.getElementsByTagName("tr");
//   for (var i = 0; i < rows.length; i++) {
//     var row = rows[i];
//     var xmlRow = xml.createElement("Row");
    
//     // Loop through the cells of the row and create a cell element for each cell
//     var cells = row.getElementsByTagName("td");
//     for (var j = 0; j < cells.length; j++) {
//       var cell = cells[j];
//       var xmlCell = xml.createElement("Cell");
//       var data = xml.createElement("Data");
//       data.appendChild(xml.createTextNode(cell.innerHTML));
//       xmlCell.appendChild(data);
//       xmlRow.appendChild(xmlCell);
//     }
    
//     // Append the row to the worksheet element
//     worksheet.appendChild(xmlRow);
//   }
  

function downloadWord() {
  // Get the HTML table
  var htmlTable = document.getElementById("marks");

  // Create a table in a new Word document
  var table = "<table>" + htmlTable.innerHTML + "</table>";

  // Create a new Word document as a Blob object
  var wordDocument = new Blob(['<!DOCTYPE html><html><head><meta charset="utf-8"><title>Table</title></head><body>' + table + '</body></html>'], {type:'application/vnd.ms-word'});
  
  // Create a download link for the Word document and click it to download
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(wordDocument);
  downloadLink.download = "myTable.doc";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
