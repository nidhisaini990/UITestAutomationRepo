import { Page, expect } from '@playwright/test';
import { logger } from './logger';

export interface RetryOptions {
  maxAttempts?: number;
  delayMs?: number;
  backoffMultiplier?: number;
}

const defaultOptions: Required<RetryOptions> = {
  maxAttempts: 3,
  delayMs: 1000,
  backoffMultiplier: 1.5,
};

export const retryUtils = {
  retry: async <T>(
    fn: () => Promise<T>,
    options?: RetryOptions
  ): Promise<T> => {
    const opts = { ...defaultOptions, ...options };
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= opts.maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;
        if (attempt < opts.maxAttempts) {
          const delay = opts.delayMs * Math.pow(opts.backoffMultiplier, attempt - 1);
          logger.warn(
            `Attempt ${attempt} failed. Retrying in ${delay}ms... Error: ${lastError.message}`
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError || new Error('Retry failed with unknown error');
  },

  waitForCondition: async (
    fn: () => Promise<boolean>,
    options?: RetryOptions
  ): Promise<void> => {
    const opts = { ...defaultOptions, ...options };
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= opts.maxAttempts; attempt++) {
      try {
        const result = await fn();
        if (result) {
          return;
        }
      } catch (error) {
        lastError = error as Error;
      }

      if (attempt < opts.maxAttempts) {
        const delay = opts.delayMs * Math.pow(opts.backoffMultiplier, attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw lastError || new Error('Condition never met after retries');
  },
};
