import { devices } from '@playwright/test';

export const deviceConfigs = {
  'mobile-chrome': {
    ...devices['Pixel 7'],
    displayName: 'Android Chrome (Pixel 7)',
  },
  'mobile-safari': {
    ...devices['iPhone 13'],
    displayName: 'iOS Safari (iPhone 13)',
  },
};

export type DeviceKey = keyof typeof deviceConfigs;

export const getDeviceConfig = (deviceKey: string) => {
  return deviceConfigs[deviceKey as DeviceKey];
};

export const isMobileDevice = (deviceKey: string): boolean => {
  return deviceKey.startsWith('mobile-');
};
