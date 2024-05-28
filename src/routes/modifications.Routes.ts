import { Router } from 'express';
import { ModificationController } from '../controllers/ModificationsControllers';

//----------------------------------------------------------------

const router = Router();

// Ruta para obtener la configuración actual del fondo
router.get('/background', ModificationController.getAllBackgrounds);
router.get('/background/:id', ModificationController.getBackgroundById);

// Ruta para establecer un color de fondo
// router.post('/background/color', ModificationController.setColorBackground);

// Ruta para establecer una imagen de fondo
// router.post('/background/image', ModificationController.setImageBackground);

// Ruta para resetear el fondo a un valor predeterminado
// router.post('/background/reset', ModificationController.resetBackground);

export default router;