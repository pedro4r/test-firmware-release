module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/pedro4r/test-firmware-release.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
};
