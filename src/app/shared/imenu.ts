export interface IMenu {
    id: string;
    name: string;
    pages: IPage[];
}

export interface IPage {
    id: string;
    name: string;
    url: string;
}
