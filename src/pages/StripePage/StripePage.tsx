import { Stack } from "@mui/material";
import Post from "../../components/Post/Post";
import PaginationPanel from "../../components/Pagination/PaginationPanel";
import { useRequest } from "ahooks";
import exhibitsApi from "../../api/ExhibitsApi";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

const StripePage = () => {
    const navigation = useNavigate();
    const { page } = useParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
    const { data, error, loading } = useRequest(() => exhibitsApi.getExibits(currentPage), {
        loadingDelay: 2000,
        refreshDeps: [currentPage]
    });


    const changePage = (page: number) => {
        setCurrentPage(page);
        navigation(`/${page}`);
    }
    return (
        <>
            <Stack spacing={3} sx={{ paddingBottom: "64px", alignItems: "center" }}>
                {data?.data && data.data.map((post) => <Post {...post} />)}
            </Stack >
            {data?.data && <PaginationPanel defaultPage={currentPage} count={data.lastPage} onPageChange={changePage} />}
        </>
    );
}

export default StripePage;