<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🌍 EraTravel </title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f5f7fb;
      color: #1f2937;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 2rem;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }
    h1, h2, h3 {
      color: #1e40af;
    }
    h1 { font-size: 2.8rem; margin-bottom: 0.3rem; }
    h2 { margin-top: 2rem; }
    h3 { margin-top: 1.5rem; }
    .badges img {
      height: 28px;
      margin: 0.2rem 0.5rem 0.2rem 0;
      vertical-align: middle;
    }
    img.screenshot, img.gif {
      width: 100%;
      max-width: 900px;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      margin: 1rem 0;
    }
    ul { padding-left: 1.5rem; }
    pre {
      background: #1e293b;
      color: #f8fafc;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }
    code { color: #facc15; font-weight: bold; }
    .section { margin-top: 2rem; }
    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
    }
    .tech-item {
      flex: 0 0 120px;
      background: #e0e7ff;
      color: #1e3a8a;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      text-align: center;
      font-weight: 600;
    }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .screenshot-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      margin-top: 1rem;
    }
    .screenshot-grid img { width: 300px; height: auto; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌍 EraTravel</h1>
    <p><strong>Responsive Travel Booking Platform</strong></p>

    <div class="badges">
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="React">
      <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap">
      <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat" alt="Axios">
      <img src="https://img.shields.io/badge/Amadeus API-007ACC?style=flat" alt="Amadeus API">
      <img src="https://img.shields.io/badge/Google Sign-In-4285F4?style=flat&logo=google&logoColor=white" alt="Google Sign-In">
    </div>

    <!-- Hero Screenshot -->
    <img class="screenshot" src="./screenshots/homepage.png" alt="Homepage Screenshot">

    <div class="section">
      <h2>Overview</h2>
      <p>
        EraTravel is a modern, responsive travel booking platform built with <strong>React</strong>. Users can explore destinations, book flights, and enjoy interactive galleries. The app emphasizes <strong>performance, accessibility, and enterprise-level design standards</strong>.
      </p>
    </div>

    <div class="section">
      <h2>Technologies & Tools</h2>
      <div class="tech-grid">
        <div class="tech-item">React</div>
        <div class="tech-item">Bootstrap 5</div>
        <div class="tech-item">Axios</div>
        <div class="tech-item">Amadeus API</div>
        <div class="tech-item">React Slick</div>
        <div class="tech-item">React Select</div>
        <div class="tech-item">Datepicker</div>
        <div class="tech-item">Google Sign-In</div>
        <div class="tech-item">Responsive UI</div>
      </div>
    </div>

    <div class="section">
      <h2>Key Features</h2>
      <ul>
        <li>🔹 Flight Search & Booking – Real-time offers via Amadeus API</li>
        <li>🔹 Google Sign-In Authentication</li>
        <li>🔹 Interactive Destination Cards & Carousels</li>
        <li>🔹 Responsive & Modern UI/UX</li>
        <li>🔹 Image Galleries & GIF Animations for interactivity</li>
      </ul>
    </div>

    <div class="section">
      <h2>Screenshots & GIFs</h2>
      <div class="screenshot-grid">
        <img src="./screenshots/homepage.png" alt="Homepage">
        <img src="./screenshots/destinations.png" alt="Destinations">
        <img src="./screenshots/flight-search.gif" alt="Flight Search GIF" class="gif">
        <img src="./screenshots/mobile-view.png" alt="Mobile Responsive">
      </div>
    </div>

    <div class="section">
      <h2>Project Structure</h2>
      <pre>
eratravel/
│
├─ public/
│  ├─ index.html
│  └─ favicon.ico
│
├─ src/
│  ├─ assets/        # Images & icons
│  ├─ components/    # Reusable UI components
│  ├─ pages/         # Home, Flight Search, Destinations
│  ├─ services/      # API calls with Axios
│  ├─ App.js
│  ├─ index.js
│  └─ styles.css
│
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ README.html
      </pre>
    </div>

    <div class="section">
      <h2>Getting Started</h2>
      <pre>
# Clone the repo
git clone https://github.com/EraCodeX/eratravel.git
cd eratravel

# Install dependencies
npm install

# Run development server
npm start
      </pre>
    </div>

    <div class="section">
      <h2>Deployment</h2>
      <pre>
# Install GitHub Pages
npm install --save gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/eratravel",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
      </pre>
    </div>

    <div class="section">
      <h2>Author</h2>
      <p>
        <strong>Era Hidaj</strong> – Frontend Developer<br>
        3+ years of experience in React & modern web development<br>
        <a href="https://github.com/EraCodeX">GitHub</a> | 
        <a href="https://www.linkedin.com/in/erahidaj/">LinkedIn</a>
      </p>
    </div>

    <div class="section">
      <h2>License</h2>
      <p>MIT License – see <a href="./L

