# ?? Troubleshooting Guide

Common issues and solutions for building from `D:\repo\EliteGuardian\repo\`

---

## ?? Installation Issues

### ? "node is not recognized as an internal or external command"

**Cause:** Node.js not installed or not in PATH

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install the LTS version
3. Restart PowerShell/Terminal
4. Verify: `node --version`

---

### ? "npm install" fails with permission errors

**Cause:** Insufficient permissions

**Solution:**
```powershell
# Run PowerShell as Administrator
# OR clear npm cache
npm cache clean --force
npm install
```

---

### ? "npm install" fails with network errors

**Cause:** Network/firewall issues

**Solution:**
```powershell
# Use different registry
npm config set registry https://registry.npmjs.org/
npm install

# OR clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## ??? Build Issues

### ? "npm run build" fails with syntax errors

**Cause:** Node.js version too old

**Solution:**
```powershell
# Check version (needs 16+)
node --version

# Update if needed
# Download latest from nodejs.org
```

---

### ? Build succeeds but dist/ folder empty

**Cause:** Build output directory misconfigured

**Solution:**
1. Check `vite.config.js` exists
2. Verify `outDir: 'dist'` in config
3. Delete and rebuild:
```powershell
Remove-Item -Recurse -Force dist
npm run build
```

---

### ? "Cannot find module 'vite'"

**Cause:** Dependencies not installed

**Solution:**
```powershell
npm install
npm run build
```

---

### ? TailwindCSS classes not working

**Cause:** Tailwind not processing files

**Solution:**
1. Check `tailwind.config.js` has correct content paths:
```javascript
content: [
  './src/**/*.{js,jsx}',
],
```

2. Check `postcss.config.js` exists:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Rebuild:
```powershell
npm run build
```

---

## ?? Deployment Issues

### ? deploy-to-blazor.ps1 fails with "Access Denied"

**Cause:** PowerShell execution policy

**Solution:**
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# OR run with bypass
powershell -ExecutionPolicy Bypass -File .\deploy-to-blazor.ps1
```

---

### ? Files not copying to wwwroot/react-app/

**Cause:** Path issues or permissions

**Solution:**
1. Check paths exist:
```powershell
Test-Path "D:\repo\EliteGuardian\repo\dist"
Test-Path "D:\repo\EliteGuardian\wwwroot"
```

2. Manually copy to test:
```powershell
Copy-Item -Path "dist\*" -Destination "..\wwwroot\react-app\" -Recurse -Force
```

3. If successful, deployment script should work

---

### ? dist/ folder exists but is empty after deployment

**Cause:** Build not run before deployment

**Solution:**
```powershell
# Always build first
npm run build
# Then deploy
.\deploy-to-blazor.ps1
```

---

## ?? Runtime Issues

### ? React app shows blank page in Blazor

**Cause:** Multiple possible issues

**Solution Checklist:**
1. Check browser console for errors (F12)
2. Verify files exist:
```powershell
Test-Path "D:\repo\EliteGuardian\wwwroot\react-app\index.html"
Test-Path "D:\repo\EliteGuardian\wwwroot\react-app\assets"
```

3. Check ReactApp.razor paths are correct
4. Rebuild and redeploy:
```powershell
cd D:\repo\EliteGuardian\repo
npm run build
.\deploy-to-blazor.ps1
```

5. Hard refresh browser (Ctrl+Shift+R)

---

### ? "Failed to load module script" in browser

**Cause:** Incorrect base path in vite.config.js

**Solution:**
Check `vite.config.js`:
```javascript
export default defineConfig({
  base: './', // Should be relative
});
```

Rebuild:
```powershell
npm run build
.\deploy-to-blazor.ps1
```

---

### ? Images or assets not loading

**Cause:** Asset paths incorrect

**Solution:**
1. Check images are in `src/` or `public/` folder
2. Use correct import:
```jsx
import logo from './logo.png'; // ?
// OR
<img src="/logo.png" /> // if in public/
```

3. Rebuild and redeploy

---

### ? CSS styles not applying

**Cause:** CSS not imported or not processed

**Solution:**
1. Check `src/main.jsx` imports CSS:
```jsx
import './index.css'; // ?
```

2. Check `index.css` has Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Rebuild

---

## ?? Development Server Issues

### ? "Port 3000 already in use"

**Cause:** Another process using port 3000

**Solution:**
```powershell
# Use different port
npm run dev -- --port 3001

# OR stop process using port 3000
# Windows: 
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

### ? Hot reload not working

**Cause:** HMR connection lost

**Solution:**
1. Restart dev server:
```powershell
# Ctrl+C to stop
npm run dev
```

