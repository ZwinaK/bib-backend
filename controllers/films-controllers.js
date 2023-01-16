

let FILMS = [
    {
        id : "1",
        auteur : "Tonino Valerii",
        annee : "1973",
        titre : "Mon nom est Personne",
        imageUrl : "https://www.filmspourenfants.net/wp-content/uploads/2020/09/mon-nom-est-personne-a-366x500.jpg",
        detail : "blabla blabla blabla blabla"

    },
    {
      id : "2",
      auteur : "Enzo Barboni",
      annee : "1970",
      titre : "On l'appelle Trinita",
      imageUrl : "https://www.rueducine.com/wp-content/uploads/2013/08/rueducine.com-on-l-appelle-trinita-1970.jpg"

  },
  {
    id : "3",
    auteur : "Enzo Barboni",
    annee : "1971",
    titre : "On continue à l'appeler Trinita",
    imageUrl : "https://www.intemporel.com/wp-content/uploads/89336.jpg"

},
{
  id : "4",
  auteur : "Daft Punk",
  annee : "2013",
  titre : "Get lucky",
  imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"

},
{
  id : "5",
  auteur : "Daft Punk",
  annee : "2013",
  titre : "Get lucky",
  imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"

},
{
  id : "6",
  auteur : "Daft Punk",
  annee : "2013",
  titre : "Get lucky",
  imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"

},
{
  id : "7",
  auteur : "Daft Punk",
  annee : "2013",
  titre : "Get lucky",
  imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"

},
{
  id : "8",
  auteur : "Daft Punk",
  annee : "2013",
  titre : "Get lucky",
  imageUrl : "https://m.media-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"

}


]


const getFilms = (req, res) => {
    res.json({ FILMS });
}

const getFilmById = (req, res) => {

    const fId = req.params.filmid;
    console.log({ fId })
    const film = FILMS.find(f => {
        return f.id === fId;
    });

    if (!film) {
        return res.status(404).json({ "Film": "Film non trouvé pour cet ID" })
    };

    res.json({ message: { film } })
}


exports.getFilms = getFilms;
exports.getFilmById = getFilmById;