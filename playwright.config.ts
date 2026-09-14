import { defineConfig, devices } from '@playwright/test';
import config from './src/config/environment';
import { deviceConfigs } from './src/config/devices';

const playwrightConfig = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: config.retries,
  workers: process.env.CI ? 1 : config.workers,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
    ...(process.env.CI ? [['github']] : []),
  ],
  use: {
    baseURL: config.baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: config.actionTimeout,
    navigationTimeout: config.navigationTimeout,
  },
  globalSetup: require.resolve('./src/config/global-setup.ts'),
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices.chromium },
    },
    {
      name: 'firefox',
      use: { ...devices.firefox },
    },
    {
      name: 'webkit',
      use: { ...devices.webkit },
    },
    {
      name: 'mobile-chrome',
      use: deviceConfigs['mobile-chrome'],
    },
    {
      name: 'mobile-safari',
      use: deviceConfigs['mobile-safari'],
    },
  ],
});

export default playwrightConfig;
