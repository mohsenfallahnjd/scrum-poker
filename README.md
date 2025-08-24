# 🃏 Scrum Poker

A modern, interactive Planning Poker application built with Next.js and Framer Motion. This tool helps agile teams estimate story points using fun, illustrated cards with Persian translations.

![Scrum Poker Demo](https://img.shields.io/badge/Next.js-15.2.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Interactive Card Flipping**: Smooth 3D card flip animations using Framer Motion
- **Fullscreen Card View**: Click any card to view it in fullscreen with detailed descriptions
- **Persian Translations**: Each card includes Persian explanations of the story point values
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Beautiful Illustrations**: High-quality SVG cards designed by Redbooth
- **Story Point Values**: Includes standard Fibonacci sequence and special cards like:
  - Low hanging fruit (1)
  - Piece of cake (2)
  - It ain't rocket science (3)
  - Ornitorinco (5)
  - An arm and a leg (8)
  - Just squeaking by (13)
  - Don't put all your eggs in one basket (20)
  - Monster task (100)
  - When pigs fly (∞)
  - Here be dragons (?)
  - Coffee break
  - Yak shaving

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd scrum-poker
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. Navigate to `/` to access the Scrum Poker interface

## 🎯 Usage

1. **View Cards**: All planning poker cards are displayed in a grid layout
2. **Flip Cards**: Click on any card to flip it and reveal the story point value
3. **Fullscreen View**: Click on a flipped card to view it in fullscreen mode with detailed descriptions
4. **Close Fullscreen**: Click anywhere outside the card or press ESC to close the fullscreen view

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Package Manager**: Bun (recommended)

## 📁 Project Structure

```
scrum-poker/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Poker interface page
├── components/
│   └── ScrumPoker.tsx      # Main poker component
├── public/
│   └── cards/              # SVG card illustrations
└── package.json
```

## 🎨 Card Design Credits

The beautiful card illustrations are designed by [Redbooth](https://github.com/redbooth/scrum-poker-cards). Each card features:

- Unique story point values
- Creative metaphors and idioms
- Persian translations and explanations
- High-quality SVG graphics

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Other Platforms

You can deploy this application to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Redbooth](https://github.com/redbooth/scrum-poker-cards) for the beautiful card designs
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

Made with ❤️ for agile teams everywhere
