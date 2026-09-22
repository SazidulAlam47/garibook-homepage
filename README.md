# Garibook Homepage Recreation

A faithful, responsive, component-based recreation of the [Garibook](https://garibook.com/) homepage built with React, TypeScript, Tailwind CSS, and GSAP.

## Features

- **Visual Fidelity & Modern UI**: Recreates Garibook's homepage layout, typography (Montserrat), branding, buttons, and responsive grid.
- **GSAP Animations**:
  - **Hero Entrance Animation**: Smooth typewriter animation cycling between hero headlines, subtitle/description reveal, and decorative 3D element floating motion.
  - **Stats Counting Animation**: ScrollTrigger-powered animated count-up for all 4 key business metrics (Trip Requests, Total Customers, Active Drivers, Districts Covered).
  - **Services Stagger Reveal**: Smooth staggered entrance of service cards on scroll.
  - **Freedom & Together Image Parallax/Zoom**: ScrollTrigger entrance animations and hover micro-interactions.
- **Interactive Booking Form (`RentalSection`)**:
  - Tab switching between **Car Rental** and **Airport Rental**.
  - Custom interactive **Choose a Car** dropdown with vehicle images, names, and seating capacities (Sedan Premium, Sedan, Noah, HiAce, Sedan Economy, Chander Gari).
  - **Airport Picker** with major airports in Bangladesh.
  - Interactive trip type options (One Way, Round Way, Hourly; From Airport, From Home).
  - Validation feedback and quick city suggestions.
- **Interactive Services Section**:
  - Tabbed interface switching between **Rides**, **Garibook Business**, **Garibook Club**, and **VMS**.
- **Interactive Media Coverage (`News`)**:
  - Featured news from top media platforms (Prothom Alo, Dhaka Tribune, Samakal, The Daily Star, BSS News, Daily Sun) with previous/next carousel navigation.
- **Passenger Reviews & Video Player Modal (`Reviews`)**:
  - Video testimonials with thumbnail cards and an interactive embedded YouTube video modal.
- **Travel Blog (`Beyond Destinations`)**:
  - Travel guides, recommendations, and insights.
- **Responsive Navigation & Mobile Drawer**:
  - Sticky header with glassmorphism blur on scroll.
  - Interactive language toggle (English / বাংলা).
  - Slide-out mobile offcanvas drawer with backdrop and brand vector artwork.
- **Complete Footer**:
  - Upper multi-column link directories, Middle app promotion & partner credentials (NRB Solution Ltd., Link 3 Technologies), and Bottom trade license, copyright, and SSL payment gateway banner.

## Tech Stack

- **React 19** with **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **GSAP 3** (with `ScrollTrigger`)
- **React Router 8**

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm or yarn

### Installation

```bash
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Production Build

Type-check with TypeScript and build the optimized production assets:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint across the codebase:

```bash
npm run lint
```
