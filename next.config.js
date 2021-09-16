/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SENDMAIL_API_URL: process.env.SENDMAIL_API_URL
  }
}
