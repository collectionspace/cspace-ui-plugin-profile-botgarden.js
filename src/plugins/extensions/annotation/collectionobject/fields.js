export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_annotation': {
      annotationGroupList: {
        annotationGroup: {
          annotationAuthor: {
            [config]: {
              // 4.5 config had added organization-group_org to annotationAuthor autocomplete, but
              // that org vocab was never configured, so the change doesn't do anything.

              // view: {
              //   props: {
              //     source: 'person/local,person/shared,organization/group',
              //   },
              // },
            },
          },
        },
      },
    },
  };
};
