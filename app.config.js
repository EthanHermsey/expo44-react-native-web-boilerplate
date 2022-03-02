export default {
    name: "expo44-rnw-boilerplate",
    version: '1.0.0',    
    slug: "expo44-rnw-boilerplate",
    privacy: "hidden",
    sdkVersion: "44.0.0",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    ios: {
      "bundleIdentifier": "com.rnw.boilerplate",
      "supportsTablet": true,
    },
    android: {
      "package": "com.rnw.boilerplate",
      "versionCode": 1
    },
    platforms: [
      "ios",
      "android",
      "web"
    ],
    splash: {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    extra:{}    
};