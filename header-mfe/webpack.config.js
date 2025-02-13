const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "headerMfe",
    publicPath: "http://localhost:4201/",
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "headerMfe",
      filename: "remoteEntry.js",
      exposes: {
        // Expose le module Header. Le chemin doit être relatif à la racine du projet.
        './HeaderModule': './src/app/header/header.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: false },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: false },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: false },
      }
    })
  ],
};
