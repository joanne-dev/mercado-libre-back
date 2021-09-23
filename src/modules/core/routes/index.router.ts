import { Router } from 'express';

import indexCoreController from '../controllers/indexController';
import productsController from "../controllers/products-controller";

class IndexRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get('/health', indexCoreController.Health);
    this.router.get('/items/search', productsController.getProducts);
    this.router.get('/item/:id', productsController.getDetailProduct);
  }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;
