# Manesha Dahanayake — Portfolio

Personal portfolio website for Manesha Dahanayake, a Data Science undergraduate at SLIIT. Built to showcase data science, analytics, and full-stack development projects.

## Tech Stack

- **Framework** — React 19 + TanStack Router (file-based routing)
- **Build Tool** — Vite 7
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Language** — TypeScript

## Sections

| Section | Description |
|---|---|
| Hero | Intro, name, tagline, CV download, social links |
| About | Bio, interests, goals, and profile photo |
| Projects | Portfolio of data science and full-stack projects |
| Skills | Technical skills and tools |
| Highlights | Key achievements and highlights |
| Journey | Academic and professional timeline |
| Contact | Contact form and links |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/              # Images and static files
├── components/
│   └── portfolio/       # All page section components
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Highlights.tsx
│       ├── Journey.tsx
│       ├── Contact.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ...
├── routes/
│   └── index.tsx        # Main page route
└── styles.css           # Global styles and Tailwind config
```

## CV

Place the CV file at `public/cv/Manesha_Dahanayake.pdf` for the Download CV button to work.

## License

This project is personal and not licensed for reuse.
