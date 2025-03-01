# Ninepion4 个人网站

一个为 Ninepion4 (九分) 设计的个人网站，具有科幻美学、暗色主题和交互式元素。

## 特点

- 响应式设计，适用于所有设备
- 科幻主题的暗色界面，带有霓虹色调
- 交互式元素包括：
  - 媒体兴趣的标签切换
  - 卡片和图片的悬停效果
  - 平滑滚动导航
  - 视差背景效果
  - 故障文字动画
- 包含关于我、兴趣爱好、媒体和联系方式等部分

## 使用的技术

- HTML5
- CSS3 (使用动画和现代布局技术)
- JavaScript (原生，无框架)
- Font Awesome 图标
- Google Fonts (Orbitron、Roboto 和 Noto Sans SC)

## 设置

只需在网络浏览器中打开 `index.html` 文件即可查看网站。无需服务器或构建过程。

## 自定义

### 更改图片

要替换占位图片：
1. 将您自己的图片添加到项目中
2. 在 HTML 文件中更新图片源

### 更改颜色

可以通过编辑 `styles.css` 文件顶部的 CSS 变量轻松修改配色方案：

```css
:root {
    --primary-color: #00f0ff;
    --secondary-color: #ff00e6;
    --accent-color: #7d00ff;
    --background-color: #0a0a0a;
    --card-bg-color: rgba(20, 20, 30, 0.7);
    --text-color: #e0e0e0;
    /* ... 其他变量 ... */
}
```

## 浏览器兼容性

此网站兼容所有现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 许可

本项目仅供个人使用。 