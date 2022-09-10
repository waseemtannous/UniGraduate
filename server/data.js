function createTeachers(){
    const guyAvni = {
        name: "Guy Avni",
        email: "gavni@cs.haifa.ac.il",
        id: 1,
        room: 409,
        phone: "04-8240526",
        specialties: [
            "Formal methods",
            "game theory"
        ],
        courses: [
            {
                courseId: "203.2310",
                courseName: "Data Structures"
            },
            {
                courseId: "203.3223",
                courseName: "Formal Verification"
            },
        ]
    };

    const ritaOsedtsi = {
        name: "Rita Osedtsi",
        email: "rita@cs.haifa.ac.il",
        id: 2,
        room: 410,
        phone: "04-8288444",
        specialties: [
            "Computer Vision",
            "Machine Learning"
        ],
        courses: []
    };

    const yosiBenAsher = {
        name: "Yosi Ben Asher",
        email: "yosi@cs.haifa.ac.il",
        id: 3,
        room: 513,
        phone: "04-8240338",
        specialties: [
            "Parallel calculation",
            "Operating Systems",
            "Compilers"
        ],
        courses: [
            {
                courseId: "203.2130",
                courseName: "Compilers"
            },
        ]
    };

    const orrDunkelman = {
        name: "Orr Dunkelman",
        email: "orrd@cs.haifa.ac.il",
        id: 4,
        room: 408,
        phone: "04-8288447",
        specialties: [
            "Cryptography and Cryptanalysis",
            "Computer security"
        ],
        courses: [
            {
                courseId: "203.3210",
                courseName: "Networking"
            },
            {
                courseId: "203.3444",
                courseName: "Cryptography"
            },
            {
                courseId: "203.3448",
                courseName: "Computer and network security"
            },
        ]
    };

    const hagitHelOr = {
        name: "Hagit Hel-Or",
        email: "hagit@cs.haifa.ac.il",
        id: 5,
        room: 415,
        phone: "04-8249731",
        specialties: [
            "Computer Vision"
        ],
        courses: [
            {
                courseId: "203.3730",
                courseName: "Image Processing"
            },
            {
                courseId: "203.3734",
                courseName: "Computational study of human behavior"
            },
        ]
    };

    const orenWeiman = {
        name: "Oren Weiman",
        email: "oren@cs.haifa.ac.il",
        id: 6,
        room: 412,
        phone: "04-8240165",
        specialties: [
            "Algorithms",
            "Data Structures"
        ],
        courses: [

        ]
    };

    const shulyVintner = {
        name: "Shuly Vintner",
        email: "shuly@cs.haifa.ac.il",
        id: 7,
        room: 403,
        phone: "04-8288180",
        specialties: [
            "Computational linguistics"
        ],
        courses: [
            {
                courseId: "203.1110",
                courseName: "Introduction To Computer Science"
            },
            {
                courseId: "203.3670",
                courseName: "natural language processing"
            },
        ]
    };

    const alekVinshtein = {
        name: "Alek Vinshtein",
        email: "alek@cs.haifa.ac.il",
        id: 8,
        room: 511,
        phone: "04-8249727",
        specialties: [
            "Algorithms",
            "Complexity"
        ],
        courses: [

        ]
    };

    const landauMenahemGad = {
        name: "Landau Menahem Gad",
        email: "landau@cs.haifa.ac.il",
        id: 9,
        room: 512,
        phone: "04-8240103",
        specialties: [
            "Algorithms",
            "Computational Biology"
        ],
        courses: [

        ]
    };

    const orMeir = {
        name: "Or Meir",
        email: "ormeir@cs.haifa.ac.il",
        id: 10,
        room: 412,
        phone: "04-8280785",
        specialties: [
            "Theory of computer science",
            "Computational complexity"
        ],
        courses: [

        ]
    };

    const ilanNewman = {
        name: "Ilan Newman",
        email: "ilan@cs.haifa.ac.il",
        id: 11,
        room: 515,
        phone: "04-8249729",
        specialties: [
            "Algorithms",
            "Complexity"
        ],
        courses: [
            {
                courseId: "203.3510",
                courseName: "Computational Models"
            }
        ]
    };

    const adiAkvia = {
        name: "Adi Akvia",
        email: "akavia@cs.haifa.ac.il",
        id: 12,
        room: 505,
        phone: "04-6647921",
        specialties: [
            "Data Security",
            "Cryptography",
            "Safe calculation",
            "Big Data algorithms"
        ],
        courses: [
            {
                courseId: "203.3762",
                courseName: "Privacy preserving machine learning lab"
            }
        ]
    };

    const roiPoranne = {
        name: "Roi Poranne",
        email: "roiporanne@cs.haifa.ac.il",
        id: 13,
        room: 510,
        phone: "",
        specialties: [
            "Geometric processing",
            "Calculus production"
        ],
        courses: [
            {
                courseId: "203.3710",
                courseName: "Computer Graphics"
            },
            {
                courseId: "203.3704",
                courseName: "Computer Graphics lab"
            }
        ]
    };

    const danFeldman = {
        name: "Dan Feldman",
        email: "dannyf.post@gmail.com",
        id: 14,
        room: 413,
        phone: "04-8280786",
        specialties: [
            "Robotics and Big Data"
        ],
        courses: [
            {
                courseId: "203.1120",
                courseName: "Object Oriented Programming"
            },
            {
                courseId: "203.1130",
                courseName: "Assembly Languages"
            },
            {
                courseId: "203.3284",
                courseName: "Big Data In Cloud"
            },
        ]
    };

    const moranFeldman = {
        name: "Moran Feldman",
        email: "moranfe@cs.haifa.ac.il",
        id: 15,
        room: 516,
        phone: "04-8249728",
        specialties: [
            "Algorithms",
            "Algorithmic Game Theory"
        ],
        courses: [
            {
                courseId: "203.2410",
                courseName: "Algorithms"
            },
            {
                courseId: "203.3452",
                courseName: "Combinatorial optimization"
            },
        ]
    };

    const rahelKolodny = {
        name: "Rahel Kolodny",
        email: "trachel@cs.haifa.ac.il",
        id: 16,
        room: 416,
        phone: "04-8240158",
        specialties: [
            "Computational Biology"
        ],
        courses: [
            {
                courseId: "203.2110",
                courseName: "Operating Systems"
            },
        ]
    };

    const simonKorman = {
        name: "Simon Korman",
        email: "simon.korman@gmail.com",
        id: 17,
        room: 411,
        phone: "04-8249708",
        specialties: [
            "Computer Vision"
        ],
        courses: [
            {
                courseId: "203.3702",
                courseName: "Computer Vision"
            },
        ]
    };


    const danielKeren = {
        name: "Daniel Keren",
        email: "dkeren@cs.haifa.ac.il",
        id: 18,
        room: 411,
        phone: "04-8249730",
        specialties: [
            "Probabilistic pattern recognition",
            "Monitoring in distributed and dynamic systems"
        ],
        courses: [
        ]
    };


    const yuriRabinovich = {
        name: "Yuri Rabinovich",
        email: "yuri@cs.haifa.ac.il",
        id: 19,
        room: 514,
        phone: "04-8249902",
        specialties: [
            "Algorithms",
            "Discrete Mathematics",
            "Complexity of calculations"
        ],
        courses: [
        ]
    };


    const danRozenbaum = {
        name: "Dan Rosenbaum",
        email: "danro@cs.haifa.ac.il",
        id: 20,
        room: 612,
        phone: "04-8249513",
        specialties: [
            "Machine Learning",
            "Computer Vision"
        ],
        courses: [
            {
                courseId: "203.2480",
                courseName: "Probabilistic Methods"
            },
            {
                courseId: "203.3770",
                courseName: "Machine Learning"
            },
            {
                courseId: "203.3779",
                courseName: "Reinforcement Learning"
            },
            {
                courseId: "203.3834",
                courseName: "Deep Learning"
            },
            {
                courseId: "203.3836",
                courseName: "Quantum Computing"
            },
        ]
    };

    const nogaRonZevi = {
        name: "Noga Ron Zevi",
        email: "noga@cs.haifa.ac.il",
        id: 21,
        room: 412,
        phone: "",
        specialties: [
            "Algorithms",
            "Computational complexity",
            "Encryption theory"
        ],
        courses: [
            {
                courseId: "203.1850",
                courseName: "Descreet Mathematics"
            },
            {
                courseId: "203.3370",
                courseName: "Information Theory"
            },
        ]
    };

    const ronenSheiltael = {
        name: "Ronen Sheiltael",
        email: "ronen@cs.haifa.ac.il",
        id: 22,
        room: 414,
        phone: "04-8249952",
        specialties: [
            "Theory of computer science",
            "The complexity of the study of randomness as a resource in calculation"
        ],
        courses: [
            {
                courseId: "203.3426",
                courseName: "Randomness in calculation"
            },
            {
                courseId: "203.3520",
                courseName: "Complexity"
            },
        ]
    };

    const shayBushinski = {
        name: "Shay Bushinski",
        email: "shay@cs.haifa.ac.il",
        id: 23,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.3610",
                courseName: "Intro to AI"
            },
            {
                courseId: "203.3630",
                courseName: "AI Lab"
            },
        ]
    };

    const ariBenEphraim = {
        name: "Ari Ben Ephraim",
        email: "ari.benephraim@gmail.com",
        id: 24,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const erezGerlitz = {
        name: "Erez Gerlitz",
        email: "egerlitz@bezeqint.net",
        id: 25,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.1210",
                courseName: "Introduction to Hardware"
            },
        ]
    };

    const nimrodPeleg = {
        name: "Nimrod Peleg",
        email: "nimrodp@technion.ac.il",
        id: 26,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.3880",
                courseName: "Image and Sound Compression"
            },
        ]
    };

    const orenBenZwi = {
        name: "Oren Ben Zwi",
        email: "oren.benzwi@gmail.com",
        id: 27,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.2850",
                courseName: "Intro to Logics"
            },
        ]
    };

    const amiViselter = {
        name: "Ami Viselter",
        email: "aviselter@univ.haifa.ac.il",
        id: 28,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.1830",
                courseName: "Calculus 1"
            },
            {
                courseId: "203.1840",
                courseName: "Calculus 2"
            },
            {
                courseId: "203.1810",
                courseName: "Algebra 1"
            },
            {
                courseId: "203.1820",
                courseName: "Algebra 2"
            },
        ]
    };

    const gilVernik = {
        name: "Gil Vernik",
        email: "gvernik@gmail.com",
        id: 29,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.3840",
                courseName: "Cloud And Big Data"
            },
        ]
    };

    const malkiGrosman = {
        name: "Malki Grosman",
        email: "malkigr@gmail.com",
        id: 30,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
            {
                courseId: "203.3140",
                courseName: "Software Engineering"
            },
        ]
    };

    const eranLambooij = {
        name: "Eran Lambooij",
        email: "eranlambooij@gmail.com",
        id: 31,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const ibrahimJubran= {
        name: "Ibrahim Jubran",
        email: "ibrahim.jub@gmail.com",
        id: 32,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const yaelZepkowitz= {
        name: "Yael Zepkowitz",
        email: "yzepkowit@univ.haifa.ac.il",
        id: 33,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const eliasJadon= {
        name: "Elias Jadon",
        email: "elias.jadon1@gmail.com",
        id: 34,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const loayMualem= {
        name: "Loay Mualem",
        email: "mualem.loay.1995@gmail.com",
        id: 35,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const arielAmsalem= {
        name: "Ariel Amsalem",
        email: "rel011235@gmail.com",
        id: 36,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const islamAkaria= {
        name: "Islam Akaria",
        email: "islam.akaria@gmail.com",
        id: 37,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    const yonatanGoldhirch= {
        name: "Yonatan Goldhirch",
        email: "ygold@google.com",
        id: 38,
        room: 0,
        phone: "",
        specialties: [],
        courses: [
        ]
    };

    // add all objects above to array
    const allLecturers = [
        guyAvni,
        ritaOsedtsi,
        yosiBenAsher,
        orrDunkelman,
        hagitHelOr,
        orenWeiman,
        shulyVintner,
        alekVinshtein,
        landauMenahemGad,
        orMeir,
        ilanNewman,
        adiAkvia,
        roiPoranne,
        danFeldman,
        moranFeldman,
        rahelKolodny,
        simonKorman,
        danielKeren,
        yuriRabinovich,
        danRozenbaum,
        nogaRonZevi,
        ronenSheiltael,
        shayBushinski,
        ariBenEphraim,
        erezGerlitz,
        nimrodPeleg,
        orenBenZwi,
        amiViselter,
        gilVernik,
        malkiGrosman,
        eranLambooij,
        ibrahimJubran,
        yaelZepkowitz,
        eliasJadon,
        loayMualem,
        arielAmsalem,
        islamAkaria,
        yonatanGoldhirch
    ];

    module.exports = allLecturers;

}

function createCourses() {
    const introToCS = {
        name: "Introduction To Computer Science",
        id: "203.1110",
        lecturer: "Shuly Vintner",
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
            "A": [[{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "10-12"}, {"day": "monday", "time": "12-14"}],
                [{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "10-12"}, {"day": "tuesday", "time": "14-16"}]],
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
            "A": [[{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "sunday", "time": "14-16"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "tuesday", "time": "14-16"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "wednesday", "time": "10-12"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "wednesday", "time": "18-20"}]],
            "B": [[{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "12-14"}, {"day": "sunday", "time": "10-12"}],
                [{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "12-14"}, {"day": "monday", "time": "14-16"}]],
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
            "A": [[{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "sunday", "time": "14-16"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "tuesday", "time": "14-16"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "wednesday", "time": "10-12"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "8-10"}, {"day": "wednesday", "time": "18-20"}]],
            "B": [[{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "12-14"}, {"day": "sunday", "time": "10-12"}],
                [{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "12-14"}, {"day": "monday", "time": "14-16"}]],
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
            "A": [[{"day": "wednesday", "time": "12-14"}, {"day": "thursday", "time": "14-16"}, {"day": "monday", "time": "12-14"}],
                [{"day": "wednesday", "time": "12-14"}, {"day": "thursday", "time": "14-16"}, {"day": "tuesday", "time": "16-18"}],
                [{"day": "wednesday", "time": "12-14"}, {"day": "thursday", "time": "14-16"}, {"day": "wednesday", "time": "16-18"}],
                [{"day": "wednesday", "time": "12-14"}, {"day": "thursday", "time": "14-16"}, {"day": "sunday", "time": "18-20"}]],
            
            "B": [[{"day": "sunday", "time": "16-18"}, {"day": "wednesday", "time": "14-16"}, {"day": "monday", "time": "16-18"}],
                [{"day": "sunday", "time": "16-18"}, {"day": "wednesday", "time": "14-16"}, {"day": "wednesday", "time": "16-18"}]],
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
            "A": [[{"day": "tuesday", "time": "16-18"}, {"day": "wednesday", "time": "16-18"}, {"day": "monday", "time": "8-10"}],
                [{"day": "tuesday", "time": "16-18"}, {"day": "wednesday", "time": "16-18"}, {"day": "wednesday", "time": "12-14"}]],
            
            "B": [[{"day": "wednesday", "time": "14-16"}, {"day": "thursday", "time": "16-18"}, {"day": "sunday", "time": "16-18"}],
                [{"day": "wednesday", "time": "14-16"}, {"day": "thursday", "time": "16-18"}, {"day": "wednesday", "time": "16-18"}],
                [{"day": "wednesday", "time": "14-16"}, {"day": "thursday", "time": "16-18"}, {"day": "thursday", "time": "18-20"}]],
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
            "A": [[{"day": "sunday", "time": "16-18"}, {"day": "wednesday", "time": "8-10"}, {"day": "sunday", "time": "12-14"}],
                [{"day": "sunday", "time": "16-18"}, {"day": "wednesday", "time": "8-10"}, {"day": "monday", "time": "16-18"}],
                [{"day": "sunday", "time": "16-18"}, {"day": "wednesday", "time": "8-10"}, {"day": "wednesday", "time": "14-16"}],
                [{"day": "sunday", "time": "16-18"}, {"day": "wednesday", "time": "8-10"}, {"day": "sunday", "time": "18-20"}]],
            
            "B": [[{"day": "sunday", "time": "8-10"}, {"day": "wednesday", "time": "8-10"}, {"day": "monday", "time": "8-10"}],
                [{"day": "sunday", "time": "8-10"}, {"day": "wednesday", "time": "8-10"}, {"day": "thursday", "time": "8-10"}],
                [{"day": "sunday", "time": "8-10"}, {"day": "wednesday", "time": "8-10"}, {"day": "monday", "time": "18-20"}]],
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
            "A": [[{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "14-16"}, {"day": "monday", "time": "8-10"}],
                [{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "14-16"}, {"day": "wednesday", "time": "16-18"}],
                [{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "14-16"}, {"day": "thursday", "time": "18-20"}],
                [{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "14-16"}, {"day": "wednesday", "time": "10-12"}]],
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
            "A": [[{"day": "sunday", "time": "10-12"}, {"day": "thursday", "time": "14-16"}, {"day": "monday", "time": "12-14"}],
                [{"day": "sunday", "time": "10-12"}, {"day": "thursday", "time": "14-16"}, {"day": "tuesday", "time": "10-12"}],
                [{"day": "sunday", "time": "10-12"}, {"day": "thursday", "time": "14-16"}, {"day": "thursday", "time": "16-18"}]],
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
            "A": [[{"day": "tuesday", "time": "14-17"}, {"day": "sunday", "time": "14-16"}],
                [{"day": "tuesday", "time": "14-17"}, {"day": "monday", "time": "12-14"}],
                [{"day": "tuesday", "time": "14-17"}, {"day": "wednesday", "time": "10-12"}]],
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
            "A": [[{"day": "tuesday", "time": "8-10"}, {"day": "wednesday", "time": "12-14"}],
                [{"day": "tuesday", "time": "8-10"}, {"day": "wednesday", "time": "18-20"}],
                [{"day": "tuesday", "time": "8-10"}, {"day": "thursday", "time": "12-14"}],
                [{"day": "tuesday", "time": "8-10"}, {"day": "tuesday", "time": "8-10"}]],
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
            "A": [[{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "8-10"}, {"day": "sunday", "time": "16-18"}],
                [{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "8-10"}, {"day": "monday", "time": "10-12"}],
                [{"day": "sunday", "time": "12-14"}, {"day": "wednesday", "time": "8-10"}, {"day": "tuesday", "time": "18-20"}]],
            
            "B": [[{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "14-16"}, {"day": "tuesday", "time": "8-10"}],
                [{"day": "tuesday", "time": "10-12"}, {"day": "thursday", "time": "14-16"}, {"day": "thursday", "time": "12-14"}]],
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
            "A": [[{"day": "monday", "time": "16-18"}],
                [{"day": "tuesday", "time": "8-10"}],
                [{"day": "thursday", "time": "18-20"}],
                [{"day": "thursday", "time": "8-10"}]],
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
            "B": [[{"day": "wednesday", "time": "8-12"}, {"day": "sunday", "time": "10-12"}],
                [{"day": "tuesday", "time": "8-12"}, {"day": "wednesday", "time": "14-16"}],
                [{"day": "tuesday", "time": "8-12"}, {"day": "thursday", "time": "16-18"}]],
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
            "A": [[{"day": "sunday", "time": "16-18"}, {"day": "tuesday", "time": "14-16"}, {"day": "sunday", "time": "12-14"}],
                [{"day": "sunday", "time": "16-18"}, {"day": "tuesday", "time": "14-16"}, {"day": "monday", "time": "14-16"}],
                [{"day": "sunday", "time": "16-18"}, {"day": "tuesday", "time": "14-16"}, {"day": "wednesday", "time": "8-10"}]],

            "B": [[{"day": "sunday", "time": "14-16"}, {"day": "thursday", "time": "12-14"}, {"day": "sunday", "time": "12-14"}],
                [{"day": "sunday", "time": "14-16"}, {"day": "thursday", "time": "12-14"}, {"day": "thursday", "time": "14-16"}]],
        },
        feedback: [

        ]
    };

    const logics = {
        name: "Intro to Logics",
        id: "203.2850",
        lecturer: "Oren Ben Zwi",
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
            "B": [[{"day": "thursday", "time": "8-10"}, {"day": "sunday", "time": "8-10"}],
                [{"day": "thursday", "time": "8-10"}, {"day": "monday", "time": "16-18"}]
                [{"day": "thursday", "time": "8-10"}, {"day": "wednesday", "time": "12-14"}]],
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
            "A": [[{"day": "tuesday", "time": "16-18"}, {"day": "wednesday", "time": "18-20"}]],
            "B": [[{"day": "tuesday", "time": "16-18"}, {"day": "tuesday", "time": "14-16"}]]
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
            "B": [[{"day": "thursday", "time": "14-16"}, {"day": "monday", "time": "14-16"}]]
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
            "B": [[{"day": "sunday", "time": "8-12"}]]
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
            "A": [[{"day": "monday", "time": "18-20"}, {"day": "wednesday", "time": "10-12"}]]
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
            "A": [[{"day": "monday", "time": "8-11"}]]
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
            "A": [[{"day": "sunday", "time": "12-14"}, {"day": "thursday", "time": "12-14"}, {"day": "sunday", "time": "14-16"}],
                [{"day": "sunday", "time": "12-14"}, {"day": "thursday", "time": "12-14"}, {"day": "monday", "time": "12-14"}]],

            "B": [[{"day": "tuesday", "time": "8-12"}, {"day": "monday", "time": "14-16"}],
                [{"day": "tuesday", "time": "8-12"}, {"day": "thursday", "time": "18-20"}]],
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
            "A": [[{"day": "wednesday", "time": "14-17"}]],
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
            "B": [[{"day": "sunday", "time": "12-14"}, {"day": "thursday", "time": "12-14"}]],
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
            "A": [[{"day": "sunday", "time": "14-16"}, {"day": "wednesday", "time": "12-14"}]],
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
            "B": [[{"day": "tuesday", "time": "8-12"}]],
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
            "B": [[{"day": "monday", "time": "14-17"}]],
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
            "A": [[{"day": "friday", "time": "10-14"}]],
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
            "B": [[{"day": "friday", "time": "10-14"}]],
        },
        feedback: [

        ]
    };

    const naturallanguageprocessing = {
        name: "natural language processing",
        id: "203.3670",
        lecturer: "Shuly Vintner",
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
            "A": [[{"day": "monday", "time": "8-12"}, {"day": "monday", "time": "14-16"}]],
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
            "B": [[{"day": "wednesday", "time": "12-16"}]],
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
            "B": [[{"day": "tuesday", "time": "8-12"}]],
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
            "B": [[{"day": "monday", "time": "8-11"}]],
        },
        feedback: [

        ]
    };

    const privacypreservingmachinelearninglab = {
        name: "Privacy preserving machine learning lab",
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
            "B": [[{"day": "tuesday", "time": "12-14"}]],
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
            "B": [[{"day": "sunday", "time": "17-20"}, {"day": "monday", "time": "12-14"}]],
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
            "A": [[{"day": "monday", "time": "14-17"}]],
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
            "A": [[{"day": "sunday", "time": "9-12"}, {"day": "thursday", "time": "14-16"}]],
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
            "A": [[{"day": "sunday", "time": "9-12"}]],
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
            "B": [[{"day": "monday", "time": "11-13"}]],
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
            "A": [[{"day": "thursday", "time": "16-19"}]],
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

    module.exports = allCourses;
}