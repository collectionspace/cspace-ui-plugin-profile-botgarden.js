export default (configContext) => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  if (!data) {
    return '';
  }

  const commonPart = getPart(data, 'collectionobjects_common');
  const objectNumber = commonPart && commonPart.get('objectNumber');

  const naturalHistoryPart = getPart(data, 'collectionobjects_naturalhistory_extension');

  const taxon = formatRefName(deepGet(
    naturalHistoryPart,
    ['taxonomicIdentGroupList', 'taxonomicIdentGroup', 0, 'taxon'],
  ));

  return [objectNumber, taxon].filter((part) => !!part).join(' – ');
};
