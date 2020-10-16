import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatOption,
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      potTagNumber: {
        messages: defineMessages({
          label: {
            id: 'column.pottag.default.potTagNumber',
            defaultMessage: 'Reference number',
          },
        }),
        order: 10,
        sortBy: 'pottags_common:potTagNumber',
        width: 200,
      },
      commonName: {
        messages: defineMessages({
          label: {
            id: 'column.pottag.default.commonName',
            defaultMessage: 'Common name',
          },
        }),
        order: 20,
        sortBy: 'pottags_common:commonName',
        width: 200,
      },
      family: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.pottag.default.family',
            defaultMessage: 'Family',
          },
        }),
        order: 30,
        sortBy: 'pottags_common:family',
        width: 200,
      },
      printLabels: {
        formatValue: (data, formatterContext) => formatOption('printLabelOptions', data, formatterContext),
        messages: defineMessages({
          label: {
            id: 'column.pottag.default.printLabels',
            defaultMessage: 'Print labels',
          },
        }),
        order: 40,
        sortBy: 'pottags_common:printLabels',
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.pottag.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 50,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
