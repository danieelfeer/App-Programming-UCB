import readline from 'readline';
import { CategoryService } from './services/CategoryService';
import { ProductService } from './services/ProductService';

export class Main {
  private categoryService: CategoryService;
  private productService: ProductService;
  private rl: readline.Interface;

  constructor() {
    // Instantiating services and readline
    this.categoryService = new CategoryService();
    this.productService = new ProductService();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  // Function to display the menu and capture the user's choice
  private showMenu(): void {
    console.log("\n--- Main Menu ---");
    console.log("1. Create Category");
    console.log("2. List Categories");
    console.log("3. Create Product");
    console.log("4. List Products");
    console.log("5. Find Products by Category");
    console.log("6. Exit");

    this.rl.question("\nChoose an option: ", (option) => {
      switch (option) {
        case '1':
          this.createCategory();
          break;
        case '2':
          this.listCategories();
          break;
        case '3':
          this.createProduct();
          break;
        case '4':
          this.listProducts();
          break;
        case '5':
          this.findProductsByCategory();
          break;
        case '6':
          console.log("Exiting...");
          this.rl.close();
          break;
        default:
          console.log("Invalid option! Try again.");
          this.showMenu();
          break;
      }
    });
  }

  // Function to create a category
  private createCategory(): void {
    this.rl.question("\nEnter the category ID: ", (id) => {
      this.rl.question("Enter the category name: ", (name) => {
        this.rl.question("Enter the category description: ", (description) => {
          const category = this.categoryService.createCategory(id, name, description);
          console.log(`Category created: ${category.getName()}`);
          this.showMenu();
        });
      });
    });
  }

  // Function to list categories
  private listCategories(): void {
    const categories = this.categoryService.listCategories();
    console.log("\nList of Categories:");
    if (categories.length > 0) {
      console.table(categories.map(category => ({
        "ID": category.getId(),
        "Name": category.getName(),
        "Description": category.getDescription(),
        "Created At": category.getCreatedAt(),
      })));
    } else {
      console.log("No categories registered.");
    }
    this.showMenu();
  }

  // Function to create a product
  private createProduct(): void {
    this.rl.question("\nEnter the product ID: ", (id) => {
        this.rl.question("Enter the product name: ", (name) => {
            this.rl.question("Enter the product description: ", (description) => {
                this.rl.question("Enter the product price: ", (price) => {
                    this.rl.question("Enter the product name: ", (quantity) => {
                        this.rl.question("Enter the category ID for the product: ", (categoryId) => {
                            const product = this.productService.createProduct(id, name, description,parseFloat(price), parseInt(quantity), categoryId);
                            console.log(`Product created: ${product.getName()}`);
                            this.showMenu();
                    });
                });
          });
        });
      });
    });
  }

  // Function to list products
  private listProducts(): void {
    const products = this.productService.listProducts();
    console.log("\nList of Products:");
    if (products.length > 0) {
      console.table(products.map(product => ({
        "ID": product.getId(),
        "Name": product.getName(),
        "Category ID": product.getCategoryId(),
        "Price": product.getPrice(),
      })));
    } else {
      console.log("No products registered.");
    }
    this.showMenu();
  }

  // Function to find products by category
  private findProductsByCategory(): void {
    this.rl.question("\nEnter the category ID to find products: ", (categoryId) => {
      const products = this.productService.findProductByCategory(categoryId);
      console.log("\nProducts in the category:");
      if (products.length > 0) {
        console.table(products.map(product => ({
          "ID": product.getId(),
          "Name": product.getName(),
          "Price": product.getPrice(),
        })));
      } else {
        console.log("No products found for this category.");
      }
      this.showMenu();
    });
  }

  // Function to start the system and show the menu
  public start(): void {
    this.showMenu();
  }
}
