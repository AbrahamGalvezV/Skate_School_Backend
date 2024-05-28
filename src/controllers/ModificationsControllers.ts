import { Request, Response } from "express";
import { Modifications } from "../models/Modifications";
import { getRepository } from "typeorm";
import { ModificationSeeder } from "../database/seeders/ModificationSeeder";
 
//----------------------------------------------------------------

export const ModificationController = {
  // Obtener la configuración actual del fondo

  async getAllBackgrounds(req: Request, res: Response): Promise<void> {
    try {
      const page = Number(req.query.page) || 1;                               // numero de pagina
      const limit = Number(req.query.limit) || 10;                            // limite de servicios

      const [backgrounds, totalBackgrounds] = await Modifications.findAndCount({
        select: {
          id:true,
          background_image:true,
        },
        skip: (page - 1) * limit,                                             // muestra los users de 10 en 10
        take: limit,
      });

      if (totalBackgrounds === 0) {
        res.status(404).json({ message: "Backgrounds not found" });
        return;
      }

      const totalPages = Math.ceil(totalBackgrounds / limit);                    // divide el total de usuarios por 10 para hallar el numero de paginas

      res.status(200).json({
        backgrounds: backgrounds,
        current_page: page,
        per_page: limit,
        total_pages: totalPages,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve backgrounds",
      });
    }
},

async getBackgroundById(req: Request, res: Response): Promise<void> {
    
  try {
    const backgroundId = Number(req.params.id);                                // extraer id user

    const background = await Modifications.findOne({

      where: { id: backgroundId }, 
    });

    if (!background) {
      res.status(404).json({ message: "Background not found" });
      return;
    }

    res.json(background);
  } catch (error) {
    res.status(500).json({
      massage: "Failed to retrieve background",
    });
  }
},



  // // async getBackground(req: Request, res: Response): Promise<void> {
  // //   try {
  // //     const modificationsRepository = getRepository(Modifications);
  // //     // Busca la ultoma modificación actual del fondo
  // //     const modification = await modificationsRepository.findOne({
  // //       order: { id: "DESC" },
  // //     });
      
  // //     // Comprueba que no si exixte una modificación
  // //     if (!modification) {
  // //       res.status(200).json({ ModificationSeeder }); // Valor predeterminado
  // //       return;
  // //     }
  // //     // // Comprueba si existe un color de fondo
  // //     // if (modification.background_color) {
  // //     //   res
  // //     //     .status(200)
  // //     //     .json({ type: "color", value: modification.background_color });
  // //     //   return;
  // //     // }
  // //   // Comprueba si existe una imagen de fondo
  // //     if (modification.background_image) {
  // //       res
  // //         .status(200)
  // //         .json({ type: "image", value: modification.background_image });
  // //       return;
  // //     }
  // //     // Establece el fondo predeterminao en caso de no cumplir con ningina de las anteriores
  // //     res.status(200).json({ type: "default", value: "#FFFFFF" });
  // //   } catch (error) {
  // //     res.status(500).json({
  // //       message: "Error al obtener la configuración del fondo",
  // //       error,
  // //     });
  // //   }
  // // },

  // // Establecer un color de fondo predefinido
  // async setColorBackground(req: Request, res: Response): Promise<void> {
  //   const { color } = req.body;
  //   try {
  //     const modificationsRepository = getRepository(Modifications);
  //     const modification = new Modifications();
  //     // modification.background_color = color;
  //     modification.background_image = ''; // Asegurarse de que no haya imagen establecida
  //     await modificationsRepository.save(modification);
  //     res.status(200).json({ type: "color", value: color });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ message: "Error al establecer el color de fondo", error });
  //   }
  // },

  // // Establecer un fondo de imagen mediante un enlace
  // async setImageBackground(req: Request, res: Response): Promise<void> {
  //   const { imageUrl } = req.body;
  //   try {
  //     const modificationsRepository = getRepository(Modifications);
  //     const modification = new Modifications();
  //     modification.background_image = imageUrl;
  //     // modification.background_color = ''; // Asegurarse de que no haya color establecido
  //     await modificationsRepository.save(modification);
  //     res.status(200).json({ type: "image", value: imageUrl });
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json({ message: "Error al establecer la imagen de fondo", error });
  //   }
  // },

  // // Resetear el fondo a un valor predeterminado
  // async resetBackground(req: Request, res: Response): Promise<void> {
  //   try {
  //     const modificationsRepository = getRepository(Modifications);
  //     const modification = new Modifications();
  //     // modification.background_color = "#FFFFFF"; // Valor predeterminado
  //     modification.background_image = ""; // Eliminar cualquier imagen
  //     await modificationsRepository.save(modification);
  //     res.status(200).json({ type: "color", value: "#FFFFFF" });
  //   } catch (error) {
  //     res.status(500).json({ message: "Error al resetear el fondo", error });
  //   }
  // },

  // async putBackground(req: Request, res: Response): Promise<void> {
  //   try {
  //     const modificationsRepository = getRepository(Modifications);
  //     const modification = new Modifications();
  //     // modification.background_color = "#FFFFFF"; // Valor predeterminado
  //     modification.background_image = ""; // Eliminar cualquier imagen
  //     await modificationsRepository.save(modification);
  //     res.status(200).json({ type: "color", value: "#FFFFFF" }); 
  //   } catch (error) {
  //     res.status(500).json({ message: "Error al resetear el fondo", error });
  //   }
  // },

 

};
