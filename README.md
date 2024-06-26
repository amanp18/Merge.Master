# Merge.Master

Overview
<br>
Merge.Master is a simple and user-friendly web application designed to merge up to two disjoint PDF files into a single PDF document. The application features an intuitive graphical user interface (GUI) allowing users to select their PDF files and merge them with a single click.

Features
<br>
Select PDF Files: Choose up to two PDF files to merge.
Merge PDFs: Combine the selected PDF files into one.
User-Friendly Interface: Easy-to-use web interface built with HTML and Bootstrap.
<br>
Requirements
Node.js
npm (Node Package Manager)
merge.pdf-library
multer for returning file
<br>
Installation
Clone the Repository:

sh
Copy code
git clone https://github.com/yourusername/merge.master.git
cd merge.master
Install Dependencies:

sh
Copy code
npm install
Run the Application:

sh
Copy code
node server.js
Access the Application:
Open your web browser and navigate to http://localhost:3000
<br>
Usage
Open the Application:

Go to http://localhost:3000 in your web browser.
Using the Application:

Click the "choose file" button to choose your first PDF file.
Choose maximum of 2 files.
Click the "submit" button to merge the selected files.
Output:

The merged PDF will be downloaded automatically.
<br>
File Structure
public/: Contains HTML, CSS, and JavaScript files.
merge.js: Contains merge.pdf library for the application.
server.js: Main server file.
package.json: Node.js project metadata and dependencies.
<br>
Example
Here is an example of how the interface looks and works:

Open the application and you will see the main web page with options to select PDF files.
Select the PDF files using the provided buttons.
Click "submit" and your merged PDF will be downloaded.
