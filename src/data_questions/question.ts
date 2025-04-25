// Questions, answer, image
export interface Question {
    question: string, // Question to ask
    answer: string, // Expected answer
    image: string | null, // Image name (case sensitive in /images)
    expectedTime: number // Expected number of seconds to complete
}

// Basic questions for deliverable
export const KnowledgeQuestions: Question[] = [
    {
        question: "How many fingers do people have?",
        answer: "10",
        image: null,
        expectedTime: 5
    },
    {
        question: "How many chromosomes do normal people have?",
        answer: "46",
        image: null,
        expectedTime: 7
    },
    {
        question: "Which county is UMBC in?",
        answer: "Baltimore",
        image: null,
        expectedTime: 7
    },
    {
        question: "What time is it?",
        answer: "9:26",
        image: "clock1.png",
        expectedTime: 7
    },
    {
        question: "What time is it?",
        answer: "3:25",
        image: "clock2.png",
        expectedTime: 7
    },
    {
        question: "What time is it?",
        answer: "10:14",
        image: "clock3.png",
        expectedTime: 7
    },
    {
        question: "What time is it?",
        answer: "9:24",
        image: "clock4.png",
        expectedTime: 7
    },
    {
        question: "What time is it?",
        answer: "12:44",
        image: "clock5.png",
        expectedTime: 7
    },
    {
        question: "What time is it?",
        answer: "6:32",
        image: "clock6.png",
        expectedTime: 7
    },
    {
        question: "What is the slope of this graph?",
        answer: "2",
        image: "math1.png",
        expectedTime: 20
    }
];