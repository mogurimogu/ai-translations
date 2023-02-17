import { useState } from "react";

function Select(props) {
  const { name, className, value, placeholder } = props;
  const languajes = [
    "afrikaans",
    "albanian",
    "amharic",
    "arabic",
    "armenian",
    "azerbaijani",
    "bangla",
    "basque",
    "belarusian",
    "bengali",
    "bosnian",
    "bulgarian",
    "burmese",
    "catalan",
    "chinese (simplified)",
    "chinese (traditional)",
    "croatian",
    "czech",
    "danish",
    "dutch",
    "english",
    "estonian",
    "filipino",
    "finnish",
    "french",
    "galician",
    "georgian",
    "german",
    "greek",
    "gujarati",
    "haitian creole",
    "hebrew",
    "hindi",
    "hungarian",
    "icelandic",
    "indonesian",
    "irish",
    "italian",
    "japanese",
    "javanese",
    "kannada",
    "kazakh",
    "khmer",
    "kinyarwanda",
    "korean",
    "kurdish (kurmanji)",
    "kyrgyz",
    "lao",
    "latin",
    "latvian",
    "lithuanian",
    "luxembourgish",
    "macedonian",
    "malagasy",
    "malay",
    "malayalam",
    "maltese",
    "maori",
    "marathi",
    "mongolian",
    "nepali",
    "norwegian",
    "odia",
    "pashto",
    "persian",
    "polish",
    "portuguese",
    "punjabi",
    "romanian",
    "russian",
    "samoan",
    "scots gaelic",
    "serbian",
    "sesotho",
    "shona",
    "sindhi",
    "sinhala",
    "slovak",
    "slovenian",
    "somali",
    "spanish",
    "sundanese",
    "swahili",
    "swedish",
    "tajik",
    "tamil",
    "tatar",
    "telugu",
    "thai",
    "turkish",
    "turkmen",
    "ukrainian",
    "urdu",
    "uyghur",
    "uzbek",
    "vietnamese",
    "welsh",
    "xhosa",
    "yiddish",
    "yoruba",
    "zulu",
  ];
  const [data, setData] = useState(value || '');

  const handleChange = (event) => {
    setData(event.target.value)
  }

  return (
    <>
      <input
        name={name}
        list={name}
        className={`${
          className + " " || ""
        } border p-1 block w-full rounded-lg bg-slate-800 border-slate-900`}
        value={data}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      <datalist id={name}>
        {languajes.map((lang) => (
          <option value={lang} key={lang} />
        ))}
      </datalist>
    </>
  );
}

export default Select;
