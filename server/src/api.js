const { RESTDataSource } = require("apollo-datasource-rest");
const { v4 } = require("uuid");

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

  entryReducer(entry) {
    return {
      cursor: v4(),
      api: entry.API,
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
