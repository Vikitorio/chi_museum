import { Stack } from "@mui/material";
import Post from "../../components/Post/Post";
import PaginationPanel from "../../components/Pagination/PaginationPanel";
import { useRequest } from "ahooks";
import exhibitsApi from "../../api/ExhibitsApi";
import { useNavigate, useParams } from "react-router";
import { useCallback, useState } from "react";
import PostSkeleton from "../../components/PostSkeleton/PostSkeleton";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux-store/store";


interface StripeProps {
    myPosts?: boolean;
}

const StripePage = ({ myPosts }: StripeProps) => {
    const userId = useSelector((state: RootState) => state.authorization.userId);
    const navigation = useNavigate();
    const { page } = useParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
    const { data, loading, refresh } = useRequest(() => !myPosts ? exhibitsApi.getExhibits(currentPage) : exhibitsApi.getMyExhibits(currentPage), {
        loadingDelay: 4000,
        refreshDeps: [currentPage]
    });


    const changePage = (page: number) => {
        setCurrentPage(page);
        navigation(`/${page}`);
    }

    const handlePostDeleted = useCallback(() => {
        refresh();
    }, [refresh]);
    return (
        <>
            <Stack spacing={3} sx={{ paddingBottom: "64px", alignItems: "center" }}>
                {loading ? (<PostSkeleton />) :
                    (data?.data && data.data.map((post) => {
                        console.log(post.user.id, userId, post.user.id === userId);
                        return (<Post key={post.id} myId={userId} onDeleted={handlePostDeleted} {...post} />);
                    }
                    ))}
            </Stack >
            {data && <PaginationPanel defaultPage={currentPage} count={data.lastPage} onPageChange={changePage} />}
        </>);


}

export default StripePage;