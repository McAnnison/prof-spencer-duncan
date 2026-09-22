@import 'tailwindcss';

:root {
  color-scheme: dark;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: #020617;
  color: #f8fafc;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(124, 58, 237, 0.18), transparent 35%),
    #020617;
}

button,
[role='button'] {
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

p,
h1,
h2,
h3,
ul {
  margin-top: 0;
}
