module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Prefix for proxied requests
        destination: "https://mten.info:3501/api/:path*", // Target API URL
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
};
