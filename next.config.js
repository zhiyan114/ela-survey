const { withSentryConfig } = require('@sentry/nextjs')
const loaderUtils = require('loader-utils');
const path = require('path');

/** @type {import('next').NextConfig} */


const timestamp = new Date().getTime();

const hashOnlyIdent = (context, _, exportName) =>
  "UwU_"+loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}#BuildTime:${timestamp}`,
      ),
      'md4',
      'hex',
      6,
    ).replace(/^(-?\d|--)/, '_$1');


const nextConfig = {
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
    tunnelRoute: "/stunnel",
  },
  webpack: (config, {dev}) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));
    if (!dev)
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader')
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        });
      });
    return config;
  },
  poweredByHeader: false,
}

const sentryWebpackOptions = {
  org: "furrynet",
  project: "ela-survey",
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackOptions);
