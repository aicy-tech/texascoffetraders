# Texas Coffee Traders - Premium Website

A premium, conversion-focused marketing website for Texas Coffee Traders, located in Austin, TX. Built with Next.js, Tailwind CSS, and GSAP.

## Features

- **Premium UI/UX:** Clean, minimal design with a Dusty Rose and White color palette.
- **Dynamic Animations:** Smooth scroll-triggered reveals and micro-interactions powered by GSAP.
- **Optimized Performance:** Fast load times with Next.js App Router and optimized imagery.
- **Fully Responsive:** Seamless experience across mobile, tablet, and desktop.
- **Interactive Menu:** Categorized and visually appealing menu layout.
- **Functional Contact Form:** Built with React Hook Form, Zod validation, and integrated with Resend.
- **SEO Ready:** Complete with metadata, JSON-LD structured data, sitemap, and robots.txt.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email Service:** [Resend](https://resend.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/texas-coffee-traders-website.git
   cd texas-coffee-traders-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and add your Resend API key.
   ```bash
   cp .env.example .env.local
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run start
```

## Deployment

The easiest way to deploy this project is via [Vercel](https://vercel.com/new):

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Configure the environment variables (specifically `RESEND_API_KEY`).
4. Vercel will automatically build and deploy your site.

## SEO & Accessibility

- Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<footer>`) for better accessibility and SEO.
- Optimized images with descriptive `alt` text.
- JSON-LD structured data for `LocalBusiness`.
- Dynamic `sitemap.xml` and `robots.txt` generation.

## License

This project is private and intended for the specific use of Texas Coffee Traders.
