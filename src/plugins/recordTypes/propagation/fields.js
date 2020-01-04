import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    TextInput,
    StructuredDateInput,
    TermPickerInput,
    IDGeneratorInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  const {
    DATA_TYPE_STRUCTURED_DATE,
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:propagations_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:propagations_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/propagation',
          },
        },
        propNumber: {
          [config]: {
            cloneable: false,
            required: true,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propNumber.name',
                defaultMessage: 'Propagation ID',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'propagation',
              },
            },
          },
        },
        propDate: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propDate.name',
                defaultMessage: 'Propagation date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        propReason: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propReason.name',
                defaultMessage: 'Reason for propagation',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'propreason',
              },
            },
          },
        },
        propType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propType.name',
                defaultMessage: 'Propagation type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'proptype',
              },
            },
          },
        },
        propComments: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.propComments.name',
                defaultMessage: 'Comment',
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
        numStarted: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.numStarted.name',
                defaultMessage: 'Number started',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        scarStratGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          scarStratGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.propagations_common.scarStratGroup.name',
                  defaultMessage: 'Scarification/stratification',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            scarStrat: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.scarStrat.fullName',
                    defaultMessage: 'Scarification/stratification type',
                  },
                  name: {
                    id: 'field.propagations_common.scarStrat.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'scarstrat',
                  },
                },
              },
            },
            duration: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.duration.fullName',
                    defaultMessage: 'Scarification/stratification duration',
                  },
                  name: {
                    id: 'field.propagations_common.duration.name',
                    defaultMessage: 'Duration',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            durationUnit: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.durationUnit.fullName',
                    defaultMessage: 'Scarification/stratification duration unit',
                  },
                  name: {
                    id: 'field.propagations_common.durationUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'durationunit',
                  },
                },
              },
            },
          },
        },
        extraSeeds: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.extraSeeds.name',
                defaultMessage: 'Extra seeds?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        spores: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.spores.name',
                defaultMessage: 'Spore',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        cuttingType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.cuttingType.name',
                defaultMessage: 'Cutting type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'cuttingtype',
              },
            },
          },
        },
        hormone: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.hormone.name',
                defaultMessage: 'Hormone',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'propHormones',
              },
            },
          },
        },
        concentration: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.propagations_common.concentration.fullName',
                defaultMessage: 'Hormone concentration',
              },
              name: {
                id: 'field.propagations_common.concentration.name',
                defaultMessage: 'Concentration',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        wounded: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.wounded.name',
                defaultMessage: 'Wounded?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        plantType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.plantType.name',
                defaultMessage: 'Plant type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'propPlantType',
              },
            },
          },
        },
        germinationDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.germinationDate.name',
                defaultMessage: 'Germination/rooting date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        successRate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.propagations_common.successRate.name',
                defaultMessage: 'Success rate',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        propActivityGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          propActivityGroup: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.propagations_common.propActivityGroup.fullName',
                  defaultMessage: 'Activity',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            // The order field isn't really useful in 5.0, since repeating field values are
            // reorderable with the keyboard, and the order number is displayed automatically.
            // order: {
            //   [config]: {
            //     dataType: DATA_TYPE_INT,
            //     messages: defineMessages({
            //       fullName: {
            //         id: 'field.propagations_common.order.fullName',
            //         defaultMessage: 'Activity order',
            //       },
            //       name: {
            //         id: 'field.propagations_common.order.name',
            //         defaultMessage: 'Order',
            //       },
            //     }),
            //     view: {
            //       type: TextInput,
            //     },
            //   },
            // },
            activityDate: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.activityDate.fullName',
                    defaultMessage: 'Activity date',
                  },
                  groupName: {
                    id: 'field.propagations_common.activityDate.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.propagations_common.activityDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            activityType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.activityType.fullName',
                    defaultMessage: 'Activity type',
                  },
                  name: {
                    id: 'field.propagations_common.activityType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'propActivityType',
                  },
                },
              },
            },
            propCount: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.propCount.name',
                    defaultMessage: 'Propagule count',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            medium: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.medium.name',
                    defaultMessage: 'Medium',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated',
                  },
                },
              },
            },
            potSize: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.potSize.name',
                    defaultMessage: 'Pot size',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'potsize',
                  },
                },
              },
            },
            nurseryLocation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.nurseryLocation.name',
                    defaultMessage: 'Location in nursery',
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
            conditions: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.conditions.name',
                    defaultMessage: 'Condition',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'propConditions',
                  },
                },
              },
            },
            chemicalApplied: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.propagations_common.chemicalApplied.name',
                    defaultMessage: 'Chemical applied',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'propChemicals',
                  },
                },
              },
            },
            activityConcentration: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.activityConcentration.fullName',
                    defaultMessage: 'Chemical concentration',
                  },
                  name: {
                    id: 'field.propagations_common.activityConcentration.name',
                    defaultMessage: 'Concentration',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            activityComments: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.propagations_common.activityComments.fullName',
                    defaultMessage: 'Activity comment',
                  },
                  name: {
                    id: 'field.propagations_common.activityComments.name',
                    defaultMessage: 'Comment',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
