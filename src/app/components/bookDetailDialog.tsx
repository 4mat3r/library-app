import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from "@mui/material";
import { FallbackImage } from "./fallbackImage";

interface BookDetailsDialogProps {
    open: boolean;
    book?: IBook;
    onClose: () => void;
    fallbackImageSrc: string;
}

export default function BookDetailsDialog({
    open,
    book,
    onClose,
    fallbackImageSrc,
}: BookDetailsDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {book?.name}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={(theme) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <FallbackImage
                    src={book?.image ?? fallbackImageSrc} // Ensure a valid src
                    alt={book?.name ?? "No image available"} // Provide a fallback alt text
                    fallbackImage={fallbackImageSrc} // Fallback image source
                    className="rounded-md h-100 w-full object-contain bg-gray-200 py-4"
                    loading="lazy"
                />
                <DialogContentText
                    sx={{ marginTop: 2 }}
                    className="text-sm text-gray-700"
                >
                    <strong>Author:</strong> {book?.author}
                </DialogContentText>
                <DialogContentText
                    sx={{ marginTop: 2 }}
                    className="text-sm text-gray-700"
                >
                    <strong>Description:</strong> {book?.description}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}
