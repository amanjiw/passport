import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('passport')
export class PassportEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ unique: true })
  passportNumber!: string;

  @Column()
  country!: string;

  @Column()
  userId!: number;

  @OneToOne(() => UserEntity, (user) => user.passport)
  @JoinColumn()
  user!: UserEntity;
}
