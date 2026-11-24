# 🎨 CSS Grid & Media Queries

<p align="center">
  <b>Mastering Modern CSS Layouts & Responsive Web Design</b>
  <br>
  Learn how to build structured layouts using CSS Grid and make webpages responsive using Media Queries.
</p>

---

## 📌 1. CSS Grid

**CSS Grid** is a powerful two-dimensional layout system that allows us to arrange webpage elements into rows and columns.

It makes creating structured, flexible, and responsive layouts much easier.

### ⚡ Getting Started

To initialize a CSS Grid container, use:

```css
.container {
    display: grid;
}
```

Once `display: grid` is applied:
- All direct children automatically become **Grid Items**.
- Elements can be arranged into rows and columns.
- Spacing between rows and columns can be controlled easily.

### 🔹 Grid Gap Properties

| Property | Description |
|---|---|
| `grid-column-gap` | Controls spacing between columns. |
| `grid-row-gap` | Controls spacing between rows. |
| `grid-gap` | Shorthand for row and column gaps. |

**Note:** If a single value is provided in `grid-gap`, the same spacing is applied to both rows and columns.

---

## 📦 2. Properties of Grid Container

Grid container properties control the overall structure and alignment of the grid.

| Property | Description |
|---|---|
| `grid-template-columns` | Defines the number and width of columns. |
| `grid-template-rows` | Defines the number and height of rows. |
| `justify-content` | Aligns the entire grid horizontally. |
| `align-content` | Aligns the entire grid vertically. |

---

## 🧩 3. Properties of Grid Items

Grid item properties control how individual elements occupy space within the grid.

| Property | Description |
|---|---|
| `grid-column` | Defines the column position and span of an item. |
| `grid-row` | Defines the row position and span of an item. |

### 💡 Example: Spanning Multiple Columns

```css
.item {
    grid-column: 1 / span 3;
}
```

**Explanation:** The item starts at column line 1 and stretches across 3 columns.

---

## 📱 4. CSS Media Queries

**Media Queries** allow us to apply different CSS styles depending on specific conditions, such as screen width.

They are an essential part of **Responsive Web Design**, helping websites adapt to desktops, tablets, and mobile devices.

### 🎯 Why Use Media Queries?

- 📱 Make websites mobile-friendly.
- 💻 Adjust layouts for different screen sizes.
- 🎨 Change styles based on screen dimensions.
- 📐 Control grid columns and element positioning.
- ✨ Improve the overall user experience.

---

## ⚙️ 5. Media Query Syntax

The `@media` rule is used to define media queries.

```css
@media only screen and (max-width: 600px) {
    /* CSS styles for smaller screens */
}
```

### 🔍 Important Terms

| Keyword / Property | Description |
|---|---|
| `@media` | Defines a media query. |
| `only screen` | Targets screen devices. |
| `max-width` | Applies styles when the viewport width is at or below the specified value. |
| `min-width` | Applies styles when the viewport width is at or above the specified value. |

**Remember:** CSS rules inside a media query are applied only when the specified condition is satisfied.

---

## 📊 6. Responsive Design Implementation

In this practical, CSS Grid and Media Queries are combined to create a responsive webpage.

The layout changes dynamically according to the screen size.

### 🖥️ Large Screens

<badge color="success">Desktop View</badge>

- Grid layout displays **3 columns**.
- Responsive section background becomes **Green**.

### 💻 Medium Screens

<badge color="danger">Tablet View</badge>

- Grid layout changes to **2 columns**.
- Responsive section background becomes **Red**.
- Applies to screen widths between **601px and 900px**.

### 📱 Small Screens

<badge color="warning">Mobile View</badge>

- Grid layout changes to **1 column**.
- Header and navigation become vertically arranged.
- Responsive section background becomes **Yellow**.
- Applies to screen widths up to **600px**.

---

## 🗂️ 7. Source Code

Explore the complete practical implementation in the following files:

| File | Description |
|---|---|
| 📄 [index.html](https://github.com/vinayakmishra4/Learning-CSS/blob/main/Gridbox/index.html) | HTML structure of the webpage. |
| 🎨 [style.css](https://github.com/vinayakmishra4/Learning-CSS/blob/main/Gridbox/style.css) | CSS Grid styling and Media Queries. |

---

## 🚀 8. Key Takeaways

After completing this practical, we understand:

- ✅ How to initialize a CSS Grid container.
- ✅ How to define rows and columns.
- ✅ How to control spacing using Grid Gap properties.
- ✅ How to position and span Grid Items.
- ✅ How to write CSS Media Queries.
- ✅ How to create responsive layouts for different screen sizes.

---

## 🎓 9. Conclusion

CSS Grid and Media Queries are two essential tools in modern web development.

- **CSS Grid** helps create structured and flexible layouts.
- **Media Queries** make websites responsive to different screen sizes.

Combining both allows us to build **modern, flexible, and mobile-friendly websites**.

---

<p align="center">
  <b>✨ Keep Learning • Keep Building • Keep Growing ✨</b>
  <br>
  <i>Part of my CSS Learning Journey 🚀</i>
</p>