import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';
import optionLists from './optionLists';

export default () => (configContext) => ({
  idGenerators,
  optionLists,
  recordTypes: {
    loanout: {
      messages,
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
