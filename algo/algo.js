const introToCS = {
    name: "Introduction To Computer Science",
    id: "203.1110",
    lecturer: "Shuli Vintner",
    faculty: 203,
    preRequisites: [],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "14-16"}, {"day": 3, "time": "10-12"}, {"day": 1, "time": "12-14"}],
            [{"day": 0, "time": "14-16"}, {"day": 3, "time": "10-12"}, {"day": 2, "time": "14-16"}]],
    },
    feedback: [

    ]
};

const calculus1 = {
    name: "Calculus 1",
    id: "203.1830",
    lecturer: "Ami Viselter",
    faculty: 203,
    preRequisites: [],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 0, "time": "14-16"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 2, "time": "14-16"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 3, "time": "10-12"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 3, "time": "18-20"}]],
        "B": [[{"day": 0, "time": "12-14"}, {"day": 3, "time": "12-14"}, {"day": 0, "time": "10-12"}],
            [{"day": 0, "time": "12-14"}, {"day": 3, "time": "12-14"}, {"day": 1, "time": "14-16"}]],
    },
    feedback: [

    ]
};

const calculus2 = {
    name: "Calculus 2",
    id: "203.1840",
    lecturer: "Ami Viselter",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1830",
            courseName: "Calculus 1"
        }
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 0, "time": "14-16"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 2, "time": "14-16"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 3, "time": "10-12"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "8-10"}, {"day": 3, "time": "18-20"}]],
        "B": [[{"day": 0, "time": "12-14"}, {"day": 3, "time": "12-14"}, {"day": 0, "time": "10-12"}],
            [{"day": 0, "time": "12-14"}, {"day": 3, "time": "12-14"}, {"day": 1, "time": "14-16"}]],
    },
    feedback: [

    ]
};

const algebra1 = {
    name: "Algebra 1",
    id: "203.1810",
    lecturer: "Ami Viselter",
    faculty: 203,
    preRequisites: [

    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 3, "time": "12-14"}, {"day": 4, "time": "14-16"}, {"day": 1, "time": "12-14"}],
            [{"day": 3, "time": "12-14"}, {"day": 4, "time": "14-16"}, {"day": 2, "time": "16-18"}],
            [{"day": 3, "time": "12-14"}, {"day": 4, "time": "14-16"}, {"day": 3, "time": "16-18"}],
            [{"day": 3, "time": "12-14"}, {"day": 4, "time": "14-16"}, {"day": 0, "time": "18-20"}]],
        
        "B": [[{"day": 0, "time": "16-18"}, {"day": 3, "time": "14-16"}, {"day": 1, "time": "16-18"}],
            [{"day": 0, "time": "16-18"}, {"day": 3, "time": "14-16"}, {"day": 3, "time": "16-18"}]],
    },
    feedback: [

    ]
};

const algebra2 = {
    name: "Algebra 2",
    id: "203.1820",
    lecturer: "Ami Viselter",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1810",
            courseName: "Algebra 1"
        }
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 2, "time": "16-18"}, {"day": 3, "time": "16-18"}, {"day": 1, "time": "8-10"}],
            [{"day": 2, "time": "16-18"}, {"day": 3, "time": "16-18"}, {"day": 3, "time": "12-14"}]],
        
        "B": [[{"day": 3, "time": "14-16"}, {"day": 4, "time": "16-18"}, {"day": 0, "time": "16-18"}],
            [{"day": 3, "time": "14-16"}, {"day": 4, "time": "16-18"}, {"day": 3, "time": "16-18"}],
            [{"day": 3, "time": "14-16"}, {"day": 4, "time": "16-18"}, {"day": 4, "time": "18-20"}]],
    },
    feedback: [

    ]
};

