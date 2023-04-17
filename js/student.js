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
