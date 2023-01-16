
const uuid = require('uuid')

let MUSIQUES = [
    {
        id: "1",
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg",
        detail: "https://www.youtube.com/watch?v=5NV6Rdv1a3I"
    },
    {
        id: "2",
        auteur: "R.E.M.",
        annee: "1991",
        titre: "Losing my religion",
        imageUrl: "https://www.christianismeaujourdhui.info/wp-content/uploads/sites/3/2022/08/REM_Losing-my-Religion_image-971x0-c-default.jpg"

    },
    {
        id: "3",
        auteur: "The Cramberries",
        annee: "1994",
        titre: "Zombie",
        imageUrl: "https://m.media-amazon.com/images/I/51wZc27VVOL._SX355_.jpg"

    },
    {
        id: "4",
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
        id: "5",
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
        id: "6",
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
        id: "7",
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    },
    {
        id: "8",
        auteur: "Daft Punk",
        annee: "2013",
        titre: "Get lucky",
        imageUrl: "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
    }

]


const getMusiques = (req, res) => {
    res.json({ MUSIQUES });
}

const getMusiqueById = (req, res) => {

    const mId = req.params.musiqueid;
    console.log({ mId })
    const musique = MUSIQUES.find(m => {
        return m.id === mId;
    });

    if (!musique) {
        return res.status(404).json({ "Musique": "Musique non trouvé pour cet ID" })
    };

    res.json({ message: { musique } })
}


const createMusique = (req, res) => {

    const {auteur, annee, titre, imageUrl, detail} = req.body;

    const createdMusique = {
        id: uuid.v4(),
        auteur,
        annee,
        titre,
        imageUrl,
        detail
    };

    MUSIQUES.push(createdMusique);

    res.status(201).json({createdMusique})

};

const updateMusique = (req, res) => {

    const {auteur, annee, titre, imageUrl, detail} = req.body;
    const mId = req.params.musiqueid;

    const updatedMusique = MUSIQUES.find(m => {
        return (m.id === mId);
    });

    const musiqueIndex = MUSIQUES.findIndex(m => m.id === mId)

    updatedMusique.auteur = auteur;
    updatedMusique.annee = annee;
    updatedMusique.titre = titre;
    updatedMusique.imageUrl = imageUrl;
    updatedMusique.detail = detail;


    MUSIQUES[musiqueIndex] = updatedMusique;

    res.status(200).json({updatedMusique})


};


const deleteMusique = (req, res) => {
    const mId = req.params.musiqueid;

    MUSIQUES = MUSIQUES.filter((m) => m.id !== mId);

    res.status(200).json("Musique supprimée !")

}


exports.getMusiques = getMusiques;
exports.getMusiqueById = getMusiqueById;
exports.createMusique = createMusique;
exports.updateMusique = updateMusique;
exports.deleteMusique = deleteMusique;