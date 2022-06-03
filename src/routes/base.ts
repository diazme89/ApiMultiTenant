import { Router } from 'express';
import { getUsuarios, getUsuariosModel } from '../services/users';

export const router = Router();

router.get('', (req, res) => {
        res.status(200).json({ status: "running" });
      });
  

// API Route
router.get('/', (req, res, next) => {
  res.status(200).json({ body: 'Hello multi-tenant application.' });
});

router.get('/users', getUsuarios);
router.get('/usersmodel', getUsuariosModel);


export default router;