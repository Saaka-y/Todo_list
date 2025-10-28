# 📝 Todo List App

I originally built this project using **HTML, CSS, and JavaScript**, but I’m now rebuilding it with **React (Next.js)** to practice component-based architecture and theme management.  

最初は HTML・CSS・JavaScript で制作していましたが、現在は **React（Next.js）** で再構築中です。  
コンポーネント設計やテーマ管理の理解を深めるための学習プロジェクトです。

---

## 🎯 Purpose / 目的

- To practice React and Next.js through a small-scale project  
- React と Next.js の実践練習として  

---

## 🧩 Tech Stack / 技術

- React  
- Next.js  
- JavaScript (ES6+)  
- CSS Modules  
- TailwindCSS (in progress)  
- Node.js (v20)  
- VS Code  

---

## 🚀 Features / 機能

- Add and delete tasks  
- Mark tasks as completed (strikethrough)  
- Dark mode toggle  
- Component-based structure  

タスクの追加・削除、完了チェック（取り消し線）、ダークモード切り替えなどを実装。  
コンポーネント単位で UI を管理しています。
今後はEdit機能、日付設定機能（フィルター機能）を実装予定です。

---

## ⚠️ Error Log / 解決法備忘録

### 🌀 TailwindCSS

**問題・症状**  
`@tailwind base` が使えず、ビルドエラーが発生。  

**原因**  
TailwindCSS v4 では `@tailwind base` が廃止されている。  

**対応**  
以下のように書き換え。  
```css
@import "tailwindcss/preflight";
@import "tailwindcss/theme";
@import "tailwindcss/utilities";