const descreetMathematics = {
    name: "Descreet Mathematics",
    id: "203.1850",
    lecturer: "Noga Ron Zevi",
    faculty: 203,
    preRequisites: [
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "16-18"}, {"day": 3, "time": "8-10"}, {"day": 0, "time": "12-14"}],
            [{"day": 0, "time": "16-18"}, {"day": 3, "time": "8-10"}, {"day": 1, "time": "16-18"}],
            [{"day": 0, "time": "16-18"}, {"day": 3, "time": "8-10"}, {"day": 3, "time": "14-16"}],
            [{"day": 0, "time": "16-18"}, {"day": 3, "time": "8-10"}, {"day": 0, "time": "18-20"}]],
        
        "B": [[{"day": 0, "time": "8-10"}, {"day": 3, "time": "8-10"}, {"day": 1, "time": "8-10"}],
            [{"day": 0, "time": "8-10"}, {"day": 3, "time": "8-10"}, {"day": 4, "time": "8-10"}],
            [{"day": 0, "time": "8-10"}, {"day": 3, "time": "8-10"}, {"day": 1, "time": "18-20"}]],
    },
    feedback: [

    ]
};

const introToHW = {
    name: "Introduction to Hardware",
    id: "203.1210",
    lecturer: "Erez Gerlitz",
    faculty: 203,
    preRequisites: [
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "14-16"}, {"day": 3, "time": "14-16"}, {"day": 1, "time": "8-10"}],
            [{"day": 0, "time": "14-16"}, {"day": 3, "time": "14-16"}, {"day": 3, "time": "16-18"}],
            [{"day": 0, "time": "14-16"}, {"day": 3, "time": "14-16"}, {"day": 4, "time": "18-20"}],
            [{"day": 0, "time": "14-16"}, {"day": 3, "time": "14-16"}, {"day": 3, "time": "10-12"}]],
    },
    feedback: [

    ]
};

const probabilisticMethods = {
    name: "Probabilistic Methods",
    id: "203.2480",
    lecturer: "Dan Rosenbaum",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1810",
            courseName: "Algebra 1"
        },
        {
            courseId: "203.1840",
            courseName: "Calculus 2"
        },
        {
            courseId: "203.2310",
            courseName: "Data Structures"
        }
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "10-12"}, {"day": 4, "time": "14-16"}, {"day": 1, "time": "12-14"}],
            [{"day": 0, "time": "10-12"}, {"day": 4, "time": "14-16"}, {"day": 2, "time": "10-12"}],
            [{"day": 0, "time": "10-12"}, {"day": 4, "time": "14-16"}, {"day": 4, "time": "16-18"}]],
    },
    feedback: [

    ]
};

const oop = {
    name: "Object Oriented Programming",
    id: "203.1120",
    lecturer: "Dan Feldman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1110",
            courseName: "Introduction To Computer Science"
        }
    ],
    points: 4,
    mandatory: true,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 2, "time": "14-17"}, {"day": 0, "time": "14-16"}],
            [{"day": 2, "time": "14-17"}, {"day": 1, "time": "12-14"}],
            [{"day": 2, "time": "14-17"}, {"day": 3, "time": "10-12"}]],
    },
    feedback: [

    ]
};

const Assembly = {
    name: "Assembly Languages",
    id: "203.1130",
    lecturer: "Dan Feldman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1110",
            courseName: "Introduction To Computer Science"
        }
    ],
    points: 3,
    mandatory: true,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 2, "time": "8-10"}, {"day": 3, "time": "12-14"}],
            [{"day": 2, "time": "8-10"}, {"day": 3, "time": "18-20"}],
            [{"day": 2, "time": "8-10"}, {"day": 4, "time": "12-14"}],
            [{"day": 2, "time": "8-10"}, {"day": 2, "time": "8-10"}]],
    },
    feedback: [

    ]
};

const dataStructures = {
    name: "Data Structures",
    id: "203.2310",
    lecturer: "Guy Avni",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1110",
            courseName: "Introduction To Computer Science"
        },
        {
            courseId: "203.1850",
            courseName: "Descreet Mathematics"
        },
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "12-14"}, {"day": 3, "time": "8-10"}, {"day": 0, "time": "16-18"}],
            [{"day": 0, "time": "12-14"}, {"day": 3, "time": "8-10"}, {"day": 1, "time": "10-12"}],
            [{"day": 0, "time": "12-14"}, {"day": 3, "time": "8-10"}, {"day": 2, "time": "18-20"}]],
        
        "B": [[{"day": 2, "time": "10-12"}, {"day": 4, "time": "14-16"}, {"day": 2, "time": "8-10"}],
            [{"day": 2, "time": "10-12"}, {"day": 4, "time": "14-16"}, {"day": 4, "time": "12-14"}]],
    },
    feedback: [

    ]
};

