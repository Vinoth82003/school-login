function downloadExcel() {
  // Select the HTML table element
  var table = document.getElementById("marks");

  // Convert the HTML table to an array of arrays representing the worksheet data
  var data = [];
  for (var i = 0; i < table.rows.length; i++) {
    var row = [];
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      row.push(table.rows[i].cells[j].innerText);
    }
    data.push(row);
  }

  // Convert the data to a SheetJS worksheet object
  var worksheet = XLSX.utils.aoa_to_sheet(data);

  // Create a new Excel workbook and add the worksheet to it
  var workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate the Excel file as a Blob object
  var wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  var blob = new Blob([wbout], { type: "application/octet-stream" });

  // Save the Excel file using FileSaver.js library
  saveAs(blob, "myExcelFile.xlsx");
}

// word download function.,.

function downloadWord() {
  // Get the HTML table
  var htmlTable = document.getElementById("myTable");

  // Modify the HTML table to add table outline
  htmlTable.setAttribute("border", "1");
  htmlTable.setAttribute("cellpadding", "5");
  var rows = htmlTable.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.getElementsByTagName("td");
    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      cell.setAttribute("border", "1");
    }
    var headerCells = row.getElementsByTagName("th");
    for (var k = 0; k < headerCells.length; k++) {
      var headerCell = headerCells[k];
      headerCell.setAttribute("border", "1");
    }
  }

  // Create a new Word document as a Blob object
  var table = "<table>" + htmlTable.innerHTML + "</table>";
  var wordDocument = new Blob(['<!DOCTYPE html><html><head><meta charset="utf-8"><title>Table</title></head><body>' + table + '</body></html>'], {type:'application/vnd.ms-word'});

  // Create a download link for the Word document and click it to download
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(wordDocument);
  downloadLink.download = "myTable.doc";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
