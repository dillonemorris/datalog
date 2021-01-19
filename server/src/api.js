const { RESTDataSource } = require("apollo-datasource-rest");

class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.publicapis.org/";
  }

  async getAllEntries() {
    const { entries } = await this.get("entries");

    if (Array.isArray(entries)) {
      return entries.map(this.entryReducer).sort(this.entrySorter);
    } else {
      return [];
    }
  }

  async getCategories() {
    const categories = await this.get("categories");

    if (Array.isArray(categories)) {
      return categories.map((category) => this.categoryReducer(category));
    } else {
      return [];
    }
  }

  async getEntriesByCategory(category) {
    const categoryTrimmed = category.split(" ")[0];

    const { entries } = await this.get(`entries?category=${categoryTrimmed}`);

    if (Array.isArray(entries)) {
      return entries
        .map(this.entryReducer)
        .sort(this.entrySorter)
        .filter((e) => {
          return (
            categoryTrimmed !== "Currency" || e.category === "Currency Exchange"
          );
        });
    } else {
      return [];
    }
  }

  entrySorter(a, b) {
    return a.title.localeCompare(b.title);
  }

  categoryReducer(category) {
    return {
      title: category,
    };
  }

  entryReducer(entry) {
    return {
      title: entry.API,
      category: entry.Category,
      description: entry.Description,
      https: entry.HTTPS,
      authRequired: entry.Auth !== "",
      supportsCors: entry.Cors === "yes",
      link: entry.Link,
    };
  }
}

module.exports = API;
