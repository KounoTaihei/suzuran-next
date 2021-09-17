/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SENDMAIL_API_URL: process.env.SENDMAIL_API_URL,
    API_KEY: process.env.API_KEY,
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN
  }
}
