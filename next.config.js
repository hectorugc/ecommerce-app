module.exports = {
  reactStrictMode: true,
  target:'serverless',
  images: {
    domains: [process.env.NEXT_IMAGE_ALLOWED_DOMAINS],
  }
}
