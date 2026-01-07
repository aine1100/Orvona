# 🚀 Antigravity – Frontend Coding Rules (Next.js)

## 1️⃣ Tech Stack Assumptions

* **Next.js (App Router)**
* **TypeScript (mandatory)**
* **Tailwind CSS**
* **CSS Variables (Design Tokens)**
* **Component-driven architecture**
* **ESLint + Prettier**

---

## 2️⃣ Design System Rules (NO chaos 🎯)

### ❌ Forbidden

```tsx
<div className="bg-[#0f172a] text-[#e5e7eb]">
```

### ✅ Required (CSS Variables ONLY)

All colors, spacing, radius, shadows, fonts **must be defined in `globals.css`**.

---

## 3️⃣ `globals.css` (Single Source of Truth)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* 🎨 Colors */
  --color-bg: 222 47% 11%;
  --color-surface: 223 39% 18%;
  --color-primary: 210 100% 60%;
  --color-text: 210 40% 96%;
  --color-muted: 215 20% 65%;

  /* 🧱 Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* 🌫 Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.2);

  /* ⏱ Motion */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}
```

---

## 4️⃣ Tailwind Config (Token Mapping)

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg))",
        surface: "hsl(var(--color-surface))",
        primary: "hsl(var(--color-primary))",
        text: "hsl(var(--color-text))",
        muted: "hsl(var(--color-muted))",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
      },
    },
  },
};
```

👉 **Result**

```tsx
<div className="bg-surface text-text rounded-md shadow-md">
```

---

## 5️⃣ Folder Structure (MANDATORY)

```txt
src/
│
├── app/                  # Next.js routes
│   ├── layout.tsx
│   ├── page.tsx
│   └── dashboard/
│       └── page.tsx
│
├── components/
│   ├── ui/               # Reusable primitives
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   └── button.types.ts
│   │   └── card/
│   │       └── card.tsx
│   │
│   ├── layout/           # Navbar, Footer, Sidebar
│   └── sections/         # Page sections
│
├── hooks/                # Custom hooks
│   └── use-theme.ts
│
├── lib/                  # Utilities, helpers
│   ├── cn.ts
│   └── constants.ts
│
├── styles/
│   └── globals.css
│
├── types/                # Shared TS types
│   └── index.ts
│
└── config/               # App configs
    └── site.ts
```

---

## 6️⃣ Component Rules (Very Important)

### 📌 Component Must:

* Be **one responsibility**
* Live in its own folder
* Be **typed**
* Be **exported by default**

### Example: `Button`

```tsx
// components/ui/button/button.tsx
import { cn } from "@/lib/cn";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md transition-normal",
        variant === "primary" && "bg-primary text-bg",
        variant === "secondary" && "bg-surface text-text"
      )}
    >
      {children}
    </button>
  );
}
```

---

## 7️⃣ Mapping & Rendering Lists (NO inline chaos)

### ❌ Bad

```tsx
{users.map(u => <div>{u.name}</div>)}
```

### ✅ Good

```tsx
{users.map((user) => (
  <UserCard key={user.id} user={user} />
))}
```

📌 **Rules**

* Always extract mapped UI into a component
* Always use stable `key`

---

## 8️⃣ Naming Conventions

| Item       | Rule               |
| ---------- | ------------------ |
| Components | `PascalCase`       |
| Files      | `kebab-case.tsx`   |
| Hooks      | `useSomething`     |
| Variables  | `camelCase`        |
| Constants  | `UPPER_SNAKE_CASE` |

---

## 9️⃣ Styling Rules

* ❌ No inline styles
* ❌ No hex colors
* ❌ No random spacing
* ✅ Tailwind + tokens only
* ✅ `cn()` utility for conditionals

```ts
// lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🔟 Page Rules

* Pages **compose components**
* Pages contain **no business logic**
* Data fetching → `lib/` or server actions

```tsx
// app/page.tsx
import HeroSection from "@/components/sections/hero-section";

export default function HomePage() {
  return <HeroSection />;
}
```

---

## 1️⃣1️⃣ Optional (Highly Recommended)

* ESLint strict mode
* Prettier
* Husky pre-commit hooks
* Storybook for UI

---

