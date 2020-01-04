import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatDate,
  } = configContext.formatHelpers;

  return {
    default: {
      loanOutNumber: {
        disabled: true,
      },
      loanOutDate: {
        formatValue: formatDate,
        messages: defineMessages({
          label: {
            id: 'column.loanout.default.loanOutDate',
            defaultMessage: 'Date',
          },
        }),
        order: 10,
        sortBy: 'loansout_common:loanOutDate',
        width: 250,
      },
    },
  };
};
