# 📝 Todo List App

This project is a **Todo List App** built with **React (Next.js)**, designed to practice component-based architecture, state management, and theme handling.

もともとは **HTML, CSS, JavaScript** で制作していましたが、学習を兼ねて **React（Next.js）** で再構築しました。  
コンポーネント設計、状態管理、テーマ管理の理解を深める学習プロジェクトです。

---

## 🎯 Purpose / 目的

- Practice React and Next.js through a small-scale project  
- Learn state management, component design, and UX-focused development  
- React と Next.js の実践練習  
- useState / useEffect を駆使した状態管理や、UXを意識した設計の理解向上  

---

## 🧩 Tech Stack / 技術

- **React**  
- **Next.js**  
- **JavaScript (ES6+)**  
- **CSS Modules**  
- **TailwindCSS** (for layout)  
- **Node.js (v20)**  
- **VS Code**

---

## 🚀 Features / 機能

- Add and delete tasks / タスクの追加・削除  
- Mark tasks as completed with **delayed state change** / 完了チェック（UIは先にチェック表示、状態変化は遅延）  
- Display **expired tasks in red on today's page** / 今日のページで期限切れタスクを赤字表示  
- Dark mode toggle with OS preference detection / OS設定に応じたダークモード切替  
- Component-based UI structure / コンポーネント単位での UI 管理  
- Filter tasks by date (`today`, `upcoming`, `expired`) / 日付別タスクフィルター  
- Editable tasks (planned) / タスク編集機能（実装予定）  

---

## 🎨 UX & Design / デザイン・UX

- Mobile-first design for **thumb-friendly navigation** / 親指で操作しやすいモバイル最適化  
- Dark mode with **sufficient contrast** / ダークモードでも文字と背景のコントラストを確保  
- Smooth transitions and clear visual feedback / スムーズなアニメーションと視覚的フィードバック  
- **Immediate visual feedback on checkbox** before actual state changes for UX improvement / チェックボックスは即時反応し、状態更新は遅延させてUX向上  
- **Expired tasks highlighted in red** for quick recognition / 期限切れタスクを赤字で表示し、ユーザーが一目で認識可能  

---

## 💡 Learning Points / 学習のポイント

- Used `useState` and `useEffect` to manage Todo list and persist data via `localStorage`  
- Implemented **delayed toggle for better UX** (checkbox reacts immediately, state updates after a short delay)  
- Designed **visual feedback for expired tasks** to improve user awareness  
- Implemented **dark mode toggle** respecting system settings  
- Learned **component-based structure** for maintainable and reusable UI  
- Practiced conditional rendering, event handling, and dynamic class switching  

- `useState` と `useEffect` を駆使した状態管理  
- **チェックUIと状態更新のタイミングを分離**（UX向上の工夫）  
- **期限切れタスクを赤字表示**（ユーザーが一目で期限切れを認識可能）  
- localStorage によるデータ永続化  
- コンポーネント再利用性と可読性の向上  
- 条件付きレンダリング、イベント処理、クラス切替の理解  

---

## 🔗 Demo / デモ

[View the live app on Vercel](https://todo-list-eta-taupe.vercel.app/)

---

## 📂 Future Improvements / 今後の改善予定

- Task editing and updating / タスク編集・更新機能  
- Advanced filtering (by category or priority) / カテゴリ・優先度別の詳細フィルター  
- Animation enhancements / アニメーション改善  
- TailwindCSS migration for full styling consistency / TailwindCSS 完全移行
