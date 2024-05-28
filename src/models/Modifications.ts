import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//----------------------------------------------------------------

@Entity("modifications")
export class Modifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'background_image' })
  background_image!: string;

//   @Column({ default: "default-background" })
//   background_color!: string;
}
