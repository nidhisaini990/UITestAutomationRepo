import { Page } from '@playwright/test';

export const fileUtils = {
  generateFileName: (prefix: string, extension: string = 'txt'): string => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `${prefix}_${timestamp}_${random}.${extension}`;
  },
  getFileNameWithoutExtension: (fileName: string): string => {
    return fileName.split('.').slice(0, -1).join('.');
  },
  getFileExtension: (fileName: string): string => {
    return fileName.split('.').pop() || '';
  },
  generateArtifactPath: (
    testName: string,
    artifactType: 'screenshot' | 'video' | 'trace'
  ): string => {
    const sanitized = testName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');
    const timestamp = Date.now();
    return `artifacts/${artifactType}/${sanitized}_${timestamp}`;
  },
};
