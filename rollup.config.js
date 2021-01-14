// See also: https://rollupjs.org/

const banner = `/**
 * This is a p5.js sketch made with p5js-template-per.
 *
 * @license CC0-1.0
 */
`;

const config = {
  input: "src/main.js",
  output: {
    format: "iife",
    file: "dist/script.js",
    banner,
    interop: "default",
  },
};

export default config;
