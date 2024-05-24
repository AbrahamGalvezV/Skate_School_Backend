
import { Seeder } from "./Seeder";
import { Service } from "../../models/Service";
import { ServicesConstant } from "../../constants/ServicesConstant";

//----------------------------------------------------------------

export class ServiceSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const services : Partial<Service>[] = [
      ServicesConstant.SURF_BEGGINER,
      ServicesConstant.SURF_ADVANCE,
      ServicesConstant.SKATE_BEGGINER,
      ServicesConstant.SKATE_ADVANCE,
      ServicesConstant.SURFSKATE_BEGGINER,
      ServicesConstant.SURFSKATE_ADVANCE,
        
    ];
    
    await Service.save(services);

  }
  
}