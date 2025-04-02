"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Card,
    CardContent,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

import noImage from "../../../public/no-image.png";
import BookDetailsDialog from "./bookDetailDialog";
import { FallbackImage } from "./fallbackImage";

export default function BookList({ books }: { books: IBook[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<IBook | undefined>(
        undefined
    );

    const filteredBooks = useMemo(() => {
        return books.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchTerm(value);
    };
    const handleBookClick = (book: IBook) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <BookDetailsDialog
                open={isModalOpen}
                book={selectedBook}
                onClose={handleCloseModal}
                fallbackImageSrc={noImage.src}
            />
            <Box className="h-full">
                <Box sx={{ padding: 2 }} className="bg-zinc-50 shadow-sm">
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            },
                        }}
                        fullWidth
                        className="bg-white rounded-md shadow-sm"
                    />
                </Box>
                <Box className="grid grid-rows-[repeat(auto-fill,_minmax(320px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] xl:grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] gap-4 p-8 overflow-y-auto items-center justify-items-center md:justify-items-start h-[calc(100%-90px)]">
                    {filteredBooks.map((book) => (
                        <Card
                            key={book.id}
                            onClick={() => handleBookClick(book)}
                            className="justify-self-center justify-content-center w-full h-full cursor-pointer"
                            sx={{
                                maxWidth: "500px",
                                maxHeight: "320px",
                                height: "320px",
                                width: "100%",
                                borderRadius: "12px",
                                padding: 1.5,
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: "200px", // Adjust height as needed
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    backgroundColor: "#f0f0f0", // Fallback background color
                                }}
                            >
                                <FallbackImage
                                    src={book.image || noImage.src} // Ensure a valid src
                                    alt={book.name || "No image available"} // Provide a fallback alt text
                                    fallbackImage={noImage.src} // Fallback image source
                                    className="rounded-md object-contain w-full h-full"
                                    loading="lazy"
                                />
                            </Box>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    component="div"
                                    variant="h5"
                                    className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl"
                                >
                                    {book.name ?? ""}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                    className="overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                    {book.description ?? ""}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </>
    );
}
