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
  var htmlTable = document.getElementById("myTable");
  
  // Create a new Word document
  var wordDoc = new ActiveXObject("Word.Application");
  var doc = wordDoc.Documents.Add();
  
  // Loop through the rows of the HTML table and create a row in the Word table for each row
  var rows = htmlTable.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.getElementsByTagName("td");
    var wordRow = doc.Tables(1).Rows.Add();
    
    // Loop through the cells of the row and create a cell in the Word table for each cell
    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      wordRow.Cells(j + 1).Range.Text = cell.innerHTML;
    }
  }
  
  // Save the Word document as a file and close it
  doc.SaveAs("myTable.doc");
  doc.Close();
  
  // Quit Word
  wordDoc.Quit();
}

//   // Convert the XML document to a string
//   var xmlString = (new XMLSerializer()).serializeToString(xml);
  
//   // Download the string as an Excel file
//   var link = document.createElement("a");
//   link.setAttribute("href", "data:application/vnd.ms-excel;charset=utf-8," + encodeURIComponent(xmlString));
//   link.setAttribute("download", "myTable.xls");
//   link.click();
// }
