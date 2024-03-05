import TestHarness from '@betterview/integration-toolkit/lib/TestHarness';
import Integration from '..';

const creds = {};
const integration = new Integration(creds);
const harness = new TestHarness(integration);
harness.setMockRequestData();

harness.runGetData();
