import nock, { Scope } from 'nock';

export class apimock {
    public flexKeyAPimock: Scope;
    constructor(private baseURL:string){
        this.flexKeyAPimock =  nock(this.baseURL);
    };

    get(resource:string,status:number,response:JSON):any{
        return this.flexKeyAPimock.get(resource)
            .reply(status,response);
    }
}