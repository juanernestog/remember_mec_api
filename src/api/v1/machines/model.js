// create the schema for our machine model

import mongoose from 'mongoose';

const machineSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: Number, required: true, min: 1900, max: 2100 },
  description: { type: String, required: false },
  numberPlate: { type: String, required: false },
  aquisitionDate: { type: Date, required: false },
  Maintenance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Maintenance' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Machine = mongoose.model('Machine', machineSchema);

export default Machine;
