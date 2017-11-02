// @flow

export type CategoriesTypes =
  | 'Meat'
  | 'Butter'
  | 'Oils'
  | 'AlcSoft'
  | 'AlcHard'
  | 'Cigarettes'
  | 'Tobacco'
  | 'Meds'
  | 'Books'
  | 'Magazines'
  | 'Flowers'
  | 'AnimalFeed'
  | 'Fertilizer'
  | 'Other';

type CategoryInfo = {
  name: string,
  unit: string,
  icon: string,
};

export type CategoryInfoType = Map<CategoriesTypes, CategoryInfo>;

type CategoryVolume = {
  quantity: number,
  amounts: Array<number>,
};

type CategoryDues = {
  duty: number,
  vat: number,
};

type CategoryBasketItem = {
  volume: CategoryVolume,
  dues: CategoryDues,
};

export type BasketType = Map<CategoriesTypes, CategoryBasketItem>;

type DutyBracket = {
  threshold: number,
  fee: number,
};

type Rates = {
  vat: number,
  duty: Array<DutyBracket>,
  dutyAllowance: number,
  adultsOnly: boolean,
};

export type RatesType = Map<CategoriesTypes, Rates>;

export type People = {
  adults: number,
  minors: number,
};
