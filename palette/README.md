

ok so palette allows you to define a palette for your website.

it generates tokens, css variables.
and it allows your to define themes


Config
```scss
$palette-themes: (
    'light': (
        'bg-main': #fff, 
        'text-main': #000
    ),
    'dark': (
        'bg-main': #000, 
        'text-main': #fff
    ), 
    'colorful': (
        'bg-main': #0ff, 
        'text-main': #f00
    )
);
$palette-config: (
    'tag': 'html',
    'default': 'dark',
    'prefers-color-scheme': (
        'dark': 'dark',  
    ),
    'theme': (
        'dark': 'dark',
        'colorful': 'colorful'
    )
);
```

Tokens
```css
.bg-main { background: var(--bg-main); }
.text-main { text: var(--text-main); }
```

Html Theme Selection
```html
<html theme="dark">...</html>       <!-- Dark -->
<html theme="light">...</html>      <!-- light -->
<html theme="colorful">...</html>   <!-- Colorful -->
<html>...</html>                    <!-- default or preference -->
<html theme="unknown">...</html>    <!-- default -->
<html theme="prefers">...</html>    <!-- default or preference -->
```

Css Theme Selection
```css
:root
    --theme: light;
@media (prefers-color-scheme: dark) {
    html:not([theme]), html[theme=prefers]
        --theme: dark;
}
html[theme=dark]
    --theme: dark;
html[theme=colorful]
    --theme: colorful;
```