import collectionobject from './collectionobject';

export default () => (configContext) => ({
  extensions: {
    naturalhistory: {
      collectionobject: collectionobject(configContext),
    },
  },
});
