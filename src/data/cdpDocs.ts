import { CDPDoc } from '../types';

export const cdpDocs: CDPDoc[] = [
  {
    platform: 'segment',
    title: 'Setting up a new source',
    content: 'To set up a new source in Segment: 1. Navigate to Sources in your workspace. 2. Click Add Source. 3. Choose your source type. 4. Configure the source settings. 5. Add the source to your tracking plan.',
    url: 'https://segment.com/docs/connections/sources/'
  },
  {
    platform: 'mparticle',
    title: 'Creating user profiles',
    content: 'To create a user profile in mParticle: 1. Access the User Activity view. 2. Define user identities. 3. Set user attributes. 4. Configure user settings. 5. Save the profile.',
    url: 'https://docs.mparticle.com/guides/platform-guide/users/'
  },
  {
    platform: 'lytics',
    title: 'Building audience segments',
    content: 'To build an audience segment in Lytics: 1. Go to Audiences. 2. Click Create New Audience. 3. Define segment criteria. 4. Set behavioral rules. 5. Save and activate the segment.',
    url: 'https://docs.lytics.com/product/audiences/'
  },
  {
    platform: 'zeotap',
    title: 'Data integration',
    content: 'To integrate data with Zeotap: 1. Access the Integration Hub. 2. Select data source type. 3. Configure connection settings. 4. Map data fields. 5. Test and activate the integration.',
    url: 'https://docs.zeotap.com/docs/data-ingestion'
  }
];