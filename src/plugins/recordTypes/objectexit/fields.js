export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:objectexit_common': {
        exitNumber: {
          [config]: {
            required: false,
          },
        },
        depositor: {
          [config]: {
            view: {
              props: {
                source: 'organization/local,organization/shared',
              },
            },
          },
        },
      },
      ...extensions.naturalhistory.objectexit.fields,
    },
  };
};
