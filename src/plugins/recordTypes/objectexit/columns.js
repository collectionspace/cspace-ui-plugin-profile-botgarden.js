import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      currentOwner: {
        disabled: true,
      },
      depositor: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.objectexit.default.depositor',
            defaultMessage: 'Organization',
          },
        }),
        order: 20,
        sortBy: 'objectexit_common:depositor',
        width: 450,
      },
    },
  };
};
