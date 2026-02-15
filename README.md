# EliteGuardian React App

React-based services catalog for the EliteGuardian Destiny 2 boosting website.

## ?? Location
`D:\repo\EliteGuardian\repo\`

This React app integrates with the parent Blazor project.

## ?? Quick Start

### **First Time Setup**
```powershell
cd D:\repo\EliteGuardian\repo
.\setup.ps1
```

This will:
- ? Check Node.js installation
- ? Install npm dependencies
- ? Build the React app
- ? Deploy to Blazor wwwroot

### **Development**

```powershell
# Run React dev server (hot reload)
cd D:\repo\EliteGuardian\repo
npm run dev
```

Access at: `http://localhost:3000`

### **Build & Deploy to Blazor**

```powershell
cd D:\repo\EliteGuardian\repo
npm run build
.\deploy-to-blazor.ps1
```

Then run Blazor:
```powershell
cd D:\repo\EliteGuardian
dotnet run
```

Access at: `https://localhost:5001/catalog`

## ?? Project Structure

```
D:\repo\EliteGuardian\repo\
??? src/
?   ??? Components/
?   ?   ??? Header.jsx
?   ?   ??? Hero.jsx
?   ?   ??? HeroImage.jsx
?   ?   ??? Features.jsx
?   ?   ??? Services.jsx
?   ?   ??? ServiceCard.jsx
?   ?   ??? CategoryFilter.jsx
?   ?   ??? HowItWorks.jsx
?   ?   ??? Testimonials.jsx
?   ?   ??? CallToAction.jsx
?   ?   ??? Footer.jsx
?   ?   ??? Cart.jsx
?   ?   ??? CheckoutDialog.jsx
?   ?   ??? WelcomeMessage.jsx
?   ??? contexts/
?   ?   ??? CartContext.jsx
?   ??? data/
?   ?   ??? services.js
?   ??? lib/
?   ?   ??? utils.js
?   ?   ??? payment.js
?   ??? App.jsx
?   ??? main.jsx
?   ??? index.css
??? index.html
??? package.json
??? vite.config.js
??? tailwind.config.js
??? postcss.config.js
??? deploy-to-blazor.ps1
??? setup.ps1
??? README.md
```

## ?? Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production (creates dist/)
npm run preview  # Preview production build
```

## ?? Technologies

- **React 18** - UI framework
- **Vite 4** - Build tool
- **TailwindCSS 3** - Utility-first CSS
- **Framer Motion 11** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## ?? Features

- ? Shopping cart with context
- ? Service catalog with 120+ items
- ? Real-time search and filtering
- ? Category filtering
- ? Payment integration (Stripe)
- ? Checkout dialog
- ? Responsive design
- ? Smooth animations
- ? Toast notifications

## ?? Development Workflow

### **Option 1: Standalone Development**
```powershell
# Terminal 1: React dev server
cd D:\repo\EliteGuardian\repo
npm run dev
# Work on React app with hot reload
# Access at http://localhost:3000
```

### **Option 2: Integrated with Blazor**
```powershell
# Build and deploy React
cd D:\repo\EliteGuardian\repo
npm run build
.\deploy-to-blazor.ps1

# Run Blazor
cd D:\repo\EliteGuardian
dotnet run
# Access at https://localhost:5001/catalog
```

## ?? Data Management

**Services Data Location:** `src/data/services.js`

Contains 120+ Destiny 2 services:
- Raids
- Dungeons
- Trials of Osiris
- Exotic Weapons
- Power Leveling
- PvE Activities

To update services:
1. Edit `src/data/services.js`
2. Rebuild: `npm run build`
3. Redeploy: `.\deploy-to-blazor.ps1`

## ?? Build Output

After running `npm run build`, files are created in:
- `D:\repo\EliteGuardian\repo\dist\`

After running `.\deploy-to-blazor.ps1`, files are copied to:
- `D:\repo\EliteGuardian\wwwroot\react-app\`

## ?? Integration with Blazor

The React app is served by Blazor at the `/catalog` route.

**Blazor Page:** `Components/Pages/ReactApp.razor`

```razor
@page "/catalog"
@page "/catalog/{*catchall}"

<!-- Loads React app from wwwroot/react-app/ -->
```

## ?? Troubleshooting

### **npm install fails**
```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
npm cache clean --force
npm install
```

### **Build fails**
```powershell
# Check Node.js version (requires 16+)
node --version

# Reinstall dependencies
npm install
```

### **React app doesn't load in Blazor**
1. Check `D:\repo\EliteGuardian\wwwroot\react-app\` has files
2. Rebuild: `npm run build`
3. Redeploy: `.\deploy-to-blazor.ps1`
4. Restart Blazor: `dotnet run`

### **Port 3000 already in use**
```powershell
# Use different port
npm run dev -- --port 3001
```

## ?? Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## ?? Environment Variables

No environment variables required for development.

For production with Stripe:
- Add Stripe publishable key to `src/lib/payment.js`

## ?? License

This project is part of the EliteGuardian Blazor application.

---

**Built with ?? using React + Vite + TailwindCSS**
