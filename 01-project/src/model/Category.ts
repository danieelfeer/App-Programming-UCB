class Category {
  private id: string;
  private name: string;
  private description: string;
  private createdAt: Date;

  constructor(id: string, name: string, description: string, createdAt: Date = new Date()) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }

  //Getters and Setters
  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}

function createCategory(
  id: string,
  name: string,
  description: string
): Category {
  const createdAt = new Date();
  return new Category(id, name, description, createdAt);
}

function listCategories(catergories: Category[]): void{
    catergories.forEach(category =>{
        console.log(`ID: ${category.getId()}, Name: ${category.getName()}, Created At: ${category.getCreatedAt()}`
    )});
}

function findCategoryById(id: string): Category | undefined{
    return 
}

export default Category;
