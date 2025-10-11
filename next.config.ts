// next.config.js or next.config.ts
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // ...other config
  basePath: isProd ? "/site-charuru" : "",
  assetPrefix: isProd ? "/site-charuru/" : "",
  // If using images, also set images: { unoptimized: true }
  images: { unoptimized: true },
  output: "export", // for static export
};