const os = {
    name: "Operating Systems",
    id: "203.2110",
    lecturer: "Rahel Kolodny",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2310",
            courseName: "Data Structures",
        },
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 1, "time": "16-18"}],
            [{"day": 2, "time": "8-10"}],
            [{"day": 4, "time": "18-20"}],
            [{"day": 4, "time": "8-10"}]],
    },
    feedback: [

    ]
};

const compilers = {
    name: "Compilers",
    id: "203.2130",
    lecturer: "Yosi Ben Asher",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1110",
            courseName: "Introduction To Computer Science"
        },
        {
            courseId: "203.1210",
            courseName: "Introduction to Hardware"
        },
    ],
    points: 5,
    mandatory: true,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 3, "time": "8-12"}, {"day": 0, "time": "10-12"}],
            [{"day": 2, "time": "8-12"}, {"day": 3, "time": "14-16"}],
            [{"day": 2, "time": "8-12"}, {"day": 4, "time": "16-18"}]],
    },
    feedback: [

    ]
};

const algorithms = {
    name: "Algorithms",
    id: "203.2410",
    lecturer: "Moran Feldman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2310",
            courseName: "Data Structures",
        },
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "16-18"}, {"day": 2, "time": "14-16"}, {"day": 0, "time": "12-14"}],
            [{"day": 0, "time": "16-18"}, {"day": 2, "time": "14-16"}, {"day": 1, "time": "14-16"}],
            [{"day": 0, "time": "16-18"}, {"day": 2, "time": "14-16"}, {"day": 3, "time": "8-10"}]],

        "B": [[{"day": 0, "time": "14-16"}, {"day": 4, "time": "12-14"}, {"day": 0, "time": "12-14"}],
            [{"day": 0, "time": "14-16"}, {"day": 4, "time": "12-14"}, {"day": 4, "time": "14-16"}]],
    },
    feedback: [

    ]
};

const logics = {
    name: "Intro to Logics",
    id: "203.2850",
    lecturer: "Oren Ben-Zwi",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1850",
            courseName: "Descreet Mathematics"
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 4, "time": "8-10"}, {"day": 0, "time": "8-10"}],
            [{"day": 4, "time": "8-10"}, {"day": 1, "time": "16-18"}]
            [{"day": 4, "time": "8-10"}, {"day": 3, "time": "12-14"}]],
    },
    feedback: [

    ]
};

const se = {
    name: "Software Engineering",
    id: "203.3140",
    lecturer: "Malki Grosman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2310",
            courseName: "Data Structures",
        },
        {
            courseId: "203.1120",
            courseName: "Object Oriented Programming",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 2, "time": "16-18"}, {"day": 3, "time": "18-20"}]],
        "B": [[{"day": 2, "time": "16-18"}, {"day": 2, "time": "14-16"}]]
    },
    feedback: [

    ]
};


const networking = {
    name: "Networking",
    id: "203.3210",
    lecturer: "Orr Dunkelman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 4, "time": "14-16"}, {"day": 1, "time": "14-16"}]]
    },
    feedback: [

    ]
};

const formalVerification = {
    name: "Formal Verification",
    id: "203.3223",
    lecturer: "Guy Avni",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3510",
            courseName: "Computational Models",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 0, "time": "8-12"}]]
    },
    feedback: [

    ]
};

const bigDataInCloud = {
    name: "Big Data In Cloud",
    id: "203.3284",
    lecturer: "Dan Feldman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 1, "time": "18-20"}, {"day": 3, "time": "10-12"}]]
    },
    feedback: [

    ]
};

const informationTheory = {
    name: "Information Theory",
    id: "203.3370",
    lecturer: "Noga Ron Zevi",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 1, "time": "8-11"}]]
    },
    feedback: [

    ]
};

const computationalModels = {
    name: "Computational Models",
    id: "203.3510",
    lecturer: "Ilan Newman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
    ],
    points: 5,
    mandatory: true,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "12-14"}, {"day": 4, "time": "12-14"}, {"day": 0, "time": "14-16"}],
            [{"day": 0, "time": "12-14"}, {"day": 4, "time": "12-14"}, {"day": 1, "time": "12-14"}]],

        "B": [[{"day": 2, "time": "8-12"}, {"day": 1, "time": "14-16"}],
            [{"day": 2, "time": "8-12"}, {"day": 4, "time": "18-20"}]],
    },
    feedback: [

    ]
};

