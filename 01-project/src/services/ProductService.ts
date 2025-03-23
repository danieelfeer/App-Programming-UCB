import Product from "../model/Product";

export class ProductService {
  private products: Product[] = [];

  public createProduct(
    id: string,
    name: string,
    description: string,
    quantity: number,
    price: number,
    categoryId: string
  ): Product {
    const product = new Product(
      id,
      name,
      description,
      quantity,
      price,
      categoryId
    );
    this.products.push(product);
    return product;
  }

  public listProducts(): Product[]{
    return this.products;
  }

  public findProductById(id: string): Product | undefined {
    return this.products.find(product => product.getId() === id);
  }

  public findProductByName(name: string): Product | undefined {
    return this.products.find(product => product.getName() === name);
  }

  public findProductByCategory(catagoryId : string): Product[] {
    return this.products.filter(product => product.getCategoryId() === catagoryId);
  }

  public updateProduct(id: string, name: string, description: string,quantity: number,
    price: number,
    categoryId: string): Product | undefined{
        const product = this.findProductById(id);
        if(product){
            product["name"] = name;
            product["description"] = description;
            product["quantity"] = quantity;
            product["price"] = price;
            product["categoryId"] = categoryId;
            product["updatedAt"] = new Date();
            return product;
        }
        return undefined;
    }

    public deleteProduct(id: string): boolean{
        const productIndex = this.products.findIndex(product => product.getId() === id);
        
        if(productIndex != -1){
            this.products.splice(productIndex, 1);
            return true;
        }

        return false;
        
    }
}
