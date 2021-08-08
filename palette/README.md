

ok so palette allows you to define a palette for your website.

it generates tokens, css variables.
and it allows your to define themes


Config
```scss
$palette-config: (
    'palettes': (
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
    ),
    'tokens': (
        'background': ('bg-main': 'bg-main'),
        'color': ('text-main': 'text-main'),
    ),
    'default-palette': 'light',
    'prefers-color-scheme': (
        'dark': 'dark',  
    ),
    'theme-tag': 'html',
    'toggle-themes': (
        'default': 'light',
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

Minor issue with theme toggle

currently 
when the user prefers a dark theme
and the default then is a light theme 
when they hit the toggle button it initially sets the theme to dark

It should get the prefers theme and set it to something thats not that.