import { Router } from 'express';
import { ModificationController } from '../controllers/ModificationsControllers';
import { auth } from '../middlewares/auth';
import { authorize } from '../middlewares/authorize';

//----------------------------------------------------------------

const router = Router();

// Ruta para obtener las modificaciones
    router.get('/:id', ModificationController.getModificationsById);
    
// Actualiza las modificaciones
    router.put('/update/:id',auth,authorize(["admin"]), ModificationController.updateModidficationsById);

export default router;