# canvas-pages-css-inliner

In many posts in this community, I've read that users without admin attributes apply the Canvas Style Guide classes to their course page layout because it is an easy and quick way. However, these styles are no longer maintained by Instructure, as they warn on the Style Guide site. Furthermore, these styles are not supported in the mobile app, so if we make a button with them, something like: ```<a href="#" class="btn btn-success" role="button">My Button</a>```, a simple link without any style will be displayed on our mobile device screen.

Then we may want to write our styles, but without admin attributes, we cannot add stylesheets to Canvas. This forces us to write inline styles, something like: ```<a href="#"  role="button" style="border: solid 1px; border-radius: 3px; color: #000000; cursor: pointer; display: inline-block; font-size: 1rem; font-weight: normal; margin-bottom: 0; overflow: hidden; padding: 8px 14px; text-decoration: none; background-color: #00b1a1; border-color: #008579;">My Button</a>``` but this could be annoying and boring. So, in this post, I propose an easier way to work with our styles.

So, in this post, I propose an easier way to work with our styles outside of Canvas. For this project, I used Visual Studio Code and two Node packages: juice and copy-paste. Juice is a library that allows us to transform internal or external CSS into inline CSS. Something like:

### Before
#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inliner</title>

    <link href="./styles/style.css" rel="stylesheet" />
    
</head>
<body>
    
    <h1 class="text-success">Hello, World!</h1>

</body>
</html>
```
#### CSS
```css
.text-success {
    color: #008579;
}
```

### After
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inliner</title>

    
    
</head>
<body>
    
    <h1  style="color: #008579;">Hello, World!</h1>

</body>
</html>
```
Finally, copy-paste library allows us to copy the resulted  code to the clipboard to paste it into Rich Content Editor in Canvas. 
