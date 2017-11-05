// @flow
export type CategoryName =
  | 'MEAT_AND_MEAT_PRODUCTS'
  | 'BUTTER_OR_CREAM'
  | 'OILS_FATS_MARGARINE'
  | 'OTHER_FOODS'
  | 'ALCOHOL_BELOW_18'
  | 'ALCOHOL_ABOVE_18'
  | 'CIGARETTES_AND_CIGARS'
  | 'OTHER_TOBACCO'
  | 'MEDICINE'
  | 'BOOKS'
  | 'MAGAZINES'
  | 'FLOWERS_AND_PLANTS'
  | 'ANIMAL_FEED'
  | 'FERTILIZER'
  | 'OTHER_GOODS';

export type CategoryInfo = {
  +name: string,
  +unit: string,
  +icon: string,
};

export type CategoriesInfo = {
  +[category: CategoryName]: CategoryInfo,
};

export type Categories = {
  +[category: CategoryName]: CategoryName,
};

export type CategoriesList = Array<CategoryName>;

export type VatRates = {
  +[category: CategoryName]: number,
};

export type BasketCategoryInfo = {
  quantity: number,
  duty: number,
  values: Array<number>,
};

export type Basket = {
  [category: CategoryName]: BasketCategoryInfo,
};
