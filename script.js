function baixarPDF() {
    const link = document.createElement('a');
    link.href = 'rubrica.pdf';
    link.download = 'rubrica.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }