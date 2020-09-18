import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { DummyAppStack } from './dummy-app-stack';

/**
 * Deployable unit of web service app
 */
export class DummyAppStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new DummyAppStack(this, 'DummyWebService');
    
    // Expose our Stack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}
