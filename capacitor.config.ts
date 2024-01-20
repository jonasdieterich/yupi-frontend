import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yupi.app',
  appName: 'yupi',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
