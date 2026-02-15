# OpenClaw Dashboard - Enhanced UI (Feature Branch: dashboard-v2)

**Build Date:** 2026-02-16 08:25 GMT+9:30  
**Status:** All 11 mockup views styled (3,700+ lines CSS)  
**Branch:** `feature/dashboard-v2`

---

## Quick Start (Windows)

### Option 1: Simple HTTP Server (Recommended)
1. Open PowerShell or Command Prompt
2. Navigate to this folder: `cd path\to\control-ui`
3. Run a local server:
   ```bash
   npx serve .
   ```
   OR if you have Python:
   ```bash
   python -m http.server 8080
   ```
4. Open browser: **http://localhost:8080**

### Option 2: Direct File Open (Limited)
1. Double-click `index.html`
2. Browser will open it as `file:///...`
3. **Note:** Some features may not work due to CORS/security restrictions

---

## Connecting to OpenClaw Gateway

This dashboard needs a running OpenClaw gateway to function fully.

### If You Have OpenClaw Running Locally (Windows):
1. Start OpenClaw gateway: `openclaw gateway`
2. Note the gateway URL (usually `ws://127.0.0.1:18789`)
3. Open dashboard in browser
4. In the **Overview** tab, enter gateway URL
5. Click **Connect**

### If Gateway is on Remote Server (e.g., EC2):
1. Note your gateway's public/private IP
2. Port: Usually `18789`
3. URL format: `ws://YOUR-IP:18789`
4. **Important:** Gateway must allow remote connections (check firewall/config)

### View Without Gateway (Design Preview):
- The UI will render in "disconnected" mode
- You can see all the styled mockup views
- Navigation works, but data won't load
- Good for reviewing UI/UX design

---

## What's New (Feature Branch)

### All 11 Mockup Views Styled:
1. ✅ **Dashboard Home** - Status cards, activity feed, agent panels
2. ✅ **Chat Interface** - Conversation sidebar, DM/Agent filters
3. ✅ **File Editor** - File tree, tabs, editor placeholder
4. ✅ **Agents View** - Config forms, toggles, badges
5. ✅ **Cron Manager** - Grid layout, search, stats
6. ✅ **Sessions View** - Message viewer, filters
7. ✅ **Skills Manager** - Grid cards, status badges
8. ✅ **Logs Viewer** - Color-coded log levels, filters
9. ✅ **System Settings** - Settings cards, metrics
10. ✅ **Task Dashboard** - Kanban board, task lists
11. ✅ **MCP Servers** - Server cards, tool lists

### Technical Details:
- **Framework:** Vite + Lit (Web Components) + TypeScript
- **Styling:** 3,700+ lines of custom CSS (GitHub dark theme)
- **Build:** Production-optimized, minified, gzipped
- **Size:** ~540KB JS, ~135KB CSS (before gzip)

---

## Troubleshooting

### "Can't connect to gateway"
- Verify OpenClaw gateway is running: `openclaw gateway status`
- Check gateway URL format: `ws://IP:PORT` (not `http://`)
- Check firewall allows port 18789
- Try localhost first: `ws://127.0.0.1:18789`

### "Blank screen"
- Use Option 1 (HTTP server) instead of opening file directly
- Check browser console (F12) for errors
- Try Chrome/Edge (best compatibility)

### "Features don't work"
- Dashboard requires gateway connection for full functionality
- In disconnected mode, you can only preview UI design
- Connect to gateway to enable data loading/actions

---

## Development

### To modify and rebuild:
```bash
cd /path/to/openclaw-custom/ui
npm install  # or pnpm install
npm run dev  # start dev server on port 5173
npm run build  # rebuild production dist
```

### Source Code:
- **Styles:** `ui/src/styles/*.css`
- **Views:** `ui/src/ui/views/*.ts`
- **Main App:** `ui/src/ui/app.ts`

---

## Support

**GitHub:** https://github.com/rteece111/openclaw-custom/tree/feature/dashboard-v2  
**Branch:** `feature/dashboard-v2`  
**Build:** 12 commits, 3,700+ lines CSS  
**Time:** 3.5 hours (2026-02-15 18:54-22:30)

---

**Note:** This is a FEATURE BRANCH build (not production-ready). For official releases, see main OpenClaw repository.
