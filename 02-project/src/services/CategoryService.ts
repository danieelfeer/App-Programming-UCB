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
        return await this.categoryRepository.findOneBy({id});
    }



    

    
}