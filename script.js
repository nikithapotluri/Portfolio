document.getElementById('downloadButton').addEventListener('click', function() {
  var pdfUrl = 'https://github.com/nikithapotluri/Portfolio/blob/main/NikithaPotluriResume.pdf'; // Replace 'path_to_your_pdf_file.pdf' with the actual URL of the PDF file
  downloadPDF(pdfUrl);
});

function downloadPDF(pdfUrl) {
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'NikithaPotluriResume.pdf'; // Set the name for the downloaded PDF file
  link.target = '_blank'; // Open the PDF in a new tab, if needed
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}