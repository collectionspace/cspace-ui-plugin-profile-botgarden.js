import { defineMessages } from 'react-intl';

export default {
  class: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.class.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Class',
      },
      collectionName: {
        id: 'vocab.concept.class.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Classes',
      },
      itemName: {
        id: 'vocab.concept.class.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Class',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(class_ca)',
    },
  },
  conservation: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.conservation.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Conservation Category',
      },
      collectionName: {
        id: 'vocab.concept.conservation.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Conservation Categories',
      },
      itemName: {
        id: 'vocab.concept.conservation.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Conservation Category',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(conservation_ca)',
    },
  },
  research: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.research.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Research Project',
      },
      collectionName: {
        id: 'vocab.concept.research.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Research Projects',
      },
      itemName: {
        id: 'vocab.concept.research.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Research Project',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(research_ca)',
    },
  },
};
