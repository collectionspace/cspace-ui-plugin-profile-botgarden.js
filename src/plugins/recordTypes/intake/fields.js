export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:intakes_common': {
        currentLocationGroupList: {
          currentLocationGroup: {
            currentLocation: {
              [config]: {
                view: {
                  props: {
                    source: 'location/local',
                  },
                },
              },
            },
          },
        },
        normalLocation: {
          [config]: {
            view: {
              props: {
                source: 'location/local',
              },
            },
          },
        },
      },
    },
  };
};
