import { faceProductList } from './../../Type/Interface';

class Server {
    private ural:string = 'https://foo0022.firebaseio.com/';
     public async request(chapter:string):Promise<faceProductList[]> {
          const res = await fetch(`${this.ural} ${chapter}`);
          const resarr:faceProductList[] =await res.json();
          return  resarr;
     }
 }

export default  Server;