const randomnessInCalculation = {
    name: "Randomness in calculation",
    id: "203.3426",
    lecturer: "Ronen Sheiltael",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 3, "time": "14-17"}]],
    },
    feedback: [

    ]
};

const cryptography = {
    name: "Cryptography",
    id: "203.3444",
    lecturer: "Orr Dunkelman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3510",
            courseName: "Computational Models",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 0, "time": "12-14"}, {"day": 4, "time": "12-14"}]],
    },
    feedback: [

    ]
};

const Computerandnetworksecurity = {
    name: "Computer and network security",
    id: "203.3448",
    lecturer: "Orr Dunkelman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2110",
            courseName: "Operating Systems",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "14-16"}, {"day": 3, "time": "12-14"}]],
    },
    feedback: [

    ]
};

const Combinatorialoptimization = {
    name: "Combinatorial optimization",
    id: "203.3452",
    lecturer: "Moran Feldman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 2, "time": "8-12"}]],
    },
    feedback: [

    ]
};

const complexity = {
    name: "Complexity",
    id: "203.3520",
    lecturer: "Ronen Sheiltael",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3510",
            courseName: "Computational Models",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 1, "time": "14-17"}]],
    },
    feedback: [

    ]
};

const ai = {
    name: "Intro to AI",
    id: "203.3610",
    lecturer: "Shay Bushinski",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3510",
            courseName: "Computational Models",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 5, "time": "10-14"}]],
    },
    feedback: [

    ]
};

const aiLab = {
    name: "AI Lab",
    id: "203.3630",
    lecturer: "Shay Bushinski",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
        {
            courseId: "203.3610",
            courseName: "Intro to AI",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 5, "time": "10-14"}]],
    },
    feedback: [

    ]
};

const naturallanguageprocessing = {
    name: "natural language processing",
    id: "203.3670",
    lecturer: "Shuli Vintner",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3770",
            courseName: "Machine Learning",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[]],
    },
    feedback: [

    ]
};

const ip = {
    name: "Image Processing",
    id: "203.3730",
    lecturer: "Hagit Hel-Or",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1810",
            courseName: "Algebra 1",
        },
        {
            courseId: "203.1820",
            courseName: "Algebra 2",
        },
        {
            courseId: "203.1850",
            courseName: "Descreet Mathematics",
        },
        {
            courseId: "203.1830",
            courseName: "Calculus 1",
        },
        {
            courseId: "203.1840",
            courseName: "Calculus 2",
        },
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 1, "time": "8-12"}, {"day": 1, "time": "14-16"}]],
    },
    feedback: [

    ]
};

const cv = {
    name: "Computer Vision",
    id: "203.3702",
    lecturer: "Simon Korman",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3730",
            courseName: "Image Processing",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 3, "time": "12-16"}]],
    },
    feedback: [

    ]
};

const computerGraphics = {
    name: "Computer Graphics",
    id: "203.3710",
    lecturer: "Roi Poranne",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3730",
            courseName: "Image Processing",
        },
        {
            courseId: "203.1810",
            courseName: "Algebra 1",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 2, "time": "8-12"}]],
    },
    feedback: [

    ]
};

const computerGraphicsLab = {
    name: "Computer Graphics Lab",
    id: "203.3704",
    lecturer: "Roi Poranne",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3710",
            courseName: "Computer Graphics",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: true,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[]],
        "B": [[]],
    },
    feedback: [

    ]
};

const Computationalstudyofhumanbehavior = {
    name: "Computational study of human behavior",
    id: "203.3734",
    lecturer: "Hagit Hel-Or",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1120",
            courseName: "Object Oriented Programming"
        },
        {
            courseId: "203.3730",
            courseName: "Image Processing"
        }
    ],
    points: 3,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 1, "time": "8-11"}]],
    },
    feedback: [

    ]
};

const privacypreservingmachinelearninglab = {
    name: "Privacy-preserving machine learning lab",
    id: "203.3762",
    lecturer: "Adi Akvia",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1120",
            courseName: "Object Oriented Programming"
        },
        {
            courseId: "203.2310",
            courseName: "Data Structures"
        }
    ],
    points: 3,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 2, "time": "12-14"}]],
    },
    feedback: [

    ]
};

