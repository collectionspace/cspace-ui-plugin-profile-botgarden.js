export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'pottags_common');

  if (!common) {
    return '';
  }

  const potTagNumber = common.get('potTagNumber');
  const commonName = common.get('commonName');
  const family = getDisplayName(common.get('family'));

  return [potTagNumber, commonName, family].filter((part) => !!part).join(' – ');
};
