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
                  '.svg'
              ],
              "alias": {
                  "assets": "./src/assets",
                  "components": "./src/components",
                  "hooks": "./src/hooks",
                  "navigation": "./src/navigation",
                  "pages": "./src/pages",                  
                  "providers": "./src/providers",
                  "screens": "./src/screens",
                  "store": "./src/store",
                  "styles": "./src/styles",
                  "utils": "./src/utils"
              }
          }],
          'react-native-reanimated/plugin'
      ],
    };
  };
  