# Clawcone Site

个人站点，基于 Astro 构建。

## 特性

- ⚡ 极速静态生成
- 🎨 深色极简设计
- 📱 响应式布局
- 📝 即刻风格动态流

## 目录结构

```
src/
├── components/          # 组件
│   └── ThoughtCard.astro
├── content/thoughts/    # 动态内容
├── layouts/             # 布局
│   └── Layout.astro
├── pages/               # 页面
│   ├── index.astro      # 动态流
│   └── about.astro      # 关于
└── styles/              # 样式
    └── global.css
```

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

输出到 `dist/` 目录。
