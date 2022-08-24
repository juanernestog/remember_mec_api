import express from 'express';
import { get, request } from 'http';
//import controller from './controller';
//import { auth, authCheck } from '../auth';
//import { sanitizers } from './model';

const router = express.Router();

/*
 * /api/users/ GET all -> READ
 * /api/users/:id GET -> READ
 * /api/users/:id PATCH -> UPDATE
 * /api/users/:id DELETE -> DELETE
 */

router.get('/', (req, res) => {
  //res.send('hello world typo')
});

router.get('/:id', (req, res) => {});

router.patch('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

export default router;
