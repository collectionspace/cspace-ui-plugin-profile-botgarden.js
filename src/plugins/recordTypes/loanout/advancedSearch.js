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
        op: OP_EQ,
        path: 'ns2:loansout_botgarden/collectorList/collector',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:loansout_common/loanOutNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:loansout_common/loanOutDate',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:loansout_common/loanPurpose',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/borrower',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_botgarden/labelRequested',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
