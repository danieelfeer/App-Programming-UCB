import Category from "../model/Category";

export class CategoryService{

    private categories: Category[] = [];

    public createCategory(id: string, name: string, description: string): Category{
        const category = new Category(id, name, description);
        this.categories.push(category);
        return category;
    }

    public listCategories(): Category[]{
        return this.categories;
    }

    public findCategoryById(id: string): Category | undefined{
        return this.categories.find((category) => category.getId() === id);
    }

    public findCategoryByName(name: string): Category | undefined{
        return this.categories.find(catagory => catagory.getName() === name);
    }

    public updateCategory(id: string, name: string, description: string): Category | undefined {
        const category = this.findCategoryById(id);
        if(category){
            category["name"] = name;
            category["description"] = description;
            return category;
        }
        return undefined;
    }

    public deleteCategoryById(id: string): boolean{
        const categoryIndex = this.categories.findIndex((category) => category.getId() === id);
        if (categoryIndex !== -1) {
            this.categories.splice(categoryIndex, 1);
            return true;
        }
        return false;
    }


}