const ml = {
    name: "Machine Learning",
    id: "203.3770",
    lecturer: "Dan Rosenbaum",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1810",
            courseName: "Algebra 1",
        },
        {
            courseId: "203.1820",
            courseName: "Algebra 2",
        },
        {
            courseId: "203.1840",
            courseName: "Calculus 2",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
        
    ],
    points: 4,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 0, "time": "17-20"}, {"day": 1, "time": "12-14"}]],
    },
    feedback: [

    ]
};

const rl = {
    name: "Reinforcement Learning",
    id: "203.3779",
    lecturer: "Dan Rosenbaum",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3770",
            courseName: "Machine Learning",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 1, "time": "14-17"}]],
    },
    feedback: [

    ]
};

const dl = {
    name: "Deep Learning",
    id: "203.3834",
    lecturer: "Dan Rosenbaum",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.3770",
            courseName: "Machine Learning",
        },
        {
            courseId: "203.1120",
            courseName: "Object Oriented Programming",
        },
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
    ],
    points: 4,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "9-12"}, {"day": 4, "time": "14-16"}]],
    },
    feedback: [

    ]
};

const quantumComputing = {
    name: "Quantum Computing",
    id: "203.3836",
    lecturer: "Dan Rosenbaum",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1820",
            courseName: "Algebra 2",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 0, "time": "9-12"}]],
    },
    feedback: [

    ]
};

const cloudAndBigData = {
    name: "Cloud And Big Data",
    id: "203.3840",
    lecturer: "Gil Vernik",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
    ],
    points: 2,
    mandatory: false,
    semesterA: false,
    semesterB: true,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "B": [[{"day": 1, "time": "11-13"}]],
    },
    feedback: [

    ]
};

const compression = {
    name: "Image and Sound Compression",
    id: "203.3880",
    lecturer: "Nimrod Peleg",
    faculty: 203,
    preRequisites: [
        {
            courseId: "203.1810",
            courseName: "Algebra 1",
        },
        {
            courseId: "203.1820",
            courseName: "Algebra 2",
        },
        {
            courseId: "203.1850",
            courseName: "Descreet Mathematics",
        },
        {
            courseId: "203.1830",
            courseName: "Calculus 1",
        },
        {
            courseId: "203.1840",
            courseName: "Calculus 2",
        },
    ],
    points: 3,
    mandatory: false,
    semesterA: true,
    semesterB: false,
    semesterC: false,
    grades:[
        
    ],
    lectures: {
        "A": [[{"day": 4, "time": "16-19"}]],
    },
    feedback: [

    ]
};

const allCourses = [
    introToCS,
    calculus1,
    calculus2,
    algebra1,
    algebra2,
    descreetMathematics,
    introToHW,
    probabilisticMethods,
    oop,
    Assembly,
    dataStructures,
    os,
    compilers,
    algorithms,
    logics,
    se,
    networking,
    formalVerification,
    bigDataInCloud,
    informationTheory,
    computationalModels,
    randomnessInCalculation,
    cryptography,
    Computerandnetworksecurity,
    Combinatorialoptimization,
    complexity,
    ai,
    aiLab,
    naturallanguageprocessing,
    ip,
    cv,
    computerGraphics,
    computerGraphicsLab,
    Computationalstudyofhumanbehavior,
    privacypreservingmachinelearninglab,
    ml,
    rl,
    dl,
    quantumComputing,
    cloudAndBigData,
    compression,
];

const user1 = {
    name: "Waseem Tannous",
    email: "waseemt99@gmail.com",
    password: "12345",
    id: 207866328,
    courses: [
        {
            courseId: "203.1810",
            courseName: "Algebra 1",
        },
        {
            courseId: "203.1830",
            courseName: "Calculus 1",
        },
        {
            courseId: "203.1850",
            courseName: "Descreet Mathematics",
        },
        {
            courseId: "203.1110",
            courseName: "Introduction to Computer Science",
        },
        {
            courseId: "203.1120",
            courseName: "Object Oriented Programming",
        },
        {
            courseId: "203.2410",
            courseName: "Algorithms",
        },
        {
            courseId: "203.2480",
            courseName: "Probabilistic Methods",
        },
    ],
    grades: [
    ],
    gpa: 80,
};

