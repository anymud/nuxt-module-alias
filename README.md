# @anymud/nuxt-module-alias

This package addresses an issue where Nuxt 3 modules do not support aliases due to the Jijt environment's inability to respond to `tsconfig.json`. By leveraging the `module-alias` package, `@anymud/nuxt-module-alias` adds the necessary aliases at the very start of your Nuxt project, ensuring smoother development experience with TypeScript support.

## Features

- Easy alias setup for Nuxt 3 projects
- Supports TypeScript configuration
- Simplifies project structure management

## Installation

You can install `@anymud/nuxt-module-alias` using npm, pnpm, yarn, or bun. Choose the command corresponding to your package manager:

```bash
# npm
npm install @anymud/nuxt-module-alias

# pnpm
pnpm add @anymud/nuxt-module-alias

# yarn
yarn add @anymud/nuxt-module-alias

# bun
bun add @anymud/nuxt-module-alias
```

## Usage

To use `@anymud/nuxt-module-alias`, add the module to the beginning of the `modules` array in your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: [
    '@anymud/nuxt-module-alias',
    // Other modules...
  ],
})
```

This setup ensures that alias resolution is applied before any other module logic, allowing for seamless integration with your project's existing structure.

## Configuration

Currently, `@anymud/nuxt-module-alias` does not require additional configuration. It works out-of-the-box by leveraging your existing `tsconfig.json` paths. However, future versions may introduce customizable options for enhanced flexibility.

## Contributing

Contributions are always welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please make sure to update tests as appropriate.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Thanks to the Nuxt team for creating an extensible and powerful framework.
- Appreciation to the creators of `module-alias` for providing the tooling to make this package possible.

## Support

For support, open an issue or submit a pull request. Please describe your problem or contribution as clearly as possible.
