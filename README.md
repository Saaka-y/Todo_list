**英語版は下にあります / English version below**

# 📝 Todo List
シンプルなタスク管理のためのWebアプリです。これは私が初めて作ったアプリで、もともとHTML、CSS、JavaScriptで制作していましたが、学習を兼ねてReact（Next.js）で再構築しました。

🌐 デモサイト: https://todo-list-eta-taupe.vercel.app/

## 開発背景
プログラミングを学び始めてから初めて作成したアプリです。当初はHTML、CSS、vanilla JavaScriptで開発していましたが、React・Next.jsの学習を進める中で、より保守性の高いコードを書きたいと考え、コンポーネントベースで再構築しました。

この再構築の過程で、以下の学習を行いました：

- **Zustand** - グローバル状態管理ライブラリ
- **コンポーネントベース設計** - 再利用可能で保守しやすいUI構造
- **UX向上** - 視覚的フィードバックやモバイルファーストの設計

## プロジェクトの目的
このプロジェクトは **Reactとコンポーネントベース設計の基礎を学ぶこと** と **UXを意識した開発の実践** を主な目的としています。小規模なプロジェクトを通じて、状態管理、条件付きレンダリング、イベント処理など、React開発の基本的な概念を習得しました。

初めてのアプリということもあり、計画なしに機能を追加していった結果、文字列とDateオブジェクトの混在によるバグなど、多くの課題に直面しました（これを機にTypeScriptの学習用に「Hiking Log」を作成）。しかし、これらの経験が次のプロジェクトでの設計ファーストアプローチにつながりました。

## 機能
📝 タスクの追加・削除  
✅ 完了チェック（視覚的フィードバック付き）  
🔴 期限切れタスクの赤字 + メインページ表示
🔍 日付別リストUI（今日、今後、期限切れ）  
💾 ローカルストレージでのデータ永続化（将来的にはバックエンド・DB連携を予定）  
🌓 ダークモード対応  
📱 モバイルファーストUI

## 使った技術
- **Next.js** - Reactフレームワーク
- **JavaScript (ES6+)** - プログラミング言語
- **CSS Modules** - スタイリング
- **Tailwind CSS** - レイアウト
- **Zustand** - 状態管理

## セットアップ

### 前提条件
- Node.js 20以上
- npm, yarn, pnpm, bun のいずれか

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/Saaka-y/Todo_list.git

# プロジェクトディレクトリに移動
cd Todo_list

