import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CheckboxInput,
    CompoundInput,
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    mergeStrategy,
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:loansout_common': {
        loanOutNumber: {
          [config]: {
            required: false,
            view: {
              props: {
                source: 'voucher',
              },
            },
          },
        },
        borrower: {
          [config]: {
            view: {
              props: {
                source: 'organization/local,organization/shared',
              },
            },
          },
        },
        loanPurpose: {
          [config]: {
            view: {
              type: TextInput,
              props: mergeStrategy.override({
                multiline: true,
              }),
            },
          },
        },
      },
      'ns2:loansout_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/local/botgarden',
          },
        },
        collectorList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          collector: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_botgarden.collector.name',
                  defaultMessage: 'Collector',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
        hortWild: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.hortWild.name',
                defaultMessage: 'Horticultural/wild',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'hortWildValues',
              },
            },
          },
        },
        gardenLocation: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.gardenLocation.name',
                defaultMessage: 'Garden location',
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
        fieldCollectionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.fieldCollectionNote.name',
                defaultMessage: 'Collection note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        annotation: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.annotation.name',
                defaultMessage: 'Annotation',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        sheetAccessionNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.sheetAccessionNumber.name',
                defaultMessage: 'Sheet accession number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        reviewComplete: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.reviewComplete.name',
                defaultMessage: 'Review complete',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        labelRequested: {
          [config]: {
            defaultValue: 'No',
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.labelRequested.name',
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
        sterile: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.sterile.name',
                defaultMessage: 'Sterile',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fertile: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.fertile.name',
                defaultMessage: 'Fertile',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        flowering: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.flowering.name',
                defaultMessage: 'Flowering',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        fruiting: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.fruiting.name',
                defaultMessage: 'Fruiting',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        inSpore: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.loansout_botgarden.inSpore.name',
                defaultMessage: 'In spore',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
      ...extensions.naturalhistory.loanout.fields,
    },
  };
};
