const counpons = [
  {
    code: "FREESHIP",
    discount: 15000,
  },
  {
    code: "KHAO40",
    discount: 40000,
  },
  {
    code: "ANTRUAVUIVE",
    discount: 10000,
  },
];

export const getCoupons = (code) => counpons.find((cp) => cp.code == code);
