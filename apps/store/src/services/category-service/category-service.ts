import { CategoryBeauty } from './category-beauty'
import { CategoryChildrens } from './category-childrens'
import { CategoryFemale } from './category-female'
import { CategoryMale } from './category-male'

export class CategoryService {
  public getStaticCategories() {
    return [CategoryFemale, CategoryMale, CategoryChildrens, CategoryBeauty]
  }
}
