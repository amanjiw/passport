import { PassportEntity } from 'src/passport/entities/passport.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @OneToOne(() => PassportEntity, (passport) => passport.user)
  passport!: PassportEntity;
}
