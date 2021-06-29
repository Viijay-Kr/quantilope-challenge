module.exports = {
  webpack: {
    alias: {
      components: `src/components/`,
      "~": `src/`,
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1",
        "^components(.*)$": "<rootDir>/src/components$1",
      },
    },
  },
};
