import { defineMessages } from 'react-intl';

export default {
  handwrittenValues: {
    values: [
      'unknown',
      'yes',
      'no',
    ],
    messages: defineMessages({
      unknown: {
        id: 'option.handwrittenValues.unknown',
        defaultMessage: 'unknown',
      },
      yes: {
        id: 'option.handwrittenValues.yes',
        defaultMessage: 'yes',
      },
      no: {
        id: 'option.handwrittenValues.no',
        defaultMessage: 'no',
      },
    }),
  },
};
