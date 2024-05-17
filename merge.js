const path = require('path');

const mergePdfs = async (pdf1, pdf2) => {
  const { default: PDFMerger } = await import('pdf-merger-js');
  const merger = new PDFMerger();
  await merger.add(pdf1);
  await merger.add(pdf2);
  let timestamp = new Date().getTime();
  let outputPath = path.join(__dirname, `public/${timestamp}.pdf`);
  await merger.save(outputPath);
  return `${timestamp}.pdf`;
};

module.exports = { mergePdfs };


