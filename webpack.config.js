const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devtool: false,
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "maps/[file].map",
      append: "\n//# sourceMappingURL=http://localhost:5050/maps/[file].map",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
