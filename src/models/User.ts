import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./Role";
import { Appointment } from "./Appointment";

//----------------------------------------------------------------

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "first_name" })
  firstName!: string;

  @Column({ name: "last_name" })
  lastName!: string;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "password", select: false })
  password!: string;

  @Column({ name: "is_active" })
  isActive!: boolean;

  @Column({ name: "role_id" })
  roleId!: number;

  @Column({ default: "src/assets/img/air.jpg" })
  background!: string;

  @Column({ default: "rgb(0, 0, 0)" })
  backgroundColor!: string;

  @Column({ default: "rgb(0, 198, 165)" })
  fontColor!: string;

  @Column({ default: "rgb(246, 223, 207)" })
  fontColorText!: string;

  @Column({ default: "rgb(0, 198, 165)" })
  fontColorButton!: string;

  // Relation: User {0,1,2,...}--{1} Role

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  // Relacion: User {1}---{1,2,3,...} Appointment

  @OneToMany(() => Appointment, (appointment) => appointment.client)
  appointments?: Appointment[];
}
