import { defineMessages } from 'react-intl';

export default () => ({
  optionLists: {
    // Used by loanout and movement. This list differs from the yesNoValues option list defined in
    // cspace-ui, in that the data values are capitalized.
    labelRequestedValues: {
      values: [
        'No',
        'Yes',
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
  },
});
