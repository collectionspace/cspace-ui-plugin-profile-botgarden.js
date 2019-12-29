import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        briefDescriptions: {
          briefDescription: {
            [config]: {
              view: {
                props: {
                  multiline: false,
                },
              },
            },
          },
        },
        phase: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'botanicalphase',
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'phaseformtype',
                },
              },
            },
          },
        },
        contentConcepts: {
          contentConcept: {
            [config]: {
              view: {
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
        assocConceptGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          assocConceptGroup: {
            assocConcept: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        referenceGroupList: {
          referenceGroup: {
            reference: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_botgarden': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/botgarden',
          },
        },
        accessionDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.accessionDate.name',
                defaultMessage: 'Accession date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        deadFlag: {
          [config]: {
            defaultValue: 'false',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.deadFlag.name',
                defaultMessage: 'Dead flag',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'booleans',
              },
            },
          },
        },
        deadDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.deadDate.name',
                defaultMessage: 'Dead date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        // 4.5 config had this field, but it does not appear to be used.
        // provenanceDataQuality: {
        //   [config]: {
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.collectionobjects_botgarden.provenanceDataQuality.name',
        //         defaultMessage: 'Provenance data quality',
        //       },
        //     }),
        //     view: {
        //       type: TermPickerInput,
        //       props: {
        //         source: 'provenancedataquality',
        //       },
        //     },
        //   },
        // },
        provenanceType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.provenanceType.name',
                defaultMessage: 'Provenance type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'provenancetype',
              },
            },
          },
        },
        rare: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.rare.name',
                defaultMessage: 'Rare',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'booleans',
              },
            },
          },
        },
        cultivated: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.cultivated.name',
                defaultMessage: 'Cultivated',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'booleans',
              },
            },
          },
        },
        cbdRestriction: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            defaultValue: 'false',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.cbdRestriction.name',
                defaultMessage: 'CBD restriction',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        requestedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.requestedBy.name',
                defaultMessage: 'Requested by',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared',
              },
            },
          },
        },
        source: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.source.name',
                defaultMessage: 'Source',
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
        fieldCollectionNumberAssignor: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.fieldCollectionNumberAssignor.name',
                defaultMessage: 'Field collection number assignor',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                // 4.5 config had organization/collector in the autocomplete, but that org vocab
                // was never configured.
                // source: 'person/local,organization/collector',
                source: 'person/local',
              },
            },
          },
        },
        handwritten: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.handwritten.name',
                defaultMessage: 'Handwritten',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'handwrittenValues',
              },
            },
          },
        },
        postToPublic: {
          [config]: {
            defaultValue: 'yes',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_botgarden.postToPublic.name',
                defaultMessage: 'Post to public',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'yesNoValues',
              },
            },
          },
        },
      },
      ...extensions.accessionattributes.collectionobject.fields,
      ...extensions.accessionuse.collectionobject.fields,
      ...extensions.annotation.collectionobject.fields,
      ...extensions.naturalhistory.collectionobject.fields,
    },
  };
};
