class RecipyService {
	baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

	async getRecipy(name) {
		const response = await fetch(`${this.baseUrl}${name}`);
		if (!response.ok) {
			throw new Error(`RecipyService.getRecipy failed, HTTP status ${response.status}`);
		}
		const recipy = await response.json();
		console.log(recipy);
		return recipy;
	}
}

export default RecipyService;