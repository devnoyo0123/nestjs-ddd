import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '../default.entity';

export enum PartnerStatus {
  ENABLE = '활성화',
  DISABLE = '비활성화',
}

@Entity()
export class Partner extends DefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  businessNo: string;

  @Column()
  email: string;

  @Column()
  status: PartnerStatus;
}
