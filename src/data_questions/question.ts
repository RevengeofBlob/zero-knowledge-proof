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
    }
];