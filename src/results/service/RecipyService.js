class RecipyService {
	baseUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

	async getRecipy(id) {
		const response = await fetch(`${this.baseUrl}${id}`);
		if (!response.ok) {
			throw new Error(`RecipyService.getRecipy failed, HTTP status ${response.status}`);
		}
		const recipy = await response.json();
		console.log(recipy);
		return recipy;
	}
}

export default RecipyService;