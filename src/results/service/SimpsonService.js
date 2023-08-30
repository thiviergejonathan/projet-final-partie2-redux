class SimpsonService {
	baseUrl = "https://thesimpsonsquoteapi.glitch.me/quotes";

	async getQuotesForCharacter(character, limit = 200) {
		const characterDownCase = character.toLowerCase();
		const url = `${this.baseUrl}?count=${limit}&character=${characterDownCase}`;
		// const url = "www.themealdb.com/api/json/v1/1/categories.php";
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`SimpsonService.getQuotesForCharacter failed, HTTP status ${response.status}`);
		}

		const quotes = await response.json();
		return quotes;
	}
}

export default SimpsonService;