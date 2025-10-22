// src/app/admin/bots/list/page.tsx
"use client";

// 페이지 컴포넌트 (연산 훅 + 렌더링 분리)

import { useBotsList } from "./hooks/useBotsList";
import ListView from "./view/ListView";

export default function Page() {
  const data = useBotsList();
  return <ListView {...data} />;
}
