import { AllowedEventsKeys } from '../AllowedEventsKeys';



export class Action {
  type!: AllowedEventsKeys;
  callback!: string;
  params!: any;
}
