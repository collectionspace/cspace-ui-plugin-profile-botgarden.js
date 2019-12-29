export default (configContext) => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const commonPart = getPart(data, 'collectionobjects_common');
  const objectNumber = commonPart && commonPart.get('objectNumber');

  const naturalHistoryPart = getPart(data, 'naturalhistory_extension');

  const taxon = deepGet(
    naturalHistoryPart,
    ['taxonomicIdentGroupList', 'taxonomicIdentGroup', 0, 'taxon'],
  );

  return [objectNumber, taxon].filter((part) => !!part).join(' – ');
};
