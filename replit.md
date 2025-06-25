# Akshay Paranjape Portfolio - AI Research & Manufacturing Innovation

## Overview

This is a full-stack portfolio website for Akshay Paranjape, a Ph.D. candidate at RWTH Aachen University specializing in AI for manufacturing. The application showcases his research, projects, experience, and professional achievements through an interactive web platform with modern UI components and AI-powered features.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and data layers:

**Frontend**: React 18 with TypeScript, using Vite as the build tool and development server
**Backend**: Express.js server with TypeScript running on Node.js
**Database**: PostgreSQL with Drizzle ORM for type-safe database operations
**UI Framework**: Tailwind CSS with shadcn/ui component library
**Deployment**: Replit with autoscale deployment target

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **Build Tool**: Vite with React plugin and development optimizations

### Backend Architecture
- **API Server**: Express.js with TypeScript for type safety
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Route Structure**: RESTful API endpoints for blog posts, projects, and contact messages
- **Middleware**: Request logging, JSON parsing, and error handling

### Database Schema
The application uses four main entities:
- **Users**: Authentication and user management
- **Blog Posts**: Content management for blog articles with categories and publishing status
- **Projects**: Portfolio projects with metadata, technologies, and feature flags
- **Contact Messages**: Form submissions from the contact page

### UI Component System
- **Design System**: Custom color palette with primary, secondary, and accent colors
- **Component Library**: Full suite of UI components including forms, navigation, cards, and layouts
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: CSS animations for hover effects and page transitions

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests and validate data using Zod schemas
3. **Data Access**: Storage layer abstracts database operations through Drizzle ORM
4. **Response**: JSON responses with proper error handling and status codes
5. **State Management**: React Query caches responses and manages loading states

## External Dependencies

### Core Dependencies
- **@anthropic-ai/sdk**: AI integration for chatbot functionality
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui**: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and developer experience
- **drizzle-kit**: Database migration and introspection tools

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

**Development**: 
- Runs on port 5000 with Vite development server
- Hot module replacement and runtime error overlays
- TypeScript compilation and checking

**Production Build**:
- Vite builds the frontend to `dist/public`
- esbuild bundles the server code to `dist/index.js`
- Environment-specific configurations for database connections

**Infrastructure**:
- Autoscale deployment target for dynamic scaling
- PostgreSQL database with connection pooling
- Static file serving for frontend assets

The deployment uses a dual-build process where both frontend and backend are built separately and served by the Express server in production.

## Changelog

```
Changelog:
- June 25, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```