export class User {
    id: string;
    displayname: string;
    age: number;
    height: number;
    jobtitle: string;
    mainphoto: string;
    compatabilityScore: number;
    contactsExchanged: number;
    religion: string;
    favourite: boolean;
    distance: number;
    city: {name: string; lat:number; lon:number};
}