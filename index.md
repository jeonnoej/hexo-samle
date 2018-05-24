# Guide Site

## Preparation
`npm install -g hexo`

## Scripts
- Start Server : `npm start`
- Build : `npm run build`
- Watch : `npm run dev`
- Create New Post : `npm run write ${Post Title}`

## Write Post
### Defualt
기본 문법은 [Markdown 문법](https://www.markdownguide.org/basic-syntax)을 사용합니다.

### iframe 삽입하기
`/demo` 폴더는 빌드 시 제너레이트 대상에서 제외되므로

iframe에 링크될 페이지는 반드시 `/demo` 폴더 아래에 위치시켜야 합니다.
```
{% iframe {path} {width} {height} %}

// example
{% iframe /demo/pager/demo-4.html 700 500 %}
```

## Deploy Process
![image](https://github.daumkakao.com/storage/user/3711/files/3964a43c-5f56-11e8-8b82-a7c1d0358adb)

## Directory
```
├── scaffolds       // Post Layout
├── source
│   ├── _posts      // Posts
│   └── demo        // Demo Pages
│       
└── themes
    └── hueman      // Theme
```

## Dependency
- Hexo
- Hueman Theme
- hexo-auto-category