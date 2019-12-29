import fields from './fields';

export default () => (configContext) => ({
  extensions: {
    locality: {
      fields: fields(configContext),
    },
  },
});
