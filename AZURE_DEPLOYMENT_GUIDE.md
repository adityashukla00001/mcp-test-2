# Azure Static Web App Deployment Guide

## Overview
This document provides step-by-step instructions for deploying the AgentFlow application to Azure Static Web Apps with GitHub integration and automatic deployment on every push.

## Prerequisites
- Azure Subscription (Free tier available)
- GitHub Account
- Azure CLI installed locally (optional, for manual deployment)
- Admin access to this GitHub repository

## Deployment Architecture

```
┌─────────────────┐
│   GitHub Repo   │
│  (mcp-test-2)   │
└────────┬────────┘
         │
         ├─ Push to main branch
         │
         ▼
┌─────────────────────────────────┐
│   GitHub Actions Workflow       │
│  (.github/workflows/)           │
│  - Build & Validate             │
│  - Deploy to Azure              │
└────────┬────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────┐
│   Azure Static Web Apps                  │
│   - Resource: AgentFlow-App              │
│   - Location: West US 2                  │
│   - Tier: Free                           │
│   - Resource Group: mcp-test             │
└──────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────┐
│   Public URL                             │
│   https://[unique-id].westus2.azurestat  │
│   icapps.net                             │
└──────────────────────────────────────────┘
```

## Step-by-Step Deployment

### Step 1: Prepare Local Repository

The configuration files have been created:
- ✅ `staticwebapp.config.json` - Azure routing configuration
- ✅ `.github/workflows/azure-static-web-apps-deploy.yml` - GitHub Actions workflow

### Step 2: Create Azure Resource Group

Using Azure CLI:

```bash
# Login to Azure
az login

# Create resource group in West US 2
az group create \
  --name mcp-test \
  --location "West US 2"

# Verify creation
az group show --name mcp-test
```

Using Azure Portal:
1. Go to https://portal.azure.com
2. Click "Create a resource"
3. Search for "Resource Group"
4. Create with:
   - Name: `mcp-test`
   - Region: `West US 2`
   - Click "Review + Create"

### Step 3: Create Azure Static Web App

**Option A: Using Azure CLI (Recommended)**

```bash
az staticwebapp create \
  --name agentflow-app \
  --resource-group mcp-test \
  --location "West US 2" \
  --source https://github.com/adityashukla00001/mcp-test-2 \
  --branch main \
  --login-with-github \
  --token [YOUR_GITHUB_TOKEN]
```

**Option B: Using Azure Portal**

1. Go to https://portal.azure.com
2. Click "Create a resource"
3. Search for "Static Web App"
4. Click "Create"
5. Configure:
   - **Subscription**: Your Azure Subscription
   - **Resource Group**: `mcp-test` (select existing)
   - **Name**: `agentflow-app`
   - **Hosting Plan**: `Free`
   - **Region**: `West US 2`
   - **Source**: GitHub
   - **Organization**: `adityashukla00001`
   - **Repository**: `mcp-test-2`
   - **Branch**: `main`
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Output location**: (leave empty)
6. Click "Review + Create"
7. Click "Create"

### Step 4: Authorize GitHub Repository

When creating the Static Web App:

1. You'll be prompted to authorize Azure access to GitHub
2. Click "Authorize AzureAppServiceCLI" (or similar)
3. Select the repository `adityashukla00001/mcp-test-2`
4. Grant necessary permissions

### Step 5: GitHub Actions Automatic Setup

Azure will automatically:
1. Generate a deployment token
2. Add it as `AZURE_STATIC_WEB_APPS_API_TOKEN_AGENTFLOW_APP` secret to your repository
3. Create the GitHub Actions workflow (already in place)

### Step 6: Push Configuration Files

Commit and push the configuration files:

```bash
git add staticwebapp.config.json .github/workflows/azure-static-web-apps-deploy.yml
git commit -m "Add Azure Static Web App configuration and GitHub Actions workflow"
git push origin main
```