# 依存関係をインストール
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```
ブラウザで http://localhost:3000 を開いてアプリケーションを表示します。

または、デモサイト https://todo-list-eta-taupe.vercel.app/ にアクセスしてください。

### ビルド
```bash
npm run build
npm start
```

## フォルダ構成
```
Todo_list/
├── src/
│   ├── components/
│   │   ├── Header/          # ヘッダーとナビゲーション
│   │   ├── TodoForm/        # タスク作成フォーム
│   │   ├── TodoItem/        # タスクアイテムとエディター
│   │   └── TodoList/        # メインリストとヘッダー
│   ├── hooks/               # カスタムフック
│   ├── stores/              # Zustandストア
│   ├── utils/               # ユーティリティ関数
│   └── pages/               # Next.jsページ
└── public/                  # 静的アセット
```

## 工夫したこと

**UXの改善:**
- ページ遷移ボタンを右上部に設置し、親指で押しやすい設計に
- 完了済みのチェックを表示させてから1秒後に消えるUIにした（今後完了済みタスクの表示場所も追加する予定）
- 期限切れタスクをTodayページ下部に赤字で表示して視覚的に優先度を高くした
- DatePicker を使用（`input type="date"` は各デバイスでの表示ずれやplaceholderが見えずUIが悪かったため）

**技術的な課題と解決:**
- Taskのdateを保存する値を文字列とオブジェクトで混合してしまいバグが起きた
- **解決方法:** DatePickerにはstate管理したDateオブジェクトを、Taskオブジェクトには文字列化した日付を保存するようにして一貫性を保った

## トラブルシューティング

### Node.js バージョン互換性の問題

**問題・症状:**  
`npm run dev` 実行時に毎回バグ（エラー）が発生し、ローカルホストが立ち上がらない。

**原因:**  
Node.js の最新版（v22以降）は Next.js 15 との互換性に問題がある模様。

**対応:**  
最新の LTS バージョンを使用していたが、v20 にダウングレード。  
※ Homebrew 経由でインストールしていると再起動時に最新バージョンに戻ってしまうことがある。  
※ そこで一度アンインストールし、nvm 経由で公式コマンドを用いて Node.js v20 をインストールし、デフォルト設定に。

**結果:**  
以降はバグが発生していない。  
※ 完全に正解かは不明だが、現時点で安定している。

## ライセンス
MIT

## 作成者
Saaka-y

---

# 📝 Todo List (EN)
A simple web app for managing tasks. This is the first app I ever created, originally built with HTML, CSS, and JavaScript, then rebuilt with React (Next.js) for learning purposes.

🌐 Live Demo: https://todo-list-eta-taupe.vercel.app/

## Background
This is my first application since I started learning programming. Initially developed with HTML, CSS, and vanilla JavaScript, I decided to rebuild it with a component-based approach as I progressed in learning React and Next.js, aiming to write more maintainable code.

Through this rebuilding process, I learned:

- **Zustand** - Global state management library
- **Component-based design** - Reusable and maintainable UI structure
- **UX improvements** - Visual feedback and mobile-first design

## Project Goals
This project focuses on **learning React and component-based design fundamentals** and **practicing UX-focused development**. Through this small-scale project, I mastered basic React concepts including state management, conditional rendering, and event handling.

As my first app, I added features without proper planning, which led to many challenges such as bugs from mixing strings and Date objects. However, these experiences led to adopting a design-first approach in subsequent projects.

## Features
📝 Add and delete tasks  
✅ Complete tasks (with visual feedback)  
🔴 Highlight expired tasks in red  
🔍 Filter by date (today, upcoming, expired)  
💾 Local storage persistence (backend/database integration planned)  
🌓 Dark mode support  
📱 Mobile-first UI

## Tech Stack
- **Next.js** - React framework
- **JavaScript (ES6+)** - Programming language
- **CSS Modules** - Styling
- **Tailwind CSS** - Layout
- **Zustand** - State management

## Getting Started

### Requirements
- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation
```bash
# Clone
git clone https://github.com/Saaka-y/Todo_list.git

# Navigate
cd Todo_list

# Install
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

Or check out the demo at https://todo-list-eta-taupe.vercel.app/

### Build
```bash
npm run build
npm start
```

## Project Structure
```
Todo_list/
├── src/
│   ├── components/
│   │   ├── Header/          # Header & navigation
│   │   ├── TodoForm/        # Task creation form
│   │   ├── TodoItem/        # Task item & editor
│   │   └── TodoList/        # Main list & heading
│   ├── hooks/               # Custom hooks
│   ├── stores/              # Zustand stores
│   ├── utils/               # Utility functions
│   └── pages/               # Next.js pages
└── public/                  # Static assets
```

## Key Implementation Details

**UX Improvements:**
- Positioned page navigation buttons in the upper right corner for easy thumb access on mobile devices
- Implemented a 1-second delay before removing completed tasks to provide visual confirmation
- Displayed expired tasks in red at the bottom of the Today page to visually emphasize priority
- Used a custom DatePicker component instead of native `input type="date"` to avoid display inconsistencies across devices and improve placeholder visibility

**Technical Challenges:**
- Initially mixed string and Date object types for task dates, causing bugs
- **Solution:** Used Date objects for DatePicker state management while storing dates as strings in task objects for consistency

## Troubleshooting

### Node.js Version Compatibility Issue

**Problem:**  
Errors occurred every time running `npm run dev`, preventing localhost from starting.

**Cause:**  
The latest version of Node.js (v22+) appears to have compatibility issues with Next.js 15.

**Solution:**  
Downgraded from the latest LTS version to v20.  
※ When installed via Homebrew, it may revert to the latest version after restart.  
※ Therefore, uninstalled and reinstalled Node.js v20 via nvm using the official command, and set it as the default.

**Result:**  
No errors have occurred since.  
※ While not certain this is the complete solution, it has been stable so far.

## License
MIT

## Author
Saaka-y
