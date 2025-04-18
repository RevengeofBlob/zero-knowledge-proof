// Questions, answer, image
export interface Question {
    question: string,
    answer: string,
    image: string | null,
}

// Basic questions for deliverable
export const KnowledgeQuestions: Question[] = [
    {
        question: "How many fingers do people have?",
        answer: "10",
        image: null
    },
    {
        question: "How many chromosomes do normal people have?",
        answer: "46",
        image: null
    },
    {
        question: "Which county is UMBC in?",
        answer: "Baltimore",
        image: null
    },
    {
        question: "What time is it?",
        answer: "9:26",
        image: "clock1.png"
    },
    {
        question: "What time is it?",
        answer: "3:25",
        image: "clock2.png"
    },
    {
        question: "What time is it?",
        answer: "10:14",
        image: "clock3.png"
    },
    {
        question: "What time is it?",
        answer: "9:24",
        image: "clock4.png"
    },
    {
        question: "What time is it?",
        answer: "12:44",
        image: "clock5.png"
    },
    {
        question: "What time is it?",
        answer: "6:32",
        image: "clock6.png"
    },
];