interface IAccessInfo {
  webReaderLink: string | null;
  country: string;
}

interface IRetailPrice {
  amount: number;
  currencyCode: string;
}

interface ISaleInfo {
  buyLink: string;
  country: string;
  retailPrice: IRetailPrice;
}

interface IImages {
  smallThumbnail: string;
}

interface IVolumeInfo {
  authors: string[];
  categories?: string[];
  description?: string;
  imageLinks: IImages;
  title: string;
  infoLink: string;
}

export interface IBooksProps {
  volumeInfo: IVolumeInfo;
  saleInfo: ISaleInfo;
  accessInfo: IAccessInfo;
  id: string;
}