import { useState, useEffect } from "react";

const url = "http://media.mw.metropolia.fi/wbma/";

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(url + "media");
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (item) => {
          const resp2 = await fetch(url + "media/" + item.file_id);
          const json2 = await resp2.json();
          return json2;
        })
      );
      // console.log('loadMedia', media);
      setMediaArray(media);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return mediaArray;
};

export { useLoadMedia };
