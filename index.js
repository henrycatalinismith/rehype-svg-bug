const rehype = require("rehype")
const processor = rehype()

const html = `
<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 8 8">
      <path stroke="#fff1e8" d="M0 6V3h1l1 1v2"/>
    </svg>
  </body>
</html>
`

console.log(processor.processSync(html).toString())
