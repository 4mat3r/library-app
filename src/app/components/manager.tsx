"use client";

import { Grid } from "@mui/material";

import { useState } from "react";
import BookList from "./bookList";
import FormComponent from "./form";

export default function Manager({ initialBooks }: { initialBooks: IBook[] }) {
    const [books, setBooks] = useState<IBook[]>(initialBooks);

    const handleAddBook = (book: IBook) => {
        setBooks((prev) => [book, ...prev]);
    };

    return (
        <Grid container direction={{ xs: "column", lg: "row" }}>
            <Grid size={{ xs: 12, lg: 4 }} className="lg:h-screen h-fit">
                <FormComponent onAddBook={handleAddBook} />
            </Grid>
            <Grid
                size={{ xs: 12, lg: 8 }}
                className="lg:max-h-dvh lgh-dvh flex flex-col overflow-auto"
            >
                <BookList books={books} />
            </Grid>
        </Grid>
    );
}
