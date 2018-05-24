---
title: SF.pager
tags:
  - PC
  - DEPRECATED
categories:
  - module
  - ui
---

## Getting Started

### 1.Write HTML
마크업은 **UI개발팀에서 전달받은 마크업 그대로 추가**해주시면 됩니다.  
#### navigation
아래처럼 마크업되지 않으면, 동작하지 않습니다.   
```html
<div class="paging_nav">
    <span class="num_page">
        <span class="screen_out">현재 페이지</span><em class="emph_num">1</em>&nbsp;/&nbsp;
        <span class="screen_out">총 페이지</span><span class="total_page">4</span>
    </span>
    <span class="wrap_btn">
        <a href="javascript:;" class="btn_page btn_off">
            <span class="ico_rwd ico_prev">이전</span>
        </a>
        <a href="javascript:;" class="btn_page">
            <span class="ico_rwd ico_next">다음</span>
        </a>
    </span>
</div>
```
#### list
```
<ul class="list_thumb">
    <li></li>
    <li></li>
    <li></li>
    
    <!-- 첫 페이지에 미노출할 Element에 hide 클래스 추가 -->
    <li class="hide"></li>
    <li class="hide"></li>
    <li class="hide"></li>
    <li class="hide"></li>
</ul>
```

### 2.Write Javascript
```
<script type="text/javascript">
    (function($){
        var pager = new SF.pager({
            navigation : $('네비게이션 wrapper ') // 위 마크업에서는 .paging_nav
            list : $('노출제어할 리스트'), // 위 마크업에서 .list_thumb
            viewCount : 노출갯수,
            isInfinite : 무한 페이징 여부(true/false)
        });
    }(jQuery));
</script>
```

## Options
Name | Type | Description | Default 
--- | --- | --- | ---
navigation | Element | 네비게이션 상위 wrapper (위 마크업예제에서는 .paging_nav) | none
list | Element | 노출제어할 리스트 | none
viewCount | number | 이전, 다음 버튼을 누를때마다 몇개씩 노출제어할 지 기준| 4
wideViewCount | number | body.wide 인 경우 viewCount를 대체할 값 | 0
isInfinite | boolean | 무한 페이징 여부 | false


## Example
### 기본형
##### Demo
<iframe src="/demo/pager/demo-0.html"  style='border:none; width:450px; height:340px;' ></iframe>

##### Code
```
<script type="text/javascript">
    (function($){
        var pager = new SF.pager({
            navigation : $('#testColl .coll_tit > .paging_nav'),
            list : $('#testColl .list_thumb > li'),
            viewCount : 3
        });
    }(jQuery));
</script>
```

--- 

### 무한 페이징
##### Demo
<iframe src="/demo/pager/demo-1.html"  style='border:none; width:450px; height:340px;' ></iframe>

##### Code
```
<script type="text/javascript">
    (function($){
        var pager = new SF.pager({
            navigation : $('#testColl .coll_tit > .paging_nav'),
            list : $('#testColl .list_thumb > li'),
            viewCount : 3,
            isInfinite : true
        });
    }(jQuery));
</script>
```

### 1개씩 페이징
##### Demo
<iframe src="/demo/pager/demo-2.html"  style='border:none; width:450px; height:340px;' ></iframe>

##### Code
```
<script type="text/javascript">
    (function($){
        var pager = new SF.pager({
            navigation : $('#testColl .coll_tit > .paging_nav'),
            list : $('#testColl ul.list_thumb'),
            viewCount : 1,
            isInfinite : true
        });
    }(jQuery));
</script>
```

### 760(wide) 대응, 노출개수가 달라질 경우 
##### Demo
###### basic
<iframe src="/demo/pager/demo-4.html"  style='border:none; width:480px; height:210px;' ></iframe>

###### Wide
<iframe src="/demo/pager/demo-3.html"  style='border:none; width:480px; height:210px;' ></iframe>


##### Code
```
<script type="text/javascript">
    (function($){
        var pager = new SF.pager({
            navigation : $('#testColl .coll_tit > .paging_nav'),
            list : $('#testColl .list_thumb > li'),
            viewCount : 5,
            wideViewCount : 4 
        });
    }(jQuery));
</script>
```