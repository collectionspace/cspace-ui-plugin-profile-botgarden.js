import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    location: {
      fields: fields(configContext),
    },
  },
});
