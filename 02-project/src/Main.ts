import PromptSync from "prompt-sync";
import { Category } from "./model/Category";
import { AppDataSource } from "./repository/AppDataSource";

const prompt = PromptSync();

export class Main {

  static async init() {
    await AppDataSource.initialize();
    console.log("DB conected!");

    while (true) {
      console.log("\n--- Menu ---");
      console.log("1. Create Category");
      console.log("3. Exit");

      const choice = prompt("Choice: ");

      if (choice === "1") {
        await this.createCategory();
      } else if (choice === "3") {
        console.log("Exit...");
        break;
      } else {
        console.log("Invalid, try again.");
      }
    }
  }

  // Função para criar uma categoria
  static async createCategory() {
    const id = prompt("Id: ");
    const name = prompt("Category name: ");
    const description = prompt("Category description: ");
    
    const category = new Category(id, name, description);
    const categoryRepository = AppDataSource.getRepository(Category);

    try {
      await categoryRepository.save(category);
      console.log(`Category "${name}" created sucessfuly!`);
    } catch (error) {
      console.error("Error to create", error);
    }
  }

}
