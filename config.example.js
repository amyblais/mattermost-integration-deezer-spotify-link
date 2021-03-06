/**
 * mattermost-integration-deezer-spotify-link - config.js
 * 12/09/17
 * thomas
 * */

module.exports = {
  mattermost: {
    token: (process.env.MATTERMOST_TOKEN || ''),
  },
  spotify: {
    clientId: (process.env.MATTERMOST_INTEGRATION_SPOTIFY_CLIENT_ID || 'CLIENT_ID'),
    clientSecret: (process.env.MATTERMOST_INTEGRATION_SPOTIFY_CLIENT_SECRET || 'CLIENT_SECRET'),
  },
  deezer: {
    accessToken: (process.env.MATTERMOST_INTEGRATION_DEEZER_ACCESS_TOKEN || 'ACCESS_TOKEN'),
  },
  global: {
    port: (process.env.MATTERMOST_INTEGRATION_PORT || '3000'),
    debug: (process.env.MATTERMOST_INTEGRATION_DEBUG || false),
  },

  checkConfig: function () {
    return (this.mattermost.token && this.spotify.clientId && this.spotify.clientSecret && this.deezer.accessToken);
  },
};
