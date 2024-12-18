export type LogoLetters = {
  id: number;
  name: string;
  color: boolean;
  delay: number;
};

export const logoLetters: LogoLetters[] = [
  { id: 1, name: "D", color: true, delay: 2 },
  { id: 2, name: "I", color: true, delay: 3 },
  { id: 3, name: "O", color: true, delay: 4 },
  { id: 4, name: "R", color: true, delay: 5 },
  { id: 5, name: "A", color: true, delay: 6 },
  { id: 6, name: "K", color: false, delay: 7 },
  { id: 7, name: "I", color: false, delay: 8 },
  { id: 8, name: "D", color: false, delay: 9 },
  { id: 9, name: "S", color: false, delay: 10 },
];

export const textiles = [
  {
    name: "Интерлок",
  },
  {
    name: "Футер",
  },
];

export const categories = [
  {
    name: "Комбинезоны",
  },
  {
    name: "Кофты",
  },
  {
    name: "Боди",
  },
  {
    name: "Штаны",
  },
  {
    name: "Ползунки",
  },
  {
    name: "Распашенки",
  },
  {
    name: "Чепчик",
  },
  {
    name: "Майка",
  },
  {
    name: "Трусы",
  },
  {
    name: "Футболка",
  },
  {
    name: "Песочник",
  },
];

export const sizes = [
  {
    size: 56,
  },
  {
    size: 62,
  },
  {
    size: 68,
  },
  {
    size: 74,
  },
  {
    size: 80,
  },
  {
    size: 86,
  },
  {
    size: 92,
  },
];

export const models = [
  {
    name: "кофта дл.р 56-80",
    isButtons: true,
    categoryId: 2,
  },
  {
    name: "кофта к.р 56-80",
    isButtons: true,
    categoryId: 2,
  },
  {
    name: "ползунки 56-80",
    isButtons: false,
    categoryId: 5,
  },
  {
    name: "боди дл.р(8кн) 56-80",
    isButtons: true,
    categoryId: 3,
  },
  {
    name: "боди к.р(8кн) 56-80",
    isButtons: true,
    categoryId: 3,
  },
  {
    name: "штаны 56-80",
    isButtons: false,
    categoryId: 4,
  },
  {
    name: "комбинезон 56-62",
    isButtons: true,
    categoryId: 1,
  },
  {
    name: "комбинезон 56-80",
    isButtons: true,
    categoryId: 1,
  },
  {
    name: "комбинезон 68-92",
    isButtons: true,
    categoryId: 1,
  },
  {
    name: "распашонки 56-62",
    isButtons: true,
    categoryId: 6,
  },
  {
    name: "3-х пр. распашонка. 56-62",
    isButtons: true,
    categoryId: 6,
  },
  {
    name: "ползунки к 3-х пр. расп. 56-62",
    isButtons: false,
    categoryId: 5,
  },
  {
    name: "чепчик к 3-х пр. расп. 56-62",
    isButtons: false,
    categoryId: 7,
  },
  {
    name: "3-х пр. боди. 56-62",
    isButtons: true,
    categoryId: 3,
  },
  {
    name: "ползунки к 3-х пр. боди. 56-62",
    isButtons: false,
    categoryId: 5,
  },
  {
    name: "чепчик к 3-х пр. боди. 56-62",
    isButtons: false,
    categoryId: 7,
  },
  {
    name: "майка 62-86",
    isButtons: true,
    categoryId: 8,
  },
  {
    name: "трусы 62-86",
    isButtons: false,
    categoryId: 9,
  },
  {
    name: "футболка 62-86",
    isButtons: true,
    categoryId: 10,
  },
  {
    name: "кофта кн.пл дл.р 62-86",
    isButtons: true,
    categoryId: 2,
  },
  {
    name: "штаны пижамные 62-86",
    isButtons: false,
    categoryId: 4,
  },
  {
    name: "песочник 56-80",
    isButtons: true,
    categoryId: 11,
  },
  {
    name: "боди-юбка 62-86",
    isButtons: true,
    categoryId: 3,
  },
  {
    name: "боди кн.пл дл.р 62-86",
    isButtons: true,
    categoryId: 3,
  },
  {
    name: "боди к.р бейка по кругу 56-80",
    isButtons: true,
    categoryId: 3,
  },
];
