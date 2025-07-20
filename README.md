<h1>📁 Micro Project - JPDB</h1>
<p>
A web-based <strong>Project Management Form</strong> that allows users to create, update, and retrieve project data using <a href="http://login2explore.com/" target="_blank">JPDB</a> as the backend database.<br>
Built using <strong>HTML, JavaScript, jQuery, and Bootstrap</strong>.
</p>

<h2>🚀 Features</h2>
<ul>
  <li>🔍 Search project data by <strong>Project ID</strong></li>
  <li>💾 Save new projects</li>
  <li>📝 Update existing project records</li>
  <li>🧼 Reset form with a single click</li>
  <li>✅ Form validation with proper field-level alerts</li>
  <li>🔗 Uses <strong>JPDB APIs</strong> for persistent storage</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, jQuery</li>
  <li><strong>Backend:</strong> JPDB NoSQL with REST APIs</li>
  <li><strong>IDE:</strong> NetBeans (optional)</li>
</ul>

<h2>📂 Project Structure</h2>
<pre>
gurusewak-singh-micro-project-l2e/
│
├── nbproject/               ← NetBeans project config
│   ├── project.properties
│   └── project.xml
│
└── public_html/             ← Main frontend folder
    ├── index.html           ← UI for project form
    └── js/
        └── script.js        ← Form logic & JPDB API calls
</pre>

<h2>🔗 API Configuration</h2>
<ul>
  <li><strong>Token:</strong> <code>YOUR_JDPD_CONNECTION_TOKEN</code></li>
  <li><strong>Database:</strong> <code>COLLEGE-DB</code></li>
  <li><strong>Table (Relation):</strong> <code>PROJECT-TABLE</code></li>
  <li><strong>Base URL:</strong> <code>http://api.login2explore.com:5577</code></li>
  <li><strong>Endpoints:</strong>
    <ul>
      <li><code>/api/irl</code> – for fetching records</li>
      <li><code>/api/iml</code> – for inserting/updating records</li>
    </ul>
  </li>
</ul>

<h2>🧪 How to Use</h2>
<ol>
  <li>Open <code>index.html</code> in your browser.</li>
  <li>Enter a Project ID to fetch project data.</li>
  <li>Fill in the project details (Name, Assignee, Dates).</li>
  <li>Click <strong>Save</strong> to add new data or <strong>Update</strong> to modify existing records.</li>
  <li>Click <strong>Reset</strong> to clear the form anytime.</li>
</ol>

<h2>📌 Key JavaScript Functions</h2>
<pre>
validateData()     → Validates form fields
getProject()       → Fetches project by ID
saveProject()      → Inserts a new project
updateProject()    → Updates a record
resetForm()        → Clears all inputs
saveRecord2LS()    → Stores record ID in localStorage
</pre>

<h2>👨‍💻 Author</h2>
<p>
<strong>Gurusewak Singh</strong><br>
B.Tech | Full Stack Developer | DSA & Web Dev Enthusiast<br>
<a href="https://www.linkedin.com/in/gurusewak122" target="_blank">🔗 linkedin.com/in/gurusewak122</a>
</p>

<h2>📄 License</h2>
<p>This project is built for educational purposes. Feel free to explore, fork, and enhance it. 🤝</p>

<p align="center"><em>Made with ❤️ using HTML, JavaScript, and JPDB</em></p>
