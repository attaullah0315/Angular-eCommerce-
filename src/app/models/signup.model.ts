export interface signUp{
    name: string;
    email: string;
    password: string;
}

export interface logIn{
    email: string;
    password: string;
}

export interface product{
    productName: string;
    productPrice:number;
    productCategary: string;
    productColor: string;
    describtion: string;
    productImage: string;
}