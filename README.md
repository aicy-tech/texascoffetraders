# Harry Real Estate - Dallas Texas

A premium, professional, lead-generation-focused website for Harry Real Estate, operating in Dallas, Texas. Built with Next.js, Tailwind CSS, and GSAP.

## Features

- **Premium UI/UX:** Clean, minimal design with a White and Warm Orange color palette.
- **Dynamic Animations:** Smooth scroll-triggered reveals and micro-interactions powered by GSAP.
- **Optimized Performance:** Fast load times with Next.js App Router and optimized imagery.
- **Fully Responsive:** Seamless experience across mobile, tablet, and desktop.
- **Property Listings:** Full listings page with advanced filtering options.
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
   git clone https://github.com/aicy-tech/real-estate-demo.git
   cd real-estate-demo
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

## SEO & Accessibility

- Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<footer>`) for better accessibility and SEO.
- Optimized images with descriptive `alt` text.
- JSON-LD structured data for `RealEstateAgent`.
- Dynamic `sitemap.xml` and `robots.txt` generation.
