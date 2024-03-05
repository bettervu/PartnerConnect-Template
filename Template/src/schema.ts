import { IPartnerDataSchema } from '@betterview/integration-toolkit/lib/types';

const schema: IPartnerDataSchema = {
  name: 'Template',
  partner: 'Partner',
  offering: 'Offering',
  fields: [
    {
      jsonPath: 'data.property',
      title: 'DataPoint',
      description: 'This is a data point',
      data_type: 'string',
      sample: 'I am an important piece of data.'
    }
  ]
};

export default schema;
