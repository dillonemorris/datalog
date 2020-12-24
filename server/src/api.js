const { RESTDataSource } = require("apollo-datasource-rest");

class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.publicapis.org/";
  }

  async getAllEntries() {
    const { entries } = await this.get("entries");
    return Array.isArray(entries)
      ? entries?.map((entry) => this.entryReducer(entry))
      : [];
  }

  async getEntryByTitle(title) {
    const entries = await this.getAllEntries();
    return entries?.find((e) => e.title === title) || "";
  }

  entryReducer(entry) {
    return {
      cursor: `${entry.API} - ${entry.Category}`,
      title: entry.API,
      category: entry.Category,
      description: entry.Description,
      auth: entry.Auth,
      https: entry.HTTPS,
      cors: entry.Cors,
      link: entry.Link,
    };
  }
}

module.exports = API;
