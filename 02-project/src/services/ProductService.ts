import { Product } from "../model/Product";
import { AppDataSource } from "../repository/AppDataSource";

export class ProductService {

    private productRepository = AppDataSource.getRepository(Product);

    // Criar produto
    async createProduct(
        id: string,
        name: string,
        description: string,
        price: number,
        quantity: number,
        categoryId: string
    ): Promise<Product> {
        const product = new Product(id, name, description, price, quantity, categoryId);

        try {
            await this.productRepository.save(product);
            return product;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error creating product: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while creating product.");
            }
        }
    }

    // Listar produtos
    async listProducts(): Promise<Product[]> {
        try {
            return await this.productRepository.find();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error listing products: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while listing products.");
            }
        }
    }

    // Buscar produto por ID
    async getProductById(id: string): Promise<Product | null> {
        try {
            return await this.productRepository.findOneBy({ id });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error finding product by ID: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while finding product by ID.");
            }
        }
    }

    // Buscar produto por nome
    async getProductByName(name: string): Promise<Product[]> {
        try {
            return await this.productRepository.findBy({ name });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error finding product by name: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while finding product by name.");
            }
        }
    }

    // Buscar produtos por categoria
    async getProductsByCategory(categoryId: string): Promise<Product[]> {
        try {
            return await this.productRepository.findBy({ categoryId });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error finding products by category: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while finding products by category.");
            }
        }
    }

    // Atualizar produto
    async updateProduct(
        id: string,
        name?: string,
        description?: string,
        price?: number,
        quantity?: number,
        categoryId?: string
    ): Promise<Product | null> {
        const product = await this.getProductById(id);
        if (!product) {
            throw new Error(`Product with ID "${id}" not found.`);
        }

        if (name) product.setName(name);
        if (description) product.setDescription(description);
        if (price) product.setPrice(price);
        if (quantity) product.setQuantity(quantity);
        if (categoryId) product.setCategoryId(categoryId);

        product.setUpdatedAt(new Date());

        try {
            await this.productRepository.save(product);
            return product;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error updating product: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while updating product.");
            }
        }
    }

    // Remover produto
    async deleteProduct(id: string): Promise<boolean> {
        try {
            const result = await this.productRepository.delete({ id });
            return result.affected !== 0; // Retorna true se algo foi deletado
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error deleting product: ${error.message}`);
            } else {
                throw new Error("Unknown error occurred while deleting product.");
            }
        }
    }
}
