import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export type Environment = 'dev' | 'qa' | 'staging';

export interface EnvironmentConfig {
  baseUrl: string;
  environment: Environment;
  apiBaseUrl: string;
  apiToken: string;
  actionTimeout: number;
  navigationTimeout: number;
  headless: boolean;
  slowMo: number;
  workers: number;
  retries: number;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

const requiredEnvVars = [
  'BASE_URL',
  'ENVIRONMENT',
  'TEST_USER_EMAIL',
  'TEST_USER_PASSWORD',
];

const validateEnvironment = (): void => {
  const missing = requiredEnvVars.filter((envVar) => !process.env[envVar]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
        `Please check .env file or set them as environment variables.`
    );
  }
};

validateEnvironment();

export const config: EnvironmentConfig = {
  baseUrl: process.env.BASE_URL!,
  environment: (process.env.ENVIRONMENT || 'qa') as Environment,
  apiBaseUrl: process.env.API_BASE_URL || process.env.BASE_URL!,
  apiToken: process.env.API_TOKEN || '',
  actionTimeout: parseInt(process.env.ACTION_TIMEOUT || '10000', 10),
  navigationTimeout: parseInt(process.env.NAVIGATION_TIMEOUT || '30000', 10),
  headless: process.env.HEADLESS !== 'false',
  slowMo: parseInt(process.env.SLOW_MO || '0', 10),
  workers: parseInt(process.env.WORKERS || '4', 10),
  retries: process.env.CI ? 2 : 0,
  logLevel: (process.env.LOG_LEVEL || 'info') as 'debug' | 'info' | 'warn' | 'error',
};

export default config;
