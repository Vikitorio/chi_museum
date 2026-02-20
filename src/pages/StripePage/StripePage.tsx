import { Stack } from "@mui/material";
import Post from "../../components/Post/Post";
import PaginationPanel from "../../components/Pagination/PaginationPanel";
import { useRequest } from "ahooks";
import exhibitsApi from "../../api/ExhibitsApi";
import { useNavigate, useParams } from "react-router";
import { useCallback, useContext, useEffect, useState } from "react";
import PostSkeleton from "../../components/PostSkeleton/PostSkeleton";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux-store/store";
import { NotificationContext } from "../../providers/NotificationProvider/NotificationProvider";
import type NotificationMessage from "../../types/NotificationMessage";

interface StripeProps {
  myPosts?: boolean;
}

const StripePage = ({ myPosts }: StripeProps) => {
  const userId = useSelector((state: RootState) => state.authorization.userId);
  const navigation = useNavigate();
  const { addListener } = useContext(NotificationContext)!;
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
  const { data, loading, refresh, refreshAsync } = useRequest(
    () =>
      !myPosts
        ? exhibitsApi.getExhibits(currentPage)
        : exhibitsApi.getMyExhibits(currentPage),
    {
      loadingDelay: 4000,
      refreshDeps: [currentPage],
    },
  );

  const changePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      navigation(`/${page}`);
    },
    [page],
  );

  useEffect(() => {
    const unsubscribe = addListener((data: NotificationMessage) =>
      refreshAsync(),
    );
    return () => {
      unsubscribe();
    };
  }, []);
  const handlePostDeleted = useCallback(() => {
    refresh();
  }, [refresh]);
  return (
    <>
      <Stack spacing={3} sx={{ paddingBottom: "64px", alignItems: "center" }}>
        {loading ? (
          <PostSkeleton />
        ) : (
          data?.data &&
          data.data.map((post) => {
            return (
              <Post
                key={post.id}
                myId={userId}
                onDeleted={handlePostDeleted}
                {...post}
              />
            );
          })
        )}
      </Stack>
      {data && (
        <PaginationPanel
          defaultPage={currentPage}
          count={data.lastPage}
          onPageChange={changePage}
        />
      )}
    </>
  );
};

export default StripePage;
