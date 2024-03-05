import { EnrichmentComponentArgs } from '@betterview/integration-toolkit/lib/types';
import Typography from '@mui/material/Typography';
import React from 'react';
// @ts-ignore
import withMuiTheme from '../../../ComponentHarness/component-harness-server/src/styles/withMuiTheme';
import { sampleData } from './sampleData';

function EnrichmentComponent({ partnerHubData, previewMode }: EnrichmentComponentArgs) {
  const data = previewMode ? sampleData : partnerHubData;

  if (!data) {
    console.log(`No data available for component, PreviewMode: ${previewMode}. Data: ${JSON.stringify(data)}`);
    return (
      <div>
        <p>No Data Available</p>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h6">New Enrichment Componennt</Typography>
    </div>
  );
}

export default withMuiTheme(EnrichmentComponent);
