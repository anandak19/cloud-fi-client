export interface ICoupon {
  phoneNumber: string;
  couponCount: number;
  couponNumber?: string;
  profile: string;
  cost: number;
  date: Date | string;
}
