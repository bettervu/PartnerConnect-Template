import { post } from '@betterview/integration-toolkit/lib/Network';
import {
  Enrichment,
  EnrichmentIntegrationResult,
  IEnrichmentIntegrationRequestData,
  Integration
} from '@betterview/integration-toolkit/lib/types';

export default class TemplateIntegration extends Integration implements Enrichment {
  getEnrichmentData(requestData: IEnrichmentIntegrationRequestData): Promise<EnrichmentIntegrationResult> {
    const { apiKey } = requestData.credentials || this.credentials || { apiKey: '' };
    const { latitude, longitude } = requestData;
    const useUrl = this.getUrl();

    return post(
      useUrl,
      {
        latitude,
        longitude
      },
      {
        headers: {
          authorization: apiKey,
          Accept: `application/json`
        }
      }
    );
  }

  getUrl(): string {
    return 'https://myhost.com/path_here';
  }
}
