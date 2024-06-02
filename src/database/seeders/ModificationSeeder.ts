
import { Seeder } from "./Seeder";
import { Service } from "../../models/Service";
import { ServicesConstant } from "../../constants/ServicesConstant";
import { ModificationsConstant } from "../../constants/ModificationsConstant";
import { Modifications } from "../../models/Modifications";

//----------------------------------------------------------------

export class ModificationSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const modifications : Partial<Modifications>[] = [
      ModificationsConstant.DEFAULT,

        
    ];
    
    await Modifications.save(modifications);

  }
  
}