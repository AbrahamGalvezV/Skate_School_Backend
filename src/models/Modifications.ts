import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

//----------------------------------------------------------------

@Entity("modifications")
export class Modifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'background' })
  background!: string;

  @Column({ name: 'backgroundColor' })
  backgroundColor!: string;

  @Column({ name: 'fontColor' })
  fontColor!: string;

  @Column({ name: 'fontColorText' })
  fontColorText!: string;

  @Column({ name: 'fontColorButton' })
  fontColorButton!: string;






}