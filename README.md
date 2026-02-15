# Charan Sai Macha - Portfolio

A modern, beautiful portfolio website built with React and Tailwind CSS featuring a stunning purple-pink gradient theme.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Install Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

3. **Start development server:**
```bash
npm start
```

The site will open at `http://localhost:3000`

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

Or push to GitHub and connect to Vercel:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Click Deploy

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy:**
- Drag and drop the `build` folder to [netlify.com/drop](https://netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy:**
```bash
npm run deploy
```

## 🎨 Features

- ✨ Beautiful purple-pink gradient theme
- 📱 Fully responsive design
- 🎭 Smooth animations and transitions
- 🎯 Clean, modern UI
- ⚡ Fast performance
- 🔍 SEO optimized

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   └── profile-photo.jpeg
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Built With

- React 18
- Tailwind CSS
- Google Fonts (Poppins, JetBrains Mono)

## 📝 Customization

1. **Update personal info:** Edit the components in `src/components/`
2. **Change colors:** Modify the gradient colors in `src/index.css`
3. **Add projects:** Update the projects array in `src/components/Projects.js`
4. **Update skills:** Modify `src/components/Skills.js`

## 📧 Contact

Charan Sai Macha - charansaimachal23@gmail.com

---

Made with ❤️ and React
