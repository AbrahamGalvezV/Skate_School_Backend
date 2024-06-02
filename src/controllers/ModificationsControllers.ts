import { Request, Response } from "express";
import { Modifications } from "../models/Modifications";
import { getRepository } from "typeorm";

 
//----------------------------------------------------------------

export const ModificationController = {

  // Obtener la configuración actual del fondo
async getModificationsById(req: Request, res: Response): Promise<void> {
  try {
    // Extraer la id del user
    const modificationId = Number(req.params.id);        
    // Busqueda del background en la base de datos
    const modifications = await Modifications.findOne({

      where: { id: modificationId }, 
    });
  
    if (!modifications) {
      res.status(404).json({ message: "modifications not found" });
      return;
    }

    res.json(modifications);
  } catch (error) {
    res.status(500).json({
      massage: "Failed to retrieve modifications",
    });
  }
},

// Actualiza la configuración del fondo
async updateModidficationsById(req: Request, res: Response): Promise<void> {
  try {
    const modificationId = Number(req.params.id);
    const { background, backgroundColor, fontColor, fontColorText,  fontColorButton} = req.body;

   

    // Buscar el fondo por su ID
    const modificationsToUpdate = await Modifications.findOne({ where: { id: modificationId } });

    if (!modificationsToUpdate) {
       res.status(404).json({ message: "Modifications not found" });
       return
    }

    // Actualizar el fondo
    modificationsToUpdate.background = background;
    modificationsToUpdate.backgroundColor = backgroundColor;
    modificationsToUpdate.fontColor = fontColor;
    modificationsToUpdate.fontColorText = fontColorText;
    modificationsToUpdate.fontColorButton = fontColorButton;
    await modificationsToUpdate.save();

    // Retornar una respuesta exitosa
    res.status(200).json({ message: "Modifications updated successfully" });
  } catch (error) {
    console.error("Error updating Modifications: ", error);
    res.status(500).json({ message: "Something went wrong" });
  }
},



};
