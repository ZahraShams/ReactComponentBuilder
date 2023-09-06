import { AllowedEventsKeys } from '../AllowedEventsKeys';



export class Actions {
  type!: AllowedEventsKeys;
  callback!: string;
  params!: any;
}
