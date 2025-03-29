import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

  @PrimaryColumn()
  id: string; //@@ retirar o private;
  @Column()
  private name: string;
  @Column()
  private description: string;
  @Column()
  private createdAt: Date;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }

  //Getters
  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  // Setters
  public setId(id: string): void {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}
