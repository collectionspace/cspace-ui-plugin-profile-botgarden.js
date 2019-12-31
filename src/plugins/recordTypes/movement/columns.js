import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      movementReferenceNumber: {
        disabled: true,
      },
      currentLocation: {
        order: 20,
        width: 250,
      },
      reasonForMove: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.movement.default.reasonForMove',
            defaultMessage: 'Action code',
          },
        }),
        order: 30,
        sortBy: 'movements_common:reasonForMove',
        width: 380,
      },
    },
  };
};
