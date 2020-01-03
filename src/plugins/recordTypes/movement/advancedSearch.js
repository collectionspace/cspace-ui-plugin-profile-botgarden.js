export default (configContext) => {
  const {
    OP_EQ,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/locationDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/reasonForMove',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/currentLocation',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/movementContact',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_botgarden/labelRequested',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
