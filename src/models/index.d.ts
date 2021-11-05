import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type Model2021110501MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Model2021110501 {
  readonly id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Model2021110501, Model2021110501MetaData>);
  static copyOf(source: Model2021110501, mutator: (draft: MutableModel<Model2021110501, Model2021110501MetaData>) => MutableModel<Model2021110501, Model2021110501MetaData> | void): Model2021110501;
}