#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { GsaPipelineStack } from '../lib/gsa-pipeline-stack';

const app = new App();

new GsaPipelineStack(app, 'GsaPipelineStack', {
  env: { account: '662872024835', region: 'us-east-1' },
});

app.synth();