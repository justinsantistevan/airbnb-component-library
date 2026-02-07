# Santibnb

A production-quality vacation rental marketplace UI patterned on Airbnb. Built with React, TypeScript, and Tailwind CSS, using Bolt.

## Overview

Santibnb demonstrates modern React patterns with pixel-perfect responsive design, smooth animations, and a comprehensive component library. The project allows rapid on-brand prototyping and experimentation.

## Pages

### Default Landing Page (Home Experiments)

The default page features the Santibnb branding with experimental UI enhancements:

- **"Feeling Lucky" button** in the search bar for spontaneous destination discovery
- **Highlighted first listing** in each section with enhanced visual treatment
- Full search functionality with location, date, and guest pickers

### Classic Home

The traditional Airbnb-style home page with standard listing displays and the original Airbnb logo styling.

### Listing Detail

Complete property detail view including:

- Photo gallery with 5-image grid layout
- Host information and superhost badges
- Guest reviews with category ratings
- Amenities grid
- Reservation card with date and guest selection
- "Things to Know" section with house rules and safety info

### Style Guide

Component documentation page showcasing:

- Design tokens (colors, typography, spacing)
- shadcn/ui component library
- Custom components built for this project

## Navigation

Navigate between pages using the **footer links** at the bottom of any page:

| Link | Description |
|------|-------------|
| **Classic Home** | Switch to the traditional Airbnb-style layout |
| **Style Guide** | View the component documentation |
| **Logo click** | Return to the experiments home page |

## Features

- **Search Bar**: Location autocomplete, date range picker, guest counter with adults/children/infants/pets
- **Category Filtering**: Filter listings by property type (Icons, Beachfront, Cabins, etc.)
- **Image Carousels**: Swipeable photo galleries on listing cards
- **Wishlist**: Save favorite listings with heart toggle
- **Responsive Design**: Optimized layouts for mobile, tablet, and desktop
- **Smooth Animations**: Micro-interactions and transitions throughout

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Icons** | Lucide React |
| **Date Handling** | date-fns, React Day Picker |
| **Carousel** | Embla Carousel |
| **State** | React Context API |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── category-bar/      # Category filter tabs
│   ├── footer/            # Site footer with navigation
│   ├── inspiration/       # Destination inspiration section
│   ├── listing-card/      # Property card with carousel
│   ├── listing-detail/    # Detail page components
│   ├── listing-section/   # Grouped listing display
│   ├── navbar/            # Top navigation bar
│   ├── search/            # Search bar and pickers
│   ├── style-guide/       # Documentation components
│   └── ui/                # shadcn/ui primitives
├── data/                  # Mock data and types
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── pages/                 # Page components
└── store/                 # App context and state
```

## Architecture

### State Management

Centralized state via `AppProvider` context managing:

- Current page navigation
- Selected listing for detail view
- Category filter selection
- Wishlist items
- Search parameters (location, dates, guests)

### Data Layer

Mock data files in `/src/data/` provide realistic sample content:

- `listings.ts` - Property listings organized by section
- `listing-detail.ts` - Complete property detail data
- `categories.ts` - Filter category definitions
- `destinations.ts` - Search destination suggestions
- `types.ts` - TypeScript interfaces

### Component Patterns

- Feature-based folder organization
- Compound components for complex UI
- Consistent prop interfaces with TypeScript
- Reusable primitives from shadcn/ui

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette. Key colors:

- `airbnb-red` - Primary accent (#FF385C)
- `airbnb-dark` - Text color (#222222)
- `airbnb-gray` - Secondary text (#717171)

### Adding Listings

Add new properties to the arrays in `/src/data/listings.ts` following the `Listing` interface.

### Adding Categories

Extend the categories array in `/src/data/categories.ts` with new filter options.

## License

This project is for educational and demonstration purposes.
