# Personal Portfolio V2

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="public/prandell.JPG" alt="Logo" width="150" height="100">

<h3 align="center">Patrick Randell Portfolio</h3>

  <p align="center">
    New and improved portfolio website, created using React, ThreeJS and Typescript
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
         <li><a href="manual-deployment-and-execution">Manual Deployment and Execution</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Learn more</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This repository contains all the code for my personal portfolio. The portfolio borrows ideas from many different tutorials and articles across the web.

Big credit to [bruno imbrizi](http://brunoimbrizi.com) for his ThreeJS interactive particles, and [Javascript Mastery](https://www.youtube.com/watch?v=0fYi8SGA20k&t=9568s) for their portfolio website youtube video.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![ThreeJs][three js]][threejs-url]
- [![React][react]][react-url]
- [![Typescript][typescript]][typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You will need NodeJs installed on your machine to start.

### Installation

The following instructions are the steps necessary to execute the application.

1. Clone the repository

   ```sh
   git clone <>
   ```

2. Copy the template configuration file, `.env.production` to a _new_ file, `.env.local`.

   ```sh
   cp .env.production .env.local
   ```

3. Populate the fields with the appropriate information.

   ```dotenv

   ```

4. Install the `Javascript` packages.

   ```sh
   npm install --legacy-peer-deps
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Skibbidy bup bup

```shell
cd /path/to/repository
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173) with your browser to see the result.

## Learn More

-
-

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[next js]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[next-url]: https://nextjs.org/
[docker.com]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com
[react-url]: https://react.dev/
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[three js]: https://img.shields.io/badge/Three.js-white?style=for-the-badge&logo=Three.Js&logoColor=black
[threejs-url]: https://threejs.org/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
