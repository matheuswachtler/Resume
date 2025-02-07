// Função para exibir a aba ativa (se aplicável)
function showActiveTab(tabName) {
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

async function generatePDF(filename) {
    console.log("generatePDF function called with filename:", filename);
    const { PDFDocument, rgb } = PDFLib;
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    // Adicionando conteúdo ao PDF
    page.drawText('Matheus Wachtler', {
        x: 50,
        y: 750,
        size: 24,
        color: rgb(0, 0, 0),
    });

    page.drawText('Senior QA Engineer', {
        x: 50,
        y: 720,
        size: 18,
        color: rgb(0, 0, 0),
    });

    page.drawText('SUMMARY', {
        x: 50,
        y: 680,
        size: 18,
        color: rgb(0, 0, 0),
    });

    page.drawText('Proven Senior QA Engineer with over 5 years of experience in the IT field, including 3 years specializing in software testing and quality assurance. Proactive, research-driven, and consistently seeking ways to enhance performance and results.', {
        x: 50,
        y: 650,
        size: 12,
        color: rgb(0, 0, 0),
        maxWidth: 500,
    });

    // Adicionando mais conteúdo conforme necessário
    page.drawText('SKILLS', {
        x: 50,
        y: 600,
        size: 18,
        color: rgb(0, 0, 0),
    });

    page.drawText('TEST STRATEGY: ★★★★★', {
        x: 50,
        y: 580,
        size: 12,
        color: rgb(0, 0, 0),
    });

    page.drawText('BDD: ★★★★☆', {
        x: 50,
        y: 560,
        size: 12,
        color: rgb(0, 0, 0),
    });

    // Continue adicionando o restante do conteúdo do currículo

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    console.log("PDF generated and download initiated");
}