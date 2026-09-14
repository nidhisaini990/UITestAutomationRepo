import { chromium } from '@playwright/test';
import { logger } from './src/utils/logger';
import config from './src/config/environment';

async function globalSetup(): Promise<void> {
  logger.info('Starting global setup...');
  logger.info(`Environment: ${config.environment}`);
  logger.info(`Base URL: ${config.baseUrl}`);
  logger.info('Global setup completed');
}

export default globalSetup;
