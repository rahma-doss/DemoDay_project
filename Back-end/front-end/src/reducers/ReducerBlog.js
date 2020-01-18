import { ADD_BLOG, DELETE, SEARCH, EDIT_BLOG } from "../actions/types";
import uuid from 'uuid'

let blogs = [
    {
        picture: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blte08cf8c78bf2bd33/5e17532f78cb3402adffe5e7/Alexandra02727-1_copy.JPG?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496",
        title: " Les bienfaits du sport sur la santé",
        Jour:'11',
        mois:'octobre',
        year:'2019',
        date: "2019-10-11",
        intro:"Faire du sport est bon pour la santé. Sans doute, puisque cette « vérité » nous est régulièrement rappelée. Mais pourquoi ? Pourquoi une activité physique régulière améliorerait-elle notre santé et nous maintiendrait-elle en forme ? Avant d’expliquer pourquoi, rappelons que diverses études ont montré, entre autres, que bouger régulièrement ré!",
        id: uuid(),
        description: "150 minutes d’activité modérée par semaine: Des études sont aussi menées pour savoir comment les divers systèmes de l’organisme – cardiovasculaire, digestif, endocrinien, nerveux, etc. – sont modifiés par l’exercice physique. Elles suggèrent que les bénéfices résulteraient d’une petite amélioration de nombreux aspects physiologiques et non d’un effet important limité à quelques processus biologiques. Bon pour la mémoire : Dans un premier temps, l’organisme brûle les molécules de glucose stockées dans le foie et les muscles sous forme d’un composé nommé glycogène. Au cours de l’activité physique, le stock de glycogène disponible diminue et les molécules de triglycérides (ils contiennent des acides gras) deviennent la source principale de carburant. La combustion donne certains sous-produits, tels l’acide lactique et le dioxyde de carbone, qui, des muscles, passent dans le sang. La concentration accrue de ces composés provoque des réactions biochimiques dans le cerveau, les poumons et le cœur, lesquelles facilitent leur élimination. Un meilleur transport du cholestérol: D’autres analyses ont montré que l’exercice physique agit sur les lipoprotéines LDL davantage en modifiant leurs propriétés qu’en diminuant leur concentration dans le sang. En fait, les lipoprotéines LDL (et HDL) sont des particules constituées de protéines et de lipides qui transportent le cholestérol, un lipide, dans le sang. Produites dans le foie, les particules LDL acheminent le cholestérol jusqu’aux tissus, où il participe à la fabrication des membranes cellulaires (les particules HDL, quant à elles, transportent le surplus de cholestérol vers le foie, d’où il est excrété dans la bile). Les particules de LDL peuvent présenter différentes tailles. Un moyen de lutter contre le diabète : Quand l’exercice physique est quotidien, les muscles deviennent plus sensibles aux effets de l’insuline. Le pancréas travaille donc moins à la régulation de la glycémie : une concentration plus faible d’insuline fournit les mêmes résultats que les quantités supérieures auparavant. Diverses études suggèrent en outre que l’activité physique favoriserait l’absorption du glucose par une autre voie, indépendante de l’insuline.",
        generes:"Life Style",
        
        
    },
    {
        picture: "https://oppq.qc.ca/wp-content/uploads/Maux-de-dos-au-bureau.jpg",
        title: "Des exercices pour se muscler et detendre le dos au travail ",
        date: "2019-05-15",
        intro:"Pas facile de trouver du temps de faire du sport lorsque l’on a un emploi du temps surbooké. Vous passez votre temps au bureau et n’avez pas le temps de vous rendre à la salle de sport ou d’aller courir après le travail ? Il existe une solution toute simple pour rester en forme : se muscler et se détendre au bureau. Oui on vous le dit, c’est c’est possible !",
        id: uuid(),
        description: "Pour vos jambes et vos abdos : Asseyez vous sur le bord de votre chaise avec un dos droit, tendez vos jambes et levez les 10 secondes puis relâchez. Répétez plusieurs fois. Pour vos pectoraux : Saisissez un carnet, et placez le entre vos mains en position de prière. Pressez-le le plus fort possible pendant 5 secondes puis relâchez.Pour vos abdos : Asseyez vous dos droit, les épaules détendues et essayer de toucher votre cheville avec votre main en vous baissant d’un coté puis de l’autre. Alternez plusieurs fois. Pour vos fesses : Contractez vos fesses pendant 10 secondes et relâchez. Pour les chevilles : Tendez vos jambes et faites des cercles avec votre pied, cela détendra votre jambe. Qui n’a jamais été sujet de maux de dos, qu’il lève la main ? A force de rester assis toute la journée, tout le monde s’est déjà senti tendu même rien qu’un peu ! Pour votre nuque et vos épaules : Restez droit sur votre chaise et inclinez votre tête du côté droit. Vous pouvez vous aider de vos mains pour appuyer légèrement sur votre tête. Recommencez de l’autre côté . Pour votre dos : Mettez vous au bord de votre chaise et baissez vous de sorte à faire comme si vous voulez attraper le plus loin possible devant vous.",
        generes:"Musculation & Travail",
        
    },
    {
        picture: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blte18efe6d960ce84f/5de0b824983beb043e52d6d5/Hot_meal_header_copy.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496",
        title: "Comment calculer ses besoins énergétiques ? ",
        date: "2019-09-04", 
        intro:"Besoins énergétiques (BE) = Métabolisme de base (MB) x facteur d’activité (FA)   ",
        id: uuid(),
        description: "Pour calculer les besoins énergétiques d’une femme de 38 ans, mesurant 1,71 m, pesant 69 kg et qui s’entraîne 3 fois 2 h par semaine de façon intense, nous avons utilisé la formule suivante : MB=247-(2,67 X âge) + (401,5 X taille (m))+ (8,6 X poids kg) , BE=MB x FAFA=1,75, MB= 1425,51 kcal/ BE=1425,51*1,75/ BE= 2495 kcalories par jour ; Facteur d’activité (FA) : 1,35 = sédentaire/ 1,55 = faiblement actif/ 1,75 = actif/ 1,95 = très actif ; Chez l'homme : MB=293- (3,8 X âge) + (456,4 X taille m) + (10,12 X poids kg) ",
        generes:"Sport & Santé",
    },
    {
        picture: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf31343ffbe670a37/5de0b807eb97677b3a9d659d/Flo_meta.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496",
        title: "5 astuces pour stimuler votre métabolisme",
        date: "2008-07-16",
        intro:"En tout premier lieu, le métabolisme représente l’ensemble des processus qui régulent vos apports et vos dépenses énergétiques, et le taux métabolique n’est autre que la vitesse de fonctionnement de ces processus, c’est-à-dire le nombre de calories brûlées en un temps donné.",
        id: uuid(),
        description: `N° 1 : Le HIIT
        L’entraînement par intervalles de haute intensité (HIIT) est un composant essentiel de l’expérience Freeletics. Et à juste titre ! En plus d’être une activité cardiovasculaire et anaérobie très intense, le HIIT déclenche également l’effet EPOC, qui signifie « Excess Post-exercise Oxygen Consumption » en anglais, et correspond à l’augmentation du taux de consommation d’oxygène à l’issue d’un entraînement HIIT. Qu’est-ce que cela signifie ? Eh bien, la nature éprouvante du HIIT contraint votre corps à tirer parti d’un grand nombre de processus métaboliques et énergétiques. Donc, après l’entraînement, alors que vous vous reposez, votre corps s’efforce toujours de rétablir son équilibre et, par la même occasion, continue de brûler des calories.
        
        N° 2 : Le renforcement musculaire
        Alors que le HIIT vous fait profiter des bienfaits de l’EPOC, le renforcement musculaire vous permet quant à lui de brûler une grande quantité de calories et, au fil du temps, d’améliorer votre composition corporelle. Pratiquer régulièrement le renforcement musculaire permet aux muscles sollicités de brûler davantage de calories lorsqu’ils sont au repos. Et plus vous vous entraînerez, plus cet effet se renforcera. Si votre objectif est de perdre du poids et de vous muscler, le renforcement musculaire devrait faire partie de votre routine d’entraînement et ne devrait pas être négligé.
        
        N° 3 : Davantage de protéines
        Aussi surprenant que cela puisse paraître, il existe effectivement un moyen de brûler davantage de calories en mangeant plus : il suffit pour cela de consommer des protéines ! En effet, lorsque nous mangeons des protéines, notre organisme est contraint d’utiliser de l’énergie pour aller chercher tous les acides aminés qu’elles renferment. C’est ce que l’on appelle « l’effet thermique des aliments » (ou TEF pour « thermic effect of food », en anglais), et celui des protéines est plus important que celui d’autres macronutriments, tels que les glucides, réduisant ainsi d’autant leur apport en calories.
        
        Par ailleurs, consommer plus de protéines vous aidera à produire davantage de masse musculaire et à améliorer votre composition corporelle tout en diminuant votre appétit.
        
        N° 4 : Boire plus d’eau ou de thé vert
        Une autre manière de stimuler votre métabolisme consiste à éviter toutes les calories liquides dites « vides », telles que celles des sodas. Préférez plutôt les boissons sans calories comme l’eau ou le thé !
        
        Les boissons stimulantes, telles que le thé vert ou le café, sont également connues pour booster le métabolisme tout en réduisant l’appétit. Cependant, assurez-vous de ne jamais boire de thé ou de café tard dans la journée, car cela pourrait vous empêcher de dormir, ce qui serait mauvais pour votre métabolisme.
        
        N° 5 : La NEAT
        Pour activer votre métabolisme, il existe également un moyen moins évident (mais néanmoins efficace) qui consiste à augmenter votre NEAT, ou « Non-Exercise Activity Thermogenesis » en anglais, ce qui signifie « thermogenèse liée aux activités non sportives ». Cela correspond à tous les mouvements qui vous font brûler des calories, mais qui ne sont pas considérés comme de l’exercice physique en soi. Un exemple simple du quotidien serait d’emprunter les escaliers plutôt que l’ascenseur. La NEAT est très efficace pour stimuler votre métabolisme puisque, contrairement à l’entraînement, il est possible d’y recourir tout au long de la journée.`,
        generes:"Nutrition ",
        
    },
    {
        picture: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltb0fc425dfc160f4f/5de0b8071973b50217e81177/building_to_a_strict_pullup_header.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496",
        title: "CROSSFIT : LES EFFETS CARDIOVASCULAIRES",
        date: "2019-12-01",
        intro:"Le CrossFit est une méthode de conditionnement physique, inspiré des camps d’entraînement militaire, à la mode. Il fait partie des activités en plein développement à l’image du cross-training, du circuit-training… Il combine des activités d’exercices fractionnés à haute intensité",        id: uuid(),
        description: "Le CrossFit s’articule autour de nombreuses séquences répétitives s’étalant de quelques secondes à plusieurs dizaines de minutes : pompes (pushup), fentes avants (lunges), squats, abdominaux (crunches) ou encore burpees. Au total, une séance complète peut durer de 20 minutes à 1 heure. Sur un cœur sain et/ou en l’absence de risque cardiovasculaire, le CrossFit, en plus d’améliorer les capacités physiques, a un effet préventif sur le plan cardiovasculaire, mais a également des bénéfices sur le plan psychologique , Avant de se lancer, il est aussi indispensable d’avoir été conseillé sur la bonne pratique de l’activité. En effet, le risque principal est de se mettre à ce type de pratique intense sans préparation ni évaluation préalable, en particulier chez le sédentaire ou inactif pouvant cumuler des facteurs de risque cardiovasculaires",
        generes:"Crossfit",
        },
        
    
]

const ReducerBlog = (state = blogs, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return [
                ...state,
                action.payload
            ]
        case DELETE:
            return (
                state.filter(el => el.id !== action.payload)
            )
        case SEARCH:
            return blogs.filter(el => el.title.toUpperCase().includes(action.payload.toUpperCase().trim()))
        case EDIT_BLOG:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default:
            return state;
    }
};

export default ReducerBlog;