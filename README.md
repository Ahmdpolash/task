# ByteSpace - Online Learning & Course Platform

ByteSpace is a modern web application built with Next.js, TypeScript, and Tailwind CSS. It is designed for learners and creators to explore, enroll in, and share high-quality digital courses with an intuitive user experience.

---

## Features

- **Hero & Landing Experience**: Custom blue grid background, floating 3D geometric shapes, partner brand strip, category filters, and curated course showcases.
- **Search & Course Catalog**: Filterable course library with real-time text query search and category dropdown selection.
- **Course Details Page**:
  - Figma-accurate hero layout with a high-definition video preview player and floating enrollment card.
  - Interactive pill-based tab switcher between About (Description), Lessons (Curriculum), and Reviews.
  - Expandable and collapsible module accordion with lesson durations, status indicators, and preview links.
  - Reviews overview featuring a ratings summary card, five-level breakdown bars, star filters, and verified learner testimonials.
- **Creator Profile Page**: Dedicated creator portfolio showcasing profile statistics, followers counter, bio details, and authored courses.
- **Authentication Flows**: Standalone Sign In and Sign Up pages featuring clean typography, floating artwork collage, and social authentication options without navbar clutter.
- **Custom 404 Page**: Full-screen blue grid hero with massive gradient typography and straightforward navigation back to the homepage.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: Sonner
- **State & Data**: React State, Redux Toolkit Query architecture

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 18.18 or higher recommended)
- npm, yarn, or pnpm

### Installation & Local Setup

1. **Clone the repository**

```bash
git clone https://github.com/Ahmdpolash/task.git
cd task
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **View in browser**

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Production Build

To test or deploy the optimized production bundle:

```bash
npm run build
npm run start
```

---

## Project Structure

```text
├── app/
│   ├── course/          # Course details page
│   ├── courses/         # Course catalog page
│   ├── creator/         # Creator profile page
│   ├── lessons/         # Curriculum and lessons overview
│   ├── login/           # User sign in page
│   ├── not-found.tsx    # Custom 404 error page
│   ├── register/        # User sign up page
│   ├── reviews/         # Course reviews and feedback
│   ├── search/          # Search results page
│   ├── globals.css      # Core styles, hero grid, and shape definitions
│   ├── layout.tsx       # Root layout configuration
│   └── page.tsx         # Main landing page
├── components/
│   ├── auth/            # Authentication forms and layout
│   ├── course/          # Course intro, stage, and sidebar components
│   ├── layout/          # Header and Footer components
│   ├── search/          # Catalog search and filter components
│   ├── sections/        # Homepage section components
│   └── ui/              # Reusable UI primitives and course cards
├── data/
│   └── landingData.ts   # Courses, categories, modules, and reviews dataset
└── public/
    └── images/          # Image assets, banners, and icons
```

---

## Available Routes

| Route | Description |
|---|---|
| `/` | Landing page with featured courses and categories |
| `/courses` | Full course catalog with search and filters |
| `/course` | Detailed course overview, video player, and curriculum |
| `/creator` | Creator profile, statistics, and authored courses |
| `/lessons` | Course modules and lessons curriculum player |
| `/reviews` | Course feedback, breakdown metrics, and learner reviews |
| `/login` | Account sign-in page |
| `/register` | New user registration page |

---

## License

This project is developed for educational and portfolio demonstration purposes.
