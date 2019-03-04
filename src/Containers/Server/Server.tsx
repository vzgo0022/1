import { faceProductList } from './../../Type/Interface';

interface fecHandler {
    array:faceProductList[],
    value:string
}

class Server {
    private url: string = 'https://foo0022.firebaseio.com/';

    public async request(id: string): Promise<faceProductList[]> {
        const res = await fetch(`${this.url}${id}`);
        const resArr:faceProductList[] = await res.json();
        return resArr;
    }

    public async handler(id: string, valueSearch: string): Promise<fecHandler> {

        switch (id) {
            case 'All':
                id = '.json';
                break;

            case 'Mens':
                id = 'man.json';
                break;

            case 'Womens':
                id = 'woman.json';
                break;

            case 'Childrens':
                id = 'child.json';
                break;
        }
        return (await this.request(id)
            .then((array) => {
                if (valueSearch) {
                    return {
                        array:Object.values(array).flat().filter(({ title }) => title.includes(valueSearch)),
                        value:valueSearch
                    };
                } else {
                    return {
                        array:Object.values(array).flat(),
                        value:valueSearch                      
                    };
                }
            }));

    }
}

export default Server;

