import { Model, Schema } from 'mongoose';
import { hash, compare } from 'bcryptjs';
// import validator from 'validator';

const userSchema = new Schema({
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

const User = Model('User', userSchema);

// use doc on controler to hace the password hidden
userSchema.methods.toJSON = function () {
  const doc = this.toObject();
  delete doc.password;
  return doc;
};

userSchema.pre('save', async function (next) {
  if (this.isNew() || this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
  next();
});

userSchema.verifyPassword = async function (input) {
  return compare(input, this.password);
};

export default User;

// module.exports = {
//   Model: User,
//   // fields,
//   // sanitizers,
// };
