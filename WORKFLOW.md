# Workflow Notes

## Rod's Preferences

- **Git:** Uses **GitHub Desktop** (not command line)
- **Pull changes:** Fetch origin → Pull in GitHub Desktop

## Dashboard Preview Workflow

**When I make changes:**
1. I commit and push to GitHub
2. Rod fetches in GitHub Desktop
3. Rod pulls the changes
4. Rod rebuilds dashboard:
   ```
   cd D:\My Project\openclaw-custom\ui
   npm run build
   ```
5. Rod opens `ui\dist\index.html` in browser
6. Reviews changes and gives feedback

## Project Structure

- **IB-API** - Mini Jarvis trading bot (separate repo)
- **openclaw-custom** - Customized OpenClaw for dashboard work
- **Production OpenClaw** - Running on VPS port 54916 (don't touch)

## Communication

- Rod on Telegram
- Timezone: Australia/Darwin (GMT+9:30)
- Usually works late night / early morning
