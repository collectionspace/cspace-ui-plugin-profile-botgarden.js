import { defineMessages } from 'react-intl';

export default {
  hortWildValues: {
    values: [
      'Horticultural',
      'Wild',
    ],
    messages: defineMessages({
      Horticultural: {
        id: 'option.hortWildValues.Horticultural',
        defaultMessage: 'horticultural',
      },
      Wild: {
        id: 'option.hortWildValues.Wild',
        defaultMessage: 'wild',
      },
    }),
  },
  labelRequestedValues: {
    // This differs from the yesNoValues option list defined in cspace-ui, in that the data values
    // are capitalized.
    values: [
      'Yes',
      'No',
    ],
    messages: defineMessages({
      Yes: {
        id: 'option.labelRequestedValues.Yes',
        defaultMessage: 'yes',
      },
      No: {
        id: 'option.labelRequestedValues.No',
        defaultMessage: 'no',
      },
    }),
  },
};
