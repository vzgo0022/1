import { faceProductList } from './../../Type/Interface';

class Server {
    private url: string = 'https://foo0022.firebaseio.com/';
    public async request(id: string): Promise<(faceProductList[] | faceProductList)[]> {
        const res = await fetch(`${this.url}${id}`);
        const resArr: (faceProductList[] | faceProductList)[]  = await res.json();
        return resArr;
    }
    public async handler(id: string, valueSearch: string) { 
        await this.request(id)
        .then((array) => { 
            if(id){ 
              return  array.filter(({title}) => title.includes(valueSearch))
            }else{
                return [].concat(...array)
            }
           
            })
    }
}

export default Server;

