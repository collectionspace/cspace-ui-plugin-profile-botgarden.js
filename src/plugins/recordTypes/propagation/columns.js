import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      propNumber: {
        messages: defineMessages({
          label: {
            id: 'column.propagation.default.propNumber',
            defaultMessage: 'Propagation ID',
          },
        }),
        order: 10,
        sortBy: 'propagations_common:propNumber',
        width: 200,
      },
      propType: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.propagation.default.propType',
            defaultMessage: 'Propagation type',
          },
        }),
        order: 20,
        sortBy: 'propagations_common:propType',
        width: 450,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.propagation.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
