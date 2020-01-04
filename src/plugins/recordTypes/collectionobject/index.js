import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import messages from './messages';
import optionLists from './optionLists';
import title from './title';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      messages: messages(configContext),
      title: title(configContext),
    },
  },
});
