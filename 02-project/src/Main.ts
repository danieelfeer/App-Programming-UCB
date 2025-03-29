import PromptSync from "prompt-sync";
import { AppDataSource } from "./repository/AppDataSource";
import { CategoryService } from "./services/CategoryService";
import { ProductService } from "./services/ProductService";

const prompt = PromptSync();

export class Main {

  static async init() {
    await AppDataSource.initialize();
    console.log("DB connected!");

    const categoryService = new CategoryService();
    const productService = new ProductService();

    while (true) {
      console.log("\n--- Menu ---");
      console.log("1. Create Category");
      console.log("2. List All Categories");
      console.log("3. Search Category by ID");
      console.log("4. Search Category by Name");
      console.log("5. Update Category");
      console.log("6. Delete Category");
      console.log("7. Create Product");
      console.log("8. List All Products");
      console.log("9. Search Product by ID");
      console.log("10. Search Product by Name");
      console.log("11. Search Products by Category");
      console.log("12. Update Product");
      console.log("13. Delete Product");
      console.log("14. Exit");

      const choice = prompt("Choice: ");

      if (choice === "1") {
        await this.createCategory(categoryService);
      } else if (choice === "2") {
        await this.listCategories(categoryService);
      } else if (choice === "3") {
        await this.searchCategoryById(categoryService);
      } else if (choice === "4") {
        await this.searchCategoryByName(categoryService);
      } else if (choice === "5") {
        await this.updateCategory(categoryService);
      } else if (choice === "6") {
        await this.deleteCategory(categoryService);
      } else if (choice === "7") {
        await this.createProduct(productService);
      } else if (choice === "8") {
        await this.listProducts(productService);
      } else if (choice === "9") {
        await this.searchProductById(productService);
      } else if (choice === "10") {
        await this.searchProductByName(productService);
      } else if (choice === "11") {
        await this.searchProductsByCategory(productService);
      } else if (choice === "12") {
        await this.updateProduct(productService);
      } else if (choice === "13") {
        await this.deleteCategory;
      } else if (choice === "14") {
        console.log("Exiting...");
        break;
      } else {
        console.log("Invalid choice, try again.");
      }
    }
  }

