export interface Author{
    $key?: string;
    id?: number;
    firstName: string;
    lastName: string;
    institute: string;
    city: string;
    country: string;
    email: string;
    otherAuthors?: Author[];
    presentationType?: string;
    titleOfStudy?: string;
    abstractContent?: string;
    keywords?: string;
    approved?: boolean;
}