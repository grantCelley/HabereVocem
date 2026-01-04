const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('bin');
config.resolver.assetExts.push('mil');
config.resolver.assetExts.push('onnx')

module.exports = config;
