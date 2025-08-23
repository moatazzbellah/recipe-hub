export interface Recipe {
  _id: string;
  Title: string;
  Image: string;
  Description: string;
  Ingredients: string[];
  Instructions: string[];
  Category?: 'breakfast' | 'lunch' | 'dinner' | 'dessert';
}