2. Check firewall isn't blocking WebSocket connection
3. Try: `npm run dev -- --host`

---

### ? Changes not showing in browser

**Cause:** Browser cache

**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Open DevTools (F12) ? Network ? Disable cache
3. Clear browser cache completely

---

## ?? Blazor Integration Issues

### ? "/catalog" route shows 404

**Cause:** ReactApp.razor not configured

**Solution:**
1. Check file exists: `Components/Pages/ReactApp.razor`
2. Check it has routes:
```razor
@page "/catalog"
@page "/catalog/{*catchall}"
```

3. Restart Blazor:
```powershell
cd D:\repo\EliteGuardian
dotnet run
```

---

### ? NavMenu link to catalog not working

**Cause:** Link not configured

**Solution:**
Check `Components/Layout/NavMenu.razor` has:
```html
<NavLink class="nav-link" href="catalog">
    Services Catalog
</NavLink>
```

---

### ? Blazor and React styles conflicting

**Cause:** CSS specificity issues

**Solution:**
1. React uses scoped TailwindCSS (no conflicts expected)
2. Blazor uses Bootstrap (different scope)
3. If issues occur, increase React component specificity

---

## ?? Package Issues

### ? "Cannot find package 'X'"

**Cause:** Missing dependency

**Solution:**
```powershell
# Reinstall all dependencies
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

### ? Dependency version conflicts

**Cause:** Incompatible package versions

**Solution:**
```powershell
# Clear and reinstall
npm install --legacy-peer-deps

# OR update specific package
npm update <package-name>
```

---

## ??? File System Issues

### ? "Cannot find path 'D:\repo\...'"

**Cause:** Incorrect directory or drive

**Solution:**
1. Verify exact path:
```powershell
cd D:\repo\EliteGuardian\repo
pwd  # Shows current directory
```

2. Check drive letter is correct (D: vs C:)

---

### ? "Access to path denied"

**Cause:** Insufficient permissions

**Solution:**
1. Run PowerShell as Administrator
2. Check file/folder permissions
3. Close any programs that might lock files (VS, VS Code)

---

## ?? Testing Issues

### ? Can't test in development mode

**Cause:** Dev server not starting

**Solution:**
```powershell
# Check if node is running
Get-Process node

# Kill all node processes if stuck
Get-Process node | Stop-Process

# Restart
npm run dev
```

---

### ? React DevTools not working

**Cause:** Production build or extension not installed

**Solution:**
1. Use `npm run dev` (not `build`)
2. Install React DevTools browser extension
3. Open DevTools (F12) ? React tab

---

## ?? Debugging Tips

### Enable Verbose Logging
```powershell
# For npm
npm run build --verbose

# For Vite
npm run dev -- --debug
```

### Check Build Output
```powershell
# List dist contents
Get-ChildItem -Recurse dist

# Check file sizes
Get-ChildItem dist -Recurse | Measure-Object -Property Length -Sum
```

### Verify Deployment
```powershell
# Check deployed files
Get-ChildItem -Recurse ..\wwwroot\react-app

# Compare dist vs deployed
Compare-Object (Get-ChildItem dist) (Get-ChildItem ..\wwwroot\react-app)
```

---

## ?? Emergency Recovery

### Complete Reset
```powershell
# Navigate to repo
cd D:\repo\EliteGuardian\repo

# Delete everything except source
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force dist
Remove-Item package-lock.json

# Reinstall
npm install

# Rebuild
npm run build

# Redeploy
.\deploy-to-blazor.ps1
```

---

## ?? Getting Help

If issues persist:

1. **Check logs:**
   - Browser console (F12)
   - Terminal output
   - Blazor output window

2. **Verify versions:**
```powershell
node --version  # Should be 16+
npm --version   # Should be 8+
dotnet --version  # Should be 8.0+
```

3. **Check documentation:**
   - README.md
   - QUICK_START.md
   - BUILD_PROCESS.md

4. **Common search queries:**
   - "Vite build fails [your error]"
   - "React not loading in Blazor"
   - "npm install errors Windows"

---

## ? Prevention Checklist

To avoid issues:

- [ ] Always `npm install` after pulling code
- [ ] Run `npm run build` before deploying
- [ ] Check browser console for errors
- [ ] Use `npm run dev` for testing
- [ ] Hard refresh browser after deployment
- [ ] Keep Node.js updated
- [ ] Close files before rebuilding
- [ ] Run scripts from correct directory

---

**Most issues can be solved by:**
1. Deleting `node_modules` and `dist`
2. Running `npm install`
3. Running `npm run build`
4. Running `.\deploy-to-blazor.ps1`
5. Hard refreshing browser

?? **Good luck!**
