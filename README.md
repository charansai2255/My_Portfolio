# Charan Sai Macha - Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS featuring a stunning purple-pink gradient theme. Showcasing my projects, skills, and professional experience.

🌐 **Live Demo**: (https://my-portfolio-brown-eight-55.vercel.app/)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/charansai2255/My_Portfolio.git
cd My_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

**Or** push to GitHub and connect to Vercel:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Click Deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy:
- Drag and drop the `build` folder to [netlify.com/drop](https://netlify.com/drop)

**Or** use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://charansai2255.github.io/My_Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Features

- ✨ Beautiful purple-pink gradient theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🎯 Clean, modern UI/UX
- ⚡ Fast performance with optimized React
- 🔍 SEO friendly
- 📧 Contact form with email integration
- 🔗 Social media integration (GitHub, LinkedIn)
- 💼 Project showcase with live demos
- 🛠️ Skills section with technology stack

## 📁 Project Structure
```
My_Portfolio/
├── public/
│   ├── index.html
│   └── profile-photo.jpeg
├── src/
│   ├── components/
│   │   ├── Navigation.js      # Navigation bar
│   │   ├── Hero.js           # Hero/Landing section
│   │   ├── About.js          # About me section
│   │   ├── Projects.js       # Projects showcase
│   │   ├── Skills.js         # Skills & technologies
│   │   ├── Contact.js        # Contact information
│   │   └── Footer.js         # Footer component
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Built With

- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS 3** - Utility-first CSS framework
- **Google Fonts** - Poppins & JetBrains Mono
- **React Smooth Scroll** - Smooth scrolling navigation
- **React Icons** - Icon library

## 📝 Customization

### Update Personal Information
Edit the components in `src/components/` to customize:
- **Hero.js** - Name, title, tagline
- **About.js** - Biography and background
- **Contact.js** - Email and phone number

### Change Theme Colors
Modify the gradient colors in:
- `src/index.css` - Global gradient styles
- `tailwind.config.js` - Tailwind color palette

### Add/Update Projects
Edit the projects array in `src/components/Projects.js`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    demo: "https://..."
  }
];
```

### Update Skills
Modify the skills list in `src/components/Skills.js`

## 🌟 Screenshots

[Add screenshots of your portfolio here]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Charan Sai Macha**

- Email: charansaimachal23@gmail.com
- GitHub: [@charansai2255](https://github.com/charansai2255)
- LinkedIn: [Charan Sai Macha](https://www.linkedin.com/in/charan-sai-macha-763404290)
- Phone: +91 6301239837

---

⭐ **Made with ❤️ and React** ⭐

If you like this project, please give it a star!
