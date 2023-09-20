class CategoryService {
	baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

	async getCategory(name) {
		const response = await fetch(`${this.baseUrl}${name}`);
		if (!response.ok) {
			throw new Error(`CategoriesService.getCategories failed, HTTP status ${response.status}`);
		}
		const category = await response.json();
		// console.log(category);
		return category;
	}
}

export default CategoryService;