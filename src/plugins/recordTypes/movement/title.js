export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  const {
    formatDate,
    formatRefName,
  } = configContext.formatHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'movements_common');

  if (!common) {
    return '';
  }

  const movementReferenceNumber = common.get('movementReferenceNumber');
  const currentLocation = formatRefName(common.get('currentLocation'));
  const locationDate = formatDate(common.get('locationDate'));
  const reasonForMove = formatRefName(common.get('reasonForMove'));

  return [movementReferenceNumber, currentLocation, reasonForMove, locationDate].filter((part) => !!part).join(' – ');
};
