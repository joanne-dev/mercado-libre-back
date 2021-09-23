import { Request, Response } from 'express';

class IndexController {
  public Health(rq: Request, rs: Response) {
    console.log('entra al controller');
    rs.status(200);
    rs.end('Hola mundo este controller quedo al pelo');
  }
}

const indexController = new IndexController();
export default indexController;