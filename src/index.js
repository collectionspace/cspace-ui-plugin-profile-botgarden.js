/* global cspaceUIPluginProfileBotGarden */
/* The cspaceUIPluginProfileBotGarden global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import accessionAttributesExtensionPlugin from 'cspace-ui-plugin-ext-accessionattributes';
import accessionUseExtensionPlugin from 'cspace-ui-plugin-ext-accessionuse';
import annotationExtensionPlugin from 'cspace-ui-plugin-ext-annotation';
import localityExtensionPlugin from 'cspace-ui-plugin-ext-locality';
import naturalHistoryExtensionPlugin from 'cspace-ui-plugin-ext-naturalhistory';
import taxonRecordPlugin from 'cspace-ui-plugin-record-taxon';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/botgarden.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '3500',
  pluginInfo: {
    cspaceUIPluginProfileBotGarden: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileBotGarden.name',
          defaultMessage: 'Botanical Garden profile',
        },
      }),
      version: cspaceUIPluginProfileBotGarden.packageVersion,
    },
  },
  plugins: [
    accessionAttributesExtensionPlugin(),
    accessionUseExtensionPlugin(),
    annotationExtensionPlugin(),
    localityExtensionPlugin(),
    naturalHistoryExtensionPlugin(),
    taxonRecordPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
