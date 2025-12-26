# 📝 Todo List App

> **This is a portfolio project** created to demonstrate my skills in React, Next.js, and modern frontend development practices.

---

## 🎯 Purpose

This project is a **Todo List App** built with **React (Next.js)**, designed to practice component-based architecture, state management, and theme handling.

Originally created with **HTML, CSS, and vanilla JavaScript**, I rebuilt it with **React (Next.js)** to deepen my understanding of modern frontend development.

**Key Learning Goals:**
- Practice React and Next.js through a small-scale project
- Learn state management, component design, and UX-focused development
- Understand how to structure a maintainable frontend application

---

## 🧩 Tech Stack

- **React**
- **Next.js**
- **JavaScript (ES6+)**
- **CSS Modules**
- **TailwindCSS** (for layout)
- **Node.js (v20)**
- **VS Code**

---

## 🚀 Features

- Add and delete tasks
- Mark tasks as completed with **delayed state change**
- Display **expired tasks in red on today's page**
- Dark mode toggle with OS preference detection
- Component-based UI structure
- Filter tasks by date (`today`, `upcoming`, `expired`)
- Editable tasks (planned)

---

## 🎨 UX & Design

- Mobile-first design for **thumb-friendly navigation**
- Dark mode with **sufficient contrast**
- Smooth transitions and clear visual feedback
- **Immediate visual feedback on checkbox** before actual state changes for UX improvement
- **Expired tasks highlighted in red** for quick recognition

---

## 💡 Learning Points

- Used `useState` and `useEffect` to manage Todo list and persist data via `localStorage`
- Implemented **delayed toggle for better UX** (checkbox reacts immediately, state updates after a short delay)
- Designed **visual feedback for expired tasks** to improve user awareness
- Implemented **dark mode toggle** respecting system settings
- Learned **component-based structure** for maintainable and reusable UI
- Practiced conditional rendering, event handling, and dynamic class switching

---

## � Key Implementation Details

**UX Improvements:**
- Positioned page navigation buttons in the upper right corner for easy thumb access on mobile devices
- Implemented a 1-second delay before removing completed tasks to provide visual confirmation
- Displayed expired tasks in red at the bottom of the Today page to visually emphasize priority
- Used a custom DatePicker component instead of native `input type="date"` to avoid display inconsistencies across devices and improve placeholder visibility

**Technical Challenges:**
- Initially mixed string and Date object types for task dates, causing bugs
- **Solution:** Used Date objects for DatePicker state management while storing dates as strings in task objects for consistency

---

## �🔗 Demo

[View the live app on Vercel](https://todo-list-eta-taupe.vercel.app/)

---

## 📂 Future Improvements

- Task editing and updating
- Advanced filtering (by category or priority)
- Animation enhancements
- TailwindCSS migration for full styling consistency

---
---

# 📝 Todo List アプリ

> **これはポートフォリオ用の作品です。** React、Next.js、モダンなフロントエンド開発手法のスキルを示すために作成しました。人生で初めて作ったアプリです。

---

## 🎯 目的

このプロジェクトは **React（Next.js）** で構築した **Todo List アプリ** で、コンポーネントベースのアーキテクチャ、状態管理、テーマ管理の実践を目的としています。

もともとは **HTML、CSS、JavaScript** で制作していましたが、学習を兼ねて **React（Next.js）** で再構築しました。

**主な学習目標：**
- 小規模プロジェクトを通じた React と Next.js の実践練習
- 状態管理、コンポーネント設計、UX を意識した開発の習得
- メンテナンス可能なフロントエンドアプリケーションの構造理解

---

## 🧩 技術スタック

- **React**
- **Next.js**
- **JavaScript (ES6+)**
- **CSS Modules**
- **TailwindCSS**（レイアウト用）
- **Node.js (v20)**
- **VS Code**

---

## 🚀 機能

- タスクの追加・削除
- 完了チェック（UIは先にチェック表示、状態変化は遅延）
- 今日のページで期限切れタスクを赤字表示
- OS設定に応じたダークモード切替
- コンポーネント単位での UI 管理
- 日付別タスクフィルター（`今日`、`今後`、`期限切れ`）
- タスク編集機能（実装予定）

---

## 🎨 UX とデザイン

- 親指で操作しやすいモバイル最適化
- ダークモードでも文字と背景のコントラストを確保
- スムーズなアニメーションと視覚的フィードバック
- チェックボックスは即時反応し、状態更新は遅延させてUX向上
- 期限切れタスクを赤字で表示し、ユーザーが一目で認識可能

---

## 💡 学習のポイント

- `useState` と `useEffect` を駆使した Todo リストの状態管理と localStorage によるデータ永続化（ゆくゆくはバックエンドを学びDB化したいです）
- **チェックUIと状態更新のタイミングを分離**（UX向上の工夫）
- **期限切れタスクを赤字表示**（ユーザーが一目で期限切れを認識可能）
- システム設定を考慮した**ダークモード切替**の実装
- メンテナンス可能で再利用可能な UI のための**コンポーネントベース構造**の習得
- 条件付きレンダリング、イベント処理、動的クラス切替の実践

---

## � 工夫したこと

**UXの改善:**
- ページ遷移ボタンを右上部に設置し、親指で押しやすい設計にした
- 完了済みのチェックを表示させてから1秒後に消えるUIにした（視覚的なフィードバックを提供）
- 期限切れタスクをTodayページ下部に赤字で表示して視覚的に優先度を高くした
- DatePicker を使用（`input type="date"` は各デバイスでの表示ずれやplaceholderが見えずUIが悪かったため）

**技術的な課題と解決:**
- Taskのdateを保存する値を文字列とオブジェクトで混合してしまいバグが起きた
- **解決方法:** DatePickerにはstate管理したDateオブジェクトを、Taskオブジェクトには文字列化した日付を保存するようにして一貫性を保った

---

## �🔗 デモ

[Vercel でライブアプリを見る](https://todo-list-eta-taupe.vercel.app/)

---

## 📂 今後の改善予定

- タスク編集・更新機能
- カテゴリ・優先度別の詳細フィルター
- アニメーション改善
- TailwindCSS 完全移行
