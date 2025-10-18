"use client";

type Props = {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
};

export function LoadMoreBar({ hasMore, loading, onLoadMore }: Props) {
  return (
    <div className="flex justify-center">
      <button
        className="btn btn-outline"
        onClick={onLoadMore}
        disabled={!hasMore || loading}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner" />
            불러오는 중…
          </>
        ) : hasMore ? (
          "더 불러오기"
        ) : (
          "더 이상 없음"
        )}
      </button>
    </div>
  );
}
