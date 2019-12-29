import collectionobject from './collectionobject';

export default () => (configContext) => ({
  extensions: {
    annotation: {
      collectionobject: collectionobject(configContext),
    },
  },
});