// returns the courses that the user can take (preRequisites and semester)
function getAvailableCourses(user, courses, semester) {

    let allCourses = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].semesterA && semester === "A") {
            allCourses.push(courses[i].id);
        }
        if (courses[i].semesterB && semester === "B") {
            allCourses.push(courses[i].id);
        }
        if (courses[i].semesterC && semester === "C") {
            allCourses.push(courses[i].id);
        }
    }

    let userCourses = [];
    for (let i = 0; i < user.courses.length; i++) {
        userCourses.push(user.courses[i].courseId);
    }

    let availableCourses = [];

    let preRequisites = {};
    for (let i = 0; i < courses.length; i++) {
        preRequisites[courses[i].id] = [];
        for (let j = 0; j < courses[i].preRequisites.length; j++) {
            preRequisites[courses[i].id].push(courses[i].preRequisites[j].courseId);
        }
    }

    for (let i = 0; i < allCourses.length; i++) {
        if(userCourses.includes(allCourses[i])) {
            continue;
        }

        let preRequisitesOfCourse = preRequisites[allCourses[i]];
        let flag = true;
        for (let j = 0; j < preRequisitesOfCourse.length; j++) {
            if(!userCourses.includes(preRequisitesOfCourse[j])) {
                flag = false;
                break;
            }
        }
        
        if(flag) {
            availableCourses.push(allCourses[i]);
        }
    }

    let retVal = [];

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        for (let j = 0; j < availableCourses.length; j++) {
            if(course.id === availableCourses[j]) {
                retVal.push(course);
            }
        }
    }

    return retVal;
}


function addLesturesToAssignment(lectures, assignment, course) {
    let newAssignment = JSON.parse(JSON.stringify(assignment));

    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        const day = lecture.day;
        const time = lecture.time;
        let start = parseInt(time.split("-")[0]);
        let end = parseInt(time.split("-")[1]);

        start = start - 8;
        end = end - 8;

        for (let j = start; j < end; j++) {
            if (newAssignment[day][j] === "") {
                newAssignment[day][j] = course;
            } else {
                return null;
            }
        }
    }

    return newAssignment;
}


function csp(courses, points, assignment, assignmentCourses, assignmentPoints, semester) {

    if (assignmentPoints === points) {
        return assignment;
    }

    for (let i = 0; i < courses.length; i++) {
        if (assignmentCourses.includes(courses[i].id)) {
            continue;
        }

        let allLecturesGroupes = courses[i].lectures[semester];

        for (let j = 0; j < allLecturesGroupes.length; j++) {
            let lecturesGroup = allLecturesGroupes[j];
            let newAssignment = addLesturesToAssignment(lecturesGroup, assignment, courses[i]);
            if (newAssignment) {
                let newAssignmentCourses = [...assignmentCourses];
                newAssignmentCourses.push(courses[i].id);
                let res = csp(courses, points, newAssignment, newAssignmentCourses, assignmentPoints + courses[i].points, semester);
                if (res) {
                    return res;
                }
            }
        }

    }

    return null;
}

// filters:
// 1. points
// 2. mandatory
// 3. semester
// 4. working hours

function fillCalendar(user, courses, minPoints, maxPoints, semester, mandatory, workingHours) {
    // get available courses and filter by semester
    let availableCourses = getAvailableCourses(user, courses, semester);

    // if (mandatory) {
    //     let mandatory = availableCourses.filter(course => course.mandatory);
    //     let notMandatory = availableCourses.filter(course => !course.mandatory);
    //     availableCourses = mandatory.concat(notMandatory);
    // }

    let assignments = [];

    for (let i = minPoints; i <= maxPoints; i++) {
        let assignment = csp(availableCourses, i, workingHours, [], 0, semester);
        if (assignment) {
            assignments.push(assignment);
        }
    }

    return assignments;
}


let workingHours = [];
for (let i = 0; i <= 5; i++) {
    let row = [];
    for (let j = 0; j < 12; j++) {
        row.push("");
    }
    workingHours.push(row);
}

let calendar = fillCalendar(user1, allCourses, 15, 20, "A", true, workingHours)
console.log(calendar);

