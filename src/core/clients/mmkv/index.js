import { MMKVLoader } from 'react-native-mmkv-storage';

const MMKVStorage = new MMKVLoader().withEncryption().initialize();

export default MMKVStorage;

export const STORAGE_KEYS = {
  AUTH_CONFIG_KEY: 'AUTH_CONFIG_KEY',
  AUTH_CREDENTIALS_KEY: 'AUTH_CREDENTIALS_KEY',
  AUTH_TOKENS_KEY: 'AUTH_TOKENS_KEY',
};

export const KEYS_TO_PERSIST_ON_LOGOUT = [];
