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
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory_extension/taxonomicIdentGroupList/taxonomicIdentGroup/taxon',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_botgarden/deadFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_botgarden/provenanceType',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/fieldCollectors/fieldCollector',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_naturalhistory_extension/localityGroupList/localityGroup/fieldLocVerbatim',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_botgarden/source',

      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_botgarden/deadDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_botgarden/rare',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_botgarden/cultivated',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory_extension/localityGroupList/localityGroup/fieldLocPlace',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_naturalhistory_extension/localityGroupList/localityGroup/taxonomicRange',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_accessionuse/accessionUseGroupList/accessionUseGroup/accessionUsedIn',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
