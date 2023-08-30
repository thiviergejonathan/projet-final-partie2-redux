class CategoriesService {
	baseUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

	async getCategories() {
		const response = await fetch(this.baseUrl);
		if (!response.ok) {
			throw new Error(`CategoriesService.getCategories failed, HTTP status ${response.status}`);
		}

		const categories = await response.json();
		return categories;
	}
}

export default CategoriesService;