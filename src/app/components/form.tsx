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
    styled
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";


import Image from "next/image.js";
import { useRef, useState } from "react";
import { Book } from "../lib/book";

/* Vyvinúť webovú aplikáciu za využitia knižnice React, ktorá bude slúžiť na správu informácií o obľúbených knihách. 
Užívateľské rozhranie bude vertikálne rozdelené na dve polovice. 
V ľavej časti sa bude nachádzať formulár na zadávanie údajov o knihe, ktorý bude obsahovať nasledujúce polia: 
 - názov (povinný údaj), 
 - autor, 
 - krátky opis (maximálne 300 znakov) 
 - obrázok. 
 
Pod formulárom bude umiestnené tlačidlo na uloženie údajov. Po jeho stlačení sa informácie o knihe uložia do aplikačnej pamäte (perzistencia dát nie je potrebná).
V pravej časti rozhrania sa bude nachádzať zoznam uložených kníh. Tento zoznam bude schopný zobraziť neobmedzený počet kníh a umožniť ich filtrovanie podľa názvu.
Po kliknutí na konkrétnu knihu sa zobrazí modálne okno s podrobnosťami o vybranej knihe (tie ktoré sme uložili cez formulár).
Pokiaľ ide o dizajn, je potrebné zabezpečiť responzívne zobrazenie, vrátane podpory pre menšie obrazovky s šírkou až do 320px. 
Inak je úroveň CSS aj samotné UI na rozhodnutí autora. Flexibilne sa môže meniť aj orientácia z vertikálneho na horizontálne delenie pri určitých šírkach obrazovky.
Použitie knižníc tretích strán nie je obmedzené.
 */

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

        console.log("Form submitted:", formData);

        // generate a random id for the book
        const randomId = Math.random().toString(36).substring(2, 15);
        const newBook = { ...formData, id: randomId };
        onAddBook(newBook);

        setSelectedImage(null);
        setSelectedFile(null);
        imageRef.current!.value = "";
        setFormData(new Book());
        setOpenSnackbar(true);
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
                // You can also set the image preview here if needed
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container className="flex justify-center items-center bg-zinc-100 h-full">
            {/* After submitting form show snackBar with info for user color success */}
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
                }}
            >
                <Box
                    component="form"
                    noValidate
                    name="addBookForm"
                    onSubmit={handleSubmit}
                >
                    {/* if form was submited show error message for name if there was no name  */}
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
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Author"
                        name="author"
                        variant="outlined"
                        fullWidth
                        value={formData.author}
                        onChange={handleInputChange}
                        sx={{ marginBottom: 2 }}
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
                    />

                    {/* Upload file  */}
                    <Button
                        className="w-full"
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
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

                    {/* Show the selected image in row and remove button on right site */}
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
                                    {/* trash icon */}
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
