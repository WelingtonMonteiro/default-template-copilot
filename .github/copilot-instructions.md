# Lovable Project - GitHub Copilot Instructions

## Project Overview

This is a modern web application built with:
- Vite for fast development and optimized builds
- React with TypeScript for robust frontend development
- Tailwind CSS for utility-first styling
- shadcn/ui for pre-built accessible components
- React Router for client-side routing
- TanStack Query for data fetching and state management
- Lucide React for icons

### Key Dependencies
- React 18.x with TypeScript
- Vite for build tooling
- TanStack Query for data management
- shadcn/ui components
- Various Radix UI primitives for accessible components
- React Hook Form for form handling
- Zod for schema validation
- date-fns for date manipulation
- Lucide React for icons

## Development Guidelines

### Code Organization
- Pages go in `src/pages/`
- Components go in `src/components/`
- Hooks go in `src/hooks/`
- Utils go in `src/utils/`
- Types go in `src/types/`

### Component Creation Guidelines
1. Create components in their own files
2. Keep components small and focused (≤50 lines)
3. Use TypeScript interfaces for props
4. Implement responsive design using Tailwind classes
5. Follow accessibility best practices

### Styling Conventions
- Use Tailwind CSS classes for styling
- Follow mobile-first responsive design
- Use semantic HTML elements
- Maintain consistent spacing with Tailwind's spacing scale
- Use the project's color scheme through Tailwind classes

### State Management
- Use React Query for server state
- Use React's useState for local component state
- Follow the object syntax for React Query:
```typescript
const { data, isLoading } = useQuery({
  queryKey: ['key'],
  queryFn: fetchFunction
});
```

### Component Structure Example
```typescript
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'default' | 'secondary';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'base-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      {...props}
    />
  );
}
```

### Routing Patterns
- Define routes in `src/App.tsx`
- Use React Router's hooks (`useNavigate`, `useParams`, etc.)
- Implement nested routes when needed
- Add new routes above the catch-all "*" route

### Error Handling
- Let errors bubble up unless specifically handling them
- Use toast notifications for user feedback
- Implement error boundaries for critical sections

### Toast Notifications
Use the toast utility from shadcn/ui:
```typescript
import { toast } from "@/hooks/use-toast"

toast({
  title: "Success",
  description: "Operation completed successfully"
})
```

### Icons Usage
Import icons from Lucide React:
```typescript
import { Icon } from 'lucide-react'
```

## Technical Setup

### Development
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Access at: `http://localhost:8080`

### Build
1. Create production build: `npm run build`
2. Preview build: `npm run preview`

### Environment Variables
- Use `.env` for environment variables
- Prefix with `VITE_` for client-side access

## Best Practices

1. **Code Quality**
   - Write self-documenting code
   - Use TypeScript strictly
   - Follow consistent naming conventions
   - Add comments for complex logic

2. **Performance**
   - Lazy load routes and heavy components
   - Optimize images and assets
   - Minimize bundle size
   - Use proper React Query caching

3. **Accessibility**
   - Use semantic HTML
   - Include ARIA labels where needed
   - Ensure keyboard navigation
   - Maintain proper contrast ratios

4. **Testing**
   - Write unit tests for utilities
   - Test components in isolation
   - Cover critical user paths
   - Use React Testing Library

## Common Patterns

### Form Handling
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  field: z.string().min(1)
})

export function Form() {
  const form = useForm({
    resolver: zodResolver(schema)
  })
}
```

### Data Fetching
```typescript
import { useQuery } from '@tanstack/react-query'

export function DataComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData
  })
}
```

Remember to follow these guidelines for consistent and maintainable code across the project.
