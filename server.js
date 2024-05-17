const express = require('express');
const path = require('path');
const multer = require('multer');
const { mergePdfs } = require('./merge');

const app = express();


// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files from the "public" directory
app.use('/static', express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  try {
    console.log(req.files);
    let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect(`/static/${d}.pdf`);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
