export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
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
        op: OP_CONTAIN,
        path: 'ns2:propagations_common/propNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:propagations_common/propDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:propagations_common/propType',
      },
      {
        op: OP_EQ,
        path: 'ns2:propagations_common/propReason',
      },
      {
        op: OP_RANGE,
        path: 'ns2:propagations_common/germinationDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
