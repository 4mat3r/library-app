import { randomUUID } from 'crypto'

const bookList: Array<IBook> = [
    {
        id: randomUUID(),
        name: "The Pragmatic Programmer",
        author: "Andrew Hunt, David Thomas",
        description:
            "The Pragmatic Programmer is a book about software engineering and programming. It covers a wide range of topics, including design principles, debugging techniques, and best practices for writing maintainable code.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51v5ZpF3xPL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Clean Code",
        author: "Robert C. Martin",
        description:
            "Clean Code is a handbook of agile software craftsmanship. It provides practical advice on how to write clean, maintainable, and efficient code.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX374_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "You Don't Know JS: Scope & Closures",
        author: "Kyle Simpson",
        description:
            "This book dives deep into the inner workings of JavaScript, focusing on scope and closures to help developers better understand the language.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    },
    {
        id: randomUUID(),
        name: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        description:
            "This book introduces the concept of design patterns and provides 23 classic solutions to common software design problems.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg",
    },
    {
        id: randomUUID(),
        name: "Refactoring: Improving the Design of Existing Code",
        author: "Martin Fowler",
        description:
            "Refactoring is a guide to improving the design of existing code, making it easier to understand and maintain.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51kLz6MlwKL._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        description:
            "This book focuses on the best features of JavaScript, helping developers write better and more efficient code.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    },
    {
        id: randomUUID(),
        name: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        description:
            "Eloquent JavaScript is a modern introduction to programming, focusing on JavaScript and its ecosystem.",
        image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg",
    },
    {
        id: randomUUID(),
        name: "The Mythical Man-Month",
        author: "Frederick P. Brooks Jr.",
        description:
            "This book discusses the challenges of software project management and provides timeless insights into the software development process.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41Cr4eG72yL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Code Complete",
        author: "Steve McConnell",
        description:
            "A comprehensive guide to software construction, offering practical techniques and best practices for building high-quality software.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Fv5ZQ3AQL._SX379_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Introduction to the Theory of Computation",
        author: "Michael Sipser",
        description:
            "A textbook that provides a clear and concise introduction to the theory of computation, including automata, computability, and complexity.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41J2u5jzY-L._SX379_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        description:
            "A classic series of books covering many aspects of programming and algorithms, written by one of the pioneers of computer science.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41yG1m1j9LL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Patterns of Enterprise Application Architecture",
        author: "Martin Fowler",
        description:
            "This book provides a catalog of patterns for designing enterprise software applications, with practical examples and explanations.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51kLz6MlwKL._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        author: "Eric Evans",
        description:
            "A guide to domain-driven design, offering strategies for managing complexity in software development by focusing on the core domain.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Working Effectively with Legacy Code",
        author: "Michael Feathers",
        description:
            "A practical guide to working with and improving legacy codebases, with techniques for refactoring and testing.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51yNw5m5X-L._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "The Clean Coder",
        author: "Robert C. Martin",
        description:
            "A code of conduct for professional programmers, offering advice on how to approach software development with discipline and integrity.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Programming Pearls",
        author: "Jon Bentley",
        description:
            "A collection of programming problems and solutions, focusing on algorithm design, performance optimization, and problem-solving techniques.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Structure and Interpretation of Computer Programs",
        author: "Harold Abelson, Gerald Jay Sussman",
        description:
            "A foundational textbook on computer science, focusing on programming principles and techniques using Scheme.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51kLz6MlwKL._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell, Peter Norvig",
        description:
            "A comprehensive introduction to artificial intelligence, covering theory, algorithms, and applications.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41Cr4eG72yL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Computer Networking: A Top-Down Approach",
        author: "James F. Kurose, Keith W. Ross",
        description:
            "A textbook on computer networking, focusing on the application layer and working down to the physical layer.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41J2u5jzY-L._SX379_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Introduction to Algorithms",
        author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        description:
            "A widely used textbook on algorithms, covering a broad range of topics with detailed explanations and pseudocode.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41yG1m1j9LL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "The Phoenix Project",
        author: "Gene Kim, Kevin Behr, George Spafford",
        description:
            "A novel about IT, DevOps, and helping your business win, offering insights into modern software development practices.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Fv5ZQ3AQL._SX379_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Continuous Delivery",
        author: "Jez Humble, David Farley",
        description:
            "A guide to building, testing, and deploying software in a fast and reliable manner using continuous delivery practices.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "The DevOps Handbook",
        author: "Gene Kim, Patrick Debois, John Willis, Jez Humble",
        description:
            "A guide to implementing DevOps practices to improve collaboration, deployment speed, and software quality.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51yNw5m5X-L._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Soft Skills: The Software Developer's Life Manual",
        author: "John Sonmez",
        description:
            "A guide to improving the non-technical skills of software developers, including productivity, career development, and personal growth.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Don't Make Me Think",
        author: "Steve Krug",
        description:
            "A guide to web usability, offering practical advice on how to design user-friendly websites and applications.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "The Design of Everyday Things",
        author: "Don Norman",
        description:
            "A book about design principles, focusing on creating intuitive and user-friendly products and interfaces.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51kLz6MlwKL._SX396_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Lean Software Development",
        author: "Mary Poppendieck, Tom Poppendieck",
        description:
            "A guide to applying lean principles to software development, focusing on efficiency and eliminating waste.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41Cr4eG72yL._SX331_BO1,204,203,200_.jpg",
    },
    {
        id: randomUUID(),
        name: "Test-Driven Development: By Example",
        author: "Kent Beck",
        description:
            "A practical guide to test-driven development, with examples and techniques for writing better tests and code.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41J2u5jzY-L._SX379_BO1,204,203,200_.jpg",
    }
]

export default bookList;