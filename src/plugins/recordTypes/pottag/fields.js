import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:pottags_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:pottags_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/pottag',
          },
        },
        family: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.family.name',
                defaultMessage: 'Family',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local',
              },
            },
          },
        },
        commonName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.commonName.name',
                defaultMessage: 'Common name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        locale: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.locale.name',
                defaultMessage: 'Country name/locale',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        taxonName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.taxonName.name',
                defaultMessage: 'Taxon name',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local',
              },
            },
          },
        },
        labelData: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.labelData.name',
                defaultMessage: 'Label data',
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
        numberOfLabels: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.numberOfLabels.name',
                defaultMessage: 'Number of labels',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        printLabels: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.pottags_common.printLabels.name',
                defaultMessage: 'Print labels',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'printLabelOptions',
              },
            },
          },
        },
      },
    },
  };
};
