# IEEE SB CETkr Website

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

Official website for IEEE Student Branch at College of Engineering THrikaripur (CETKr). This modern, responsive website is built with Astro and Tailwind CSS, featuring information about the student branch, its activities, achievements, and events.

## 🚀 Features

- **Modern & Responsive** - Built with Astro for optimal performance and Tailwind CSS for responsive design
- **Interactive UI** - Smooth animations and transitions powered by AOS (Animate On Scroll)
- **Content Management** - Easy content updates through Markdown and MDX
- **SEO Optimized** - Built-in sitemap and SEO best practices
- **Fast & Lightweight** - Static site generation for optimal performance
- **Accessibility** - Built with web accessibility best practices in mind
- **Multi-page** - Dedicated sections for achievements, chapters, events, and more

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS
- [MDX](https://mdxjs.com/) - For rich content authoring
- [AOS](https://michalsnik.github.io/aos/) - For scroll animations

## 📂 Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components
├── content/        # Content collections (blog posts, events, etc.)
├── data/           # Static data files
├── layouts/        # Page layout components
├── pages/          # Website pages
│   ├── achievements.astro
│   ├── chapters.astro
│   ├── contact.astro
│   ├── events/
│   ├── execom.astro
│   ├── index.astro
│   └── newsletters/
└── styles/         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IEEE-SB-CETkr/SB-Website.git
   cd SB-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

This will generate a static site in the `dist/` directory.

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |


## 📝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Report Bugs**: File an issue to report bugs or suggest new features
2. **Submit Fixes**: Create pull requests to fix open issues
3. **Improve Documentation**: Help improve our documentation
4. **Spread the Word**: Star the repository and share it with others

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 👥 Support

If you need help or have questions:

- Open an [issue](https://github.com/IEEE-SB-CETkr/SB-Website/issues) for bug reports or feature requests

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

## 📜 Code of Conduct

Please note that this project is governed by the [IEEE Code of Conduct](https://www.ieee.org/about/corporate/governance/p9-26.pdf). By participating, you're expected to uphold this code.

---

<div align="center">
  Made with ❤️ by IEEE SB CETkr
</div>