### Step 7: Monitor Deployment

1. **GitHub Actions**:
   - Go to https://github.com/adityashukla00001/mcp-test-2/actions
   - Watch the workflow run
   - Check for successful deployment

2. **Azure Portal**:
   - Go to https://portal.azure.com
   - Navigate to resource group `mcp-test`
   - Select `agentflow-app` (Static Web App)
   - View deployment history
   - Copy the **URL** from "Overview"

## Configuration Details

### staticwebapp.config.json

This file handles:
- **Routing**: Maps requests to appropriate files
- **Asset serving**: SVG, CSS, JS files with correct MIME types
- **Navigation fallback**: Routes to index.html for SPA behavior
- **Caching**: 1-hour cache for static assets
- **MIME types**: Proper content types for all file types

### GitHub Actions Workflow

The workflow:
1. **Triggers**: On push to main branch or pull requests
2. **Build**: Validates HTML structure
3. **Deploy**: Uploads to Azure Static Web Apps
4. **Auto-close**: Closes deployment on PR merge

## Resource Details

| Property | Value |
|----------|-------|
| **Resource Name** | agentflow-app |
| **Resource Group** | mcp-test |
| **Location** | West US 2 |
| **Tier** | Free |
| **Repository** | adityashukla00001/mcp-test-2 |
| **Branch** | main |

## Monitoring & Maintenance

### View Deployment Status
```bash
az staticwebapp show \
  --name agentflow-app \
  --resource-group mcp-test
```

### Check Recent Deployments
```bash
az staticwebapp environment list \
  --name agentflow-app \
  --resource-group mcp-test
```

### View Application URL
```bash
az staticwebapp show \
  --name agentflow-app \
  --resource-group mcp-test \
  --query "defaultHostname" \
  --output tsv
```

## Troubleshooting

### Issue: Deployment Failed
1. Check GitHub Actions logs: Go to **Actions** tab → Click workflow run
2. Check Azure portal for error messages
3. Verify `staticwebapp.config.json` syntax
4. Ensure all required files are committed

### Issue: Assets (CSS, JS, SVG) Not Loading
1. Verify paths in `staticwebapp.config.json`
2. Check browser console for 404 errors
3. Verify MIME types configuration
4. Check asset file names match HTML references

### Issue: Routes Not Working
1. Review `navigationFallback` section in config
2. Ensure index.html is in repository root
3. Verify static content paths

## Continuous Deployment Workflow

After initial setup, deployment is automatic:

```
Local Changes
     ↓
git push to main
     ↓
GitHub detects push
     ↓
GitHub Actions workflow starts
     ↓
Build & Validate
     ↓
Deploy to Azure
     ↓
✅ Live at https://[unique-id].westus2.azurestaticapps.net
```

Any push to the main branch automatically triggers deployment!

## Free Tier Limitations

- Up to 1 Azure Static Web Apps free instance per Azure subscription
- 1 GB storage
- No SSL/TLS configuration needed (provided by Azure)
- No custom domain without upgrade
- Bandwidth: Included free tier quota

## Next Steps

1. ✅ Configuration files created
2. ⏳ Create Azure Resource Group
3. ⏳ Create Azure Static Web App
4. ⏳ Authorize GitHub
5. ⏳ Push and deploy
6. ⏳ Verify live deployment
7. ⏳ Set up custom domain (optional)

## Support & Documentation

- **Azure Static Web Apps Docs**: https://docs.microsoft.com/en-us/azure/static-web-apps/
- **GitHub Actions Documentation**: https://docs.github.com/en/actions
- **Azure CLI Reference**: https://docs.microsoft.com/en-us/cli/azure/
- **Troubleshooting Guide**: https://docs.microsoft.com/en-us/azure/static-web-apps/troubleshooting

---

**Created**: November 28, 2025
**Application**: AgentFlow - AI Project Management Tool
**Repository**: https://github.com/adityashukla00001/mcp-test-2
