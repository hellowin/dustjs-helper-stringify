# JSON Stringify helper for Dust.js

Give dust.js ability to pretty print JSON with space.

Turn
```json
{"any":"json","that":"hard","to":"read"}
```
into something like
```json
{
  "any": "json",
  "that": "hard",
  "to": "read"
}
```

## For Node.js
```javascript
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
require('dustjs-helper-stringify');
```

## Use in Dust template
```html
<pre>
    {@stringify value="{myDate|js|s}" space="2"/}
</pre>
```

# License
MIT license