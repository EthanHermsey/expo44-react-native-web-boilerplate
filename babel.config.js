module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
          ["module-resolver", {
              extensions: [
                  '.ios.ts',
                  '.android.ts',
                  '.web.ts',
                  '.native.ts',
                  '.ts',
                  '.ios.tsx',
                  '.android.tsx',
                  '.web.tsx',
                  '.native.tsx',
                  '.tsx',
                  '.jsx',
                  '.js',
                  '.json',
              ],
              "alias": {
                  "assets": "./assets",
                  "components": "./src/components",
                  "hooks": "./src/hooks",
                  "navigation": "./src/navigation",
                  "pages": "./src/pages",
                  "screens": "./src/screens",
                  "store": "./src/store",
                  "styles": "./src/styles"
              }
          }],
          'react-native-reanimated/plugin'
      ],
    };
  };
  