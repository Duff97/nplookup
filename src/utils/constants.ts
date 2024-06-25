import { IPreviewPackage } from "../interface"

export const packagePlaceholder = `{
  "name": "nplookup",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
`

export const previewPackages : IPreviewPackage[] = [
  {
    name: 'React',
    url: 'https://raw.githubusercontent.com/facebook/react/main/package.json'
  },
  {
    name: 'Vue',
    url: 'https://raw.githubusercontent.com/vuejs/core/main/package.json'
  },
  {
    name: 'Angular',
    url: 'https://raw.githubusercontent.com/angular/angular/main/package.json'
  },
  {
    name: 'Jest',
    url: 'https://raw.githubusercontent.com/jestjs/jest/main/package.json'
  },
  {
    name: 'TailwindCSS',
    url: 'https://raw.githubusercontent.com/tailwindlabs/tailwindcss/next/package.json'
  },
  {
    name: 'JQuery',
    url: 'https://raw.githubusercontent.com/jquery/jquery/main/package.json'
  },
  {
    name: 'Ember',
    url: 'https://raw.githubusercontent.com/emberjs/ember.js/main/package.json'
  },
  {
    name: 'Meteor',
    url: 'https://raw.githubusercontent.com/meteor/meteor/devel/package.json'
  },
  {
    name: 'Polymer',
    url: 'https://raw.githubusercontent.com/Polymer/polymer/master/package.json'
  }
]