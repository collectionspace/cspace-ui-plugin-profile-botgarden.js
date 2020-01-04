export default (configContext) => (data) => {
  const {
    formatDate,
    formatRefName,
  } = configContext.formatHelpers;

  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'loansout_common');

  if (!common) {
    return '';
  }

  const loanOutDate = formatDate(common.get('loanOutDate'));
  const borrower = formatRefName(common.get('borrower'));

  return [loanOutDate, borrower].filter((part) => !!part).join(' – ');
};
