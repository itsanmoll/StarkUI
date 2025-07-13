# StarkUI - Modern React UI Component Library

A beautiful, accessible, and customizable UI component library built with React, TypeScript, and Tailwind CSS. Perfect for Next.js, MERN stack, and Python web applications.

## ✨ Features

- **Modern Design**: Clean, accessible components with beautiful animations
- **TypeScript**: Full TypeScript support with excellent IntelliSense
- **Tailwind CSS**: Utility-first styling with custom design system
- **Accessible**: WCAG 2.1 compliant components
- **Customizable**: Easy to theme and extend
- **Cross-Platform**: Works with React, Next.js, and can be embedded in Python web apps

## 🚀 Quick Start

### Installation

```bash
npm install @starkui/core
# or
yarn add @starkui/core
# or
pnpm add @starkui/core
```

### Basic Usage

```tsx
import { Button, Card, Input } from '@starkui/core';

function App() {
  return (
    <div className="p-6">
      <Card>
        <Card.Header>
          <h2 className="text-xl font-semibold">Welcome</h2>
        </Card.Header>
        <Card.Body>
          <Input label="Email" placeholder="Enter your email" />
          <Button variant="primary" className="mt-4">
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
```

## 🎨 Components

### Button
```tsx
import { Button } from '@starkui/core';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
```

### Card
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@starkui/core';

<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here...</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input
```tsx
import { Input } from '@starkui/core';

<Input label="Email" placeholder="Enter your email" />
<Input label="Password" type="password" error="Password is required" />
<Input label="Search" leftIcon={<SearchIcon />} />
```

### Badge
```tsx
import { Badge } from '@starkui/core';

<Badge variant="primary">New</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

## 🎯 Usage in Different Stacks

### Next.js
```tsx
// pages/index.tsx
import { Button, Card } from '@starkui/core';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <Card>
        <Card.Body>
          <h1>Welcome to Next.js</h1>
          <Button variant="primary">Get Started</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
```

### MERN Stack
```tsx
// React frontend
import { Button, Input, Card } from '@starkui/core';

function LoginForm() {
  return (
    <Card>
      <Card.Body>
        <Input label="Username" />
        <Input label="Password" type="password" />
        <Button variant="primary" fullWidth>
          Login
        </Button>
      </Card.Body>
    </Card>
  );
}
```

### Python Web Apps (Flask/Django/FastAPI)

#### Option 1: React Components in Templates
```python
# Flask example
from flask import render_template
import react

@app.route('/')
def index():
    return render_template('index.html')

# templates/index.html
<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@starkui/core/dist/index.umd.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        const { Button, Card } = StarkUI;
        ReactDOM.render(
            React.createElement(Card, null,
                React.createElement(Button, { variant: 'primary' }, 'Hello from Python!')
            ),
            document.getElementById('root')
        );
    </script>
</body>
</html>
```

#### Option 2: Web Components (Recommended)
```python
# FastAPI example
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

# static/index.html
<!DOCTYPE html>
<html>
<head>
    <title>FastAPI + StarkUI</title>
    <script type="module" src="/static/starkui-components.js"></script>
</head>
<body>
    <starkui-button variant="primary">Hello from FastAPI!</starkui-button>
</body>
</html>
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Setup
```bash
# Clone the repository
git clone <your-repo>
cd starkui

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

### Project Structure
```
starkui/
├── src/
│   ├── components/     # React components
│   ├── utils/         # Utility functions
│   ├── test/          # Test setup
│   └── index.ts       # Main exports
├── stories/           # Storybook stories
├── .storybook/        # Storybook config
├── dist/              # Built library
└── docs/              # Documentation
```

### Adding New Components
1. Create component in `src/components/`
2. Add TypeScript interfaces
3. Export from `src/index.ts`
4. Add Storybook stories
5. Write tests
6. Update documentation

## 🎨 Customization

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

### CSS Variables
```css
:root {
  --starkui-primary: #3b82f6;
  --starkui-secondary: #64748b;
}
```

## 📚 Documentation

- [Component API Reference](./docs/components.md)
- [Design System](./docs/design-system.md)
- [Migration Guide](./docs/migration.md)
- [Contributing](./CONTRIBUTING.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Update documentation
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🚀 Roadmap

- [ ] More components (Table, DatePicker, etc.)
- [ ] Dark mode support
- [ ] Animation library
- [ ] Form builder
- [ ] Icon library
- [ ] Mobile-first components
- [ ] Server-side rendering support

## 📞 Support

- 📧 Email: support@starkui.com
- 💬 Discord: [Join our community](https://discord.gg/starkui)
- 🐛 Issues: [GitHub Issues](https://github.com/your-org/starkui/issues)
- 📖 Docs: [Documentation](https://docs.starkui.com)

---

Made with ❤️ by the StarkUI team 