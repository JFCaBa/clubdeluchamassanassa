# Club de Lucha Massanassa - Website Project

## Project Overview

The Club de Lucha Massanassa is a Next.js 15 web application built specifically for a martial arts club in Massanassa, Valencia, Spain. The site showcases multiple martial arts disciplines including Brazilian Jiu-Jitsu, Capoeira, Kick Boxing, MMA, Grappling, and a complete fitness/musculación area. The application is designed to be responsive and includes Spanish-language content throughout.

The project is built on a Next.js scaffold with TypeScript, Tailwind CSS, and a comprehensive set of UI components. It features a custom server implementation with Socket.IO integration for real-time functionality.

### Key Technologies and Features

- **⚡ Next.js 15** - The React framework for production with App Router
- **📘 TypeScript 5** - Type-safe JavaScript for better developer experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **🧩 shadcn/ui** - High-quality, accessible components built on Radix UI
- **🗄️ Prisma** - Next-generation Node.js and TypeScript ORM
- **🔐 NextAuth.js** - Complete open-source authentication solution
- **🐻 Zustand** - Simple, scalable state management
- **🔄 TanStack Query** - Powerful data synchronization for React
- **🖼️ Sharp** - High performance image processing
- **🌐 Socket.IO** - Real-time bidirectional event-based communication

## Building and Running

### Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# The server will run on http://localhost:3000
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Database Management

```bash
# Push schema changes to database
npm run db:push

# Generate Prisma client
npm run db:generate

# Create new migration
npm run db:migrate

# Reset database (use with caution)
npm run db:reset
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── horarios/       # Schedule page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main home page
├── components/         # Reusable React components
│   └── ui/            # shadcn/ui components
├── hooks/             # Custom React hooks
└── lib/               # Utility functions and configurations
    └── socket.ts      # Socket.IO integration
```

### Key Files

- `server.ts` - Custom Next.js server with Socket.IO integration
- `package.json` - Project dependencies and scripts
- `prisma/schema.prisma` - Database schema definition
- `src/app/page.tsx` - Main website content (Spanish)
- `src/app/layout.tsx` - Root application layout with metadata
- `components.json` - shadcn/ui configuration
- `next.config.ts` - Next.js configuration

## Development Conventions

### Coding Style
- TypeScript is used throughout the project with strict typing enabled
- Tailwind CSS utility classes for styling
- Component-based architecture following Next.js App Router patterns
- Responsive design with mobile-first approach

### File Naming
- Component files use PascalCase (e.g., `Button.tsx`)
- Page files use lowercase with optional extensions (e.g., `page.tsx`)
- Utility functions and helpers use camelCase (e.g., `utils.ts`)

### Database Schema
The project uses Prisma ORM with SQLite as the database. The current schema includes:
- User model with email, name, and timestamps
- Post model with title, content, published status, and author relationship

### Internationalization
The site is primarily in Spanish with metadata prepared for potential multilingual expansion via Next Intl (though not yet implemented).

### SEO and Accessibility
- Proper HTML semantic structure
- Open Graph and Twitter Card metadata
- Responsive design for all screen sizes
- Keyboard navigation support

## Special Features

### Real-time Functionality
The application includes Socket.IO integration through a custom server implementation, allowing for real-time features if needed in the future.

### Custom Server
The application uses a custom server (`server.ts`) that extends Next.js with Socket.IO capabilities, allowing for real-time communication between clients and the server.

### Image Management
The site includes placeholder images for the martial arts club, with instructions on how to replace them with actual club images. The project supports image optimization through the Sharp library.

### Mobile-First Design
The entire website is designed with a mobile-first approach, ensuring optimal experience across all device sizes. The navigation includes a mobile-friendly hamburger menu.

## Environment Configuration

The project uses environment variables for configuration:
- `DATABASE_URL` - Database connection string (configured in Prisma schema)

## Potential Enhancements

Based on the README_CLUB.md and the current implementation, potential future features could include:
- Actual backend for contact form submissions
- Blog/news section
- Online registration system
- Calendar of events and competitions
- Dynamic gallery with lightbox functionality

## Notes

- The project is currently focused on the Club de Lucha Massanassa website with Spanish content
- Images are currently placeholders and should be replaced with actual club photos
- The contact form is implemented with validation but without backend processing
- The site includes social media links that point to actual club social media accounts