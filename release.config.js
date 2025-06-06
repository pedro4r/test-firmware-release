module.exports = {
  repositoryUrl: `https://${process.env.GH_TOKEN}@github.com/pedro4r/test-firmware-release.git`,
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
};
