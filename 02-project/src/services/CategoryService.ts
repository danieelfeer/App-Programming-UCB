import { Category } from "../model/Category";
import { AppDataSource } from "../repository/AppDataSource";

export class CategoryService {

    private categoryRepository = AppDataSource.getRepository(Category);

    async createCategory(id: string, name: string, description: string): Promise<Category> {
        const category = new Category(id, name, description);
        await this.categoryRepository.save(category);
        return category;
    }

    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async getCategoryById(id: string): Promise<Category | null> {
        return await this.categoryRepository.findOneBy({ id });
    }

    async getCategoryByName(name: string): Promise<Category | null> {
        return await this.categoryRepository.findOneBy({ name });
    }

    async updateCategory(id: string, name?: string, description?: string): Promise<Category | null> {
        const category = await this.getCategoryById(id);
        if (!category) {
            return null;
        }

        if (name) {
            category.name = name;
        }
        if (description) {
            category.description = description;
        }

        await this.categoryRepository.save(category);
        return category;
    }

    async deleteCategory(id: string): Promise<boolean> {
        const result = await this.categoryRepository.delete({ id });
        return result.affected !== 0; 
    }
}
