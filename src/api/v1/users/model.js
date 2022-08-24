import mongoose, { Mongoose } from 'mongoose';
// import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // validate: {
    //   validator(value: string) {
    //     return validator.isEmail(value);
    //   },
    //   message: (props: any) => `${props.value} is not a valid email`,
    // },
    // },
  },
  password: { type: String, required: true },
  userType: { type: String, required: true, default: 'user' },
  /*machines: {
      type: [mongoose.ObjectId],
      ref: 'machine',
      required: false,
  },*/
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;

// module.exports = {
//   Model: User,
//   // fields,
//   // sanitizers,
// };
