module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Prefix for proxied requests
        destination: "https://mten.info:3501/api/:path*", // Target API URL
      },
    ];
  },
};
