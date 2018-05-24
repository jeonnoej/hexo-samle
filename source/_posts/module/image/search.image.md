---
title: SF.errorImage
categories:
  - module
  - image
tags:
  - PC
---

## Getting Started
### 1. Use onerror Event 
onerror 이벤트를 이용해서 처리하는 방법
#### 기본
```
<div class="wrap_thumb">
    <img src="이미지주소" data-size="100x100(이미지사이즈)" onerror="SF.errorImage(this)"> 
</div>
```

#### 인물
```
<div class="wrap_thumb">
    <img src="이미지주소" data-size="100x100(이미지사이즈)" data-dstype="profile" onerror="SF.errorImage(this)"> 
</div>
```

#### 기업정보
```
<div class="wrap_thumb">
    <img src="이미지주소" data-size="100x100(이미지사이즈)" data-dstype="company" onerror="SF.errorImage(this)"> 
</div>
```

### 2. Write HTML
마크업을 직접 추가하는 방법 
```
<div class="wrap_thumb">
    <span class="thumb_noimg"> <!-- 프로필 noimg_prof / 기업정보 noimg_com 추가 -->
        <span class="img_size_s" style="width:68px;height:68px"></span> <!-- 인라인 스타일로 width, height 추가 -->
    </span>
</div>
```


## Markup Rule
### Size 
1. width 80 이하 or height 80 이하 : 36x36(img_size_s)
2. width 100 이하 or height 100 이하 : 48x48(img_size_m)
3. width/height 모두 101 이상 : 100x72(img_size_l)

### 기본이미지 외 노출타입
1. 인물 : noimg_prof 클래스 추가
2. 기업정보 : noimg_com 클래스 추가

--- 
**참고** : [동틀](http://html.gt.dev.daum.net/search-2015/pc/Basic/g_noimg.html)
