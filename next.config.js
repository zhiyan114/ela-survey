const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
  }
}

const sentryWebpackOptions = {
  org: "furrynet",
  project: "ela-survey",
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackOptions);
