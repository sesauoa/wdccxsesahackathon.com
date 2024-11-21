# Development Guide

## Prerequisites

Here are some prerequisite software to install before developing! This guide assumes you're using VSCODE as your IDE. (Sorry if you're using something else! :sob:)

### [Pnpm - faster npm (package manager)](https://pnpm.io/) <br/>

Pnpm works exactly the same as npm just faster.

To install run this command in powershell or look at the installer guide [here](https://pnpm.io/installation).

```
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

### [Prettier - Code formatter (even for tailwind classes!)](https://pnpm.io/)

Prettier is a code formatter which will standardize stuff like indentation and tailwind class location. Please install this vscode extension as it will make developing a lot more cleaner! :smile:

To install go to vscode extensions and search for Prettier - Code Formatter & Prettier ESLint.

I've already set it up in the repository so no need to worry about that

## Additional software (optional)

Here are some additional software that I personal use in my workflows, not needed for this project but just wanted to share.

### [Git lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Git lens is an extension which allows you to see who made what code in line, examples shown below.

### [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

React snippets allow you to quickly write React boilerplate code, so you don't need to write it from scratch everytime you want to make a new component.

## Creating Components