  static async createCategory(categoryService: CategoryService) {
    const id = prompt("Id: ");
    const name = prompt("Category name: ");
    const description = prompt("Category description: ");

    try {
      const category = await categoryService.createCategory(id, name, description);
      console.log(`Category "${category.name}" created successfully!`);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }

  static async listCategories(categoryService: CategoryService) {
    try {
      const categories = await categoryService.getCategories();
      if (categories.length > 0) {
        console.log("\n--- Categories ---");
        categories.forEach((category) => {
          console.log(`ID: ${category.id}, Name: ${category.name}, Description: ${category.description}`);
        });
      } else {
        console.log("No categories found.");
      }
    } catch (error) {
      console.error("Error listing categories:", error);
    }
  }

  static async searchCategoryById(categoryService: CategoryService) {
    const id = prompt("Category ID to search: ");
    try {
      const category = await categoryService.getCategoryById(id);
      if (category) {
        console.log(`ID: ${category.id}, Name: ${category.name}, Description: ${category.description}`);
      } else {
        console.log(`Category with ID "${id}" not found.`);
      }
    } catch (error) {
      console.error("Error searching category by ID:", error);
    }
  }

  static async searchCategoryByName(categoryService: CategoryService) {
    const name = prompt("Category name to search: ");
    try {
      const category = await categoryService.getCategoryByName(name);
      if (category) {
        console.log(`ID: ${category.id}, Name: ${category.name}, Description: ${category.description}`);
      } else {
        console.log(`Category with name "${name}" not found.`);
      }
    } catch (error) {
      console.error("Error searching category by name:", error);
    }
  }

  static async updateCategory(categoryService: CategoryService) {
    const id = prompt("Category ID to update: ");
    const name = prompt("New category name (leave blank to skip): ");
    const description = prompt("New category description (leave blank to skip): ");

    try {
      const updatedCategory = await categoryService.updateCategory(id, name || undefined, description || undefined);
      if (updatedCategory) {
        console.log(`Category "${updatedCategory.name}" updated successfully!`);
      } else {
        console.log(`Category with ID "${id}" not found.`);
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  }

  static async deleteCategory(categoryService: CategoryService) {
    const id = prompt("Category ID to delete: ");

    try {
      const success = await categoryService.deleteCategory(id);
      if (success) {
        console.log(`Category with ID "${id}" deleted successfully!`);
      } else {
        console.log(`Category with ID "${id}" not found.`);
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  static async createProduct(productService: ProductService) {
    const id = prompt("Product ID: ");
    const name = prompt("Product name: ");
    const description = prompt("Product description: ");
    const price = parseFloat(prompt("Product price: "));
    const quantity = parseInt(prompt("Product quantity: "));
    const categoryId = prompt("Category ID: ");

    try {
      const product = await productService.createProduct(id, name, description, price, quantity, categoryId);
      console.log(`Product "${product.getName()}" created successfully!`);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  static async listProducts(productService: ProductService) {
    try {
      const products = await productService.listProducts();
      if (products.length > 0) {
        console.log("\n--- Products ---");
        products.forEach((product) => {
          console.log(`ID: ${product.getId()}, Name: ${product.getName()}, Price: ${product.getPrice()}, Quantity: ${product.getQuantity()}, Category: ${product.getCategoryId()}`);
        });
      } else {
        console.log("No products found.");
      }
    } catch (error) {
      console.error("Error listing products:", error);
    }
  }

  static async searchProductById(productService: ProductService) {
    const id = prompt("Product ID to search: ");
    try {
      const product = await productService.getProductById(id);
      if (product) {
        console.log(`ID: ${product.getId()}, Name: ${product.getName()}, Price: ${product.getPrice()}, Quantity: ${product.getQuantity()}, Category: ${product.getCategoryId()}`);
      } else {
        console.log(`Product with ID "${id}" not found.`);
      }
    } catch (error) {
      console.error("Error searching product by ID:", error);
    }
  }

  static async searchProductByName(productService: ProductService) {
    const name = prompt("Product name to search: ");
    try {
      const products = await productService.getProductByName(name);
      if (products.length > 0) {
        console.log("\n--- Products ---");
        products.forEach((product) => {
          console.log(`ID: ${product.getId()}, Name: ${product.getName()}, Price: ${product.getPrice()}, Quantity: ${product.getQuantity()}, Category: ${product.getCategoryId()}`);
        });
      } else {
        console.log(`No products found with name "${name}".`);
      }
    } catch (error) {
      console.error("Error searching product by name:", error);
    }
  }

  static async searchProductsByCategory(productService: ProductService) {
    const categoryId = prompt("Category ID to search products: ");
    try {
      const products = await productService.getProductsByCategory(categoryId);
      if (products.length > 0) {
        console.log("\n--- Products in Category ---");
        products.forEach((product) => {
          console.log(`ID: ${product.getId()}, Name: ${product.getName()}, Price: ${product.getPrice()}, Quantity: ${product.getQuantity()}, Category: ${product.getCategoryId()}`);
        });
      } else {
        console.log(`No products found in category with ID "${categoryId}".`);
      }
    } catch (error) {
      console.error("Error searching products by category:", error);
    }
  }

  static async updateProduct(productService: ProductService) {
    const id = prompt("Product ID to update: ");
    const name = prompt("New product name (leave blank to skip): ");
    const description = prompt("New product description (leave blank to skip): ");
    const priceInput = prompt("New product price (leave blank to skip): ");
    const quantityInput = prompt("New product quantity (leave blank to skip): ");
    const categoryId = prompt("New category ID (leave blank to skip): ");

    // Parse os valores fornecidos para price e quantity, caso não estejam em branco
    const price = priceInput ? parseFloat(priceInput) : undefined;
    const quantity = quantityInput ? parseInt(quantityInput) : undefined;

    try {
        const updatedProduct = await productService.updateProduct(
            id,
            name || undefined,
            description || undefined,
            price,
            quantity,
            categoryId || undefined
        );

        if (updatedProduct) {
            console.log(`Product "${updatedProduct.getName()}" updated successfully!`);
        } else {
            console.log(`Product with ID "${id}" not found.`);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error updating product: ${error.message}`);
        } else {
            console.error("Unknown error occurred while updating product.");
        }
    }
  }

  static async deleteProduct(productService: ProductService) {
    const id = prompt("Product ID to delete: ");

    try {
        const success = await productService.deleteProduct(id);
        if (success) {
            console.log(`Product with ID "${id}" deleted successfully!`);
        } else {
            console.log(`Product with ID "${id}" not found.`);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error deleting product: ${error.message}`);
        } else {
            console.error("Unknown error occurred while deleting product.");
        }
    }
}

}