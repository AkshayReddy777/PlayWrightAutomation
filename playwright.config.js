// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig(
  {
  testDir: './tests',
  reporter: 'html',
  use: {
   browserName : 'chromium',
   headless : false,
   screenshot : 'on',
   trace : 'on',
  },
});

//module.exports = config

