export interface IGear {
  image: string; // 裝備照片
  name: string; // 名稱
  purchase_date: Date; // 購買日期
  purchase_status: string; // 物品狀態
  purchase_price: string; // 購入價格
  type: string; // 類型
  purchaser: string; // 購買/捐獻人
  amount: number; // 數量
  brand: string; // 品牌
  rent_amount: IRentCount[]; // 借出數量
  rent_count: number; // 借出次數
  rent_price: string; // 租金
  ref_url: string; // 參考網址
  createdAt: Date; // 建立日期
  updatedAt: IRentInfo[]; // 更新日期
  memo: string; // 備註
  sold_price: string; // 售出金額
  inbox_size: string; // 收納尺寸
  unbox_size: string; // 展開尺寸
  weight: string; // 重量
}

export interface IRentCount {
  ppl_name: string; // 借出人名稱
  count: number; // 借出數量
}

export interface IRentInfo {
  ppl_name: string; // 借出人名稱
  rent_date: Date; // 借出日期
  rent_status: boolean; // 借出歸還與否
  count: number; // 借出數量
}
