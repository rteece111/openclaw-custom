# Dashboard Preview Guide (Windows)

**How to view dashboard changes without running full OpenClaw**

## Quick Start

### Option 1: Open Built Dashboard (Easiest)

If there's a `ui/dist/` folder:

1. Navigate to: `D:\My Project\openclaw-custom\ui\dist\`
2. Double-click: `index.html`
3. Opens in your browser
4. See dashboard UI!

### Option 2: Build It Yourself

If no `dist/` folder exists:

```cmd
cd D:\My Project\openclaw-custom\ui
npm install
npm run build
```

Then open `dist/index.html` in browser.

### Option 3: Dev Server (Live Preview)

For live editing:

```cmd
cd D:\My Project\openclaw-custom\ui
npm install
npm run dev
```

Opens at: `http://localhost:5173`

---

## Workflow

**When I make dashboard changes:**

1. I commit UI changes to GitHub
2. You pull:
   ```cmd
   cd D:\My Project\openclaw-custom
   git pull origin main
   ```
3. Rebuild (if using Option 2):
   ```cmd
   cd ui
   npm run build
   ```
4. Refresh `dist/index.html` in browser
5. See the changes!

---

## What You'll See

- Dashboard layout
- UI components
- Styling changes
- Layout improvements

**Won't work:**
- Agent connections (needs backend)
- Real data (needs API)
- Login (needs OAuth)

**But you can see:**
- Visual design
- Layout changes
- Component styling
- Overall look & feel

---

## Current Status

Dashboard UI is in: `ui/src/`

Key files:
- `ui/src/App.tsx` - Main app
- `ui/src/ui/` - UI components
- `ui/src/styles/` - Styling

---

**Next: I'll make some initial improvements and you can preview them!**
