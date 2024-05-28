import { Seeder } from "./Seeder";
// import { getRepository } from 'typeorm';
import { Modifications } from '../../models/Modifications';
import { ModificationsConstant } from '../../constants/ModificationsConstant';

export class ModificationSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const modifications: Partial<Modifications>[] = [
      ModificationsConstant.IMAGE_1,
      ModificationsConstant.IMAGE_2,
      ModificationsConstant.IMAGE_3,
      ModificationsConstant.IMAGE_4,
      // ModificationsConstant.COLOR_1,
      // ModificationsConstant.COLOR_2,
      // ModificationsConstant.COLOR_3,
      // ModificationsConstant.COLOR_4,
      // ModificationsConstant.COLOR_5,
      // ModificationsConstant.COLOR_6,
      // ModificationsConstant.COLOR_7,
      // ModificationsConstant.COLOR_8,
      // ModificationsConstant.COLOR_9,
    ];

    // const modificationsRepository = getRepository(Modifications);

    // for (const modification of modifications) {
    //   const modificationEntity = modificationsRepository.create(modification);
    //   await modificationsRepository.save(modificationEntity);
    // }

    await Modifications.save(modifications)
  }
}
