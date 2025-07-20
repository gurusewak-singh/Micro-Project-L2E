<h1>📁 Micro Project – Project Management with JPDB</h1>

<p>
A lightweight and responsive <strong>Project Management Web App</strong> that uses <strong>JsonPowerDB (JPDB)</strong> as a backend. This project allows users to manage project information such as project ID, name, assignee, assignment date, and deadline – all stored and retrieved via JPDB’s RESTful APIs.
</p>

---

<h2>📚 Table of Contents</h2>
<ul>
  <li><a href="#📁-micro-project-–-project-management-with-jpdb">Project Title</a></li>
  <li><a href="#📄-description">Description</a></li>
  <li><a href="#🚀-features">Features</a></li>
  <li><a href="#🎯-scope-of-functionalities">Scope of Functionalities</a></li>
  <li><a href="#📸-illustration">Illustration</a></li>
  <li><a href="#💡-benefits-of-using-jsonpowerdb">Benefits of Using JsonPowerDB</a></li>
  <li><a href="#🔗-api-configuration">API Configuration</a></li>
  <li><a href="#🧪-how-to-use">How to Use</a></li>
  <li><a href="#📌-key-javascript-functions">Key JavaScript Functions</a></li>
  <li><a href="#🔄-release-history">Release History</a></li>
  <li><a href="#📊-project-status">Project Status</a></li>
  <li><a href="#📚-sources">Sources</a></li>
  <li><a href="#👨‍💻-author">Author</a></li>
</ul>

---

<h2>📄 Description</h2>
<p>
This micro-project demonstrates a client-side app that interacts with JsonPowerDB for full CRUD (Create, Read, Update, Delete) operations. It is built entirely using HTML, Bootstrap, jQuery, and the JPDB SDK.
</p>

---

<h2>🚀 Features</h2>
<ul>
  <li>🔍 Fetch project data using Project ID</li>
  <li>💾 Save new project entries</li>
  <li>📝 Update existing records</li>
  <li>🧼 Reset the form easily</li>
  <li>✅ Field validation with alerts</li>
  <li>🔗 RESTful API integration with JsonPowerDB</li>
</ul>

---

<h2>🎯 Scope of Functionalities</h2>
<ul>
  <li>One-page application (no page reload)</li>
  <li>Stateful form behavior based on data existence</li>
  <li>LocalStorage usage for storing JPDB record number</li>
  <li>Full front-end validation</li>
</ul>

---

<h2>📸 Illustration</h2>
<p>UI Preview (form screenshot or mockup goes here)</p>

<img src="https://via.placeholder.com/700x400?text=Project+Form+Screenshot" alt="Project Form Screenshot" />

---

<h2>💡 Benefits of Using JsonPowerDB</h2>
<ul>
  <li>🚀 Extremely fast performance</li>
  <li>🔧 Easy to integrate with front-end code via simple REST API</li>
  <li>📦 Built-in NoSQL data store with relational behavior</li>
  <li>🔐 Secure login and token-based access control</li>
  <li>📈 Ideal for real-time, lightweight applications</li>
</ul>

---

<h2>🔗 API Configuration</h2>
<ul>
  <li><strong>Token:</strong> <code>90934975|-31949250759238360|90959568</code></li>
  <li><strong>Database:</strong> <code>COLLEGE-DB</code></li>
  <li><strong>Table:</strong> <code>PROJECT-TABLE</code></li>
  <li><strong>Base URL:</strong> <code>http://api.login2explore.com:5577</code></li>
</ul>

---

<h2>🧪 How to Use</h2>
<ol>
  <li>📂 Open the <code>index.html</code> in a browser</li>
  <li>🆔 Enter a Project ID to search (auto-fetch)</li>
  <li>📋 Fill in form fields</li>
  <li>💾 Click “Save” to insert or “Update” to modify</li>
  <li>🧼 Use “Reset” to clear the form</li>
</ol>

---

<h2>📌 Key JavaScript Functions</h2>
<pre>
validateData()     → Validate form inputs
getProject()       → Fetch project from JPDB
saveProject()      → Insert new record
updateProject()    → Update an existing record
resetForm()        → Clear form fields
saveRecord2LS()    → Save record number in localStorage
</pre>

---

<h2>🔄 Release History</h2>
<ul>
  <li>📅 <strong>v1.0 - July 2025</strong> - Initial release with create, fetch, update, and reset features</li>
</ul>

---

<h2>📊 Project Status</h2>
<p>
✅ Project is fully functional for basic CRUD operations.  
🧪 Testing completed for standard use cases.  
🛠️ Further enhancements like delete functionality, advanced error handling, and UI polish are planned.
</p>

---

<h2>📚 Sources</h2>
<ul>
  <li><a href="http://login2explore.com" target="_blank">JsonPowerDB Official Site</a></li>
  <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap Docs</a></li>
  <li><a href="https://jquery.com/" target="_blank">jQuery Docs</a></li>
</ul>

---

<h2>👨‍💻 Author</h2>
<p>
<strong>Gurusewak Singh</strong><br>
B.Tech | Full Stack Developer | DSA & Web Dev Enthusiast<br>
<a href="https://www.linkedin.com/in/gurusewak122" target="_blank">🔗linkedin.com/in/gurusewak122</a>
</p>

---

<p align="center"><em>Made with ❤️ using HTML, JavaScript, Bootstrap, and JPDB</em></p>
