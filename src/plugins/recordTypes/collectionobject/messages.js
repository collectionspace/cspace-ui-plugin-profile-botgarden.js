import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: {
      ...extensions.accessionattributes.collectionobject.messages.inputTable,
      ...extensions.locality.messages.inputTable,
      ...extensions.naturalhistory.collectionobject.messages.inputTable,
    },
    panel: {
      ...defineMessages({
        accessionattributes: {
          id: 'panel.collectionobject.accessionattributes',
          defaultMessage: 'Accession Attributes',
        },
        accessionuse: {
          id: 'panel.collectionobject.accessionuse',
          defaultMessage: 'Accession Use Information',
        },
        locality: {
          id: 'panel.collectionobject.locality',
          defaultMessage: 'Locality Information',
        },
      }),
      ...extensions.locality.messages.panel,
    },
  };
};
