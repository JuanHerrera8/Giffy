import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];
const LANGS = [
  "en",
  "es",
  "pt",
  "id",
  "fr",
  "ar",
  "tr",
  "th",
  "vi",
  "de",
  "it",
  "ja",
  "zh-CN",
  "zh-TW",
  "ru",
  "ko",
  "pl",
  "nl",
  "ro",
  "hu",
  "sv",
  "cs",
  "hi",
  "bn",
  "da",
  "fa",
  "tl",
  "fi",
  "he",
  "ms",
  "no",
  "uk",
];


function SearchForm({ 
  initialKeyword = "", 
  initialRating = RATINGS[0], 
  initialLang = LANGS[0]
}) {
  const { keyword, rating, lang, updateKeyword, updateRating, updateLang } = useForm({
    initialKeyword,
    initialRating,
    initialLang,
  })

  const [, pushLocation] = useLocation();

  const handleChange = (evt) => {
    updateKeyword(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}/${rating}/${lang}`)
  }

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

  const handleChangeLang = (evt) => {
    updateLang(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Busca tu gif aquí"
        onChange={handleChange}
        type="text"
        required
        value={keyword}
      />
      <button>Gifear</button>
      <div className="btns">
      <select id="btn1" onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type </option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select><br />
      <select id="btn2" onChange={handleChangeLang} value={lang}>
        <option disabled>Lang type </option>
        {LANGS.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
      </div> <br />
    </form>
  );
}

export default React.memo(SearchForm);
