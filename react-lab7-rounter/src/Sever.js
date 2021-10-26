import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.get("/api/products", () => [
        { id: 1, title: "Apple Mac", price: 6999 },
        { id: 2, title: "Apple Iphone", price: 1499 },
      ]);
    },
  });
}
