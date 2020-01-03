import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    OptionPickerInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:movements_common': {
        currentLocation: {
          [config]: {
            required: false,
            view: {
              type: AutocompleteInput,
              props: {
                source: 'organization/local,organization/shared',
              },
            },
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'reasonformove',
              },
            },
          },
        },
      },
      'ns2:movements_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/local/botgarden',
          },
        },
        previousLocation: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.previousLocation.name',
                defaultMessage: 'Previous location',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local',
              },
            },
          },
        },
        labelRequested: {
          [config]: {
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelRequested.name',
                defaultMessage: 'Requested',
              },
              fullName: {
                id: 'field.movements_botgarden.labelRequested.fullName',
                defaultMessage: 'Label requested',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'labelRequestedValues',
              },
            },
          },
        },
        labelSize: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelSize.name',
                defaultMessage: 'Size',
              },
              fullName: {
                id: 'field.movements_botgarden.labelSize.fullName',
                defaultMessage: 'Label size',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'labelsize',
              },
            },
          },
        },
        labelStandType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelStandType.name',
                defaultMessage: 'Stand type',
              },
              fullName: {
                id: 'field.movements_botgarden.labelStandType.fullName',
                defaultMessage: 'Label stand type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'labelstandtype',
              },
            },
          },
        },
        labelCount: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.movements_botgarden.labelCount.name',
                defaultMessage: 'Count',
              },
              fullName: {
                id: 'field.movements_botgarden.labelCount.fullName',
                defaultMessage: 'Label count',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
