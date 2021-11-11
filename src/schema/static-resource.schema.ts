import { Schema } from 'mongoose';


/**
 * @description schema representing a static resource
 */
const resource = {
  type: String,
  format: String,
  version: String,
  basic: Schema.Types.Mixed,
  groups: [Schema.Types.Mixed],
  tree: [Schema.Types.Mixed],
  data: Schema.Types.Mixed,
};

export const staticResource = new Schema(resource);