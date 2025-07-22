# Vue 3 Composition API Todo List 專案｜整合遠端 API 與使用者驗證

這是一個使用 Vue 3 + Composition API + Pinia 架構開發的 Todo List 應用，透過遠端 API 完成註冊 / 登入 / 清單管理功能。專案整合狀態管理、token 驗證與資料操作，為練習前端實戰技能的完整範例。

🔗 **Demo 線上預覽**  
👉 [點我查看](https://xenosword-x.github.io/vueTodolist/index.html)

---

## 📌 專案特色

- 使用者註冊 / 登入 / 登出功能，並整合 token 驗證流程
- 串接遠端 API 實作 Todo 清單 CRUD（新增、刪除、編輯、切換完成狀態）
- 使用 `Pinia` 管理待辦事項與使用者登入狀態
- 使用 localStorage 儲存登入狀態
- 操作介面提供錯誤提示、登入失敗回饋

---

## 📁 技術與工具

- Vue 3 + Composition API
- Pinia 狀態管理
- Vue Router 路由切換
- Axios 串接 API
- Bootstrap 5 響應式 UI 排版
- Sweetalert 2 彈出式視窗套件應用

---

## 📚 學習心得

這個專案是將我先前使用純 JavaScript 開發的 TodoList，完整重構為 Vue 3 + Composition API 架構版本。透過使用 `Pinia` 處理資料與登入狀態，我更深入學習了組件間的資料流、token 驗證流程，以及如何拆分元件與管理狀態。這也是我整合實務開發經驗與 Vue 進階技能的重要練習。

---

## 📝 備註

- 此作品為練習用途，使用的 API 為學習平台提供，資料僅供展示與功能測試。
- API 來源：[五倍學院 Todoo API](https://todoo.5xcamp.us/)
