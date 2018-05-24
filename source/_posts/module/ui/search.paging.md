---
title: Paging Module (a.k.a 펼쳐보기)
status: deprecated
tags:
  - PC
categories:
  - module
  - ui
---


### _jsCollPaging_v1
컬렉션에서 qsearch(ajax) 호출시 사용


#### 사용방법 
```javascript
(function(){

    // ajax callback 생성
    // 컬렉션별로 callback이 미리 지정되어 있음.
    // 컬렉션타입으로 callback을 지정함
     _jsCollPaging_v1.prototype.boardCreate = function(req) { 
        // 코드작성
     }
    
    
    C.boardCollList = {}; 
    C.boardCollList = new _jsCollPaging_v1( 컬렉션타입, 컬렉션ID , { code: 클릭로그 a필드 값, expCode: 노출코드, viewCnt: view count, maxViewCnt:total count, target:새창사용여부(새창 사용할 경우 "_blank"), params:qsearch호출할때 추가할 params});

}());
```


#### 예제코드 
아래 코드를  그대로 복사해서 쓰시면 안되고, 담당 컬렉션에 알맞게 적용하셔야 합니다.
```javascript
try{
    C.boardCollList = new _jsCollPaging_v1("board", "boardColl", {code:"${BOARD_LOG_CODE}", expCode:"${DISPLAYLOG}", viewCnt:4, maxViewCnt:${ajaxTotalCount}, target:"_blank", params:"qsearch_ver=v2&viewtype=json"});
} catch(e) {
    SF.M.jsErrorLog({device : "pc", func : "_jsCollPaging_v1_board", error : e.message });
};
```


---
[참고](http://wiki.daumkakao.com/pages/viewpage.action?pageId=166282656)
