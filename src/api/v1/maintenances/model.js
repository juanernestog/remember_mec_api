import mongoose from 'mongoose';
// import validator from 'validator';
//import { Schema } from 'mongoose';
// import { fields } from './fields';
// import { hiddenFields } from './hiddenFields';
// create the schema for our maintenance model

const maintenanceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: false },
  date: { type: Date, required: true },
  isPeriodic: { type: Boolean, required: true, default: false },
  period: { type: Number, required: false },
  periodUnit: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

export default Maintenance;
