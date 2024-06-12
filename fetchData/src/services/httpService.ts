import apiClients from "./apiClients";

interface Entity {
    id: number
}

//Create a class and a method
class HttpService {
    //type string endpoint 
    endpoint: string;
    //need a constructor any time you call the class it will create a instance of that class
    //whatever is in our constructor it will create an instance
    constructor(endpoint:string) {
        this.endpoint = endpoint
    }


    //lets create a getAllUsers method
    getAll<T>() {
        const request = apiClients.get<T[]>('/users')
        return {request}
    }

    //lets create a delete method
    delete(id:number){
        return apiClients.delete(this.endpoint + '/' + id)
    }

    //add user method
    create<T>(entity: T){
        return apiClients.put(this.endpoint + '/' + entity)
    }

    //update method
    update<T extends Entity>(entity: T){
        return apiClients.put(this.endpoint + '/' + entity.id, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create;