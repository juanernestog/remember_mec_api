import express from 'express';
//import { get, request } from 'http';
//import controller from './controller';
//import { auth, authCheck } from '../auth';
import User from './model';

const router = express.Router();

/*
 * /api/users/signup POST -> CREATE
 * /api/users/signin POST -> LOGIN
 * /api/users/:id GET -> READ
 * /api/users/:id PATCH -> UPDATE
 * /api/users/:id DELETE -> DELETE
 */

router.post('/singup', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400);
  }
});

router.post('/login', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400);
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getUser, (req, res) => {
  res.send(res.user.name);
});

router.patch('/:id', getUser, (req, res) => {
  const modifiedUser = req.user;
  try {
    // eslint-disable-next-line prettier/prettier
    modifiedUser?.name = req.body.name;
    modifiedUser?.email = req.body.email;
    modifiedUser?.password = req.body.password;
    modifiedUser.save();
    res.status(200).json(modifiedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', getUser, (req, res) => {
  const deletedUser = req.user;
  try {
    // eslint-disable-next-line prettier/prettier
    deletedUser.delete();
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//router.route('/signup').post(); //sanitizers, controller.signup, controller.confirmation);
// router.route('/signin').post(sanitizers, controller.signin);

// router.route('/confirmation').post(controller.confirmation);
// router.route('/activate/:token').get(authCheck, controller.activate);
// router.route('/forgot-password').post(controller.forgotPassword);
// router
//   .route('/reset-password/:token')
//   .post(authCheck, controller.resetPassword);

// router.route('/profile/:username').get(controller.read);
// router.route('/profile').put(auth, controller.update);

async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  // eslint-disable-next-line no-undef
  res.user = user;
  next();
}

export default router;
