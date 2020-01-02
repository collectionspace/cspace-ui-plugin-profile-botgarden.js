import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.propagation.name',
      description: 'The name of the record type.',
      defaultMessage: 'Propagation',
    },
    collectionName: {
      id: 'record.propagation.collectionName',
      description: 'The name of a collection of records of the type.',
      defaultMessage: 'Propagations',
    },
  }),
  panel: defineMessages({
    propagation: {
      id: 'panel.propagation.propagation',
      defaultMessage: 'Propagation Information',
    },
    cuttings: {
      id: 'panel.propagation.cuttings',
      defaultMessage: 'Cuttings',
    },
    seeds: {
      id: 'panel.propagation.seeds',
      defaultMessage: 'Seeds',
    },
    livingPlantMaterial: {
      id: 'panel.propagation.livingPlantMaterial',
      defaultMessage: 'Living Plant Material',
    },
    activity: {
      id: 'panel.propagation.activity',
      defaultMessage: 'Activities',
    },
  }),
};
