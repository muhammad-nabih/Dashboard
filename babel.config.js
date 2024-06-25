module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@fullcalendar": "./node_modules/@fullcalendar",
        },
      },
    ],
  ],
};
