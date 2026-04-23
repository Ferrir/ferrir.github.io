# 🚀 Professional Portfolio - Paulo Alexandre Ferreira

A high-performance, professional landing page built with a **Brutalist aesthetic**, featuring a sharp geometry, high contrast, and neon accents. This project showcases over 20 years of expertise in Backend Development, architecture, and enterprise solutions.

![Aesthetic](https://img.shields.io/badge/Aesthetic-Brutalist-blueviolet)
![Tech Stack](https://img.shields.io/badge/Stack-Vite%20%7C%20Vanilla%20JS%20%7C%20CSS3-blue)
![Bilingual](https://img.shields.io/badge/Language-PT--BR%20%7C%20EN-brightgreen)

## ✨ Features

- **Bilingual Support**: Full toggle between Portuguese and English with persistent state via `localStorage`.
- **Light/Dark Mode**: High-contrast brutalist light mode with persistence and `Alt + T` keyboard shortcut.
- **Print-Ready Resumes**: Dedicated pages (`curriculo.html` and `resume.html`) optimized with CSS media queries and `@page` margins for perfect "Save to PDF" output.
- **Brutalist Design**: Unique visual identity using "Neon Blue" highlights, solid shadows, and clean typography (Inter & JetBrains Mono).
- **Responsive & Interactive**: Smooth reveal animations and "lift-and-shadow" hover effects on experience and skill cards.
- **Data-Driven**: Content is easily manageable via a centralized `content.js` file.

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+).
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, Grid).
- **Build Tool**: [Vite](https://vitejs.dev/) for fast development and optimized production builds.
- **Deployment**: Configured for **Vercel** with Multi-Page App (MPA) support.

## 📂 Project Structure

```text
├── index.html          # Main landing page
├── curriculo.html      # Printable Resume (Portuguese)
├── resume.html         # Printable Resume (English)
├── main.js             # Core logic and dynamic rendering
├── content.js          # Centralized data (Experience, Skills, Translations)
├── style.css           # Global styles and design system
├── vite.config.js      # Build configuration (MPA Entry points)
└── expertise.md        # Technical summary and backup data
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ferrir/ferrir.github.io.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

### Build
Generate optimized production assets:
```bash
npm run build
```

## 📄 Generating PDF Resumes
To generate a professional PDF of the resume:
1. Access the site and click on **"CURRÍCULO"** (or **"RESUME"** in English).
2. Click the **"SAVE AS PDF"** floating button.
3. In the browser print dialog, select **"Save as PDF"** as the destination.
4. Ensure "Background Graphics" is enabled for the best result.

## 👤 Author

**Paulo Alexandre Ferreira**
- Senior Backend Developer
- [LinkedIn](https://www.linkedin.com/in/paulo-alexandre-ferreira/)
- [Email](mailto:ferreira.alexandre@gmail.com)

---
*Built with passion and technical excellence.*
