#!/bin/bash

# Project-specific commit helper script for RodeToFrontend monorepo
# Usage: ./commit-project.sh <project-name> "<commit-message>"
# Example: ./commit-project.sh project-06 "Add new feature to navbar"

if [ $# -ne 2 ]; then
    echo "Usage: $0 <project-name> <commit-message>"
    echo "Example: $0 project-06 'Add new feature to navbar'"
    echo ""
    echo "Available projects:"
    ls -d */ | grep "project-" | sed 's/\///g'
    exit 1
fi

PROJECT_NAME=$1
COMMIT_MESSAGE=$2

# Check if project directory exists
if [ ! -d "$PROJECT_NAME" ]; then
    echo "Error: Project directory '$PROJECT_NAME' does not exist!"
    echo ""
    echo "Available projects:"
    ls -d */ | grep "project-" | sed 's/\///g'
    exit 1
fi

echo "🚀 Committing changes for $PROJECT_NAME"
echo "📝 Message: $COMMIT_MESSAGE"
echo ""

# Check if there are any changes in the project directory
if git diff --quiet "$PROJECT_NAME/" && git diff --cached --quiet "$PROJECT_NAME/"; then
    echo "❌ No changes detected in $PROJECT_NAME/"
    exit 1
fi

# Add only the specific project files
echo "📁 Adding files from $PROJECT_NAME/..."
git add "$PROJECT_NAME/"

# Show what's being committed
echo ""
echo "📋 Files to be committed:"
git diff --cached --name-only | grep "^$PROJECT_NAME/"

echo ""
echo "🔍 Changes summary:"
git diff --cached --stat | grep "^$PROJECT_NAME/"

# Ask for confirmation
echo ""
read -p "✅ Proceed with commit? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Commit with project-specific message format
    git commit -m "$PROJECT_NAME: $COMMIT_MESSAGE"
    
    echo ""
    echo "✅ Successfully committed changes to $PROJECT_NAME!"
    echo ""
    echo "🚀 To push to GitHub:"
    echo "   git push origin main"
    echo ""
    echo "📊 Recent commits for this project:"
    git log --oneline --grep="$PROJECT_NAME:" -5
else
    echo ""
    echo "❌ Commit cancelled. Changes are still staged."
    echo "💡 To unstage: git restore --staged $PROJECT_NAME/"
fi