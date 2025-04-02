"use client";
import {
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    Snackbar,
    SnackbarContent,
    TextField,
    Tooltip,
    styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

import Image from "next/image.js";
import { useRef, useState } from "react";
import { Book } from "../lib/book";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export default function FormComponent({
    onAddBook,
}: {
    onAddBook: (book: IBook) => void;
}) {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [nameError, setNameError] = useState(false);
    const imageRef = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState<IBook>(new Book());

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (nameError) {
            return;
        }

        // generate a random id for the book
        const randomId = Math.random().toString(36).substring(2, 15);
        const newBook = { ...formData, id: randomId };

        onAddBook(newBook);
        setSelectedImage(null);
        setSelectedFile(null);
        setFormData(new Book());
        setOpenSnackbar(true);
        imageRef.current!.value = "";
    };

    const validateInputs = () => {
        if (!formData.name) {
            setNameError(true);
            return false;
        }

        setNameError(false);
        return true;
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setSelectedFile(file);
                setFormData((prev) => ({
                    ...prev,
                    image: reader.result as string,
                }));
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <Container className="flex justify-center items-center bg-zinc-100 h-full">
            {/* In normal app there would be some shared bus listening and generating those snackbars */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <SnackbarContent
                    sx={{
                        backgroundColor: "green",
                        color: "white",
                    }}
                    message="Book added successfully!"
                    action={
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => {
                                setOpenSnackbar(false);
                            }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </Snackbar>
            <Paper
                elevation={3}
                className="my-2 lg:my-4"
                sx={{
                    padding: 2,
                    maxHeight: "550px",
                    maxWidth: "600px",
                    borderRadius: "20px",
                    backgroundColor: "var(--background)",
                }}
            >
                <Box
                    component="form"
                    noValidate
                    name="addBookForm"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        error={nameError}
                        helperText={nameError ? "Name is required" : ""}
                        label="Name"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={validateInputs}
                        sx={{ marginBottom: 2}}
                    />
                    <TextField
                        label="Author"
                        name="author"
                        variant="outlined"
                        fullWidth
                        value={formData.author}
                        onChange={handleInputChange}
                        sx={{ marginBottom: 2 }}
                        autoComplete="off"
                    />
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        slotProps={{
                            htmlInput: {
                                maxLength: 300,
                            },
                        }}
                        multiline
                        rows={3}
                        fullWidth
                        value={formData.description}
                        onChange={handleInputChange}
                        sx={{ marginBottom: 2 }}
                        autoComplete="off"
                    />
                    <Button
                        className="w-full"
                        component="label"
                        variant="contained"
                        tabIndex={-1}
                        color="info"
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload book cover image
                        <VisuallyHiddenInput
                            ref={imageRef}
                            type="file"
                            onChange={handleFileUpload}
                            accept="image/*"
                        />
                    </Button>

                    {!!selectedImage && (
                        <Container className="flex flex-row items-center content-center justify-center mt-4 border-solid border-2 border-gray-300 rounded-lg p-2">
                            <Image
                                src={decodeURIComponent(selectedImage)}
                                alt="Selected Image"
                                style={{
                                    height: "50px",
                                    width: "auto",
                                }}
                                width={selectedFile?.size}
                                height={selectedFile?.size}
                                className="rounded-full"
                                loading="lazy"
                            />
                            <span className="ml-2">{selectedFile?.name}</span>
                            <Tooltip title="Delete">
                                <IconButton
                                    aria-label="delete"
                                    sx={{ marginLeft: "auto" }}
                                    color="error"
                                    onClick={() => {
                                        setSelectedImage(null);
                                        setSelectedFile(null);
                                        imageRef.current!.value = "";
                                        setFormData((prev) => ({
                                            ...prev,
                                            image: undefined,
                                        }));
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Container>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 2 }}
                        fullWidth
                        onClick={validateInputs}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
