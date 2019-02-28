import { faceServer, faceProductList } from './../../Type/Interface';


class Server {
    private url: string = 'https://foo0022.firebaseio.com/';

    public async request(id: string): Promise<faceServer | faceProductList[] > {
        const res = await fetch(`${this.url}${id}`);
        const resArr: faceServer | faceProductList[] = await res.json();
        return resArr;    
    }

    public async handler(id: string, valueSearch: string): Promise<faceProductList[]> {
        
        switch (id){
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
                if (valueSearch && Array.isArray(array)) {
                    return array.filter(({ title }) => title.includes(valueSearch));
                } else {
                    return (Object.values(array).flat()
                        .filter(({ title }) => title.includes(valueSearch)));
                }

            }));
        
    }
}

export default Server;

