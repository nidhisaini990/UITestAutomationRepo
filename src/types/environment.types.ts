export type Environment = 'dev' | 'qa' | 'staging';

export interface PageConfig {
  timeout?: number;
  waitForLoad?: boolean;
}

export interface ApiConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface TestConfig {
  baseUrl: string;
  environment: Environment;
  headless: boolean;
  slowMo: number;
  actionTimeout: number;
  navigationTimeout: number;
}
