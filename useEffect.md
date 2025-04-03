useEffect 패턴 실행 시점
useEffect(() => {...}, []) 컴포넌트가 처음 마운트될 때 한 번만 실행
useEffect(() => {...}) 렌더링될 때마다 실행 (의존성 배열 없음)
useEffect(() => {...}, [state]) 특정 state 값이 변경될 때 실행

```
'use client'
import { useEffect } from 'react';

const PageA = () => {
  useEffect(() => {
    document.body.classList.add('page-a-style');

    //Clean Up - 언마운트될때 실행 (페이지 이동시 남아있을 수 있는 page-a-stlye제거)
    return () => {
      document.body.classList.remove('page-a-style');
    };
  }, []);

  return <h1>Page A</h1>;
};

export default PageA
```

□ Clean Up 해주는 이유

클라이언트 사이드 라우팅(CSR, Client-Side Routing)을 사용합니다. 즉, 페이지 이동 시 기존 페이지가 완전히 새로고침되지 않고, 변경된 부분만 업데이트,
컴포넌트가 언마운트될 때 추가했던 클래스를 제거하여 불필요한 잔여 효과(Side Effects)를 방지
