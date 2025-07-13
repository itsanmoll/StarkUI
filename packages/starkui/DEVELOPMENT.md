# Development Guide

This guide will help you set up and contribute to the StarkUI library.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd starkui

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

## 📁 Project Structure

```
starkui/
├── src/
│   ├── components/          # React components
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Button.test.tsx
│   │   └── ...
│   ├── utils/              # Utility functions
│   │   └── cn.ts
│   ├── test/               # Test setup
│   │   └── setup.ts
│   └── index.ts            # Main exports
├── .storybook/             # Storybook configuration
├── stories/                # Storybook stories
├── dist/                   # Built library
└── docs/                   # Documentation
```

## 🛠️ Development Workflow

### 1. Creating a New Component

```bash
# Create component file
touch src/components/MyComponent.tsx
touch src/components/MyComponent.stories.tsx
touch src/components/MyComponent.test.tsx
```

### 2. Component Template

```tsx
// src/components/MyComponent.tsx
import React from 'react';
import { cn } from '../utils/cn';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'base-classes',
          variant === 'primary' && 'primary-classes',
          variant === 'secondary' && 'secondary-classes',
          size === 'sm' && 'sm-classes',
          size === 'md' && 'md-classes',
          size === 'lg' && 'lg-classes',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

### 3. Export from Main Index

```tsx
// src/index.ts
export { MyComponent } from './components/MyComponent';
export type { MyComponentProps } from './components/MyComponent';
```

### 4. Add Storybook Story

```tsx
// src/components/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'My Component',
    variant: 'primary',
  },
};
```

### 5. Add Tests

```tsx
// src/components/MyComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent>Test</MyComponent>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<MyComponent variant="primary">Test</MyComponent>);
    expect(screen.getByText('Test').parentElement).toHaveClass('primary-classes');

    rerender(<MyComponent variant="secondary">Test</MyComponent>);
    expect(screen.getByText('Test').parentElement).toHaveClass('secondary-classes');
  });
});
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Guidelines

- Write tests for all component variants
- Test accessibility features
- Test user interactions
- Maintain 80%+ coverage

## 📚 Storybook

### Running Storybook

```bash
# Start development server
npm run storybook

# Build static site
npm run build-storybook
```

### Story Guidelines

- Create stories for all variants
- Include interactive controls
- Add documentation
- Show real-world usage examples

## 🔧 Building

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

This creates:
- `dist/index.js` (CommonJS)
- `dist/index.esm.js` (ES Modules)
- `dist/index.d.ts` (TypeScript declarations)

## 📦 Publishing

### Before Publishing

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Run tests: `npm test`
4. Build library: `npm run build`
5. Check bundle size

### Publishing to npm

```bash
# Login to npm
npm login

# Publish
npm publish

# Or publish with specific tag
npm publish --tag beta
```

## 🎨 Styling Guidelines

### Tailwind CSS

- Use utility classes for styling
- Create custom utilities in `tailwind.config.js`
- Follow the design system color palette
- Use consistent spacing and typography

### Component Styling

```tsx
// Good: Use utility classes
className={cn(
  'bg-white rounded-lg border border-secondary-200 shadow-sm',
  className
)}

// Bad: Inline styles
style={{ backgroundColor: 'white', borderRadius: '8px' }}
```

## ♿ Accessibility

### Guidelines

- Use semantic HTML elements
- Add proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast ratios

### Example

```tsx
<button
  role="button"
  aria-label="Close dialog"
  aria-pressed={isPressed}
  onKeyDown={handleKeyDown}
>
  Close
</button>
```

## 📝 Code Style

### TypeScript

- Use strict TypeScript configuration
- Define proper interfaces
- Use generics where appropriate
- Avoid `any` type

### React

- Use functional components
- Use React.forwardRef for refs
- Add displayName for debugging
- Use proper prop types

### Naming Conventions

- Components: PascalCase (`MyComponent`)
- Files: PascalCase (`MyComponent.tsx`)
- Utilities: camelCase (`cn`)
- Constants: UPPER_SNAKE_CASE (`BUTTON_VARIANTS`)

## 🔍 Linting and Formatting

### Running Linters

```bash
# ESLint
npm run lint

# ESLint with auto-fix
npm run lint:fix

# Prettier
npm run format
```

### Pre-commit Hooks

Consider setting up pre-commit hooks:

```bash
# Install husky
npm install --save-dev husky

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run lint && npm run test"
```

## 🐛 Debugging

### Common Issues

1. **TypeScript errors**: Check `tsconfig.json` and imports
2. **Styling issues**: Verify Tailwind classes and CSS imports
3. **Test failures**: Check test setup and mocks
4. **Build errors**: Verify dependencies and configuration

### Debug Commands

```bash
# Type checking
npm run type-check

# Build with verbose output
npm run build --verbose

# Test specific file
npm test -- MyComponent.test.tsx
```

## 🤝 Contributing

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Update documentation
6. Submit a pull request

### Commit Message Format

```
type(scope): description

feat(button): add loading state
fix(card): resolve border styling issue
docs(readme): update installation instructions
```

## 📖 Documentation

### Writing Documentation

- Use clear, concise language
- Include code examples
- Show real-world usage
- Update when components change

### Documentation Structure

```
docs/
├── components/
│   ├── button.md
│   ├── card.md
│   └── ...
├── getting-started.md
├── design-system.md
└── migration.md
```

## 🚀 Performance

### Optimization Tips

- Use React.memo for expensive components
- Lazy load components when possible
- Optimize bundle size
- Use proper tree shaking

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

## 🔒 Security

### Guidelines

- Sanitize user inputs
- Use proper CSP headers
- Avoid XSS vulnerabilities
- Keep dependencies updated

## 📞 Support

- 📧 Email: dev@starkui.com
- 💬 Discord: [Join our community](https://discord.gg/starkui)
- 🐛 Issues: [GitHub Issues](https://github.com/your-org/starkui/issues)

---

Happy coding! 🎉 