function printData()
{
   var divToPrint=document.getElementById("marks");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}
