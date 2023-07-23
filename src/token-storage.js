import MMKVStorage, { STORAGE_KEYS } from './core/clients/mmkv/index';
import * as Keychain from 'react-native-keychain';

const TokenStorage = {
  saveCredentials: async ({ username, password }) => {
    await Keychain.setGenericPassword(username, password);
  },

  saveConfiguration: async conf => {
    await MMKVStorage.setItem(
      STORAGE_KEYS.AUTH_CONFIG_KEY,
      JSON.stringify(conf),
    );
  },

  saveTokens: async tokens => {
    await MMKVStorage.setItem(
      STORAGE_KEYS.AUTH_TOKENS_KEY,
      JSON.stringify(tokens),
    );
  },

  getCredentials: () => Keychain.getGenericPassword(),

  getConfiguration: async () => {
    const conf = await MMKVStorage.getItem(STORAGE_KEYS.AUTH_CONFIG_KEY);
    return conf ? JSON.parse(conf) : undefined;
  },

  getTokens: async () => {
    const tokens = await MMKVStorage.getItem(STORAGE_KEYS.AUTH_TOKENS_KEY);
    return tokens ? JSON.parse(tokens) : undefined;
  },

  clearSession: () => {
    MMKVStorage.removeItem(STORAGE_KEYS.AUTH_TOKENS_KEY);
    MMKVStorage.removeItem(STORAGE_KEYS.AUTH_CONFIG_KEY);
    MMKVStorage.removeItem(STORAGE_KEYS.AUTH_CREDENTIALS_KEY);
  },
};

export default TokenStorage;
