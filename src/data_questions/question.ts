// Questions, answer, image
export interface Question {
    question: string; // Question to ask
    points: number; // Points for question
    answer: string; // Expected answer
    image: string | null; // Image name (case sensitive in /images)
    expectedTime: number; // Expected number of seconds to complete
    type: string; // Multiple choice (mc) or type answer (fill)
    mc1?: string;
    mc2?: string;
    mc3?: string;
    mc4?: string;
}

// Basic questions for deliverable
export const TwentyPointQuestions: Question[] = [
    {
        question: "What is the slope of this graph?",
        answer: "2",
        image: "math1.png",
        expectedTime: 20,
        type: "fill",
        points: 20
    },
    {
        question: "What is the slope of this graph?",
        answer: "0",
        image: "math2.png",
        expectedTime: 15,
        type: "fill",
        points: 20
    },
    {
        question: "Which equation doesn't match: 2x = 7y + 3z?",
        answer: "2x + 7y = 3z", 
        image: null,
        expectedTime: 15,
        type: "mc",
        mc1: "2x - 7y - 3z = 0",
        mc2: "-3z = -2x + 7y",
        mc3: "-7y -3z = -2x",
        mc4: "2x + 7y = 3z",
        points: 20
    },
    {
        question: "What is the capital of France?",
        answer: "Paris", 
        image: null,
        expectedTime: 10,
        type: "mc",
        mc1: "Paris",
        mc2: "Madrid",
        mc3: "Warsaw",
        mc4: "Moscow",
        points: 20
    },
    {
        question: "Which of the following is a prime number?",
        answer: "11", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "4",
        mc2: "6",
        mc3: "11",
        mc4: "15",
        points: 20
    },
    {
        question: "What is the product of 8 x 7?",
        answer: "56", 
        image: null,
        expectedTime: 8,
        type: "mc",
        mc1: "49",
        mc2: "56",
        mc3: "64",
        mc4: "72",
        points: 20
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answer: "William Shakespeare", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "J.K. Rowling",
        mc2: "William Shakespeare",
        mc3: "Charles Dickens",
        mc4: "Suzanne Collins",
        points: 20
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "H2O",
        mc2: "CO2",
        mc3: "NaCl",
        mc4: "O2",
        points: 20
    },
    {
        question: "What is the main language spoken in Mexico?",
        answer: "Español", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "Español",
        mc2: "Mexican",
        mc3: "French",
        mc4: "English",
        points: 20
    },
    {
        question: "How many continents are on Earth?",
        answer: "7", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "5",
        mc2: "6",
        mc3: "7",
        mc4: "8",
        points: 20
    },
    {
        question: "What do you call a shape with five sides?",
        answer: "Pentagon", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "Triangle",
        mc2: "Square",
        mc3: "Pentagon",
        mc4: "Hexagon",
        points: 20
    },
    {
        question: "What planet is known as \"the Red Planet\"?",
        answer: "Mars", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "Mars",
        mc2: "Venus",
        mc3: "Jupiter",
        mc4: "Pluto",
        points: 20
    },
    {
        question: "Which process turns liquid water into vapor?",
        answer: "Evaporation", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "Freezing",
        mc2: "Condensation",
        mc3: "Evaporation",
        mc4: "Melting",
        points: 20
    },
    {
        question: "What is the past tense of \"run\"?",
        answer: "Ran", 
        image: null,
        expectedTime: 5,
        type: "mc",
        mc1: "Runned",
        mc2: "Ran",
        mc3: "Running",
        mc4: "Runed",
        points: 20
    },
    {
        question: "How many degrees are in a right angle?",
        answer: "90", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "45",
        mc2: "90",
        mc3: "120",
        mc4: "180",
        points: 20
    },
    {
        question: "Which Windows operating system was before Windows 10?",
        answer: "Windows 8", 
        image: null,
        expectedTime: 8,
        type: "mc",
        mc1: "Windows XP",
        mc2: "Windows 8",
        mc3: "Windows 9",
        mc4: "Windows 11",
        points: 20
    },
    {
        question: "What should you do if a stranger online asks for you address?",
        answer: "Ignore or block them", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "Give it",
        mc2: "Ignore or block them",
        mc3: "Ask for theirs first",
        mc4: "Post it in your story",
        points: 20
    },
    {
        question: "Which of these is a strong password?",
        answer: "P@ssw0rd#2025", 
        image: null,
        expectedTime: 9,
        type: "mc",
        mc1: "Password",
        mc2: "P@ssw0rd#2025",
        mc3: "supercalifragilisticexpialidocious",
        mc4: "123456789",
        points: 20
    },
    {
        question: "What is phishing?",
        answer: "Try to steal info by pretending to be someone else", 
        image: null,
        expectedTime: 10,
        type: "mc",
        mc1: "Try to steal info by pretending to be someone else",
        mc2: "An attempt to destroy someone's computer",
        mc3: "Posting memes",
        mc4: "Catfishing online as someone else",
        points: 20
    },
    {
        question: "Who is the author of the Percy Jackson series?",
        answer: "Rick Riordan", 
        image: null,
        expectedTime: 7,
        type: "mc",
        mc1: "Rick Riordan",
        mc2: "J.K. Rowling",
        mc3: "Suzanne Collins",
        mc4: "Jeff Kinney",
        points: 20
    },
    {
        question: "In The Hunger Games, who is the main character?",
        answer: "Katniss Everdeen", 
        image: null,
        expectedTime: 9,
        type: "mc",
        mc1: "Hermione Granger",
        mc2: "Bella Swan",
        mc3: "Katniss Everdeen",
        mc4: "Clarisse McClellan",
        points: 20
    },
    {
        question: "What type of animal is the Pokémon Pikachu?",
        answer: "Mouse", 
        image: null,
        expectedTime: 6,
        type: "mc",
        mc1: "Lizard",
        mc2: "Dog",
        mc3: "Dragon",
        mc4: "Mouse",
        points: 20
    },
    {
        question: "What series features the character \"Eleven\"?",
        answer: "Stranger Things", 
        image: null,
        expectedTime: 8,
        type: "mc",
        mc1: "Stranger Things",
        mc2: "The Flash",
        mc3: "Riverdale",
        mc4: "The Mandalorian",
        points: 20
    },
];
export const FivePointQuestions: Question[] = [
    {
        question: "How many fingers do people have?",
        answer: "10",
        image: null,
        expectedTime: 5,
        type: "fill",
        points: 5
    },
    {
        question: "How many chromosomes do normal people have?",
        answer: "46",
        image: null,
        expectedTime: 7,
        type: "fill",
        points: 5
    },
    {
        question: "What time is it?",
        answer: "9:26",
        image: "clock1.png",
        expectedTime: 7,
        type: "fill",
        points: 5
    },
    {
        question: "What time is it?",
        answer: "3:25",
        image: "clock2.png",
        expectedTime: 7,
        type: "fill",
        points: 5
    },
    {
        question: "What time is it?",
        answer: "10:14",
        image: "clock3.png",
        expectedTime: 7,
        type: "fill",
        points: 5
    },
    {
        question: "What time is it?",
        answer: "9:24",
        image: "clock4.png",
        expectedTime: 7,
        type: "fill",
        points: 5
    },
    {
        question: "What time is it?",
        answer: "12:44",
        image: "clock5.png",
        expectedTime: 7,
        type: "fill",
        points: 5
    },
    {
        question: "What time is it?",
        answer: "6:32",
        image: "clock6.png",
        expectedTime: 7,
        type: "fill",
        points: 5
    },
];
export const TenPointQuestions: Question[] = [
    {
        question: "What does this symbol indicate?",
        answer: "Low gas", 
        image: "carsym1.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Low gas",
        mc2: "Low fluid",
        mc3: "Low oil",
        mc4: "Low air",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "Low tire pressure", 
        image: "carsym2.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Low tire pressure",
        mc2: "Flat tire",
        mc3: "Wheel damaged",
        mc4: "Issue with your tire",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "Engine oil critical warning", 
        image: "carsym3.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Engine oil critical warning",
        mc2: "Low engine oil",
        mc3: "Engine oil warning",
        mc4: "Low coolant level",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "ABS sensor warning", 
        image: "carsym4.png",
        expectedTime: 8,
        type: "mc",
        mc1: "ABS sensor warning",
        mc2: "ABS light is on",
        mc3: "ABS sensor malfunction",
        mc4: "ABS no longer works",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "Issue with engine", 
        image: "carsym5.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Issue with oil type",
        mc2: "Issue with engine",
        mc3: "Engine overheating",
        mc4: "Issue with battery",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "Low coolant level critical", 
        image: "carsym6.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Low coolant level critical",
        mc2: "Low coolant level",
        mc3: "Engine overheating",
        mc4: "Coolant level is not stable",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "Fog lights on", 
        image: "carsym7.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Headlights out of battery",
        mc2: "Issue with headlights",
        mc3: "Full bright on",
        mc4: "Fog lights on",
        points: 10
    },
    {
        question: "What does this symbol indicate?",
        answer: "Critical issue with brakes", 
        image: "carsym8.png",
        expectedTime: 8,
        type: "mc",
        mc1: "Brake sensors are having an issue",
        mc2: "Critical issue with brakes",
        mc3: "Issue with brakes",
        mc4: "Brake sensors are in critical condition",
        points: 10
    },
];