# ?? Quick Reference - Building from D:\repo\EliteGuardian\repo\

## ? Setup Complete!

Your React app is now configured to build from:
**`D:\repo\EliteGuardian\repo\`**

## ?? Quick Commands

### **First Time Setup**
```powershell
cd D:\repo\EliteGuardian\repo
.\setup.ps1
```

### **Development (Hot Reload)**
```powershell
cd D:\repo\EliteGuardian\repo
npm run dev
# Access: http://localhost:3000
```

### **Build for Production**
```powershell
cd D:\repo\EliteGuardian\repo
npm run build
```

### **Deploy to Blazor**
```powershell
cd D:\repo\EliteGuardian\repo
.\deploy-to-blazor.ps1
```

### **Run Blazor with React**
```powershell
cd D:\repo\EliteGuardian
dotnet run
# Access: https://localhost:5001/catalog
```

## ?? File Structure

```
D:\repo\EliteGuardian\
??? repo\                          ? React app source
?   ??? src\
?   ?   ??? Components\
?   ?   ??? contexts\
?   ?   ??? data\
?   ?   ??? lib\
?   ?   ??? App.jsx
?   ?   ??? main.jsx
?   ?   ??? index.css
?   ??? dist\                      ? Build output
?   ??? node_modules\              ? Dependencies
?   ??? package.json
?   ??? vite.config.js            ? Created
?   ??? deploy-to-blazor.ps1      ? Created
?   ??? setup.ps1                 ? Created
?   ??? README.md                 ? Created
?
??? wwwroot\
?   ??? react-app\                 ? Deployed React app
?
??? Components\
?   ??? Pages\
?       ??? ReactApp.razor         ? React container
?
??? Program.cs
```

## ?? Workflow

```
Edit React files in repo/src/
         ?
    npm run dev (test locally)
         ?
    npm run build
         ?
    deploy-to-blazor.ps1
         ?
Files copied to wwwroot/react-app/
         ?
    dotnet run
         ?
Access at https://localhost:5001/catalog
```

## ? Key Features

### **What's Configured:**
- ? Vite build configuration
- ? Relative path builds for Blazor
- ? Code splitting (vendor, motion, radix chunks)
- ? Deployment automation
- ? TailwindCSS integration
- ? PostCSS autoprefixer

### **Scripts Added:**
- ? `setup.ps1` - First-time setup
- ? `deploy-to-blazor.ps1` - Automated deployment
- ? `README.md` - Documentation

## ?? Components Included

```
Components/
??? Header.jsx          - Navigation & cart
??? Hero.jsx            - Hero section
??? HeroImage.jsx       - Animated hero image
??? Features.jsx        - Feature highlights
??? Services.jsx        - Service catalog
??? ServiceCard.jsx     - Service display
??? CategoryFilter.jsx  - Category filtering
??? HowItWorks.jsx      - Process steps
??? Testimonials.jsx    - Customer reviews
??? CallToAction.jsx    - CTA section
??? Footer.jsx          - Footer
??? Cart.jsx            - Shopping cart
??? CheckoutDialog.jsx  - Checkout modal
??? WelcomeMessage.jsx  - Welcome popup
```

## ?? Data

**Location:** `src/data/services.js`

Contains 120+ Destiny 2 services across categories:
- Raids
- Dungeons
- Trials
- Exotics
- Titles
- Power Leveling
- PvE Activities

## ?? Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build settings |
| `tailwind.config.js` | TailwindCSS configuration |
| `postcss.config.js` | PostCSS plugins |
| `package.json` | Dependencies & scripts |

## ?? Troubleshooting

### Issue: "npm not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Build fails
**Solution:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### Issue: React app blank in Blazor
**Solution:**
```powershell
cd D:\repo\EliteGuardian\repo
npm run build
.\deploy-to-blazor.ps1
cd ..
dotnet run
```

### Issue: Port 3000 in use
**Solution:**
```powershell
npm run dev -- --port 3001
```

## ?? Next Steps

1. **Test Development:**
   ```powershell
   cd D:\repo\EliteGuardian\repo
   npm run dev
   ```

2. **Build & Deploy:**
   ```powershell
   npm run build
   .\deploy-to-blazor.ps1
   ```

3. **Run in Blazor:**
   ```powershell
   cd D:\repo\EliteGuardian
   dotnet run
   ```

4. **Access:**
   - Dev: `http://localhost:3000`
   - Blazor: `https://localhost:5001/catalog`

## ? What Changed

From your original setup:

**Before:**
- Files in `C:\Users\Administrator\source\repos\`
- Separate project location

**Now:**
- ? Files in `D:\repo\EliteGuardian\repo\`
- ? Integrated with Blazor project
- ? Automated deployment scripts
- ? Proper build configuration
- ? Single project structure

---

**?? Your React app is now ready to build from `D:\repo\EliteGuardian\repo\`!**

Run `.\setup.ps1` to get started!
