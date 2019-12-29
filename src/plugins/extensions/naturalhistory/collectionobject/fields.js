export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_naturalhistory_extension': {
      ...extensions.locality.fields,
    },
  };
};
