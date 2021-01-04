import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

import { IsString, IsNumber } from "class-validator";

@Entity()
export class Timetrack {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  duration: number;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: string;
}
