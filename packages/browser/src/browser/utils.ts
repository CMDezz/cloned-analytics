import { CDNSettings } from './index'

export const CDN_HARD_SETTING: CDNSettings = {
  integrations: {
    'Segment.io': {
      apiKey: 'bI8paIWm9KOZrloXTFc222aUDrqst63CcFe',
      unbundledIntegrations: [],
      addBundledMetadata: true,
      maybeBundledConfigIds: {},
      versionSettings: {
        version: '4.4.7',
        componentTypes: ['browser'],
      },
    },
  },
  plan: {
    track: {
      __default: {
        enabled: true,
        integrations: {},
      },
    },
    identify: {
      __default: {
        enabled: true,
      },
    },
    group: {
      __default: {
        enabled: true,
      },
    },
  },
  edgeFunction: {},
  middlewareSettings: { routingRules: [] },
  enabledMiddleware: {},
  metrics: {
    sampleRate: 0.1,
  },
  legacyVideoPluginsEnabled: false,
  remotePlugins: [],
}
