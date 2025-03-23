import { Category } from "./Category";

export class Product extends Category{
    
    private price: number;
    private quantity: number;
    private categoryId: string;
    private updatedAt: Date;

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        quantity: number,
        categoryId: string,
    ) {
        super(id, name, description);
        this.price = price;
        this.quantity = quantity;
        this.categoryId = categoryId;
        this.updatedAt = new Date();
    }

    // Getters and Setters
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

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

}