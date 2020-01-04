import columns from './columns';
import fields from './fields';
import forms from './forms';
import title from './title';

export default () => (configContext) => ({
  recordTypes: {
    objectexit: {
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});
