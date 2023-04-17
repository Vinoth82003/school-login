
		function downloadExcel() {
			// Select the HTML table element
			var table = document.getElementById("marks");

			// Create a new Excel workbook
			var wb = XLSX.utils.book_new();

			// Convert the HTML table to a worksheet and add it to the workbook
			var ws = XLSX.utils.table_to_sheet(table);
			XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

			// Convert the workbook to an Excel file
			var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

			// Create a new Blob object
			var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

			// Create a link element with the download attribute and click it programmatically
			var link = document.createElement("a");
			link.setAttribute("href", URL.createObjectURL(blob));
			link.setAttribute("download", "myExcelFile.xlsx");
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}

		// Utility function to convert a string to an ArrayBuffer
		function s2ab(s) {
			var buf = new ArrayBuffer(s.length);
			var view = new Uint8Array(buf);
			for (var i = 0; i < s.length; i++) {
				view[i] = s.charCodeAt(i) & 0xFF;
			}
			return buf;
		}

