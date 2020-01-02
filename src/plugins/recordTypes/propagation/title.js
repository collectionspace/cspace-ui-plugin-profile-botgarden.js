export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'propagations_common');

  if (!common) {
    return '';
  }

  const identificationNumber = common.get('propNumber');

  return [identificationNumber].filter((part) => !!part);
};
