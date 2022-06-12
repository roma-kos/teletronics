## Teletronics
### Technology

- [Vue 3](https://v3.vuejs.org/) - Declarative UI framework used for rendering DOM, SVG and WebGL
- [Vite](https://vitejs.dev/) - Frontend Tooling, configurable in `/vite.config.ts`
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [Jest](https://facebook.github.io/jest/) - JS unit tests
- [Cypress](http://docs.cypress.io/) - end to end tests using headless chrome

### Style

- [Standard](https://standardjs.com/) - JS Style
- [Prettier](https://prettier.io) - Autoformatting

## Local Development / Tests

```bash
# clone repository
git clone https://github.com/roma-so/teletronics.git

# install dependencies
npm install

# serve the dashboard
npm run dev

# run unit tests
npm test:unit

# run end to end tests using cypress frontend
npm run test:e2e

```

## Deployment

```bash
# run in docker container
docker build -t teletronics .
docker run -it -p 8080:8080 --rm --name teletronics teletronics

```
