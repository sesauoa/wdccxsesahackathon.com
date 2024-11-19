```
.
├── .github                
│   └── workflows/             # contains github workflows for ci/cd
├── public/
│   └── assets/                # contains all our assets
│       ├── images/
│       └── svg/
├── src /
│   ├── app/
│   │   ├── (route)             # different routes
│   │   │   └── page.tsx        # contains routed page
│   │   ├── layout.tsx          # contains root layout
│   │   └── page.tsx            # contains root page
│   ├── components/             # contains all components
│   │   └── common/             # contains all common components used in most pages
│   ├── data/                   # contains data e.g markdown or json files
│   ├── fonts/                  # contains all fonts
│   │   └── font/
│   ├── hooks/                  # custom hooks
│   ├── libs/                   # custom helper / utility functions
│   ├── styles/                 # contains all styles
│   └── types/                  # contains all type files
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
>[!NOTE]  
>Updated as of 20/11/2024