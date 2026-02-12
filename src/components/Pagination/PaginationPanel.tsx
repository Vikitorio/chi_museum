import { Box, Pagination } from "@mui/material";
interface PaginationPanelProps {
    count: number,
    defaultPage?: number,
    onPageChange: (newPage: number) => void,
}
const PaginationPanel = (props: PaginationPanelProps) => {

    const defaultPage = props.defaultPage ? props.defaultPage : 1;
    return (
        <Box sx={{
            height: "42px",
            width: "100%",
            position: "fixed",
            bottom: "0",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: 'primary.light',
        }}>
            <Pagination
                onChange={(_, page) => props.onPageChange(page)}
                count={props.count}
                defaultPage={defaultPage}
                variant="outlined"
                shape="rounded"
            />
        </Box>);
}

export default PaginationPanel;