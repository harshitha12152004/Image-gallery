# Image Gallery (React + Vite)

A simple image search gallery using the Unsplash API. Type a query or click a category (All, Nature, People) to load images in a horizontal gallery.

🔗 **Live Demo:** https://image-gallery-svrv.onrender.com

## Features
- Search images by keyword using the Unsplash API
- Quick category buttons: All, Nature, People
- Responsive horizontal image gallery
- Built with React + Vite

## Tech Stack
- React
- Vite
- Axios
- Unsplash API

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root and add your own Unsplash API key:
   ```
   VITE_UNSPLASH_KEY=your_unsplash_access_key
   ```
   (Get a free key at [unsplash.com/developers](https://unsplash.com/developers))
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production
```bash
npm run build
```
The built files will be in the `dist` folder.

## Deployment
Deployed on **Render** as a static site, with auto-deploy enabled on every push to `main`.

**CI/CD:**
- **CI** — GitHub Actions (see `.github/workflows/ci.yml`) runs lint and build checks on every push/PR.
- **CD** — Render automatically builds and deploys the latest `main` branch on every push.

## License
MIT
