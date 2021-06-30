export class User {
  public  firstname:string;
  public lastname:string;
  public gender:string;
  public country:string;
 public address:string;
  public phoneno:number;
    constructor(firstname : string, lastname : string, gender:string, country : string,address : string, phoneno : number
        ) 
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.country = country;
        this.address = address;
        this.phoneno = phoneno;

    }
}

// export default class User{

// public userId:number;

// public isActive:number;

// public isSuperUser:number;

// public isMiPortalRedirect: boolean = false;

// public userName:string;

// public email:string;

// public client:number;

// //public banners: string;

// //Added new fields to users for getting sell in & Sell out banners as seperate entities

// public sellInBanners:string;

// public sellOutBanners:string;

// public categories:string;

// public views:string;

// public showExport: boolean = false;



// constructor(userId: number, isActive:number, isSuperUser:number, isMiPortalRedirect: boolean, userName:string, email:string, client:number, sellInBanners:string, sellOutBanners:string, categories:string, views:string, showExport: boolean){

// this.userId = userId;

// this.isActive = isActive;

// this.isSuperUser = isSuperUser;

// this.isMiPortalRedirect = isMiPortalRedirect;

// this.userName = userName;

// this.client = client;

// this.email = email;

// //this.banners = banners;

// //Added new fields to users for getting sell in & Sell out banners as seperate entities

// this.sellInBanners = sellInBanners;

// this.sellOutBanners = sellOutBanners;

// categories = categories;

// this.views = views;

// this.showExport = showExport;

// }



// }
