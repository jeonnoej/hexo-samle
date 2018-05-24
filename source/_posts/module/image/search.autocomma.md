---
title: autoComma
categories:
  - module
  - image
---
> 숫자입력과 관련된 input 요소에 적용해주세요.

### 이슈
[jira](http://jira.daumkakao.com/browse/SRCHCP-5158)

### 기능
- 자동으로 천단위마다 콤마를 추가
- 입력시 커서위치를 유지

### 사용법
- input type이 "tel"또는 "text"인 경우만 사용가능. (number 타입은 사용할 수 없음)

```html
<input type="tel" class="tf_num">

<script>
(function($){
    $('.tf_num').autoComma();
}(jQuery));
</script>
```
