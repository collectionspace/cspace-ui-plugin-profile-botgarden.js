/* global cspaceUIPluginProfileBotGarden */
/* The cspaceUIPluginProfileBotGarden global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import accessionAttributesExtensionPlugin from 'cspace-ui-plugin-ext-accessionattributes';
import accessionUseExtensionPlugin from 'cspace-ui-plugin-ext-accessionuse';
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
      packageName: cspaceUIPluginProfileBotGarden.packageName,
      packageVersion: cspaceUIPluginProfileBotGarden.packageVersion,
      buildNum: cspaceUIPluginProfileBotGarden.buildNum,
      repositoryUrl: cspaceUIPluginProfileBotGarden.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileBotGarden.packageVersion,
    },
  },
  plugins: [
    accessionAttributesExtensionPlugin(),
    accessionUseExtensionPlugin(),
    localityExtensionPlugin(),
    naturalHistoryExtensionPlugin(),
    taxonRecordPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
