# Taiwan_Reservoir

## 構想
目前看到的網頁，大多只會顯示水庫的水量，而不會顯示一個區間的水庫變化量，以及水庫的相關資訊。

### 預期目標
1. 可以顯示當下水庫的狀況 : (多少 %、今日進水量、今日出水量、預測剩餘天數、更新時間，以即時更新數據為主)
2. 點選該水庫，可以看更多有關該水庫的資訊
   1. 該水庫的介紹，地理位置，供水區域
   2. 該水庫的歷史變化，以30天為限，顯示30天內的資料(今日進水量、今日出水量、有效蓄水量等)

### 需要待解決的問題
1. 呈現方式 : vue 
2. 如何架設在網站上 ? 電腦是否需要一直開著 (用樹梅派去跑 ?) 資料庫如何連線 
3. 爬蟲抓取網路上的數據  => 先以 python 抓取，然後固定顯示的資料
4. 排程更新資料庫 (其實可以不用做)

### 目前方向
1. 先以即時數據來練習
   - https://www.taiwanstat.com/waters/latest
   - 如果要歷史數據 : https://fhy.wra.gov.tw/ReservoirPage_2011/StorageCapacity.aspx

### 層級關係
- 用 chart(水滴)，組成一個與reservoirInfo(水庫資訊)組合成一個components
  - reservoirInfo(父) <-> chart(子)


### 參考資料
- [blairlee227](https://github.com/blairlee227/taiwan-reservoir)
- [TaiwanReservoirAPI](https://github.com/chihsuan/TaiwanReservoirAPI)
- [reservoir-visual](https://github.com/chihsuan/reservoir-visual)


