# Electron Calculator

My awesome calculator created with [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).

## Common commands

### Installing packages

```sh
yarn install
```

### Starting development

Start the app in the `dev` environment:

```sh
yarn start
```

### Build (dev)

To package apps for the local platform:

```sh
yarn package
```

### Build (prod)

See also: [publish.yml](.github/workflows/publish.yml)

```sh
yarn postinstall && yarn build && yarn electron-builder --publish always --win --mac --linux
```

## Docs for electron-react-boilerplate

See [docs and guides](https://electron-react-boilerplate.js.org/docs/installation)

## License

MIT. See [LICENSE](LICENSE)
