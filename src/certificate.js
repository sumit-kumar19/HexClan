const generatePDF = async(name)=>{

    const PDFLib = document.createElement("script");
    PDFLib.src = "https://unpkg.com/pdf-lib/dist/pdf-lib.min.js";
    document.head.appendChild(PDFLib);
    await new Promise((resolve) => {
      PDFLib.onload = resolve;
    });
    const fontkit = document.createElement("script");
    fontkit.src = "https://unpkg.com/@pdf-lib/fontkit@0.0.4";
    document.head.appendChild(fontkit);

    const { PDFDocument, rgb } = PDFLib;
    const exBytes = await fetch("/HexClan/certi.pdf").then((res) => {
        return res.arrayBuffer();
      });
      const exFont = await fetch("/HexClan/GreatVibes-Regular.ttf").then((res) => {
        return res.arrayBuffer();
      });
    const pdfDoc = await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myFont = await pdfDoc.embedFont(exFont);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.drawText(name, {
      x: 370,
      y: 280,
      size: 45,
      font: myFont,
      color: rgb(0, 0, 0),
    });
    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    return uri.toString();
    ///pdf.src = uri;
    // saveAs(uri, "certificate.pdf");
  } 

export default generatePDF;
  
