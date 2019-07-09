import { World } from "cucumber";

declare module 'cucumber' {
    interface World {
        [key:string]: any;
    }
}