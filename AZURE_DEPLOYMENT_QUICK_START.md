# 🚀 AgentFlow - Azure Static Web App Deployment

## ✅ Status: LIVE & DEPLOYED

**🌐 Live Application URL**: https://salmon-moss-03a936610.3.azurestaticapps.net

---

## 📋 Quick Start

### Access Your Live Application
Simply visit the URL above to see your AgentFlow sign-in page live on Azure!

### Make Changes & Auto-Deploy
```bash
# 1. Make changes locally
# 2. Commit changes
git add .
git commit -m "Your changes"

# 3. Push to GitHub
git push origin main

# ⏳ Wait 1-2 minutes
# ✅ Changes automatically deployed to Azure!
```

---

## 🏗️ Deployment Architecture

```
GitHub Repository
    ↓
    │ (Push to main)
    ↓
GitHub Actions
    ├─ Checkout code
    ├─ Build & Validate
    └─ Deploy to Azure
    ↓
Azure Static Web App
    ├─ Name: agentflow-app
    ├─ Resource Group: mcp-test
    ├─ Tier: Free
    └─ Location: Central US
    ↓
Global CDN
    ↓
🌐 Live: https://salmon-moss-03a936610.3.azurestaticapps.net
```

---

## 📊 Configuration Files

### 1. **staticwebapp.config.json**
Handles:
- ✅ Route configuration for all file types
- ✅ Asset serving (SVG, CSS, JS)
- ✅ MIME type mapping
- ✅ Caching policies (1-hour cache)
- ✅ Navigation fallback for SPA

### 2. **GitHub Actions Workflows**
Two workflow files manage deployment:
- `.github/workflows/azure-static-web-apps-deploy.yml` - Manual configuration
- `.github/workflows/azure-static-web-apps-salmon-moss-03a936610.yml` - Azure-generated

Both handle:
- ✅ Push to main → Automatic deployment
- ✅ PR opened → Preview deployment
- ✅ PR closed → Cleanup

---

## 🔑 Key Features

### ✅ Automatic Deployment
- Every push to `main` branch triggers deployment
- Deployment completes in 1-2 minutes
- GitHub Actions provides detailed logs

### ✅ Global CDN
- Content served from 100+ Azure data centers worldwide
- Fast load times from any location
- Automatic caching of static assets

### ✅ Free Tier Benefits
- No costs for basic hosting
- Up to 1 GB storage
- Unlimited bandwidth (fair use)
- Automatic SSL/TLS encryption
- 20 free build minutes/month

### ✅ Security
- Automatic HTTPS for all traffic
- GitHub authentication integration
- CORS policies configured
- Secure by default

---

## 📁 Project Structure

```
mcp-test-2/
├── index.html                  # Main application
├── styles.css                  # Responsive styling
├── script.js                   # Client-side interactivity
├── staticwebapp.config.json    # Azure configuration ⭐
├── .github/
│   └── workflows/
│       ├── azure-static-web-apps-deploy.yml
│       └── azure-static-web-apps-salmon-moss-03a936610.yml
├── assets/
│   ├── logo-gradient.svg
│   ├── jira-icon.svg
│   ├── github-icon.svg
│   └── azure-icon.svg
├── README.md
├── COMPONENT_HIERARCHY.md
├── AZURE_DEPLOYMENT_GUIDE.md
└── DEPLOYMENT_SUMMARY.md
```

---

## 🎯 Deployment Details

### Azure Resource Information

| Property | Value |
|----------|-------|
| **App Name** | agentflow-app |
| **Resource Group** | mcp-test |
| **Location** | Central US |
| **Tier** | Free |
| **Repository** | adityashukla00001/mcp-test-2 |
| **Branch** | main |
| **Provider** | GitHub |

### Resource IDs

**Subscription ID**: `7a52c120-0ce5-427c-bd17-09eb7c348814`

**Full Resource ID**:
```
/subscriptions/7a52c120-0ce5-427c-bd17-09eb7c348814/resourceGroups/mcp-test/providers/Microsoft.Web/staticSites/agentflow-app
```

---

## 🔄 How It Works

### 1. **Push Code to GitHub**
```bash
git push origin main
```

### 2. **GitHub Detects Push**
GitHub automatically triggers the workflow via webhook

### 3. **Workflow Executes**
- Checks out code
- Validates HTML/CSS/JS
- Triggers Azure deployment

### 4. **Deploy to Azure**
- Static Web App receives new files
- CDN cache invalidated
- New version served globally

### 5. **Live in 1-2 Minutes**
Your changes are live worldwide!

---

## 📊 Monitoring

### View GitHub Actions Logs
1. Go to: https://github.com/adityashukla00001/mcp-test-2
2. Click **Actions** tab
3. View latest workflow runs and logs

### View Azure Deployments
1. Go to: https://portal.azure.com
2. Navigate to **Resource Groups** → **mcp-test**
3. Select **agentflow-app**
4. View deployment history and metrics

