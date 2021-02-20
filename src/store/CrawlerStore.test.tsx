import CrawlerStore from "./CrawlerStore";

describe("Crawler Store", () => {
  it("Start empty", () => {
    expect(CrawlerStore.list().find((c) => c.id === "123")).toBe(undefined);
  });
  it("Add a new crawler", () => {
    CrawlerStore.addItem("123", "test");
    expect(CrawlerStore.list().find((c) => c.id === "123")).toBeDefined();
  });
  it("Delete a crawler", () => {
    CrawlerStore.addItem("123", "test");
    CrawlerStore.deleteItem("123");
    expect(CrawlerStore.list().find((c) => c.id === "123")).toBe(undefined);
  });
});
