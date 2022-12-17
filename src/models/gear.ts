import mongoose from 'mongoose';

import { IGear } from '../interface/model/gear';

export interface IGearModel extends IGear, mongoose.Document {}

export const GearSchema = new mongoose.Schema<IGearModel>({
  image: { type: String },
  name: { type: String, required: true },
  purchase_date: { type: Date, required: true },
  purchase_status: { type: String, default: 'new' },
  purchase_price: { type: String, default: '0' },
  type: { type: String, required: true },
  purchaser: { type: String, required: true },
  amount: { type: Number, required: true },
  brand: { type: String, required: true },
  rent_amount: [{ ppl_name: String, count: Number }],
  rent_count: { type: Number, default: 0 },
  rent_price: { type: String, default: '0' },
  createdAt: { type: Date, default: Date.now },
  memo: { type: String },
  sold_price: { type: String },
  inbox_size: { type: String },
  unbox_size: { type: String },
  weight: { type: String },
  ref_url: { type: String },
  updatedAt: [
    {
      gear_name: String,
      rent_date: Date,
      rent_status: Boolean,
      count: Number,
    },
  ],
});

const Gear = mongoose.model<IGearModel>('gear', GearSchema);

export default Gear;