### Check Application Status
```bash
# Using Azure CLI
az staticwebapp show -n agentflow-app -g mcp-test

# View environments
az staticwebapp environment list -n agentflow-app -g mcp-test
```

---

## 🎨 Features Included

### Application Features
- ✅ Modern, responsive sign-in page
- ✅ Multi-provider authentication (Jira, GitHub, Azure DevOps)
- ✅ Beautiful gradient background
- ✅ Mobile-optimized UI
- ✅ Keyboard accessible
- ✅ SVG icons for branding

### Deployment Features
- ✅ Automatic builds on every push
- ✅ Global CDN distribution
- ✅ Free SSL/TLS certificates
- ✅ Staging environments for PRs
- ✅ Easy rollback capabilities
- ✅ GitHub integration

---

## 🚀 Next Steps

### 1. **Test Live Application**
- Visit: https://salmon-moss-03a936610.3.azurestaticapps.net
- Test all buttons and features
- Check responsive design on mobile

### 2. **Make Your First Update**
```bash
# Edit a file
echo "<!-- Updated: $(date) -->" >> index.html

# Commit
git add index.html
git commit -m "Test auto-deployment"

# Push
git push origin main

# ⏳ Wait 1-2 minutes → See changes live!
```

### 3. **Custom Domain (Optional)**
Upgrade to Standard tier and add your custom domain:
```bash
az staticwebapp custom-domain set \
  -n agentflow-app \
  -g mcp-test \
  --domain-name yourdomain.com
```

### 4. **Enable Authentication (Optional)**
Configure GitHub/Azure authentication for protected routes

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Application documentation |
| `COMPONENT_HIERARCHY.md` | HTML component structure diagram |
| `AZURE_DEPLOYMENT_GUIDE.md` | Detailed deployment instructions |
| `DEPLOYMENT_SUMMARY.md` | Deployment results and metrics |

---

## ⚙️ Configuration Reference

### staticwebapp.config.json Routes
```json
{
  "routes": [
    { "route": "/assets/*", "serve": "/assets/*" },
    { "route": "*.css", "serve": "*.css" },
    { "route": "*.js", "serve": "*.js" },
    { "route": "/", "serve": "/index.html" },
    { "route": "/*", "serve": "/index.html" }
  ]
}
```

### Cache Headers
```json
{
  "globalHeaders": {
    "cache-control": "public, max-age=3600"
  }
}
```

### MIME Types
```json
{
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
}
```

---

## 🆘 Troubleshooting

### **Website Shows 404**
- Check `staticwebapp.config.json` routing
- Verify all files committed to GitHub
- Check GitHub Actions logs for build errors

### **Styles/Scripts Not Loading**
- Verify asset file paths in HTML
- Check browser console for errors
- Clear browser cache (Ctrl+Shift+Delete)
- Confirm MIME types in config

### **Deployment Not Triggering**
- Push to `main` branch (not other branches)
- Check GitHub Actions for errors
- Verify workflow file exists in `.github/workflows/`
- Check repository settings for workflow permissions

### **Slow Loading**
- First request slower due to CDN distribution
- Clear browser cache
- Check Azure Portal for performance metrics
- Check GitHub Actions logs for build times

---

## 📞 Support Resources

| Resource | URL |
|----------|-----|
| **Azure Static Web Apps** | https://docs.microsoft.com/en-us/azure/static-web-apps/ |
| **GitHub Actions** | https://docs.github.com/en/actions |
| **Azure CLI Reference** | https://docs.microsoft.com/en-us/cli/azure/ |
| **Azure Portal** | https://portal.azure.com |

---

## 💡 Tips & Best Practices

### Development Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test locally

# Commit
git add .
git commit -m "Add new feature"

# Push feature branch
git push origin feature/new-feature

# Create Pull Request on GitHub
# PR automatically deploys to staging

# Review changes at staging URL

# Merge to main → Auto-deploy to production!
```

### Performance Optimization
- Keep bundle sizes small
- Optimize images
- Use minified CSS/JS
- Leverage CDN caching
- Test on slow networks

### Security Best Practices
- Never commit secrets to repository
- Use environment variables for sensitive data
- Regularly update dependencies
- Monitor deployment logs
- Use GitHub branch protection

---

## 🎉 You're All Set!

Your AgentFlow application is:
- ✅ Live and accessible globally
- ✅ Automatically deployed on every push
- ✅ Served via Azure's global CDN
- ✅ Protected with automatic SSL/TLS
- ✅ Monitored by GitHub Actions
- ✅ Ready for production use

### 🌐 **Visit Your App**: https://salmon-moss-03a936610.3.azurestaticapps.net

---

**Deployment Status**: ✅ LIVE  
**Last Updated**: November 28, 2025  
**Repository**: https://github.com/adityashukla00001/mcp-test-2  
**Resource**: agentflow-app (mcp-test resource group)

*Push to main branch anytime to deploy changes automatically!* 🚀
