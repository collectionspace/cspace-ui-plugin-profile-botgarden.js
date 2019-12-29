import dms2decimal from '../../../helpers/dms2decimal';

export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    localityGroupList: {
      localityGroup: {
        [config]: {
          compute: ({ data }) => (
            data
              .set('decimalLatitude', dms2decimal(data.get('vLatitude')))
              .set('decimalLongitude', dms2decimal(data.get('vLongitude')))
          ),
        },
        fieldLocCounty: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'county',
              },
            },
          },
        },
        fieldLocState: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'state',
              },
            },
          },
        },
        fieldLocCountry: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'country',
              },
            },
          },
        },
        decimalLatitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        decimalLongitude: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
      },
    },
  };
};
