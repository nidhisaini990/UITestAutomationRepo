export const testTags = {
  smoke: '@smoke',
  regression: '@regression',
  e2e: '@e2e',
  mobile: '@mobile',
  desktop: '@desktop',
  critical: '@critical',
  negative: '@negative',
  positive: '@positive',
  authentication: '@authentication',
  api: '@api',
  ui: '@ui',
  slow: '@slow',
  flaky: '@flaky',
};

export const tagGroups = {
  priority: [testTags.critical],
  type: [testTags.smoke, testTags.regression, testTags.e2e],
  platform: [testTags.mobile, testTags.desktop],
  testCase: [testTags.positive, testTags.negative],
};
