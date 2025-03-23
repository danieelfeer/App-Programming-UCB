class Product{
    private id: string;
    private name: string;
    private description: string;
    private price: number;
    private quantity: number;
    private categoryId: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        quantity: number,
        categoryId: string,
        createdAt: Date = new Date(),
        updatedAt: Date = new Date()
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.categoryId = categoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters and Setters
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

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getCategoryId(): string {
        return this.categoryId;
    }

    public setCategoryId(categoryId: string): void {
        this.categoryId = categoryId;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

}

export default Product;