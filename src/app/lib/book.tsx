export class Book implements IBook {
    id: string;
    name: string;
    author: string;
    description: string;
    image: string;

    constructor(
        public _id: string = "",
        public _name: string = "",
        public _author: string = "",
        public _description: string = "",
        public _image: string = ""
    ) {
        this.id = _id;
        this.name = _name;
        this.author = _author;
        this.description = _description;
        this.image = _image;
    }
}
