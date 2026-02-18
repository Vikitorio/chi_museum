import { Stack } from "@mui/material";
import Post from "../../components/Post/Post";
import PaginationPanel from "../../components/Pagination/PaginationPanel";
import { useRequest } from "ahooks";
import exhibitsApi from "../../api/ExhibitsApi";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import PostSkeleton from "../../components/PostSkeleton/PostSkeleton";


interface StripeProps {
    myPosts?: boolean;
}

const StripePage = ({ myPosts }: StripeProps) => {
    const navigation = useNavigate();
    const { page } = useParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
    const { data, error, loading } = useRequest(() => !myPosts ? exhibitsApi.getExhibits(currentPage) : exhibitsApi.getMyExhibits(currentPage), {
        loadingDelay: 4000,
        refreshDeps: [currentPage]
    });


    const changePage = (page: number) => {
        setCurrentPage(page);
        navigation(`/${page}`);
    }
    console.log(data);
    return (
        <>
            <Stack spacing={3} sx={{ paddingBottom: "64px", alignItems: "center" }}>
                {loading ? (<PostSkeleton />) : (data?.data && data.data.map((post) => <Post {...post} />))}
            </Stack >
            {data && <PaginationPanel defaultPage={currentPage} count={data.lastPage} onPageChange={changePage} />}
        </>);


}

export default StripePage;