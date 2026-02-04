---
description: Synchronize workspace with GitHub (Pull or Push)
---

# GitHub Sync Workflow

Use this workflow to sync changes with GitHub.

## 1. Check Status
First, check the current status of the repository.
```powershell
git status
```

## 2. Pull Changes (Start of Session)
If the user asks to "sync first" or "get latest", pull changes from the remote.
```powershell
git pull origin main
```

## 3. Push Changes (End of Session)
If the user asks to "sync" or "save changes" after work is done:

1. Stage all changes:
```powershell
git add .
```

2. Commit changes (ask user for message if not obvious, or use descriptive message based on recent work):
```powershell
git commit -m "feat: Update application"
```

3. Push to remote:
```powershell
// turbo
git push origin main
```
