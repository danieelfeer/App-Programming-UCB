import { Category } from "../model/Category";
import { AppDataSource } from "../repository/AppDataSource";

export class CategoryService{
    
    private categoryRepository = AppDataSource.getRepository(Category);

    async createCategory(id: string, name:string, description: string) : Promise<Category>{
        const catergory = new Category(id, name, description);
        await this.categoryRepository.save(catergory);
        return catergory;
    }
    
}