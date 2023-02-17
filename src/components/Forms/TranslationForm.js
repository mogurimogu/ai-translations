import React, { useState } from "react";
import AITranslation from "../../services/AITranslation";
import Select from "./Select/Select";
import TextArea from "./TextArea/TextArea";
import Lottie from "lottie-react";
import loading from "./dots-loading.json";

function TranslationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [translation, setTranslation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { languaje, text } = event.target;

    try {
      setIsLoading(true);
      setTranslation(await AITranslation(languaje.value, text.value));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-3 p-3 bg-slate-900 shadow-lg">
        <div>
          <div className="mb-3">➡️ Translate to:</div>
          <Select name={"languaje"} placeholder={"Select a languaje"} />
        </div>
      </div>
      <div className="p-3 grid md:grid-cols-2 gap-3">
        <TextArea name={"text"} placeholder={"Text to translate"} />
        <TextArea
          name={"translation"}
          placeholder={"Translated Text"}
          disabled
          value={translation}
        />
      </div>
      <div className="p-3">
        {isLoading ? (
          <div className="w-32 mx-auto">
            <Lottie animationData={loading} />
          </div>
        ) : (
          <input
            type={"submit"}
            value="Translate!"
            className="p-3 bg-emerald-300 w-full rounded-lg text-emerald-900 font-semibold"
          />
        )}
      </div>
    </form>
  );
}

export default TranslationForm;
