# Development Guide

## Prerequisites

Here are some prerequisite software to install before developing! This guide assumes you're using VSCODE as your IDE. (Sorry if you're using something else! :sob:)

If anyone has any questions / suggestions let me know! - Anton

### [Pnpm - faster npm (package manager)](https://pnpm.io/) <br/>

Pnpm works exactly the same as npm just faster.

To install run this command in powershell or look at the installer guide [here](https://pnpm.io/installation).

```
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

### [Prettier - Code formatter (even for tailwind classes!)](https://pnpm.io/)

Prettier is a code formatter which will standardize stuff like indentation and tailwind class location. Please install this vscode extension as it will make developing this project cleaner! :smile:

To install go to vscode extensions and search for Prettier - Code Formatter & Prettier ESLint.

After that go to settings > default formatter and set it to prettier.

![image](https://github.com/user-attachments/assets/cc8dcff4-fe4b-4d49-b29b-7bf1cb4d54be)

After that also turn on format on save.

![image](https://github.com/user-attachments/assets/6325c6f5-2977-4e10-9682-b5eca7588640)


I've already set it up in the repository so no need to worry about that


## Additional software (optional)

Here are some additional software that I personal use in my workflows, not needed for this project but just wanted to share.

### [Git lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Git lens is an extension which allows you to see who made what code so you can ask them about it! (or blame them 💀), an example is shown below.

![image](https://github.com/user-attachments/assets/634f1dfe-71af-419a-81fb-8ff9ccc43fcb)


### [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

React snippets allow you to quickly write React boilerplate code, so you don't need to write it from scratch everytime you want to make a new component. 

Just type `rafc` for components or `rafce` for pages in a new tsx file and you're all set. (just ask me if you need help)

### [Material Icon Theme (or any icon theme)](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Hopefully you have an icon theme installed it makes navigating folders a lot easier!
![image](https://github.com/user-attachments/assets/99910faa-639f-462c-aaf2-9ca7a121fcc4)


## Creating Components

### 1. Naming Conventions

Component Names: Use PascalCase for component names (including their file name). Each word starts with an uppercase letter.
```tsx
// Correct
const MyComponent = () => { ... };

// Incorrect
const myComponent = () => { ... };
```

The exception to this is nextJS files such as `layout.tsx` and `page.tsx` etc which are required to be formatted like that to be read correctly.

### 2. Exporting components (export default vs just export)

Use `export default` when it is a section or page. Or when you know you're only going to be exporting one thing from that file e.g

```tsx
import React from 'react';

const test = () => {
  return <section className="h-screen w-full">pog</section>;
};

export default test;
```

This was generated from using `RAFCE` from the react snippet plugin.

Use just `export` when making components or a file that will contain multiple exports like a data file or const file e.g.

```tsx
import React from 'react';

export const testcomponent = () => {
  return <div>pog</div>;
};

export const testcomponent2 = () => {
  return <div>wow</div>;
};

export const testcomponent3 = () => {
  return <div>hello</div>;
};
```

This was generated from using `RAFC` from the react snippet plugin.

### 3. File Structure

Check [file structure](./STRUCTURE.md)

# Questions

If you have any further questions feel free to ping Anton for technical questions or Tony for non-technical questions!
