export interface IProduct {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  image: string | undefined;
  price: string | undefined;
}

export class Product implements IProduct {
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  image: string | undefined;
  price: string | undefined;

  constructor(data?: IProduct) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }
}
