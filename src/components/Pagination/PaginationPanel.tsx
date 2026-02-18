import { Box, Pagination } from "@mui/material";
interface PaginationPanelProps {
    count: number,
    defaultPage: number,
    onPageChange: (newPage: number) => void,
}
const PaginationPanel = (props: PaginationPanelProps) => {


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
                page={props.defaultPage}
                variant="outlined"
                shape="rounded"
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: 'primary.contrastText',
                        borderColor: 'primary.contrastText',
                    },
                }}
            />
        </Box>);
}

export default PaginationPanel;