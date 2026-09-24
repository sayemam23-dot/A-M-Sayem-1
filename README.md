# A M Sayem — Portfolio

A static, responsive personal portfolio site built with plain HTML, CSS and JavaScript (no frameworks, no build step). Designed to be hosted for free on GitHub Pages.

## Folder structure

```
/
├── index.html          ← the whole site (one page, linked sections)
├── css/
│   └── style.css       ← all styling, incl. color/font tokens at the top
├── js/
│   └── script.js       ← portfolioData object + all interactivity
├── assets/
│   ├── images/         ← your photo, project screenshots, OG cover image
│   ├── icons/           ← favicon
│   └── resume/          ← your CV as a PDF
└── README.md
```

## Run it locally

No install needed. Either:
- Double-click `index.html` to open it directly in a browser, or
- From the project folder, run a tiny local server so relative paths behave exactly like they will on GitHub Pages:
  ```
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.

## How to update your portfolio content

Almost everything content-related lives in **one place**: the `portfolioData` object at the top of `js/script.js`. Look for the comment:

```
EDIT THIS SECTION TO UPDATE YOUR PORTFOLIO
```

### Add a project
Copy this shape into the `projects` array in `js/script.js`:
```js
{
  name: "Project Name",
  category: "Category",
  description: "One or two sentences.",
  role: "Your role",
  tools: ["Tool 1", "Tool 2"],
  outcome: "What happened / result",
  github: "",     // optional
  demo: "",       // optional
  caseStudy: ""   // optional link or anchor
}
```
It will automatically appear as a card in the Projects section — no HTML editing required.

### Add research, experience, certifications, or achievements
Same idea — each has its own array (`research`, `experience`, `certifications`, `achievements`) near the top of `js/script.js`. Copy an existing object in that array, fill in your details, save.

### Update skills or "currently learning"
Edit the `skills` object (grouped by category) or the `currentlyLearning` array in the same file.

### Update your name, email, links
Edit the `personal` object at the very top of `portfolioData`. This automatically fills in every email/LinkedIn/GitHub/resume link across the whole site (nav, hero, footer, contact) — you only need to change it once.

## How to add images

1. Drop your photo in `assets/images/profile.jpg` (used in the hero section).
2. Add any project screenshots into `assets/images/` and reference them from a project object if you extend the card renderer to show images.
3. Always use **relative paths** like `assets/images/yourfile.png` — never a path starting with `/`, since that can break on GitHub Pages when the site isn't at the domain root.
4. If an image is missing, the layout won't break — the image box just falls back to an empty placeholder background.

## How to replace your CV

Place your CV PDF at:
```
assets/resume/Sayem-CV.pdf
```
Every "Download CV" button already points here — just replace the file (keep the same filename, or update the `resume` path in `personal` inside `js/script.js` if you rename it).

## Dark mode

A light/dark toggle (the ◐ button in the nav) is included and saves your preference in the visitor's browser (`localStorage`), so it's remembered on their next visit.

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`) and push this folder's contents to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and the `/ (root)` folder, then save.
5. GitHub will give you a URL shaped like:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
   ```
   It can take a minute or two to go live after the first deploy.

Because every asset path in this project is relative (e.g. `css/style.css`, not `/css/style.css`), the site will work correctly whether it's hosted at the root of a custom domain or in a subfolder like `github.io/repository-name/`.

## Checklist — what you still need to provide

- [ ] Replace `YOUR_EMAIL`, `YOUR_LINKEDIN_URL`, `YOUR_GITHUB_URL` in `js/script.js` (`personal` object)
- [ ] Add your photo at `assets/images/profile.jpg`
- [ ] Add your CV at `assets/resume/Sayem-CV.pdf`
- [ ] Add a favicon at `assets/icons/favicon.png`
- [ ] (Optional) Add an Open Graph cover image at `assets/images/og-cover.png`
- [ ] Fill in the two research paper placeholders in `js/script.js` (`research` array) once you have titles/conference names/abstracts
- [ ] Fill in ITM Club role/period/responsibilities in the `experience` array once decided
- [ ] Add any additional projects, certifications, or achievements as they happen
