import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  LogInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  LogUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  LogRemove() {
    console.log('Removed User with id', this.id);
  }
}
